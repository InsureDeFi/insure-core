// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.17;

/**
 * @title IPriceOracle
 * @author Insure
 * @notice Price oracle interface for Insure.
 */
interface IInsureOracle {
  /**
   * @notice Returns the asset price in the base currency
   * @param asset The symbol of the asset
   * @return The price of the asset
   */
  function getPrice(string calldata asset) external view returns (uint256);

  /**
   * @notice Returns the prices of all assets in the base currency
   * @param assets The symbol of the assets
   * @return The price of the assets
   */
  function getMultiPrices(string[] calldata assets) external view returns (uint256[] memory);
}
