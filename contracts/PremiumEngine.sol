// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

import "./access/AccessRestricted.sol";

import "./interfaces/IPremiumEngine.sol";

error InsufficientCapacity();

/// @title PremiumEngine
/// @author Insure
/// @notice Premium calculator contract of Insure protocol
contract PremiumEngine is UUPSUpgradeable, AccessRestricted, IPremiumEngine {
  uint256 public constant BASE_RATE = 0.04 * 1e6;
  uint256 public constant RATE_SLOPE_1 = 0.03 * 1e6;
  uint256 public constant RATE_SLOPE_2 = 0.7 * 1e6;
  uint256 public constant OPTIMAL_UTILIZATION_RATE = 0.85 * 1e6;
  uint256 public constant EXCESS_UTILIZATION_RATE = 0.15 * 1e6;

  uint256 internal constant BASE_UNIT = 1e6;

  /// @dev Constructor.
  constructor() {
    _disableInitializers();
  }

  function initialize(AccessController accessController_) external initializer {
    __AccessRestricted_init(accessController_);
  }

  /// @notice Calculate the yearly premium rate
  /// @param amount The payout amount
  /// @param totalLiquidity The total liquidity in the pool
  /// @param lockedAmount The amount locked in the pool
  /// @return premiumRate current yearly premium rate
  function getPremiumRate(
    uint256 amount,
    uint256 totalLiquidity,
    uint256 lockedAmount
  ) public pure returns (uint256 premiumRate) {
    if (amount + lockedAmount > totalLiquidity) revert InsufficientCapacity();

    if (amount == 0) return 0;
    if (totalLiquidity == 0) return 0;

    uint256 utilizationRateBefore;
    uint256 utilizationRateAfter;

    unchecked {
      utilizationRateBefore = (lockedAmount * BASE_UNIT) / totalLiquidity;
      utilizationRateAfter = ((lockedAmount + amount) * BASE_UNIT) / totalLiquidity;
    }

    if (utilizationRateAfter <= OPTIMAL_UTILIZATION_RATE) {
      premiumRate += _avgPremiumRate(utilizationRateBefore, utilizationRateAfter);
    } else if (OPTIMAL_UTILIZATION_RATE <= utilizationRateBefore) {
      premiumRate += _avgPremiumRate(utilizationRateBefore, utilizationRateAfter);
    } else {
      premiumRate += _avgPremiumRate(utilizationRateBefore, OPTIMAL_UTILIZATION_RATE);
      premiumRate += _avgPremiumRate(OPTIMAL_UTILIZATION_RATE, utilizationRateAfter);
    }
  }

  /// @notice Calculate premium for the given amount and duration
  /// @param amount The payout amount
  /// @param duration The duration of the policy
  /// @param totalLiquidity The total liquidity in the pool
  /// @param lockedAmount The amount locked in the pool
  /// @return premium The premium for the given amount and duration
  function getPremium(
    uint256 amount,
    uint256 duration,
    uint256 totalLiquidity,
    uint256 lockedAmount
  ) public pure returns (uint256 premium) {
    if (amount + lockedAmount > totalLiquidity) revert InsufficientCapacity();

    if (amount == 0) return 0;
    if (totalLiquidity == 0) return 0;
    if (duration == 0) return 0;

    uint256 premiumRate = getPremiumRate(amount, totalLiquidity, lockedAmount);

    unchecked {
      premium = (amount * premiumRate * duration) / (365 days * BASE_UNIT);
    }
  }

  function _avgPremiumRate(uint256 utilizationRateBefore, uint256 utilizationRateAfter)
    internal
    pure
    returns (uint256 premiumRate)
  {
    uint256 premiumRateBefore = _premiumRate(utilizationRateBefore);
    uint256 premiumRateAfter = _premiumRate(utilizationRateAfter);
    unchecked {
      premiumRate = (premiumRateBefore + premiumRateAfter) / 2;
    }
  }

  function _premiumRate(uint256 utilizationRate) internal pure returns (uint256) {
    uint256 currentPremiumRate = BASE_RATE;
    if (utilizationRate == 0) return currentPremiumRate;

    unchecked {
      if (utilizationRate > OPTIMAL_UTILIZATION_RATE) {
        uint256 excessUtilizationRatio = utilizationRate - OPTIMAL_UTILIZATION_RATE;
        currentPremiumRate += (RATE_SLOPE_1 +
          ((RATE_SLOPE_2 * excessUtilizationRatio) / EXCESS_UTILIZATION_RATE));
      } else {
        currentPremiumRate += (RATE_SLOPE_1 * utilizationRate) / OPTIMAL_UTILIZATION_RATE;
      }
    }

    return currentPremiumRate;
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
