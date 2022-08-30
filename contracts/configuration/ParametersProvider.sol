// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.9;

/// @title ParametersProvider
/// @author Insure
/// @dev Implements the configuration parameters for the Insure protocol
contract ParametersProvider {
  uint256 private constant MIN_COVER_AMOUNT = 1000 * 1e6; // 1000 USDC
  uint256 private constant PROTOCOL_FEE = 5; // 5%
  uint8 private constant PAYOUT_THRESHOLD = 90; // 90%

  uint256 public constant PARAMETERS_PROVIDER_REVISION = 0x1;

  /// @dev returns current min cover amount.
  /// @return The MIN_COVER_AMOUNT
  function getMinCoverAmount() external pure returns (uint256) {
    return MIN_COVER_AMOUNT;
  }

  /// @dev returns protocol fee percentage.
  /// @return The PROTOCOL_FEE
  function getProtocolFee() external pure returns (uint256) {
    return PROTOCOL_FEE;
  }

  /// @notice Calculates protocol fee.
  /// @dev Calculates protocol fee from the premium returned by premium engine
  /// @param premium The premium amount
  /// @return The calculated protocol fee
  function calculateProtocolFee(uint256 premium) external pure returns (uint256) {
    return (premium * PROTOCOL_FEE) / 100;
  }

  /// @dev returns pay out threshold.
  /// @return The PAYOUT_THRESHOLD
  function getPayOutThreshold() external pure returns (uint8) {
    return PAYOUT_THRESHOLD;
  }
}
