// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.17;

/**
 * @title IPremiumEngine
 * @author Insure
 * @notice Interface for Insure Protocol PremiumEngine
 */
interface IPremiumEngine {
  /**
   * @notice Calculates yearly premium rate
   * @param amount The cover amount of the policy
   * @param totalLiquidity The liquidity inside risk pool
   * @param lockedAmount The amount locked for all the active policies
   */
  function getPremiumRate(
    uint256 amount,
    uint256 totalLiquidity,
    uint256 lockedAmount
  ) external pure returns (uint256 premiumRate);

  /**
   * @notice Calculates premium to be paid to buy insurance
   * @param amount The cover amount of the policy
   * @param duration The duration of the policy
   * @param totalLiquidity The liquidity inside risk pool
   * @param lockedAmount The amount locked for all the active policies
   * @return premium Premium to be paid
   */
  function getPremium(
    uint256 amount,
    uint256 duration,
    uint256 totalLiquidity,
    uint256 lockedAmount
  ) external pure returns (uint256 premium);
}
