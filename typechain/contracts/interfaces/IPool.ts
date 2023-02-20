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
} from "../../common";

export interface IPoolInterface extends utils.Interface {
  functions: {
    "claim(uint256)": FunctionFragment;
    "claimBatch(uint256[])": FunctionFragment;
    "initialize(address,address,address,address,address)": FunctionFragment;
    "insure(string,uint256,uint256,address,address)": FunctionFragment;
    "unlock(uint256)": FunctionFragment;
  };

  getFunction(
    nameOrSignatureOrTopic:
      | "claim"
      | "claimBatch"
      | "initialize"
      | "insure"
      | "unlock"
  ): FunctionFragment;

  encodeFunctionData(
    functionFragment: "claim",
    values: [PromiseOrValue<BigNumberish>]
  ): string;
  encodeFunctionData(
    functionFragment: "claimBatch",
    values: [PromiseOrValue<BigNumberish>[]]
  ): string;
  encodeFunctionData(
    functionFragment: "initialize",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "insure",
    values: [
      PromiseOrValue<string>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<BigNumberish>,
      PromiseOrValue<string>,
      PromiseOrValue<string>
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "unlock",
    values: [PromiseOrValue<BigNumberish>]
  ): string;

  decodeFunctionResult(functionFragment: "claim", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "claimBatch", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "insure", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "unlock", data: BytesLike): Result;

  events: {
    "Insured(address,address,uint256,string,uint256,uint256,uint256,uint256,uint256,uint256)": EventFragment;
    "PolicyPaid(uint256)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "Insured"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "PolicyPaid"): EventFragment;
}

export interface InsuredEventObject {
  insured: string;
  agent: string;
  policyId: BigNumber;
  asset: string;
  payout: BigNumber;
  premium: BigNumber;
  fee: BigNumber;
  reward: BigNumber;
  endTime: BigNumber;
  threshold: BigNumber;
}
export type InsuredEvent = TypedEvent<
  [
    string,
    string,
    BigNumber,
    string,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber,
    BigNumber
  ],
  InsuredEventObject
>;

export type InsuredEventFilter = TypedEventFilter<InsuredEvent>;

export interface PolicyPaidEventObject {
  policyId: BigNumber;
}
export type PolicyPaidEvent = TypedEvent<[BigNumber], PolicyPaidEventObject>;

export type PolicyPaidEventFilter = TypedEventFilter<PolicyPaidEvent>;

export interface IPool extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: IPoolInterface;

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
    claim(
      policyId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    claimBatch(
      policyIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    initialize(
      accessController_: PromiseOrValue<string>,
      _usdc: PromiseOrValue<string>,
      _core: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _premiumEngine: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    insure(
      assetSymbol: PromiseOrValue<string>,
      payout: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      agent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;

    unlock(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<ContractTransaction>;
  };

  claim(
    policyId: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  claimBatch(
    policyIds: PromiseOrValue<BigNumberish>[],
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  initialize(
    accessController_: PromiseOrValue<string>,
    _usdc: PromiseOrValue<string>,
    _core: PromiseOrValue<string>,
    _oracle: PromiseOrValue<string>,
    _premiumEngine: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  insure(
    assetSymbol: PromiseOrValue<string>,
    payout: PromiseOrValue<BigNumberish>,
    duration: PromiseOrValue<BigNumberish>,
    receiver: PromiseOrValue<string>,
    agent: PromiseOrValue<string>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  unlock(
    timestamp: PromiseOrValue<BigNumberish>,
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    claim(
      policyId: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;

    claimBatch(
      policyIds: PromiseOrValue<BigNumberish>[],
      overrides?: CallOverrides
    ): Promise<void>;

    initialize(
      accessController_: PromiseOrValue<string>,
      _usdc: PromiseOrValue<string>,
      _core: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _premiumEngine: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<void>;

    insure(
      assetSymbol: PromiseOrValue<string>,
      payout: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      agent: PromiseOrValue<string>,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    unlock(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "Insured(address,address,uint256,string,uint256,uint256,uint256,uint256,uint256,uint256)"(
      insured?: PromiseOrValue<string> | null,
      agent?: null,
      policyId?: null,
      asset?: null,
      payout?: null,
      premium?: null,
      fee?: null,
      reward?: null,
      endTime?: null,
      threshold?: null
    ): InsuredEventFilter;
    Insured(
      insured?: PromiseOrValue<string> | null,
      agent?: null,
      policyId?: null,
      asset?: null,
      payout?: null,
      premium?: null,
      fee?: null,
      reward?: null,
      endTime?: null,
      threshold?: null
    ): InsuredEventFilter;

    "PolicyPaid(uint256)"(
      policyId?: PromiseOrValue<BigNumberish> | null
    ): PolicyPaidEventFilter;
    PolicyPaid(
      policyId?: PromiseOrValue<BigNumberish> | null
    ): PolicyPaidEventFilter;
  };

  estimateGas: {
    claim(
      policyId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    claimBatch(
      policyIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    initialize(
      accessController_: PromiseOrValue<string>,
      _usdc: PromiseOrValue<string>,
      _core: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _premiumEngine: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    insure(
      assetSymbol: PromiseOrValue<string>,
      payout: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      agent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;

    unlock(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    claim(
      policyId: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    claimBatch(
      policyIds: PromiseOrValue<BigNumberish>[],
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    initialize(
      accessController_: PromiseOrValue<string>,
      _usdc: PromiseOrValue<string>,
      _core: PromiseOrValue<string>,
      _oracle: PromiseOrValue<string>,
      _premiumEngine: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    insure(
      assetSymbol: PromiseOrValue<string>,
      payout: PromiseOrValue<BigNumberish>,
      duration: PromiseOrValue<BigNumberish>,
      receiver: PromiseOrValue<string>,
      agent: PromiseOrValue<string>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;

    unlock(
      timestamp: PromiseOrValue<BigNumberish>,
      overrides?: Overrides & { from?: PromiseOrValue<string> }
    ): Promise<PopulatedTransaction>;
  };
}
