# Core









## Methods

### executeClaim

```solidity
function executeClaim(uint256 policyId) external nonpayable
```

Updates the policy details after a valid claim

*Only pool contract can call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| policyId | uint256 | The id of the policy |

### executeInsure

```solidity
function executeInsure(string asset, uint256 endTime, uint256 premium, uint256 payout, uint256 threshold, address reciever) external nonpayable returns (uint256 policyId)
```

Creates a new policy

*Only pool contract can call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| asset | string | The symbol of the asset that is to be insured |
| endTime | uint256 | Expiration time of the policy |
| premium | uint256 | The premium paid by the insured |
| payout | uint256 | The amount to be paid in case of a valid claim |
| threshold | uint256 | The asset price at which payout is made |
| reciever | address | Address of the insured |

#### Returns

| Name | Type | Description |
|---|---|---|
| policyId | uint256 | The new policy id |

### executeUnlock

```solidity
function executeUnlock(uint256 timestamp) external nonpayable
```

Unlocks expired policy funds

*Only pool contract can call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| timestamp | uint256 | The timestamp of the day for which funds are to be unlocked |

### feeCollector

```solidity
function feeCollector() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### fundsToUnlock

```solidity
function fundsToUnlock(uint256) external view returns (uint256)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### getPolicy

```solidity
function getPolicy(uint256 policyId) external view returns (struct DataTypes.Policy)
```

Fetches the details of the policy



#### Parameters

| Name | Type | Description |
|---|---|---|
| policyId | uint256 | The id of the policy to be fetched |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | DataTypes.Policy | Policy details |

### initAsset

```solidity
function initAsset(string asset) external nonpayable
```

Initialize new asset that can be insured

*Only owner is allowed to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| asset | string | The symbol of the asset to be initialized |

### initialize

```solidity
function initialize(contract AccessController accessController_, address feeCollector_, contract IPool poolImplementation_, contract IERC20MetadataUpgradeable usdc_, contract IInsureOracle oracle_, contract IPremiumEngine premiumEngine_) external nonpayable
```

Alternative to constructor when using proxies

*Deploys and initializes pool contract with UUPS proxy*

#### Parameters

| Name | Type | Description |
|---|---|---|
| accessController_ | contract AccessController | undefined |
| feeCollector_ | address | undefined |
| poolImplementation_ | contract IPool | undefined |
| usdc_ | contract IERC20MetadataUpgradeable | undefined |
| oracle_ | contract IInsureOracle | undefined |
| premiumEngine_ | contract IPremiumEngine | undefined |

### isAssetSupported

```solidity
function isAssetSupported(string assetSymbol) external view returns (bool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| assetSymbol | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### isFreezed

```solidity
function isFreezed() external view returns (bool)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### lockedAssets

```solidity
function lockedAssets() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### policyCount

```solidity
function policyCount() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### pool

```solidity
function pool() external view returns (address)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### proxiableUUID

```solidity
function proxiableUUID() external view returns (bytes32)
```



*Implementation of the ERC1822 {proxiableUUID} function. This returns the storage slot used by the implementation. It is used to validate the implementation&#39;s compatibility when performing an upgrade. IMPORTANT: A proxy pointing at a proxiable contract should not be considered proxiable itself, because this risks bricking a proxy that upgrades to it, by delegating to itself until out of gas. Thus it is critical that this function revert if invoked through a proxy. This is guaranteed by the `notDelegated` modifier.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### setFeeCollector

```solidity
function setFeeCollector(address feeCollector_) external nonpayable
```

Sets new fee collector address. Must be called by privileged account.



#### Parameters

| Name | Type | Description |
|---|---|---|
| feeCollector_ | address | undefined |

### setFreezed

```solidity
function setFreezed(bool status) external nonpayable
```

Freeze or unfreeze in case of an emergency

*Only owner or pool manager is allowed to call this function*

#### Parameters

| Name | Type | Description |
|---|---|---|
| status | bool | The new status of the contract |

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

### AssetInitialized

```solidity
event AssetInitialized(string asset)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| asset  | string | undefined |

### BeaconUpgraded

```solidity
event BeaconUpgraded(address indexed beacon)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| beacon `indexed` | address | undefined |

### FeeCollectorUpdated

```solidity
event FeeCollectorUpdated(address indexed newFeeCollector)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| newFeeCollector `indexed` | address | undefined |

### Freezed

```solidity
event Freezed(bool freezed)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| freezed  | bool | undefined |

### Initialized

```solidity
event Initialized(uint8 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint8 | undefined |

### PoolDeployed

```solidity
event PoolDeployed(address pool)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| pool  | address | undefined |

### Unlocked

```solidity
event Unlocked(uint256 timestamp, uint256 amount)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| timestamp  | uint256 | undefined |
| amount  | uint256 | undefined |

### Upgraded

```solidity
event Upgraded(address indexed implementation)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| implementation `indexed` | address | undefined |



## Errors

### AssetAlreadyInitialized

```solidity
error AssetAlreadyInitialized()
```






### CallerNotPool

```solidity
error CallerNotPool()
```






### UnlockBeforeExpiry

```solidity
error UnlockBeforeExpiry()
```






### ZeroAddress

```solidity
error ZeroAddress()
```







