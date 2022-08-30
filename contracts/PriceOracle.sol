// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.9;

import {IStdReference} from "./interfaces/IStdReference.sol";
import {Initializable} from "@openzeppelin/contracts-upgradeable/proxy/utils/Initializable.sol";

/// @title PriceOracle
/// @author Insure
/// @notice Price oracle contract for Insure.
contract PriceOracle is Initializable {
  IStdReference public ref;

  string public constant BASE_CURRENCY = "USD";

  uint256 public constant PRICE_ORACLE_REVISION = 0x1;

  /// @dev Constructor.
  constructor() {
    _disableInitializers();
  }

  function initialize(IStdReference _ref) public initializer {
    ref = _ref;
  }

  /// @notice Returns the asset price in the base currency
  /// @param asset The symbol of the asset
  /// @return The price of the asset
  function getPrice(string calldata asset) public view returns (uint256) {
    IStdReference.ReferenceData memory data = ref.getReferenceData(asset, BASE_CURRENCY);
    return data.rate;
  }

  /// @notice Returns the prices of all assets in the base currency
  /// @param assets The symbol of the assets
  /// @return The price of the assets
  function getMultiPrices(string[] calldata assets) external view returns (uint256[] memory) {
    string[] memory baseSymbols = new string[](assets.length);
    for (uint256 i = 0; i < baseSymbols.length; i++) {
      baseSymbols[i] = BASE_CURRENCY;
    }
    IStdReference.ReferenceData[] memory data = ref.getReferenceDataBulk(assets, baseSymbols);

    uint256[] memory prices = new uint256[](assets.length);
    for (uint256 i = 0; i < prices.length; i++) {
      prices[i] = data[i].rate;
    }

    return prices;
  }
}
