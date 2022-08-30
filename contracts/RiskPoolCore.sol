// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.9;

import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";
import {AddressesProvider} from "./configuration/AddressesProvider.sol";
import {BokkyPooBahsDateTimeLibrary} from "./lib/BokkyPooBahsDateTimeLibrary.sol";
import {CoreLibrary} from "./lib/CoreLibrary.sol";

error RiskPoolCore__NotPoolManager();
error RiskPoolCore__AssetAlreadyInitialized();
error RiskPoolCore__UnlockBeforeExpiry();

contract RiskPoolCore is Initializable {
  /// @dev Emitted when a new asset is initialised
  /// @param asset The symbol of newly initialized asset
  event AssetInitialized(uint256 indexed assetId, string asset);

  AddressesProvider public addressesProvider;

  uint256 public constant CORE_REVISION = 0x1;

  uint256 public lockedAssets;
  uint256 public policyCount;
  bool public isActive;
  bool public isFreezed;
  string[] private _assetsList;

  mapping(string => uint256) public assetIds;
  mapping(uint256 => CoreLibrary.Policy) private _policies;
  mapping(uint256 => uint256) private _expiredPolicyFunds;

  constructor() {
    _disableInitializers();
  }

  function initialize(AddressesProvider _addressesProvider) public initializer {
    addressesProvider = _addressesProvider;
    isActive = true;
  }

  modifier onlyPoolManager() {
    if (msg.sender != addressesProvider.getRiskPoolManager()) {
      revert RiskPoolCore__NotPoolManager();
    }
    _;
  }

  modifier onlyRiskPool() {
    if (msg.sender != addressesProvider.getRiskPool()) {
      revert RiskPoolCore__NotPoolManager();
    }
    _;
  }

  function getPolicy(uint256 policyId) external view returns (CoreLibrary.Policy memory) {
    return _policies[policyId];
  }

  function updateStateOnPolicy(
    string memory assetSymbol,
    uint256 endTime,
    uint256 premium,
    uint256 payOutAmount,
    uint256 currentAssetPrice,
    uint8 payOutThreshold,
    address reciever
  ) external onlyRiskPool returns (uint256 policyId) {
    lockedAssets += payOutAmount;
    policyId = policyCount++;

    _policies[policyId] = CoreLibrary.Policy({
      id: policyId,
      endTime: endTime,
      premium: premium,
      payOutAmount: payOutAmount,
      assetValue: currentAssetPrice,
      threshold: payOutThreshold,
      insured: reciever,
      asset: assetSymbol,
      utilized: false
    });

    uint256 unlocksAt = calculateUnlockTimestamp(endTime, 1);
    _expiredPolicyFunds[unlocksAt] += payOutAmount;
  }

  function updateStateOnApplyCover(uint256 policyId) external onlyRiskPool {
    CoreLibrary.Policy storage policy = _policies[policyId];
    policy.utilized = true;

    uint256 unlocksAt = calculateUnlockTimestamp(policy.endTime, 1);
    unchecked {
      lockedAssets -= policy.payOutAmount;
      _expiredPolicyFunds[unlocksAt] -= policy.payOutAmount;
    }
  }

  function updateStateOnUnlock(uint256 timestamp)
    external
    onlyRiskPool
    returns (uint256 unlocksAt, uint256 unlockAmount)
  {
    unlocksAt = calculateUnlockTimestamp(timestamp, 0);
    if (unlocksAt > block.timestamp) revert RiskPoolCore__UnlockBeforeExpiry();

    unlockAmount = _expiredPolicyFunds[unlocksAt];
    unchecked {
      lockedAssets -= unlockAmount;
    }

    _expiredPolicyFunds[unlocksAt] = 0;
  }

  function calculateUnlockTimestamp(uint256 expiry, uint256 grace) internal pure returns (uint256) {
    uint256 unlockTimestamp;
    {
      (uint256 year, uint256 month, uint256 day) = BokkyPooBahsDateTimeLibrary.timestampToDate(
        expiry
      );

      unlockTimestamp = BokkyPooBahsDateTimeLibrary.timestampFromDate(year, month, day + grace);
    }
    return unlockTimestamp;
  }

  function getAssets() external view returns (string[] memory) {
    return _assetsList;
  }

  function initAsset(string calldata assetSymbol) external onlyPoolManager {
    if (assetIds[assetSymbol] != 0) revert RiskPoolCore__AssetAlreadyInitialized();

    _assetsList.push(assetSymbol);
    uint256 assetId = _assetsList.length;
    assetIds[assetSymbol] = assetId;
    emit AssetInitialized(assetId, assetSymbol);
  }
}
