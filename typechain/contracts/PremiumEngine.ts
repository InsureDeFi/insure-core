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
  PayableOverrides,
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

export interface PremiumEngineInterface extends utils.Interface {
  functions: {
    "BASE_RATE()": FunctionFragment;
    "EXCESS_UTILIZATION_RATE()": FunctionFragment;
    "OPTIMAL_UTILIZATION_RATE()": FunctionFragment;
    "RATE_SLOPE_1()": FunctionFragment;
    "RATE_SLOPE_2()": FunctionFragment;
    "getPremium(uint256,uint256,uint256,uint256)": FunctionFragment;
    "getPremiumRate(uint256,uint256,uint256)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "proxiableUUID()": FunctionFragment;
    "upgradeTo(address)": FunctionFragment;
    "upgradeToAndCall(address,bytes)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "BASE_RATE"
      | "EXCESS_UTILIZATION_RATE"
      | "OPTIMAL_UTILIZATION_RATE"
      | "RATE_SLOPE_1"
      | "RATE_SLOPE_2"
      | "getPremium"
      | "getPremiumRate"
      | "initialize"
      | "proxiableUUID"
      | "upgradeTo"
      | "upgradeToAndCall"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "BASE_RATE", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "EXCESS_UTILIZATION_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "OPTIMAL_UTILIZATION_RATE",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RATE_SLOPE_1",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "RATE_SLOPE_2",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getPremium",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "getPremiumRate",
    values: [
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "proxiableUUID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeTo",
    values: [PromiseOrValue<string>]
  ): string;
  encodeFunctionData(
    functionFragment: "upgradeToAndCall",
    values: [PromiseOrValue<string>, PromiseOrValue<BytesLike>]
  ): string;

  decodeFunctionResult(functionFragment: "BASE_RATE", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "EXCESS_UTILIZATION_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "OPTIMAL_UTILIZATION_RATE",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RATE_SLOPE_1",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "RATE_SLOPE_2",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPremium", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPremiumRate",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxiableUUID",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "upgradeTo", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "upgradeToAndCall",
    data: BytesLike
  ): Result;

  events: {
    "AdminChanged(address,address)": EventFragment;
    "BeaconUpgraded(address)": EventFragment;
    "Initialized(uint8)": EventFragment;
    "Upgraded(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AdminChanged"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "BeaconUpgraded"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Initialized"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "Upgraded"): EventFragment;
}

export interface AdminChangedEventObject {
  previousAdmin: string;
  newAdmin: string;
}
export type AdminChangedEvent = TypedEvent<
  [string, string],
  AdminChangedEventObject
>;

export type AdminChangedEventFilter = TypedEventFilter<AdminChangedEvent>;

export interface BeaconUpgradedEventObject {
  beacon: string;
}
export type BeaconUpgradedEvent = TypedEvent<
  [string],
  BeaconUpgradedEventObject
>;

export type BeaconUpgradedEventFilter = TypedEventFilter<BeaconUpgradedEvent>;

export interface InitializedEventObject {
  version: number;
}
export type InitializedEvent = TypedEvent<[number], InitializedEventObject>;

export type InitializedEventFilter = TypedEventFilter<InitializedEvent>;

export interface UpgradedEventObject {
  implementation: string;
}
export type UpgradedEvent = TypedEvent<[string], UpgradedEventObject>;

export type UpgradedEventFilter = TypedEventFilter<UpgradedEvent>;

export interface PremiumEngine extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: PremiumEngineInterface;

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
    BASE_RATE(overrides?: CallOverrides): Promise<[BigNumber]>;

    EXCESS_UTILIZATION_RATE(overrides?: CallOverrides): Promise<[BigNumber]>;

    OPTIMAL_UTILIZATION_RATE(overrides?: CallOverrides): Promise<[BigNumber]>;

    RATE_SLOPE_1(overrides?: CallOverrides): Promise<[BigNumber]>;

    RATE_SLOPE_2(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPremium(
      amount: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { premium: BigNumber }>;

    getPremiumRate(
      amount: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber] & { premiumRate: BigNumber }>;

    initialize(
      accessController_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<[string]>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  BASE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

  EXCESS_UTILIZATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

  OPTIMAL_UTILIZATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

  RATE_SLOPE_1(overrides?: CallOverrides): Promise<BigNumber>;

  RATE_SLOPE_2(overrides?: CallOverrides): Promise<BigNumber>;

  getPremium(
    amount: PromiseOrValue<BigNumberish>,
    duration: PromiseOrValue<BigNumberish>,
    totalLiquidity: PromiseOrValue<BigNumberish>,
    lockedAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPremiumRate(
    amount: PromiseOrValue<BigNumberish>,
    totalLiquidity: PromiseOrValue<BigNumberish>,
    lockedAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    accessController_: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  proxiableUUID(overrides?: CallOverrides): Promise<string>;

  upgradeTo(
    newImplementation: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  upgradeToAndCall(
    newImplementation: PromiseOrValue<string>,
    data: PromiseOrValue<BytesLike>,
    overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    BASE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    EXCESS_UTILIZATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    OPTIMAL_UTILIZATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    RATE_SLOPE_1(overrides?: CallOverrides): Promise<BigNumber>;

    RATE_SLOPE_2(overrides?: CallOverrides): Promise<BigNumber>;

    getPremium(
      amount: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPremiumRate(
      amount: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      accessController_: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    proxiableUUID(overrides?: CallOverrides): Promise<string>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AdminChanged(address,address)"(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;
    AdminChanged(
      previousAdmin?: null,
      newAdmin?: null
    ): AdminChangedEventFilter;

    "BeaconUpgraded(address)"(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;
    BeaconUpgraded(
      beacon?: PromiseOrValue<string> | null
    ): BeaconUpgradedEventFilter;

    "Initialized(uint8)"(version?: null): InitializedEventFilter;
    Initialized(version?: null): InitializedEventFilter;

    "Upgraded(address)"(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
    Upgraded(
      implementation?: PromiseOrValue<string> | null
    ): UpgradedEventFilter;
  };

  estimateGas: {
    BASE_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    EXCESS_UTILIZATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    OPTIMAL_UTILIZATION_RATE(overrides?: CallOverrides): Promise<BigNumber>;

    RATE_SLOPE_1(overrides?: CallOverrides): Promise<BigNumber>;

    RATE_SLOPE_2(overrides?: CallOverrides): Promise<BigNumber>;

    getPremium(
      amount: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPremiumRate(
      amount: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      accessController_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    proxiableUUID(overrides?: CallOverrides): Promise<BigNumber>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    BASE_RATE(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    EXCESS_UTILIZATION_RATE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    OPTIMAL_UTILIZATION_RATE(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    RATE_SLOPE_1(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    RATE_SLOPE_2(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getPremium(
      amount: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPremiumRate(
      amount: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      accessController_: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    proxiableUUID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    upgradeTo(
      newImplementation: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    upgradeToAndCall(
      newImplementation: PromiseOrValue<string>,
      data: PromiseOrValue<BytesLike>,
      overrides?: PayableOverrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
