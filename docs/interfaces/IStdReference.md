# IStdReference









## Methods

### getReferenceData

```solidity
function getReferenceData(string _base, string _quote) external view returns (struct IStdReference.ReferenceData)
```

Returns the price data for the given base/quote pair. Revert if not available.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _base | string | undefined |
| _quote | string | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | IStdReference.ReferenceData | undefined |

### getReferenceDataBulk

```solidity
function getReferenceDataBulk(string[] _bases, string[] _quotes) external view returns (struct IStdReference.ReferenceData[])
```

Similar to getReferenceData, but with multiple base/quote pairs at once.



#### Parameters

| Name | Type | Description |
|---|---|---|
| _bases | string[] | undefined |
| _quotes | string[] | undefined |

#### Returns

| Name | Type | Description |
|---|---|---|
| _0 | IStdReference.ReferenceData[] | undefined |




