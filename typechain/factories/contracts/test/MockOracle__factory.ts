/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type {
  MockOracle,
  MockOracleInterface,
} from "../../../contracts/test/MockOracle";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_base",
        type: "string",
      },
      {
        internalType: "string",
        name: "_quote",
        type: "string",
      },
    ],
    name: "getReferenceData",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedBase",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedQuote",
            type: "uint256",
          },
        ],
        internalType: "struct IStdReference.ReferenceData",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string[]",
        name: "_bases",
        type: "string[]",
      },
      {
        internalType: "string[]",
        name: "_quotes",
        type: "string[]",
      },
    ],
    name: "getReferenceDataBulk",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "rate",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedBase",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "lastUpdatedQuote",
            type: "uint256",
          },
        ],
        internalType: "struct IStdReference.ReferenceData[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604080516060808201835269080bfbefcb5f0bc00000825242602080840182815284860183815286516242544360e81b815260006003808301829052895160239381900384018120621554d160ea1b808352828401919091528b5191829003850182209a518b5595516001808c0191909155945160029a8b01559788018a52686c6b935b8bbd4000008852948701868152878a0196875289516208aa8960eb1b81528087018390528a5190819003840181209581529586019490945297519384900301909220935184555190830155519101556106b99081906100f490396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806365555bcc1461003b578063e42a071b14610064575b600080fd5b61004e6100493660046103d9565b610084565b60405161005b919061043d565b60405180910390f35b6100776100723660046104fd565b61010d565b60405161005b9190610557565b6100a860405180606001604052806000815260200160008152602001600081525090565b6000836040516100b891906105b9565b9081526020016040518091039020826040516100d491906105b9565b90815260408051918290036020908101832060608401835280548452600181015491840191909152600201549082015290505b92915050565b6060815183511461017e576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f4241445f494e5055545f4c454e47544800000000000000000000000000000000604482015260640160405180910390fd5b825160008167ffffffffffffffff81111561019b5761019b6102cd565b6040519080825280602002602001820160405280156101f057816020015b6101dd60405180606001604052806000815260200160008152602001600081525090565b8152602001906001900390816101b95790505b50905060005b85518110156102c4576000868281518110610213576102136105f4565b602002602001015160405161022891906105b9565b9081526020016040518091039020858281518110610248576102486105f4565b602002602001015160405161025d91906105b9565b908152602001604051809103902060405180606001604052908160008201548152602001600182015481526020016002820154815250508282815181106102a6576102a66105f4565b602002602001018190525080806102bc90610623565b9150506101f6565b50949350505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b604051601f82017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016810167ffffffffffffffff81118282101715610343576103436102cd565b604052919050565b600082601f83011261035c57600080fd5b813567ffffffffffffffff811115610376576103766102cd565b6103a760207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0601f840116016102fc565b8181528460208386010111156103bc57600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156103ec57600080fd5b823567ffffffffffffffff8082111561040457600080fd5b6104108683870161034b565b9350602085013591508082111561042657600080fd5b506104338582860161034b565b9150509250929050565b81518152602080830151908201526040808301519082015260608101610107565b600082601f83011261046f57600080fd5b8135602067ffffffffffffffff8083111561048c5761048c6102cd565b8260051b61049b8382016102fc565b93845285810183019383810190888611156104b557600080fd5b84880192505b858310156104f1578235848111156104d35760008081fd5b6104e18a87838c010161034b565b83525091840191908401906104bb565b98975050505050505050565b6000806040838503121561051057600080fd5b823567ffffffffffffffff8082111561052857600080fd5b6105348683870161045e565b9350602085013591508082111561054a57600080fd5b506104338582860161045e565b6020808252825182820181905260009190848201906040850190845b818110156105ad5761059a8385518051825260208082015190830152604090810151910152565b9284019260609290920191600101610573565b50909695505050505050565b6000825160005b818110156105da57602081860181015185830152016105c0565b818111156105e9576000828501525b509190910192915050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fd5b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82141561067c577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b506001019056fea2646970667358221220c77c78510a2dcc6812d351ae92d1515393265cda46d7a9e7b245e1ec9e135c6f64736f6c63430008090033";

type MockOracleConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: MockOracleConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class MockOracle__factory extends ContractFactory {
  constructor(...args: MockOracleConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<MockOracle> {
    return super.deploy(overrides || {}) as Promise<MockOracle>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): MockOracle {
    return super.attach(address) as MockOracle;
  }
  override connect(signer: Signer): MockOracle__factory {
    return super.connect(signer) as MockOracle__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): MockOracleInterface {
    return new utils.Interface(_abi) as MockOracleInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MockOracle {
    return new Contract(address, _abi, signerOrProvider) as MockOracle;
  }
}
