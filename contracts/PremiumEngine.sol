// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.9;

import {ABDKMath64x64} from "./lib/ABDKMath64x64.sol";

error PremiumEngine__InsufficientCapacity();

/// @title PremiumEngine
/// @author Insure
/// @notice Premium calculator contract of Insure protocol
contract PremiumEngine {
  using ABDKMath64x64 for uint256;
  using ABDKMath64x64 for int128;

  uint256 internal constant BASE_UNIT = 1e6;

  /// @notice Multiplier curve of premium engine
  uint256 public constant K = 30000000000;
  uint256 public constant A = (K * BASE_UNIT) / 1200000;

  uint256 public constant PREMIUM_ENGINE_REVISION = 0x1;

  /// @notice Calculates yearly premium rate
  /// @param coverAmount The cover amount of the policy
  /// @param totalLiquidity The liquidity inside risk pool
  /// @param lockedAmount The amount locked for all the active policies
  function getPremiumRate(
    uint256 coverAmount,
    uint256 totalLiquidity,
    uint256 lockedAmount
  ) public pure returns (uint256) {
    if (coverAmount + lockedAmount > totalLiquidity) revert PremiumEngine__InsufficientCapacity();

    if (coverAmount == 0) return 0;
    if (totalLiquidity == 0) return 0;

    // Gas optimization
    uint256 _k = K;
    uint256 _baseUnit = BASE_UNIT;

    // Unutilized collateral (1 - utilization ratio)
    // 1000000 = 100.000%
    uint256 c1;
    uint256 c2;
    // Gas optimization. No need to check for overflow as previous
    // condition check will revert on overflow
    unchecked {
      c1 = _baseUnit - ((lockedAmount * _baseUnit) / totalLiquidity);
      c2 = _baseUnit - (((lockedAmount + coverAmount) * _baseUnit) / totalLiquidity);
    }

    int128 tempA = A.fromUInt().div(_baseUnit.fromUInt());
    int128 tempCollateral = c1.fromUInt();

    // Calculate area under curve
    uint256 a1 = (((tempCollateral).add(tempA).ln()).mulu(_k) * _baseUnit) + c1;

    tempCollateral = c2.fromUInt();

    uint256 a2 = (((tempCollateral).add(tempA).ln()).mulu(_k) * _baseUnit) + c2;

    // (0 => c1)area - (0 => c2)area = yearly premium rate between c1 and c2
    uint256 premiumRate = a1 - a2;
    // Gas optimization. Denominator is never zero
    unchecked {
      premiumRate = premiumRate / ((c1 - c2) * _baseUnit);
    }

    return premiumRate;
  }

  /// @notice Calculates premium to be paid to buy insurance
  /// @param coverAmount The cover amount of the policy
  /// @param duration The duration of the policy
  /// @param totalLiquidity The liquidity inside risk pool
  /// @param lockedAmount The amount locked for all the active policies
  /// @return Premium to be paid
  function getPremium(
    uint256 coverAmount,
    uint256 duration,
    uint256 totalLiquidity,
    uint256 lockedAmount
  ) external pure returns (uint256) {
    if (coverAmount + lockedAmount > totalLiquidity) revert PremiumEngine__InsufficientCapacity();

    if (coverAmount == 0) return 0;
    if (totalLiquidity == 0) return 0;
    if (duration == 0) return 0;

    uint256 premiumRate = getPremiumRate(coverAmount, totalLiquidity, lockedAmount);

    uint256 premium;
    // Gas optimization. Denominator is never zero
    unchecked {
      premium = (coverAmount * premiumRate * duration) / (365 days * BASE_UNIT);
    }

    return premium;
  }
}
