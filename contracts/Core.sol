// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";
import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/IERC20MetadataUpgradeable.sol";
import "@openzeppelin/contracts/proxy/ERC1967/ERC1967Proxy.sol";

import "./access/AccessRestricted.sol";

import "./interfaces/ICore.sol";
import "./lib/BokkyPooBahsDateTimeLibrary.sol";
import "./lib/Errors.sol";
import "./lib/DataTypes.sol";

contract Core is UUPSUpgradeable, AccessRestricted, ICore {
  address public pool;
  address private _feeCollector;

  uint256 public policyCount;
  uint256 private _lockedAssets;

  bool private _isFreezed;

  mapping(uint256 => DataTypes.Policy) private _policies;
  mapping(string => bool) private _assets;
  mapping(uint256 => uint256) public fundsToUnlock;

  /// @custom:oz-upgrades-unsafe-allow constructor
  constructor() {
    _disableInitializers();
  }

  /**
   * @inheritdoc ICore
   */
  function initialize(
    AccessController accessController_,
    address feeCollector_,
    IPool poolImplementation_,
    IERC20MetadataUpgradeable usdc_,
    IInsureOracle oracle_,
    IPremiumEngine premiumEngine_
  ) external initializer {
    __AccessRestricted_init(accessController_);

    _setFeeCollector(feeCollector_);

    ERC1967Proxy pool_ = new ERC1967Proxy(
      address(poolImplementation_),
      abi.encodeWithSignature(
        "initialize(address,address,address,address,address)",
        accessController_,
        usdc_,
        address(this),
        oracle_,
        premiumEngine_
      )
    );
    pool = address(pool_);

    emit PoolDeployed(address(pool_));
  }

  modifier onlyPool() {
    if (msg.sender != pool) {
      revert Errors.CallerNotPool();
    }
    _;
  }

  /**
   * @inheritdoc ICore
   */
  function getPolicy(uint256 policyId) external view returns (DataTypes.Policy memory) {
    return _policies[policyId];
  }

  /**
   * @inheritdoc ICore
   */
  function executeInsure(
    string memory asset,
    uint256 endTime,
    uint256 premium,
    uint256 payout,
    uint256 threshold,
    address reciever
  ) external onlyPool returns (uint256 policyId) {
    policyId = policyCount++;

    DataTypes.Policy storage policy = _policies[policyId];
    policy.id = policyId;
    policy.endTime = endTime;
    policy.payout = payout;
    policy.premium = premium;
    policy.threshold = threshold;
    policy.insured = reciever;
    policy.asset = asset;

    uint256 unlocksAt = _addDays(endTime, 1);

    _lockedAssets += payout;
    unchecked {
      fundsToUnlock[unlocksAt] += payout;
    }
  }

  /**
   * @inheritdoc ICore
   */
  function executeClaim(uint256 policyId) external onlyPool {
    DataTypes.Policy storage policy = _policies[policyId];
    policy.utilized = true;
    uint256 unlocksAt = _addDays(policy.endTime, 1);
    unchecked {
      _lockedAssets -= policy.payout;
      fundsToUnlock[unlocksAt] -= policy.payout;
    }
  }

  /**
   * @inheritdoc ICore
   */
  function executeUnlock(uint256 timestamp) external onlyPool {
    uint256 unlocksAt = _addDays(timestamp, 0);
    if (unlocksAt > block.timestamp) revert Errors.UnlockBeforeExpiry();
    uint256 amount = fundsToUnlock[unlocksAt];
    unchecked {
      _lockedAssets -= amount;
    }
    fundsToUnlock[unlocksAt] = 0;
    emit Unlocked(unlocksAt, amount);
  }

  /**
   * @inheritdoc ICore
   */
  function initAsset(string calldata asset) external onlyRole(ADMIN_ROLE) {
    if (_assets[asset]) revert Errors.AssetAlreadyInitialized();
    _assets[asset] = true;
    emit AssetInitialized(asset);
  }

  /**
   * @inheritdoc ICore
   */
  function setFeeCollector(address feeCollector_) external onlyRole(ADMIN_ROLE) {
    _setFeeCollector(feeCollector_);
  }

  /**
   * @inheritdoc ICore
   */
  function setFreezed(bool status) external onlyRole(POOL_MANAGER_ROLE) {
    _isFreezed = status;
    emit Freezed(status);
  }

  function feeCollector() external view returns (address) {
    return _feeCollector;
  }

  function lockedAssets() external view returns (uint256) {
    return _lockedAssets;
  }

  function isAssetSupported(string calldata assetSymbol) external view returns (bool) {
    return _assets[assetSymbol];
  }

  function isFreezed() external view returns (bool) {
    return _isFreezed;
  }

  function _addDays(uint256 expiry, uint256 _days) internal pure returns (uint256 timestamp) {
    {
      (uint256 year, uint256 month, uint256 day) = BokkyPooBahsDateTimeLibrary.timestampToDate(
        expiry
      );
      timestamp = BokkyPooBahsDateTimeLibrary.timestampFromDate(year, month, day + _days);
    }
  }

  function _setFeeCollector(address feeCollector_) internal {
    if (feeCollector_ == address(0)) revert Errors.ZeroAddress();
    _feeCollector = feeCollector_;
    emit FeeCollectorUpdated(feeCollector_);
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
