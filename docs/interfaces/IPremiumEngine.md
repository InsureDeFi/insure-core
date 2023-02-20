# IPremiumEngine

*Insure*

> IPremiumEngine

Interface for Insure Protocol PremiumEngine



## Methods

### getPremium

```solidity
function getPremium(uint256 amount, uint256 duration, uint256 totalLiquidity, uint256 lockedAmount) external pure returns (uint256 premium)
```

Calculates premium to be paid to buy insurance



#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | The cover amount of the policy |
| duration | uint256 | The duration of the policy |
| totalLiquidity | uint256 | The liquidity inside risk pool |
| lockedAmount | uint256 | The amount locked for all the active policies |

#### Returns

| Name | Type | Description |
|---|---|---|
| premium | uint256 | Premium to be paid |

### getPremiumRate

```solidity
function getPremiumRate(uint256 amount, uint256 totalLiquidity, uint256 lockedAmount) external pure returns (uint256 premiumRate)
```

Calculates yearly premium rate



#### Parameters

| Name | Type | Description |
|---|---|---|
| amount | uint256 | The cover amount of the policy |
| totalLiquidity | uint256 | The liquidity inside risk pool |
| lockedAmount | uint256 | The amount locked for all the active policies |

#### Returns

| Name | Type | Description |
|---|---|---|
| premiumRate | uint256 | undefined |




