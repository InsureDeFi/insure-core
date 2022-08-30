// SPDX-License-Identifier: MIT
pragma solidity 0.8.9;

import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";

library CoreLibrary {
  struct Policy {
    uint256 id;
    uint256 premium;
    uint256 payOutAmount;
    uint256 assetValue;
    uint256 endTime;
    address insured;
    uint8 threshold;
    bool utilized;
    string asset;
  }

  function isActive(Policy memory policy) internal view returns (bool) {
    if (policy.insured != address(0)) {
      if (policy.endTime > block.timestamp) {
        if (!policy.utilized) {
          return true;
        }
      }
    }
    return false;
  }

  function isEligible(Policy memory policy, uint256 latestPrice) internal pure returns (bool) {
    if (latestPrice > 0) {
      uint256 thresholdPrice = Math.mulDiv(policy.assetValue, 100 - policy.threshold, 100);
      if (latestPrice < thresholdPrice) return true;
    }

    return false;
  }
}
