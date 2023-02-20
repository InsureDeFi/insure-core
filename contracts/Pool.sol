// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.17;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC4626Upgradeable.sol";
import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

import "./access/AccessRestricted.sol";

import "./Constants.sol";
import "./lib/Errors.sol";
import "./lib/DataTypes.sol";
import "./interfaces/IPool.sol";

/**
 * @title Pool contract
 * @author Insure
 * @notice Main point of interaction with Insure protocol
 * - Users can
 *   # Deposit
 *   # Withdraw
 *   # Buy insurance
 *   # Redeem policy
 */
contract Pool is UUPSUpgradeable, AccessRestricted, ERC4626Upgradeable, IPool {
  using SafeERC20Upgradeable for IERC20Upgradeable;

  ICore public core;
  IInsureOracle public priceOracle;
  IPremiumEngine public premiumEngine;

  /// @custom:oz-upgrades-unsafe-allow constructor
  constructor() {
    _disableInitializers();
  }

  /**
   * @inheritdoc	IPool
   */
  function initialize(
    AccessController accessController_,
    IERC20MetadataUpgradeable _usdc,
    ICore _core,
    IInsureOracle _oracle,
    IPremiumEngine _premiumEngine
  ) external initializer {
    __AccessRestricted_init_unchained(accessController_);
    __ERC20_init_unchained("Insure Interest Bearing USDC", "iUSDC");
    __ERC4626_init_unchained(_usdc);

    core = _core;
    priceOracle = _oracle;
    premiumEngine = _premiumEngine;
  }

  /**
   * @dev functions affected by this modifier can only be invoked if the pool is not freezed.
   * A freezed pool only allows withdrawals.
   **/
  modifier whenNotFreezed() {
    if (core.isFreezed()) revert Errors.Freezed();
    _;
  }

  /**
   * @inheritdoc	IPool
   */
  function insure(
    string calldata assetSymbol,
    uint256 payout,
    uint256 duration,
    address receiver,
    address agent
  ) external whenNotFreezed returns (uint256 policyId) {
    if (receiver == address(0)) revert Errors.ZeroAddress();
    if (!core.isAssetSupported(assetSymbol)) revert Errors.UnsupportedAsset();
    if (payout < MIN_COVER_AMOUNT) revert Errors.CoverTooSmall();
    if (duration < 30 days) revert Errors.InvalidDuration();
    if (duration > 365 days) revert Errors.InvalidDuration();

    return _insure(payout, duration, receiver, agent, assetSymbol);
  }

  /**
   * @inheritdoc	ERC4626Upgradeable
   */
  function maxWithdraw(address owner) public view override returns (uint256) {
    uint256 ownerAssets = _convertToAssets(balanceOf(owner), MathUpgradeable.Rounding.Down);
    return MathUpgradeable.min(ownerAssets, availableAssets());
  }

  /**
   * @inheritdoc	ERC4626Upgradeable
   */
  function maxRedeem(address owner) public view override returns (uint256) {
    uint256 availableShares = _convertToShares(availableAssets(), MathUpgradeable.Rounding.Down);
    return MathUpgradeable.min(balanceOf(owner), availableShares);
  }

  /**
   * @inheritdoc	ERC4626Upgradeable
   */
  function deposit(uint256 assets, address receiver)
    public
    override
    whenNotFreezed
    returns (uint256)
  {
    return super.deposit(assets, receiver);
  }

  /**
   * @inheritdoc	ERC4626Upgradeable
   */
  function mint(uint256 shares, address receiver) public override whenNotFreezed returns (uint256) {
    return super.mint(shares, receiver);
  }

  /**
   * @inheritdoc	IPool
   */
  function claim(uint256 policyId) external whenNotFreezed {
    _claim(policyId);
  }

  /**
   * @inheritdoc	IPool
   */
  function claimBatch(uint256[] calldata policyIds) external whenNotFreezed {
    uint256 policyCount = policyIds.length;
    for (uint256 i; i < policyCount; ) {
      _claim(policyIds[i]);
      unchecked {
        ++i;
      }
    }
  }

  /**
   * @inheritdoc	IPool
   */
  function unlock(uint256 timestamp) external {
    core.executeUnlock(timestamp);
  }

  function availableAssets() public view returns (uint256) {
    return totalAssets() - core.lockedAssets();
  }

  function utilizationRate() external view returns (uint256) {
    uint256 lockedAssets = core.lockedAssets();
    if (lockedAssets == 0) return 0;
    return (lockedAssets * 1e18) / totalAssets();
  }

  function _insure(
    uint256 payout,
    uint256 duration,
    address receiver,
    address agent,
    string calldata assetSymbol
  ) internal returns (uint256) {
    DataTypes.PolicyLocalVars memory vars;

    vars.premium = premiumEngine.getPremium(payout, duration, totalAssets(), core.lockedAssets());
    vars.fee;
    vars.reward;
    unchecked {
      vars.fee = (vars.premium * PROTOCOL_FEE) / 1e6;
    }

    IERC20Upgradeable usdc = IERC20Upgradeable(asset());
    usdc.safeTransferFrom(_msgSender(), address(this), vars.premium);
    if (agent != address(0)) {
      if (agent != _msgSender()) {
        if (agent != receiver) {
          unchecked {
            vars.reward = (vars.fee * AGENT_REWARD) / 1e6;
          }
          vars.fee -= vars.reward;
          usdc.safeTransfer(agent, vars.reward);
        }
      }
    }
    usdc.safeTransfer(core.feeCollector(), vars.fee);

    vars.endTime = block.timestamp + duration;
    vars.threshold = (priceOracle.getPrice(assetSymbol) * PAYOUT_THRESHOLD) / 1e18;

    (vars.policyId) = core.executeInsure(
      assetSymbol,
      vars.endTime,
      vars.premium,
      payout,
      vars.threshold,
      receiver
    );

    emit Insured(
      receiver,
      agent,
      vars.policyId,
      assetSymbol,
      payout,
      vars.premium,
      vars.fee,
      vars.reward,
      vars.endTime,
      vars.threshold
    );

    return vars.policyId;
  }

  function _claim(uint256 policyId) internal {
    DataTypes.Policy memory policy = core.getPolicy(policyId);
    if (policy.insured == address(0)) revert Errors.PolicyDoesNotExists();
    if (policy.endTime < block.timestamp) revert Errors.PolicyExpired();
    if (policy.utilized) revert Errors.PolicyUtilized();

    uint256 rate = priceOracle.getPrice(policy.asset);
    if (rate == 0) revert Errors.InvalidRate();
    if (rate > policy.threshold) revert Errors.IneligiblePolicy();

    core.executeClaim(policyId);

    IERC20Upgradeable usdc = IERC20Upgradeable(asset());
    usdc.safeTransfer(policy.insured, policy.payout);
    emit PolicyPaid(policyId);
  }

  /**
   * @inheritdoc UUPSUpgradeable
   */
  function _authorizeUpgrade(address newImplementation)
    internal
    override
    onlyRole(ADMIN_ROLE) // solhint-disable-next-line no-empty-blocks
  {}
}
