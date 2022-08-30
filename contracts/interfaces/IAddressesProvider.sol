// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.9;

/// @title IAddressesProvider
/// @author Insure
/// @notice Defines the basic interface for a Addresses Provider.
interface IAddressesProvider {
  /// @dev Emitted when risk pool core is updated.
  /// @param oldAddress The old address of the RiskPoolCore
  /// @param newAddress The new address of the RiskPoolCore
  event RiskPoolCoreUpdated(address indexed oldAddress, address indexed newAddress);

  /// @dev Emitted when risk pool is updated.
  /// @param oldAddress The old address of the RiskPool
  /// @param newAddress The new address of the RiskPool
  event RiskPoolUpdated(address indexed oldAddress, address indexed newAddress);

  /// @dev Emitted when premium engine is updated.
  /// @param oldAddress The old address of the PremiumEngine
  /// @param newAddress The new address of the PremiumEngine
  event PremiumEngineUpdated(address indexed oldAddress, address indexed newAddress);

  /// @dev Emitted when parameters provider is updated.
  /// @param oldAddress The old address of the ParametersProvider
  /// @param newAddress The new address of the ParametersProvider
  event ParametersProviderUpdated(address indexed oldAddress, address indexed newAddress);

  /// @dev Emitted when risk pool manager is updated.
  /// @param oldAddress The old address of the RiskPoolManager
  /// @param newAddress The new address of the RiskPoolManager
  event RiskPoolManagerUpdated(address indexed oldAddress, address indexed newAddress);

  /// @dev Emitted when price oracle is updated.
  /// @param oldAddress The old address of the PriceOracle
  /// @param newAddress The new address of the PriceOracle
  event PriceOracleUpdated(address indexed oldAddress, address indexed newAddress);

  /// @dev Emitted when fee distributor is updated.
  /// @param oldAddress The old address of the FeeDistributor
  /// @param newAddress The new address of the FeeDistributor
  event FeeDistributorUpdated(address indexed oldAddress, address indexed newAddress);

  /// @dev Emitted when a new contract address is registered.
  /// @param key The identifier of the contract
  /// @param oldAddress The address of the old contract
  /// @param newAddress The address of the new contract
  event AddressSet(bytes32 indexed key, address indexed oldAddress, address indexed newAddress);

  /// @notice Returns an address by its identifier.
  /// @dev The returned address might be an EOA or a contract
  /// @dev It returns ZERO if there is no registered address with the given key
  /// @param key The key
  /// @return The address of the registered for the specified key
  function getAddress(bytes32 key) external view returns (address);

  /// @notice Sets an address for an key replacing the address saved in the addresses map.
  /// @dev IMPORTANT Use this function carefully, as it will do a hard replacement
  /// @param key The key
  /// @param newAddress The address to set
  function setAddress(bytes32 key, address newAddress) external;

  /// @notice Returns the address of risk pool core.
  /// @return The RiskPoolCore address
  function getRiskPoolCore() external view returns (address);

  /// @notice Updates the address of risk pool core.
  /// @param newRiskPoolCore The address of the new RiskPool
  function setRiskPoolCore(address newRiskPoolCore) external;

  /// @notice Returns the address of risk pool.
  /// @return The RiskPool address
  function getRiskPool() external view returns (address);

  /// @notice Updates the address of risk pool.
  /// @param newRiskPool The address of the new RiskPool
  function setRiskPool(address newRiskPool) external;

  /// @notice Returns the address of premium engine.
  /// @return The PremiumEngine address
  function getPremiumEngine() external view returns (address);

  /// @notice Updates the address of premium engine.
  /// @param newPremiumEngine The address of the new PremiumEngine
  function setPremiumEngine(address newPremiumEngine) external;

  /// @notice Returns the address of parameters provider.
  /// @return The ParametersProvider address
  function getParametersProvider() external view returns (address);

  /// @notice Updates the address of parameters provider.
  /// @param newParametersProvider The address of the new ParametersProvider
  function setParametersProvider(address newParametersProvider) external;

  /// @notice Returns the address of risk pool manager.
  /// @return The RiskPoolManager address
  function getRiskPoolManager() external view returns (address);

  /// @notice Updates the address of risk pool manager.
  /// @param newRiskPoolManager The address of the new RiskPoolManager
  function setRiskPoolManager(address newRiskPoolManager) external;

  /// @notice Returns the address of price oracle.
  /// @return The PriceOracle address
  function getPriceOracle() external view returns (address);

  /// @notice Updates the address of price oracle.
  /// @param newPriceOracle The address of the new PriceOracle
  function setPriceOracle(address newPriceOracle) external;

  /// @notice Returns the address of fee distributor.
  /// @return The FeeDistributor address
  function getFeeDistributor() external view returns (address);

  /// @notice Updates the address of fee distributor.
  /// @param newFeeDistributor The address of the new FeeDistributor
  function setFeeDistributor(address newFeeDistributor) external;
}
