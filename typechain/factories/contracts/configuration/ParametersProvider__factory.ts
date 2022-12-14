/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  ParametersProvider,
  ParametersProviderInterface,
} from "../../../contracts/configuration/ParametersProvider";

const _abi = [
  {
    inputs: [],
    name: "PARAMETERS_PROVIDER_REVISION",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
    ],
    name: "calculateProtocolFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getMinCoverAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getPayOutThreshold",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [],
    name: "getProtocolFee",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506101c7806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80635acfa48e116100505780635acfa48e146100965780639c7c270c146100a0578063a5a41031146100b357600080fd5b80632c09c0ff1461006c5780633a5b3dc214610080575b600080fd5b604051605a81526020015b60405180910390f35b610088600181565b604051908152602001610077565b633b9aca00610088565b6100886100ae3660046100d9565b6100ba565b6005610088565b600060646100c96005846100f2565b6100d39190610156565b92915050565b6000602082840312156100eb57600080fd5b5035919050565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0483118215151615610151577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b500290565b60008261018c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b50049056fea2646970667358221220a07484742b610187684deb055d32e8ac7af724a0ac84d01b8e1db0d2c660fb9b64736f6c63430008090033";

type ParametersProviderConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ParametersProviderConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ParametersProvider__factory extends ContractFactory {
  constructor(...args: ParametersProviderConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<ParametersProvider> {
    return super.deploy(overrides || {}) as Promise<ParametersProvider>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): ParametersProvider {
    return super.attach(address) as ParametersProvider;
  }
  override connect(signer: Signer): ParametersProvider__factory {
    return super.connect(signer) as ParametersProvider__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ParametersProviderInterface {
    return new utils.Interface(_abi) as ParametersProviderInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ParametersProvider {
    return new Contract(address, _abi, signerOrProvider) as ParametersProvider;
  }
}
