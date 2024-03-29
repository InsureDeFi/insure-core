# Pool

*Insure*

> Pool contract

Main point of interaction with Insure protocol - Users can   # Deposit   # Withdraw   # Buy insurance   # Redeem policy



## Methods

### allowance

```solidity
function allowance(address owner, address spender) external view returns (uint256)
```



*See {IERC20-allowance}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |
| spender | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### approve

```solidity
function approve(address spender, uint256 amount) external nonpayable returns (bool)
```



*See {IERC20-approve}. NOTE: If `amount` is the maximum `uint256`, the allowance is not updated on `transferFrom`. This is semantically equivalent to an infinite approval. Requirements: - `spender` cannot be the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### asset

```solidity
function asset() external view returns (address)
```



*See {IERC4626-asset}. *


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

### availableAssets

```solidity
function availableAssets() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### balanceOf

```solidity
function balanceOf(address account) external view returns (uint256)
```



*See {IERC20-balanceOf}.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| account | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

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

### convertToAssets

```solidity
function convertToAssets(uint256 shares) external view returns (uint256 assets)
```



*See {IERC4626-convertToAssets}. *

#### Parameters

| Name | Type | Description |
|---|---|---|
| shares | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| assets | uint256 | undefined |

### convertToShares

```solidity
function convertToShares(uint256 assets) external view returns (uint256 shares)
```



*See {IERC4626-convertToShares}. *

#### Parameters

| Name | Type | Description |
|---|---|---|
| assets | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| shares | uint256 | undefined |

### core

```solidity
function core() external view returns (contract ICore)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract ICore | undefined |

### decimals

```solidity
function decimals() external view returns (uint8)
```



*Decimals are read from the underlying asset in the constructor and cached. If this fails (e.g., the asset has not been created yet), the cached value is set to a default obtained by `super.decimals()` (which depends on inheritance but is most likely 18). Override this function in order to set a guaranteed hardcoded value. See {IERC20Metadata-decimals}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint8 | undefined |

### decreaseAllowance

```solidity
function decreaseAllowance(address spender, uint256 subtractedValue) external nonpayable returns (bool)
```



*Atomically decreases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| subtractedValue | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### deposit

```solidity
function deposit(uint256 assets, address receiver) external nonpayable returns (uint256)
```



*See {IERC4626-deposit}. *

#### Parameters

| Name | Type | Description |
|---|---|---|
| assets | uint256 | undefined |
| receiver | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### increaseAllowance

```solidity
function increaseAllowance(address spender, uint256 addedValue) external nonpayable returns (bool)
```



*Atomically increases the allowance granted to `spender` by the caller. This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}. Emits an {Approval} event indicating the updated allowance. Requirements: - `spender` cannot be the zero address.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| spender | address | undefined |
| addedValue | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

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
function insure(string assetSymbol, uint256 payout, uint256 duration, address receiver, address agent) external nonpayable returns (uint256 policyId)
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
| policyId | uint256 | The id of the new policy |

### maxDeposit

```solidity
function maxDeposit(address) external view returns (uint256)
```



*See {IERC4626-maxDeposit}. *

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### maxMint

```solidity
function maxMint(address) external view returns (uint256)
```



*See {IERC4626-maxMint}. *

#### Parameters

| Name | Type | Description |
|---|---|---|
| _0 | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### maxRedeem

```solidity
function maxRedeem(address owner) external view returns (uint256)
```



*See {IERC4626-maxRedeem}. *

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### maxWithdraw

```solidity
function maxWithdraw(address owner) external view returns (uint256)
```



*See {IERC4626-maxWithdraw}. *

#### Parameters

| Name | Type | Description |
|---|---|---|
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### mint

```solidity
function mint(uint256 shares, address receiver) external nonpayable returns (uint256)
```



*See {IERC4626-mint}. *

#### Parameters

| Name | Type | Description |
|---|---|---|
| shares | uint256 | undefined |
| receiver | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### name

```solidity
function name() external view returns (string)
```



*Returns the name of the token.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### premiumEngine

```solidity
function premiumEngine() external view returns (contract IPremiumEngine)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IPremiumEngine | undefined |

### previewDeposit

```solidity
function previewDeposit(uint256 assets) external view returns (uint256)
```



*See {IERC4626-previewDeposit}. *

#### Parameters

| Name | Type | Description |
|---|---|---|
| assets | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### previewMint

```solidity
function previewMint(uint256 shares) external view returns (uint256)
```



*See {IERC4626-previewMint}. *

#### Parameters

| Name | Type | Description |
|---|---|---|
| shares | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### previewRedeem

```solidity
function previewRedeem(uint256 shares) external view returns (uint256)
```



*See {IERC4626-previewRedeem}. *

#### Parameters

| Name | Type | Description |
|---|---|---|
| shares | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### previewWithdraw

```solidity
function previewWithdraw(uint256 assets) external view returns (uint256)
```



*See {IERC4626-previewWithdraw}. *

#### Parameters

| Name | Type | Description |
|---|---|---|
| assets | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### priceOracle

```solidity
function priceOracle() external view returns (contract IInsureOracle)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | contract IInsureOracle | undefined |

### proxiableUUID

```solidity
function proxiableUUID() external view returns (bytes32)
```



*Implementation of the ERC1822 {proxiableUUID} function. This returns the storage slot used by the implementation. It is used to validate the implementation&#39;s compatibility when performing an upgrade. IMPORTANT: A proxy pointing at a proxiable contract should not be considered proxiable itself, because this risks bricking a proxy that upgrades to it, by delegating to itself until out of gas. Thus it is critical that this function revert if invoked through a proxy. This is guaranteed by the `notDelegated` modifier.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bytes32 | undefined |

### redeem

```solidity
function redeem(uint256 shares, address receiver, address owner) external nonpayable returns (uint256)
```



*See {IERC4626-redeem}. *

#### Parameters

| Name | Type | Description |
|---|---|---|
| shares | uint256 | undefined |
| receiver | address | undefined |
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### symbol

```solidity
function symbol() external view returns (string)
```



*Returns the symbol of the token, usually a shorter version of the name.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | string | undefined |

### totalAssets

```solidity
function totalAssets() external view returns (uint256)
```



*See {IERC4626-totalAssets}. *


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### totalSupply

```solidity
function totalSupply() external view returns (uint256)
```



*See {IERC20-totalSupply}.*


#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### transfer

```solidity
function transfer(address to, uint256 amount) external nonpayable returns (bool)
```



*See {IERC20-transfer}. Requirements: - `to` cannot be the zero address. - the caller must have a balance of at least `amount`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| to | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### transferFrom

```solidity
function transferFrom(address from, address to, uint256 amount) external nonpayable returns (bool)
```



*See {IERC20-transferFrom}. Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}. NOTE: Does not update the allowance if the current allowance is the maximum `uint256`. Requirements: - `from` and `to` cannot be the zero address. - `from` must have a balance of at least `amount`. - the caller must have allowance for ``from``&#39;s tokens of at least `amount`.*

#### Parameters

| Name | Type | Description |
|---|---|---|
| from | address | undefined |
| to | address | undefined |
| amount | uint256 | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | bool | undefined |

### unlock

```solidity
function unlock(uint256 timestamp) external nonpayable
```

Unlock funds after the policy has been expired



#### Parameters

| Name | Type | Description |
|---|---|---|
| timestamp | uint256 | The timestamp of the day for which the funds are to be unlocked |

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

### utilizationRate

```solidity
function utilizationRate() external view returns (uint256)
```






#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |

### withdraw

```solidity
function withdraw(uint256 assets, address receiver, address owner) external nonpayable returns (uint256)
```



*See {IERC4626-withdraw}. *

#### Parameters

| Name | Type | Description |
|---|---|---|
| assets | uint256 | undefined |
| receiver | address | undefined |
| owner | address | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | uint256 | undefined |



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

### Approval

```solidity
event Approval(address indexed owner, address indexed spender, uint256 value)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| owner `indexed` | address | undefined |
| spender `indexed` | address | undefined |
| value  | uint256 | undefined |

### BeaconUpgraded

```solidity
event BeaconUpgraded(address indexed beacon)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| beacon `indexed` | address | undefined |

### Deposit

```solidity
event Deposit(address indexed sender, address indexed owner, uint256 assets, uint256 shares)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| sender `indexed` | address | undefined |
| owner `indexed` | address | undefined |
| assets  | uint256 | undefined |
| shares  | uint256 | undefined |

### Initialized

```solidity
event Initialized(uint8 version)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| version  | uint8 | undefined |

### Insured

```solidity
event Insured(address indexed insured, address agent, uint256 policyId, string asset, uint256 payout, uint256 premium, uint256 fee, uint256 reward, uint256 endTime, uint256 threshold)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| insured `indexed` | address | undefined |
| agent  | address | undefined |
| policyId  | uint256 | undefined |
| asset  | string | undefined |
| payout  | uint256 | undefined |
| premium  | uint256 | undefined |
| fee  | uint256 | undefined |
| reward  | uint256 | undefined |
| endTime  | uint256 | undefined |
| threshold  | uint256 | undefined |

### PolicyPaid

```solidity
event PolicyPaid(uint256 indexed policyId)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| policyId `indexed` | uint256 | undefined |

### Transfer

```solidity
event Transfer(address indexed from, address indexed to, uint256 value)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| from `indexed` | address | undefined |
| to `indexed` | address | undefined |
| value  | uint256 | undefined |

### Upgraded

```solidity
event Upgraded(address indexed implementation)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| implementation `indexed` | address | undefined |

### Withdraw

```solidity
event Withdraw(address indexed sender, address indexed receiver, address indexed owner, uint256 assets, uint256 shares)
```





#### Parameters

| Name | Type | Description |
|---|---|---|
| sender `indexed` | address | undefined |
| receiver `indexed` | address | undefined |
| owner `indexed` | address | undefined |
| assets  | uint256 | undefined |
| shares  | uint256 | undefined |



## Errors

### CoverTooSmall

```solidity
error CoverTooSmall()
```






### Freezed

```solidity
error Freezed()
```






### IneligiblePolicy

```solidity
error IneligiblePolicy()
```






### InvalidDuration

```solidity
error InvalidDuration()
```






### InvalidRate

```solidity
error InvalidRate()
```






### PolicyDoesNotExists

```solidity
error PolicyDoesNotExists()
```






### PolicyExpired

```solidity
error PolicyExpired()
```






### PolicyUtilized

```solidity
error PolicyUtilized()
```






### UnsupportedAsset

```solidity
error UnsupportedAsset()
```






### ZeroAddress

```solidity
error ZeroAddress()
```







