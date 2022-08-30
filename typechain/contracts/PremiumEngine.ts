/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import type { FunctionFragment, Result } from "@ethersproject/abi";
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
    "A()": FunctionFragment;
    "K()": FunctionFragment;
    "PREMIUM_ENGINE_REVISION()": FunctionFragment;
    "getPremium(uint256,uint256,uint256,uint256)": FunctionFragment;
    "getPremiumRate(uint256,uint256,uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "A"
      | "K"
      | "PREMIUM_ENGINE_REVISION"
      | "getPremium"
      | "getPremiumRate"
  ): FunctionFragment;

  encodeFunctionData(functionFragment: "A", values?: undefined): string;
  encodeFunctionData(functionFragment: "K", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "PREMIUM_ENGINE_REVISION",
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

  decodeFunctionResult(functionFragment: "A", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "K", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "PREMIUM_ENGINE_REVISION",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getPremium", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "getPremiumRate",
    data: BytesLike
  ): Result;

  events: {};
}

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
    A(overrides?: CallOverrides): Promise<[BigNumber]>;

    K(overrides?: CallOverrides): Promise<[BigNumber]>;

    PREMIUM_ENGINE_REVISION(overrides?: CallOverrides): Promise<[BigNumber]>;

    getPremium(
      coverAmount: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    getPremiumRate(
      coverAmount: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;
  };

  A(overrides?: CallOverrides): Promise<BigNumber>;

  K(overrides?: CallOverrides): Promise<BigNumber>;

  PREMIUM_ENGINE_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

  getPremium(
    coverAmount: PromiseOrValue<BigNumberish>,
    duration: PromiseOrValue<BigNumberish>,
    totalLiquidity: PromiseOrValue<BigNumberish>,
    lockedAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  getPremiumRate(
    coverAmount: PromiseOrValue<BigNumberish>,
    totalLiquidity: PromiseOrValue<BigNumberish>,
    lockedAmount: PromiseOrValue<BigNumberish>,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  callStatic: {
    A(overrides?: CallOverrides): Promise<BigNumber>;

    K(overrides?: CallOverrides): Promise<BigNumber>;

    PREMIUM_ENGINE_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    getPremium(
      coverAmount: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPremiumRate(
      coverAmount: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  filters: {};

  estimateGas: {
    A(overrides?: CallOverrides): Promise<BigNumber>;

    K(overrides?: CallOverrides): Promise<BigNumber>;

    PREMIUM_ENGINE_REVISION(overrides?: CallOverrides): Promise<BigNumber>;

    getPremium(
      coverAmount: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getPremiumRate(
      coverAmount: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    A(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    K(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    PREMIUM_ENGINE_REVISION(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPremium(
      coverAmount: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getPremiumRate(
      coverAmount: PromiseOrValue<BigNumberish>,
      totalLiquidity: PromiseOrValue<BigNumberish>,
      lockedAmount: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
