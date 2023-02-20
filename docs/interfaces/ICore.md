# ICore









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



## Events

### AssetInitialized

```solidity
event AssetInitialized(string asset)
```



*Emitted when a new asset is initialised*

#### Parameters

| Name | Type | Description |
|---|---|---|
| asset  | string | The symbol of newly initialized asset |

### FeeCollectorUpdated

```solidity
event FeeCollectorUpdated(address indexed newFeeCollector)
```



*Emitted when fee collector is updated.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| newFeeCollector `indexed` | address | The new address of the FeeCollector |

### Freezed

```solidity
event Freezed(bool freezed)
```



*All operations except withdrawal are freezed*

#### Parameters

| Name | Type | Description |
|---|---|---|
| freezed  | bool | indicates current state freezed/unfreezed |

### PoolDeployed

```solidity
event PoolDeployed(address pool)
```



*Emitted when pool is deployed at the time core initialization*

#### Parameters

| Name | Type | Description |
|---|---|---|
| pool  | address | undefined |

### Unlocked

```solidity
event Unlocked(uint256 timestamp, uint256 amount)
```



*Emitted when funds of expired policies are unlocked*

#### Parameters

| Name | Type | Description |
|---|---|---|
| timestamp  | uint256 | The day for which the expired policy funds are unlocked |
| amount  | uint256 | The amount unlocked from expired policies |



