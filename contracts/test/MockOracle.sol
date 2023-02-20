// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.17;

import {IStdReference} from "../interfaces/IStdReference.sol";

contract MockOracle is IStdReference {
  mapping(string => mapping(string => ReferenceData)) private mockPrices;

  constructor() {
    mockPrices["BTC"]["USD"] = ReferenceData(38000 * 1e18, block.timestamp, block.timestamp);
    mockPrices["ETH"]["USD"] = ReferenceData(2000 * 1e18, block.timestamp, block.timestamp);
  }

  /// Returns the price data for the given base/quote pair. Revert if not available.
  function getReferenceData(string memory _base, string memory _quote)
    external
    view
    returns (ReferenceData memory)
  {
    return mockPrices[_base][_quote];
  }

  /// Similar to getReferenceData, but with multiple base/quote pairs at once.
  function getReferenceDataBulk(string[] memory _bases, string[] memory _quotes)
    external
    view
    returns (ReferenceData[] memory)
  {
    require(_bases.length == _quotes.length, "BAD_INPUT_LENGTH");
    uint256 len = _bases.length;
    ReferenceData[] memory results = new ReferenceData[](len);
    for (uint256 i = 0; i < _bases.length; i++) {
      results[i] = mockPrices[_bases[i]][_quotes[i]];
    }
    return results;
  }
}
