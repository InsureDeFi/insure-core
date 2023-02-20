# PremiumEngine

*Insure*

> PremiumEngine

Premium calculator contract of Insure protocol



## Methods

### BASE_RATE

```solidity
function BASE_RATE() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### EXCESS_UTILIZATION_RATE

```solidity
function EXCESS_UTILIZATION_RATE() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### OPTIMAL_UTILIZATION_RATE

```solidity
function OPTIMAL_UTILIZATION_RATE() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### RATE_SLOPE_1

```solidity
function RATE_SLOPE_1() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### RATE_SLOPE_2

```solidity
function RATE_SLOPE_2() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getPremium

```solidity
function getPremium(uint256 amount, uint256 duration, uint256 totalLiquidity, uint256 lockedAmount) external pure returns (uint256 premium)
```

Calculate premium for the given amount and duration



#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | The payout amount |
| duration | uint256 | The duration of the policy |
| totalLiquidity | uint256 | The total liquidity in the pool |
| lockedAmount | uint256 | The amount locked in the pool |

#### Returns

| Name | Type | Description |
|---|---|---|
| premium | uint256 | The premium for the given amount and duration |

### getPremiumRate

```solidity
function getPremiumRate(uint256 amount, uint256 totalLiquidity, uint256 lockedAmount) external pure returns (uint256 premiumRate)
```

Calculate the yearly premium rate



#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | The payout amount |
| totalLiquidity | uint256 | The total liquidity in the pool |
| lockedAmount | uint256 | The amount locked in the pool |

#### Returns

| Name | Type | Description |
|---|---|---|
| premiumRate | uint256 | current yearly premium rate |

### initialize

```solidity
function initialize(contract AccessController accessController_) external nonpayable
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| accessController_ | contract AccessController | undefined |

### proxiableUUID

```solidity
function proxiableUUID() external view returns (bytes32)
```



*Implementation of the ERC1822 {proxiableUUID} function. This returns the storage slot used by the implementation. It is used to validate the implementation&#39;s compatibility when performing an upgrade. IMPORTANT: A proxy pointing at a proxiable contract should not be considered proxiable itself, because this risks bricking a proxy that upgrades to it, by delegating to itself until out of gas. Thus it is critical that this function revert if invoked through a proxy. This is guaranteed by the `notDelegated` modifier.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

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

### InsufficientCapacity

```solidity
error InsufficientCapacity()
```







