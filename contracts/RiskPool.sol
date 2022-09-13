// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.9;

import {ERC4626Upgradeable, IERC20MetadataUpgradeable, SafeERC20Upgradeable, IERC20Upgradeable, MathUpgradeable, Initializable} from "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/ERC4626Upgradeable.sol";
import {ReentrancyGuardUpgradeable} from "@openzeppelin/contracts-upgradeable/security/ReentrancyGuardUpgradeable.sol";
import {CoreLibrary} from "./lib/CoreLibrary.sol";
import {AddressesProvider} from "./configuration/AddressesProvider.sol";
import {ParametersProvider} from "./configuration/ParametersProvider.sol";
import {PriceOracle} from "./PriceOracle.sol";
import {PremiumEngine} from "./PremiumEngine.sol";
import {RiskPoolCore} from "./RiskPoolCore.sol";
import {IRiskPool} from "./interfaces/IRiskPool.sol";

/// @title RiskPool contract
/// @author Insure
/// @notice Main point of interaction with Insure protocol
/// - Users can
///   # Deposit
///   # Withdraw
///   # Buy insurance
///   # Redeem policy
contract RiskPool is Initializable, ERC4626Upgradeable, ReentrancyGuardUpgradeable, IRiskPool {
  AddressesProvider public addressesProvider;
  ParametersProvider public parametersProvider;
  RiskPoolCore public core;
  PriceOracle public priceOracle;
  PremiumEngine public premiumEngine;

  uint256 public constant POOL_REVISION = 0x1;

  constructor() {
    _disableInitializers();
  }

  function initialize(AddressesProvider _addressesProvider, IERC20MetadataUpgradeable _usdc)
    public
    initializer
  {
    __ERC20_init_unchained("Insure LP Token", "rINS");
    __ERC4626_init_unchained(_usdc);
    __ReentrancyGuard_init_unchained();

    addressesProvider = _addressesProvider;
    parametersProvider = ParametersProvider(addressesProvider.getParametersProvider());
    core = RiskPoolCore(addressesProvider.getRiskPoolCore());
    priceOracle = PriceOracle(addressesProvider.getPriceOracle());
    premiumEngine = PremiumEngine(addressesProvider.getPremiumEngine());
  }

  /**
   * @dev functions affected by this modifier can only be invoked if the pool is active
   **/
  modifier whenActive() {
    if (!core.isActive()) revert RiskPool__InActive();
    _;
  }

  /**
   * @dev functions affected by this modifier can only be invoked if the pool is not freezed.
   * A freezed reserve only allows withdrawals and policy redeemptions.
   **/
  modifier whenNotFreezed() {
    if (core.isFreezed()) revert RiskPool__Freezed();
    _;
  }

  struct PolicyLocalVars {
    uint256 minCoverAmount;
    uint256 premium;
    uint256 protocolFee;
    uint256 policyId;
    uint256 currentAssetPrice;
    uint256 endTime;
    uint8 threshold;
  }

  function insure(
    string calldata assetSymbol,
    uint256 payOutAmount,
    uint256 duration,
    address receiver
  ) external nonReentrant whenActive whenNotFreezed returns (uint256) {
    if (receiver == address(0)) revert RiskPool__InsuredAddressZero();
    if (core.assetIds(assetSymbol) == 0) revert RiskPool__AssetNotSupported();

    PolicyLocalVars memory vars;
    vars.minCoverAmount = parametersProvider.getMinCoverAmount();

    if (payOutAmount < vars.minCoverAmount)
      revert RiskPool__CoverLessThanMinimum(payOutAmount, vars.minCoverAmount);
    if (duration < 30 days) revert RiskPool__DurationTooShort(duration, 30 days);
    if (duration > 365 days) revert RiskPool__DurationTooLong(duration, 365 days);

    vars.premium = premiumEngine.getPremium(
      payOutAmount,
      duration,
      totalAssets(),
      core.lockedAssets()
    );
    vars.protocolFee = parametersProvider.calculateProtocolFee(vars.premium);
    vars.endTime = block.timestamp + duration;
    vars.threshold = parametersProvider.getPayOutThreshold();

    vars.currentAssetPrice = priceOracle.getPrice(assetSymbol);

    vars.policyId = core.updateStateOnPolicy(
      assetSymbol,
      vars.endTime,
      vars.premium,
      payOutAmount,
      vars.currentAssetPrice,
      vars.threshold,
      receiver
    );

    IERC20Upgradeable usdc = IERC20Upgradeable(asset());

    SafeERC20Upgradeable.safeTransferFrom(
      usdc,
      msg.sender,
      address(this),
      vars.premium - vars.protocolFee
    );
    SafeERC20Upgradeable.safeTransferFrom(
      usdc,
      msg.sender,
      addressesProvider.getFeeDistributor(),
      vars.protocolFee
    );

    emit Insured(
      receiver,
      vars.policyId,
      assetSymbol,
      vars.currentAssetPrice,
      payOutAmount,
      vars.premium - vars.protocolFee,
      vars.protocolFee,
      vars.endTime,
      vars.threshold
    );

    return vars.policyId;
  }

  function deposit(uint256 assets, address receiver)
    public
    override
    nonReentrant
    whenActive
    whenNotFreezed
    returns (uint256)
  {
    require(assets <= maxDeposit(receiver), "ERC4626: deposit more than max");

    uint256 shares = previewDeposit(assets);
    _deposit(_msgSender(), receiver, assets, shares);

    return shares;
  }

  function mint(uint256 shares, address receiver)
    public
    override
    nonReentrant
    whenActive
    whenNotFreezed
    returns (uint256)
  {
    require(shares <= maxMint(receiver), "ERC4626: mint more than max");

    uint256 assets = previewMint(shares);
    _deposit(_msgSender(), receiver, assets, shares);

    return assets;
  }

  function withdraw(
    uint256 assets,
    address receiver,
    address owner
  ) public override nonReentrant whenActive returns (uint256) {
    require(assets <= maxWithdraw(owner), "ERC4626: withdraw more than max");

    uint256 shares = previewWithdraw(assets);
    _withdraw(_msgSender(), receiver, owner, assets, shares);

    return shares;
  }

  function redeem(
    uint256 shares,
    address receiver,
    address owner
  ) public override nonReentrant whenActive returns (uint256) {
    require(shares <= maxRedeem(owner), "ERC4626: redeem more than max");

    uint256 assets = previewRedeem(shares);
    _withdraw(_msgSender(), receiver, owner, assets, shares);

    return assets;
  }

  function applyCover(uint256 policyId) external nonReentrant whenActive {
    CoreLibrary.Policy memory policy = core.getPolicy(policyId);
    if (!CoreLibrary.isActive(policy)) revert RiskPool__PolicyNotActive();

    uint256 latestPrice = priceOracle.getPrice(policy.asset);
    if (CoreLibrary.isEligible(policy, latestPrice)) {
      _applyCover(policy);
    }
  }

  function applyCoverBatch(uint256[] calldata policyIds) external nonReentrant whenActive {
    uint256[] memory latestPrices = priceOracle.getMultiPrices(core.getAssets());

    uint256 i = 0;
    while (i < policyIds.length) {
      CoreLibrary.Policy memory policy = core.getPolicy(policyIds[i]);
      uint256 assetId = core.assetIds(policy.asset);
      if (!CoreLibrary.isActive(policy)) revert RiskPool__PolicyNotActive();
      if (CoreLibrary.isEligible(policy, latestPrices[assetId - 1])) {
        _applyCover(policy);
      }
      unchecked {
        ++i;
      }
    }
  }

  function unlockPolicyFunds(uint256 timestamp) external {
    (uint256 unlocksAt, uint256 unlockAmount) = core.updateStateOnUnlock(timestamp);
    emit Unlocked(unlocksAt, unlockAmount);
  }

  function availableAssets() public view returns (uint256) {
    return totalAssets() - core.lockedAssets();
  }

  function utilizationRate() external view returns (uint256) {
    uint256 lockedAssets = core.lockedAssets();
    if (lockedAssets == 0) return 0;
    return (lockedAssets * 1e18) / totalAssets();
  }

  function decimals() public view virtual override returns (uint8) {
    return 6;
  }

  function _applyCover(CoreLibrary.Policy memory policy) private {
    core.updateStateOnApplyCover(policy.id);
    SafeERC20Upgradeable.safeTransfer(
      IERC20Upgradeable(asset()),
      policy.insured,
      policy.payOutAmount
    );

    emit PolicyPaid(policy.id);
  }
}
