/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../../common";
import type { USDC, USDCInterface } from "../../../contracts/test/USDC";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
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
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
    ],
    name: "claim",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060408051808201825260078152662aa9a221b7b4b760c91b6020808301918252835180850190945260048452635553444360e01b9084015281519192916200005d916003916200017b565b508051620000739060049060208401906200017b565b5050506200008d3364174876e8006200009360201b60201c565b62000285565b6001600160a01b038216620000ee5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f206164647265737300604482015260640160405180910390fd5b806002600082825462000102919062000221565b90915550506001600160a01b038216600090815260208190526040812080548392906200013190849062000221565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b828054620001899062000248565b90600052602060002090601f016020900481019282620001ad5760008555620001f8565b82601f10620001c857805160ff1916838001178555620001f8565b82800160010185558215620001f8579182015b82811115620001f8578251825591602001919060010190620001db565b50620002069291506200020a565b5090565b5b808211156200020657600081556001016200020b565b600082198211156200024357634e487b7160e01b600052601160045260246000fd5b500190565b600181811c908216806200025d57607f821691505b602082108114156200027f57634e487b7160e01b600052602260045260246000fd5b50919050565b610ce880620002956000396000f3fe608060405234801561001057600080fd5b50600436106100df5760003560e01c8063395093511161008c57806395d89b411161006657806395d89b41146101ca578063a457c2d7146101d2578063a9059cbb146101e5578063dd62ed3e146101f857600080fd5b8063395093511461016e57806340c10f191461018157806370a082311461019457600080fd5b80631e83409a116100bd5780631e83409a1461013757806323b872dd1461014c578063313ce5671461015f57600080fd5b806306fdde03146100e4578063095ea7b31461010257806318160ddd14610125575b600080fd5b6100ec61023e565b6040516100f99190610ac8565b60405180910390f35b610115610110366004610b64565b6102d0565b60405190151581526020016100f9565b6002545b6040519081526020016100f9565b61014a610145366004610b8e565b6102e8565b005b61011561015a366004610bb0565b6102fa565b604051600681526020016100f9565b61011561017c366004610b64565b61031e565b61014a61018f366004610b64565b61036a565b6101296101a2366004610b8e565b73ffffffffffffffffffffffffffffffffffffffff1660009081526020819052604090205490565b6100ec610378565b6101156101e0366004610b64565b610387565b6101156101f3366004610b64565b61045d565b610129610206366004610bec565b73ffffffffffffffffffffffffffffffffffffffff918216600090815260016020908152604080832093909416825291909152205490565b60606003805461024d90610c1f565b80601f016020809104026020016040519081016040528092919081815260200182805461027990610c1f565b80156102c65780601f1061029b576101008083540402835291602001916102c6565b820191906000526020600020905b8154815290600101906020018083116102a957829003601f168201915b5050505050905090565b6000336102de81858561046b565b5060019392505050565b6102f7816402540be40061061e565b50565b60003361030885828561073e565b610313858585610815565b506001949350505050565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff871684529091528120549091906102de9082908690610365908790610c73565b61046b565b610374828261061e565b5050565b60606004805461024d90610c1f565b33600081815260016020908152604080832073ffffffffffffffffffffffffffffffffffffffff8716845290915281205490919083811015610450576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f7760448201527f207a65726f00000000000000000000000000000000000000000000000000000060648201526084015b60405180910390fd5b610313828686840361046b565b6000336102de818585610815565b73ffffffffffffffffffffffffffffffffffffffff831661050d576040517f08c379a0000000000000000000000000000000000000000000000000000000008152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f2061646460448201527f72657373000000000000000000000000000000000000000000000000000000006064820152608401610447565b73ffffffffffffffffffffffffffffffffffffffff82166105b0576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f20616464726560448201527f73730000000000000000000000000000000000000000000000000000000000006064820152608401610447565b73ffffffffffffffffffffffffffffffffffffffff83811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b73ffffffffffffffffffffffffffffffffffffffff821661069b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610447565b80600260008282546106ad9190610c73565b909155505073ffffffffffffffffffffffffffffffffffffffff8216600090815260208190526040812080548392906106e7908490610c73565b909155505060405181815273ffffffffffffffffffffffffffffffffffffffff8316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b73ffffffffffffffffffffffffffffffffffffffff8381166000908152600160209081526040808320938616835292905220547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff811461080f5781811015610802576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601d60248201527f45524332303a20696e73756666696369656e7420616c6c6f77616e63650000006044820152606401610447565b61080f848484840361046b565b50505050565b73ffffffffffffffffffffffffffffffffffffffff83166108b8576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f20616460448201527f64726573730000000000000000000000000000000000000000000000000000006064820152608401610447565b73ffffffffffffffffffffffffffffffffffffffff821661095b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201527f65737300000000000000000000000000000000000000000000000000000000006064820152608401610447565b73ffffffffffffffffffffffffffffffffffffffff831660009081526020819052604090205481811015610a11576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e742065786365656473206260448201527f616c616e636500000000000000000000000000000000000000000000000000006064820152608401610447565b73ffffffffffffffffffffffffffffffffffffffff808516600090815260208190526040808220858503905591851681529081208054849290610a55908490610c73565b925050819055508273ffffffffffffffffffffffffffffffffffffffff168473ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef84604051610abb91815260200190565b60405180910390a361080f565b600060208083528351808285015260005b81811015610af557858101830151858201604001528201610ad9565b81811115610b07576000604083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe016929092016040019392505050565b803573ffffffffffffffffffffffffffffffffffffffff81168114610b5f57600080fd5b919050565b60008060408385031215610b7757600080fd5b610b8083610b3b565b946020939093013593505050565b600060208284031215610ba057600080fd5b610ba982610b3b565b9392505050565b600080600060608486031215610bc557600080fd5b610bce84610b3b565b9250610bdc60208501610b3b565b9150604084013590509250925092565b60008060408385031215610bff57600080fd5b610c0883610b3b565b9150610c1660208401610b3b565b90509250929050565b600181811c90821680610c3357607f821691505b60208210811415610c6d577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b60008219821115610cad577f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b50019056fea2646970667358221220b920458781b5eb6aa3313d566d56b7b3eec501374dd2065de1ec18a7a014ed7964736f6c63430008090033";

type USDCConstructorParams = [signer?: Signer] | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: USDCConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class USDC__factory extends ContractFactory {
  constructor(...args: USDCConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(overrides?: Overrides & { from?: PromiseOrValue<string> }): Promise<USDC> {
    return super.deploy(overrides || {}) as Promise<USDC>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): USDC {
    return super.attach(address) as USDC;
  }
  override connect(signer: Signer): USDC__factory {
    return super.connect(signer) as USDC__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): USDCInterface {
    return new utils.Interface(_abi) as USDCInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): USDC {
    return new Contract(address, _abi, signerOrProvider) as USDC;
  }
}
