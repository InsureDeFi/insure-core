# InsureOracle

*Insure*

> PriceOracle

Price oracle contract for Insure.



## Methods

### getMultiPrices

```solidity
function getMultiPrices(string[] assets) external view returns (uint256[])
```

Returns the prices of all assets in the base currency



#### Parameters

| Name | Type | Description |
|---|---|---|
| assets | string[] | The symbol of the assets |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256[] | The price of the assets |

### getPrice

```solidity
function getPrice(string asset) external view returns (uint256)
```

Returns the asset price in the base currency



#### Parameters

| Name | Type | Description |
|---|---|---|
| asset | string | The symbol of the asset |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The price of the asset |

### initialize

```solidity
function initialize(contract AccessController accessController_, contract IStdReference ref_) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| accessController_ | contract AccessController | undefined |
| ref_ | contract IStdReference | undefined |

### proxiableUUID

```solidity
function proxiableUUID() external view returns (bytes32)
```



*Implementation of the ERC1822 {proxiableUUID} function. This returns the storage slot used by the implementation. It is used to validate the implementation&#39;s compatibility when performing an upgrade. IMPORTANT: A proxy pointing at a proxiable contract should not be considered proxiable itself, because this risks bricking a proxy that upgrades to it, by delegating to itself until out of gas. Thus it is critical that this function revert if invoked through a proxy. This is guaranteed by the `notDelegated` modifier.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### ref

```solidity
function ref() external view returns (contract IStdReference)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IStdReference | undefined |

### setRef

```solidity
function setRef(contract IStdReference ref_) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| ref_ | contract IStdReference | undefined |

### upgradeTo

```solidity
function upgradeTo(address newImplementation) external nonpayable
```



*Upgrade the implementation of the proxy to `newImplementation`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newImplementation | address | undefined |

### upgradeToAndCall

```solidity
function upgradeToAndCall(address newImplementation, bytes data) external payable
```



*Upgrade the implementation of the proxy to `newImplementation`, and subsequently execute the function call encoded in `data`. Calls {_authorizeUpgrade}. Emits an {Upgraded} event.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newImplementation | address | undefined |
| data | bytes | undefined |



## Events

### AdminChanged

```solidity
event AdminChanged(address previousAdmin, address newAdmin)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| previousAdmin  | address | undefined |
| newAdmin  | address | undefined |

### BeaconUpgraded

```solidity
event BeaconUpgraded(address indexed beacon)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| beacon `indexed` | address | undefined |

### Initialized

```solidity
event Initialized(uint8 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint8 | undefined |

### Upgraded

```solidity
event Upgraded(address indexed implementation)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| implementation `indexed` | address | undefined |



## Errors

### ZeroAddress

```solidity
error ZeroAddress()
```







