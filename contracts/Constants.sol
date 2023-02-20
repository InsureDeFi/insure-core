// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.17;

uint256 constant MIN_COVER_AMOUNT = 1000 * 1e6; // 1000 USDC
uint256 constant PROTOCOL_FEE = 0.05 * 1e6; // 5%
uint256 constant AGENT_REWARD = 0.6 * 1e6; // 60% of protocol fee
uint256 constant PAYOUT_THRESHOLD = 0.10 * 1e18; // 90%
