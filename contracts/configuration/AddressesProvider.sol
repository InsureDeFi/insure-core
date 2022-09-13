// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.9;

import {ProxyAdmin} from "@openzeppelin/contracts/proxy/transparent/ProxyAdmin.sol";
import {IAddressesProvider} from "../interfaces/IAddressesProvider.sol";

/// @title AddressesProvider
/// @author Insure
/// @notice Main registry of addresses part of or connected to the protocol, including permissioned roles
/// @dev Acts as factory of addresses that are part of the Insure protocol
contract AddressesProvider is ProxyAdmin, IAddressesProvider {
  // Map of registered addresses (identifier => registeredAddress)
  mapping(bytes32 => address) private _addresses;

  // Main identifiers
  bytes32 private constant RISK_POOL_CORE = "RISK_POOL_CORE";
  bytes32 private constant RISK_POOL = "RISK_POOL";
  bytes32 private constant PREMIUM_ENGINE = "PREMIUM_ENGINE";
  bytes32 private constant PARAMETERS_PROVIDER = "PARAMETERS_PROVIDER";
  bytes32 private constant PRICE_ORACLE = "PRICE_ORACLE";
  bytes32 private constant FEE_DISTRIBUTOR = "FEE_DISTRIBUTOR";

  /// @inheritdoc	IAddressesProvider
  function getAddress(bytes32 key) public view returns (address) {
    return _addresses[key];
  }

  /// @inheritdoc IAddressesProvider
  function setAddress(bytes32 key, address newAddress) external override onlyOwner {
    address oldAddress = _addresses[key];
    _addresses[key] = newAddress;
    emit AddressSet(key, oldAddress, newAddress);
  }

  /// @inheritdoc IAddressesProvider
  function getRiskPoolCore() external view returns (address) {
    return getAddress(RISK_POOL_CORE);
  }

  /// @inheritdoc IAddressesProvider
  function setRiskPoolCore(address newRiskPoolCore) external onlyOwner {
    address oldRiskPoolCore = _addresses[RISK_POOL_CORE];
    _addresses[RISK_POOL_CORE] = newRiskPoolCore;
    emit RiskPoolUpdated(oldRiskPoolCore, newRiskPoolCore);
  }

  /// @inheritdoc IAddressesProvider
  function getRiskPool() external view returns (address) {
    return getAddress(RISK_POOL);
  }

  /// @inheritdoc IAddressesProvider
  function setRiskPool(address newRiskPool) external onlyOwner {
    address oldRiskPool = _addresses[RISK_POOL];
    _addresses[RISK_POOL] = newRiskPool;
    emit RiskPoolUpdated(oldRiskPool, newRiskPool);
  }

  /// @inheritdoc IAddressesProvider
  function getPremiumEngine() external view returns (address) {
    return getAddress(PREMIUM_ENGINE);
  }

  /// @inheritdoc IAddressesProvider
  function setPremiumEngine(address newPremiumEngine) external onlyOwner {
    address oldPremiumEngine = _addresses[PREMIUM_ENGINE];
    _addresses[PREMIUM_ENGINE] = newPremiumEngine;
    emit PremiumEngineUpdated(oldPremiumEngine, newPremiumEngine);
  }

  /// @inheritdoc IAddressesProvider
  function getParametersProvider() external view returns (address) {
    return getAddress(PARAMETERS_PROVIDER);
  }

  /// @inheritdoc IAddressesProvider
  function setParametersProvider(address newParametersProvider) external onlyOwner {
    address oldParametersProvider = _addresses[PARAMETERS_PROVIDER];
    _addresses[PARAMETERS_PROVIDER] = newParametersProvider;
    emit ParametersProviderUpdated(oldParametersProvider, newParametersProvider);
  }

  /// @inheritdoc IAddressesProvider
  function getPriceOracle() external view returns (address) {
    return getAddress(PRICE_ORACLE);
  }

  /// @inheritdoc IAddressesProvider
  function setPriceOracle(address newPriceOracle) external onlyOwner {
    address oldPriceOracle = _addresses[PRICE_ORACLE];
    _addresses[PRICE_ORACLE] = newPriceOracle;
    emit PriceOracleUpdated(oldPriceOracle, newPriceOracle);
  }

  /// @inheritdoc IAddressesProvider
  function getFeeDistributor() external view returns (address) {
    return getAddress(FEE_DISTRIBUTOR);
  }

  /// @inheritdoc IAddressesProvider
  function setFeeDistributor(address newFeeDistributor) external onlyOwner {
    address oldFeeDistributor = _addresses[FEE_DISTRIBUTOR];
    _addresses[FEE_DISTRIBUTOR] = newFeeDistributor;
    emit FeeDistributorUpdated(oldFeeDistributor, newFeeDistributor);
  }
}
