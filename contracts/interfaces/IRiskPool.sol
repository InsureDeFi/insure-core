// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.9;

/// @title IRiskPool
/// @author Insure
/// @notice Defines the basic interface for Insure Risk Pool.
interface IRiskPool {
  error RiskPool__InsuredAddressZero();
  error RiskPool__AssetNotSupported();
  error RiskPool__CoverLessThanMinimum(uint256 requested, uint256 minRequired);
  error RiskPool__DurationTooShort(uint256 requested, uint256 minRequired);
  error RiskPool__DurationTooLong(uint256 requested, uint256 maxAllowed);
  error RiskPool__PolicyNotActive();
  error RiskPool__InActive();
  error RiskPool__Freezed();

  /// @dev Emitted when new insurance is purchased
  /// @param insured The address of insured
  /// @param policyId The policy id of new insurance
  /// @param asset The ID of the asset for which the policy is bought

  /// @param currentAssetPrice The curent asset/USD price
  /// @param payOutAmount The maximum cover amount for the policy
  /// @param premium The premium paid by the insured
  /// @param protocolFee The protocol fees for this transaction
  /// @param endTime The expiry date of policy in unix timestamp
  /// @param threshold The payout theshold of policy
  event Insured(
    address indexed insured,
    uint256 policyId,
    string asset,
    uint256 currentAssetPrice,
    uint256 payOutAmount,
    uint256 premium,
    uint256 protocolFee,
    uint256 endTime,
    uint8 threshold
  );

  /// @dev Emitted when a policy is redeemed
  /// @param policyId The policy id for which cover amount is paid
  event PolicyPaid(uint256 indexed policyId);

  /// @dev Emitted when funds of expired policies are unlocked
  /// @param timestamp The day for which the expired policy funds are unlocked
  /// @param assetsUnlocked The amount unlocked from expired policies
  event Unlocked(uint256 timestamp, uint256 assetsUnlocked);
}
