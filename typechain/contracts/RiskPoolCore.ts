/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type {
  FunctionFragment,
  Result,
  EventFragment,
} from "@ethersproject/abi";
import type { Listener, Provider } from "@ethersproject/providers";
import type {
  TypedEventFilter,
  TypedEvent,
  TypedListener,
  OnEvent,
  PromiseOrValue,
} from "../common";

export declare namespace CoreLibrary {
  export type PolicyStruct = {
    id: PromiseOrValue<BigNumberish>;
    premium: PromiseOrValue<BigNumberish>;
    payOutAmount: PromiseOrValue<BigNumberish>;
    assetValue: PromiseOrValue<BigNumberish>;
    endTime: PromiseOrValue<BigNumberish>;
    insured: PromiseOrValue<string>;
    threshold: PromiseOrValue<BigNumberish>;
    utilized: PromiseOrValue<boolean>;
    asset: PromiseOrValue<string>;
  };

  export type PolicyStructOutput = [
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    string,
    number,
    boolean,
    string
  ] & {
    id: BigNumber;
    premium: BigNumber;
    payOutAmount: BigNumber;
    assetValue: BigNumber;
    endTime: BigNumber;
    insured: string;
    threshold: number;
    utilized: boolean;
    asset: string;
  };
}

export interface RiskPoolCoreInterface extends utils.Interface {
  functions: {
    "CORE_REVISION()": FunctionFragment;
    "addressesProvider()": FunctionFragment;
    "assetIds(string)": FunctionFragment;
    "getAssets()": FunctionFragment;
    "getPolicy(uint256)": FunctionFragment;
    "initAsset(string)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "isActive()": FunctionFragment;
    "isFreezed()": FunctionFragment;
    "lockedAssets()": FunctionFragment;
    "policyCount()": FunctionFragment;
    "updateStateOnApplyCover(uint256)": FunctionFragment;
    "updateStateOnPolicy(string,uint256,uint256,uint256,uint256,uint8,address)": FunctionFragment;
    "updateStateOnUnlock(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "CORE_REVISION"
      | "addressesProvider"
      | "assetIds"
      | "getAssets"
      | "getPolicy"
      | "initAsset"
      | "initialize"
      | "isActive"
      | "isFreezed"
      | "lockedAssets"
      | "policyCount"
      | "updateStateOnApplyCover"
      | "updateStateOnPolicy"
      | "updateStateOnUnlock"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "CORE_REVISION",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "addressesProvider",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "assetIds",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "getAssets", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "getPolicy",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "initAsset",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(functionFragment: "isActive", values?: undefined): string;
  encodeFunctionData(functionFragment: "isFreezed", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "lockedAssets",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "policyCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "updateStateOnApplyCover",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStateOnPolicy",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "updateStateOnUnlock",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(
    functionFragment: "CORE_REVISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addressesProvider",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "assetIds", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getAssets", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "getPolicy", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initAsset", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isActive", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "isFreezed", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "lockedAssets",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "policyCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStateOnApplyCover",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStateOnPolicy",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "updateStateOnUnlock",
    data: BytesLike
  ): Result;

  events: {
    "AssetInitialized(uint256,string)": EventFragment;
    "Initialized(uint8)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AssetInitialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
}

export interface AssetInitializedEventObject {
  assetId: BigNumber;
  asset: string;
}
export type AssetInitializedEvent = TypedEvent<
  [BigNumber, string],
  AssetInitializedEventObject
>;

export type AssetInitializedEventFilter =
  TypedEventFilter<AssetInitializedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface RiskPoolCore extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: RiskPoolCoreInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    CORE_REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    addressesProvider(overrides?: CallOverrides): Promise<[string]>;

    assetIds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getAssets(overrides?: CallOverrides): Promise<[string[]]>;

    getPolicy(
      policyId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[CoreLibrary.PolicyStructOutput]>;

    initAsset(
      assetSymbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      _addressesProvider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    isActive(overrides?: CallOverrides): Promise<[boolean]>;

    isFreezed(overrides?: CallOverrides): Promise<[boolean]>;

    lockedAssets(overrides?: CallOverrides): Promise<[BigNumber]>;

    policyCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    updateStateOnApplyCover(
      policyId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateStateOnPolicy(
      assetSymbol: PromiseOrValue<string>,
      endTime: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      payOutAmount: PromiseOrValue<BigNumberish>,
      currentAssetPrice: PromiseOrValue<BigNumberish>,
      payOutThreshold: PromiseOrValue<BigNumberish>,
      reciever: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    updateStateOnUnlock(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  CORE_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  addressesProvider(overrides?: CallOverrides): Promise<string>;

  assetIds(
    arg0: PromiseOrValue<string>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getAssets(overrides?: CallOverrides): Promise<string[]>;

  getPolicy(
    policyId: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<CoreLibrary.PolicyStructOutput>;

  initAsset(
    assetSymbol: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    _addressesProvider: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  isActive(overrides?: CallOverrides): Promise<boolean>;

  isFreezed(overrides?: CallOverrides): Promise<boolean>;

  lockedAssets(overrides?: CallOverrides): Promise<BigNumber>;

  policyCount(overrides?: CallOverrides): Promise<BigNumber>;

  updateStateOnApplyCover(
    policyId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateStateOnPolicy(
    assetSymbol: PromiseOrValue<string>,
    endTime: PromiseOrValue<BigNumberish>,
    premium: PromiseOrValue<BigNumberish>,
    payOutAmount: PromiseOrValue<BigNumberish>,
    currentAssetPrice: PromiseOrValue<BigNumberish>,
    payOutThreshold: PromiseOrValue<BigNumberish>,
    reciever: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  updateStateOnUnlock(
    timestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    CORE_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    addressesProvider(overrides?: CallOverrides): Promise<string>;

    assetIds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssets(overrides?: CallOverrides): Promise<string[]>;

    getPolicy(
      policyId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<CoreLibrary.PolicyStructOutput>;

    initAsset(
      assetSymbol: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      _addressesProvider: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    isActive(overrides?: CallOverrides): Promise<boolean>;

    isFreezed(overrides?: CallOverrides): Promise<boolean>;

    lockedAssets(overrides?: CallOverrides): Promise<BigNumber>;

    policyCount(overrides?: CallOverrides): Promise<BigNumber>;

    updateStateOnApplyCover(
      policyId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    updateStateOnPolicy(
      assetSymbol: PromiseOrValue<string>,
      endTime: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      payOutAmount: PromiseOrValue<BigNumberish>,
      currentAssetPrice: PromiseOrValue<BigNumberish>,
      payOutThreshold: PromiseOrValue<BigNumberish>,
      reciever: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    updateStateOnUnlock(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber] & { unlocksAt: BigNumber; unlockAmount: BigNumber }
    >;
  };

  filters: {
    "AssetInitialized(uint256,string)"(
      assetId?: PromiseOrValue<BigNumberish> | null,
      asset?: null
    ): AssetInitializedEventFilter;
    AssetInitialized(
      assetId?: PromiseOrValue<BigNumberish> | null,
      asset?: null
    ): AssetInitializedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;
  };

  estimateGas: {
    CORE_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    addressesProvider(overrides?: CallOverrides): Promise<BigNumber>;

    assetIds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getAssets(overrides?: CallOverrides): Promise<BigNumber>;

    getPolicy(
      policyId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initAsset(
      assetSymbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      _addressesProvider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    isActive(overrides?: CallOverrides): Promise<BigNumber>;

    isFreezed(overrides?: CallOverrides): Promise<BigNumber>;

    lockedAssets(overrides?: CallOverrides): Promise<BigNumber>;

    policyCount(overrides?: CallOverrides): Promise<BigNumber>;

    updateStateOnApplyCover(
      policyId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateStateOnPolicy(
      assetSymbol: PromiseOrValue<string>,
      endTime: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      payOutAmount: PromiseOrValue<BigNumberish>,
      currentAssetPrice: PromiseOrValue<BigNumberish>,
      payOutThreshold: PromiseOrValue<BigNumberish>,
      reciever: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    updateStateOnUnlock(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    CORE_REVISION(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    addressesProvider(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    assetIds(
      arg0: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPolicy(
      policyId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initAsset(
      assetSymbol: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      _addressesProvider: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    isActive(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    isFreezed(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    lockedAssets(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    policyCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    updateStateOnApplyCover(
      policyId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateStateOnPolicy(
      assetSymbol: PromiseOrValue<string>,
      endTime: PromiseOrValue<BigNumberish>,
      premium: PromiseOrValue<BigNumberish>,
      payOutAmount: PromiseOrValue<BigNumberish>,
      currentAssetPrice: PromiseOrValue<BigNumberish>,
      payOutThreshold: PromiseOrValue<BigNumberish>,
      reciever: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    updateStateOnUnlock(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
