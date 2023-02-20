# IPool









## Methods

### claim

```solidity
function claim(uint256 policyId) external nonpayable
```

Make a claim incase of occurrence of an insured event

*Can be called only when pool is not freezed*

#### Parameters

| Name | Type | Description |
|---|---|---|
| policyId | uint256 | The id of the policy for which the claim is being made |

### claimBatch

```solidity
function claimBatch(uint256[] policyIds) external nonpayable
```

Make a claim for multiple policies incase of occurrence of an insured event

*Can be called only when pool is not freezed*

#### Parameters

| Name | Type | Description |
|---|---|---|
| policyIds | uint256[] | The array ids of the policys for which the claim is being made |

### initialize

```solidity
function initialize(contract AccessController accessController_, contract IERC20MetadataUpgradeable _usdc, contract ICore _core, contract IInsureOracle _oracle, contract IPremiumEngine _premiumEngine) external nonpayable
```

Alternative to constructor when using proxies



#### Parameters

| Name | Type | Description |
|---|---|---|
| accessController_ | contract AccessController | undefined |
| _usdc | contract IERC20MetadataUpgradeable | undefined |
| _core | contract ICore | undefined |
| _oracle | contract IInsureOracle | undefined |
| _premiumEngine | contract IPremiumEngine | undefined |

### insure

```solidity
function insure(string assetSymbol, uint256 payout, uint256 duration, address receiver, address agent) external nonpayable returns (uint256)
```

Creates a new policy for the insured

*Can be called only when pool is not freezed*

#### Parameters

| Name | Type | Description |
|---|---|---|
| assetSymbol | string | The symbol of the asset to be insured |
| payout | uint256 | The amount to be paid in case of payout |
| duration | uint256 | The duration of the policy |
| receiver | address | The address of the insured |
| agent | address | The address of the agent |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | The id of the new policy |

### unlock

```solidity
function unlock(uint256 timestamp) external nonpayable
```

Unlock funds after the policy has been expired



#### Parameters

| Name | Type | Description |
|---|---|---|
| timestamp | uint256 | The timestamp of the day for which the funds are to be unlocked |



## Events

### Insured

```solidity
event Insured(address indexed insured, address agent, uint256 policyId, string asset, uint256 payout, uint256 premium, uint256 fee, uint256 reward, uint256 endTime, uint256 threshold)
```



*Emitted when new insurance is purchased*

#### Parameters

| Name | Type | Description |
|---|---|---|
| insured `indexed` | address | The address of insured |
| agent  | address | undefined |
| policyId  | uint256 | The policy id of new insurance |
| asset  | string | The ID of the asset for which the policy is bought |
| payout  | uint256 | The maximum cover amount for the policy |
| premium  | uint256 | The premium paid by the insured |
| fee  | uint256 | The protocol fees for this transaction |
| reward  | uint256 | The agent reward for this transaction |
| endTime  | uint256 | The expiry date of policy in unix timestamp |
| threshold  | uint256 | The payout theshold of policy |

### PolicyPaid

```solidity
event PolicyPaid(uint256 indexed policyId)
```



*Emitted when a policy is redeemed*

#### Parameters

| Name | Type | Description |
|---|---|---|
| policyId `indexed` | uint256 | The policy id for which cover amount is paid |



