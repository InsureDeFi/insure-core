// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

library DataTypes {
  struct Policy {
    uint256 id;
    uint256 endTime;
    uint256 payout;
    uint256 premium;
    uint256 threshold;
    address insured;
    bool utilized;
    string asset;
  }

  struct PolicyLocalVars {
    uint256 premium;
    uint256 fee;
    uint256 reward;
    uint256 policyId;
    uint256 endTime;
    uint256 threshold;
  }
}
