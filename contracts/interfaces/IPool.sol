// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.17;

import "@openzeppelin/contracts-upgradeable/token/ERC20/extensions/IERC20MetadataUpgradeable.sol";

import "../access/AccessController.sol";

import "./IPremiumEngine.sol";
import "./IInsureOracle.sol";
import "./ICore.sol";

interface IPool {
  /**
   * @dev Emitted when new insurance is purchased
   * @param insured The address of insured
   * @param policyId The policy id of new insurance
   * @param asset The ID of the asset for which the policy is bought
   * @param payout The maximum cover amount for the policy
   * @param premium The premium paid by the insured
   * @param fee The protocol fees for this transaction
   * @param reward The agent reward for this transaction
   * @param endTime The expiry date of policy in unix timestamp
   * @param threshold The payout theshold of policy
   */
  event Insured(
    address indexed insured,
    address agent,
    uint256 policyId,
    string asset,
    uint256 payout,
    uint256 premium,
    uint256 fee,
    uint256 reward,
    uint256 endTime,
    uint256 threshold
  );

  /**
   * @dev Emitted when a policy is redeemed
   * @param policyId The policy id for which cover amount is paid
   */
  event PolicyPaid(uint256 indexed policyId);

  /**
   * @notice Alternative to constructor when using proxies
   */
  function initialize(
    AccessController accessController_,
    IERC20MetadataUpgradeable _usdc,
    ICore _core,
    IInsureOracle _oracle,
    IPremiumEngine _premiumEngine
  ) external;

  /**
   * @notice Creates a new policy for the insured
   * @dev Can be called only when pool is not freezed
   * @param assetSymbol The symbol of the asset to be insured
   * @param payout The amount to be paid in case of payout
   * @param duration The duration of the policy
   * @param receiver The address of the insured
   * @param agent The address of the agent
   * @return The id of the new policy
   */
  function insure(
    string calldata assetSymbol,
    uint256 payout,
    uint256 duration,
    address receiver,
    address agent
  ) external returns (uint256);

  /**
   * @notice Make a claim incase of occurrence of an insured event
   * @dev Can be called only when pool is not freezed
   * @param policyId The id of the policy for which the claim is being made
   */
  function claim(uint256 policyId) external;

  /**
   * @notice Make a claim for multiple policies incase of occurrence of an insured event
   * @dev Can be called only when pool is not freezed
   * @param policyIds The array ids of the policys for which the claim is being made
   */
  function claimBatch(uint256[] calldata policyIds) external;

  /**
   * @notice Unlock funds after the policy has been expired
   * @param timestamp The timestamp of the day for which the funds are to be unlocked
   */
  function unlock(uint256 timestamp) external;
}
