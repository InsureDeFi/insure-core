// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.17;

import "@openzeppelin/contracts-upgradeable/proxy/utils/UUPSUpgradeable.sol";

import "./access/AccessRestricted.sol";

import "./interfaces/IInsureOracle.sol";
import "./interfaces/IStdReference.sol";
import "./lib/Errors.sol";

/**
 * @title PriceOracle
 * @author Insure
 * @notice Price oracle contract for Insure.
 */
contract InsureOracle is UUPSUpgradeable, AccessRestricted, IInsureOracle {
  IStdReference public ref;

  string internal constant BASE_CURRENCY = "USD";

  /**
   * @dev Constructor.
   */
  constructor() {
    _disableInitializers();
  }

  function initialize(AccessController accessController_, IStdReference ref_) external initializer {
    __AccessRestricted_init(accessController_);

    _setRef(ref_);
  }

  /**
   * @inheritdoc	IInsureOracle
   */
  function getPrice(string calldata asset) public view returns (uint256) {
    IStdReference.ReferenceData memory data = ref.getReferenceData(asset, BASE_CURRENCY);
    return data.rate;
  }

  /**
   * @inheritdoc	IInsureOracle
   */
  function getMultiPrices(string[] calldata assets) external view returns (uint256[] memory) {
    uint256 assetCount = assets.length;
    string[] memory baseSymbols = new string[](assetCount);
    for (uint256 i; i < assetCount; ) {
      baseSymbols[i] = BASE_CURRENCY;
      unchecked {
        ++i;
      }
    }

    IStdReference.ReferenceData[] memory data = ref.getReferenceDataBulk(assets, baseSymbols);

    uint256[] memory prices = new uint256[](assetCount);
    for (uint256 i; i < assetCount; ) {
      prices[i] = data[i].rate;
      unchecked {
        ++i;
      }
    }

    return prices;
  }

  function setRef(IStdReference ref_) external onlyRole(ADMIN_ROLE) {
    _setRef(ref_);
  }

  function _setRef(IStdReference ref_) internal {
    if (address(ref_) == address(0)) revert Errors.ZeroAddress();
    ref = ref_;
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
