// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.17;

import "../access/AccessController.sol";

import "./IPool.sol";
import "./IPremiumEngine.sol";
import "./IInsureOracle.sol";
import "../lib/DataTypes.sol";

interface ICore {
  /**
   * @dev Emitted when fee collector is updated.
   * @param newFeeCollector The new address of the FeeCollector
   */
  event FeeCollectorUpdated(address indexed newFeeCollector);

  /**
   * @dev Emitted when a new asset is initialised
   * @param asset The symbol of newly initialized asset
   */
  event AssetInitialized(string asset);

  /**
   * @dev All operations except withdrawal are freezed
   * @param freezed indicates current state freezed/unfreezed
   */
  event Freezed(bool freezed);

  /**
   * @dev Emitted when funds of expired policies are unlocked
   * @param timestamp The day for which the expired policy funds are unlocked
   * @param amount The amount unlocked from expired policies
   */
  event Unlocked(uint256 timestamp, uint256 amount);

  /**
   * @dev Emitted when pool is deployed at the time core initialization
   */
  event PoolDeployed(address pool);

  /**
   * @notice Alternative to constructor when using proxies
   * @dev Deploys and initializes pool contract with UUPS proxy
   */
  function initialize(
    AccessController accessController_,
    address feeCollector_,
    IPool poolImplementation_,
    IERC20MetadataUpgradeable usdc_,
    IInsureOracle oracle_,
    IPremiumEngine premiumEngine_
  ) external;

  /**
   * @notice Fetches the details of the policy
   * @param policyId The id of the policy to be fetched
   * @return Policy details
   */
  function getPolicy(uint256 policyId) external view returns (DataTypes.Policy memory);

  /**
   * @notice Creates a new policy
   * @dev Only pool contract can call this function
   * @param asset The symbol of the asset that is to be insured
   * @param endTime Expiration time of the policy
   * @param premium The premium paid by the insured
   * @param payout The amount to be paid in case of a valid claim
   * @param threshold The asset price at which payout is made
   * @param reciever Address of the insured
   * @return policyId The new policy id
   */
  function executeInsure(
    string memory asset,
    uint256 endTime,
    uint256 premium,
    uint256 payout,
    uint256 threshold,
    address reciever
  ) external returns (uint256 policyId);

  /**
   * @notice Updates the policy details after a valid claim
   * @dev Only pool contract can call this function
   * @param policyId The id of the policy
   */
  function executeClaim(uint256 policyId) external;

  /**
   * @notice Unlocks expired policy funds
   * @dev Only pool contract can call this function
   * @param timestamp The timestamp of the day for which funds are to be unlocked
   */
  function executeUnlock(uint256 timestamp) external;

  /**
   * @notice Initialize new asset that can be insured
   * @dev Only owner is allowed to call this function
   * @param asset The symbol of the asset to be initialized
   */
  function initAsset(string calldata asset) external;

  /**
   * @notice Sets new fee collector address.
   * Must be called by privileged account.
   */
  function setFeeCollector(address feeCollector_) external;

  /**
   * @notice Freeze or unfreeze in case of an emergency
   * @dev Only owner or pool manager is allowed to call this function
   * @param status The new status of the contract
   */
  function setFreezed(bool status) external;

  function feeCollector() external view returns (address);

  function lockedAssets() external view returns (uint256);

  function isAssetSupported(string calldata assetSymbol) external view returns (bool);

  function isFreezed() external view returns (bool);
}
