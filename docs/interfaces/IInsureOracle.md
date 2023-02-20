# IInsureOracle

*Insure*

> IPriceOracle

Price oracle interface for Insure.



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




