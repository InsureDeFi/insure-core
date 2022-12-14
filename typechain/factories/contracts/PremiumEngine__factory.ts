/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type {
  PremiumEngine,
  PremiumEngineInterface,
} from "../../contracts/PremiumEngine";

const _abi = [
  {
    inputs: [],
    name: "PremiumEngine__InsufficientCapacity",
    type: "error",
  },
  {
    inputs: [],
    name: "A",
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
    inputs: [],
    name: "K",
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
    inputs: [],
    name: "PREMIUM_ENGINE_REVISION",
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
        name: "coverAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "duration",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockedAmount",
        type: "uint256",
      },
    ],
    name: "getPremium",
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
    inputs: [
      {
        internalType: "uint256",
        name: "coverAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalLiquidity",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lockedAmount",
        type: "uint256",
      },
    ],
    name: "getPremiumRate",
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
  "0x608060405234801561001057600080fd5b50610758806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c8063a932492f11610050578063a932492f146100a4578063b1df9586146100b0578063f446c1d0146100b857600080fd5b80630ac8f5351461006c57806338c7bf7d14610091575b600080fd5b61007f61007a3660046105bf565b6100c0565b60405190815260200160405180910390f35b61007f61009f3660046105eb565b610257565b61007f6406fc23ac0081565b61007f600181565b61007f6102e9565b6000826100cd838661064c565b1115610105576040517f9088714600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8361011257506000610250565b8261011f57506000610250565b6406fc23ac00620f4240600080868684028161013d5761013d610664565b04830391508683898801028161015557610155610664565b048303905060006101996101688561030c565b61019062124f80610181620f42406406fc23ac00610693565b61018b91906106d0565b61030c565b600f0b9061032a565b905060006101a68461030c565b9050600084866101d2896101c96101c1600f88900b896103ad565b600f0b610401565b600f0b9061043b565b6101dc9190610693565b6101e6919061064c565b90506101f18461030c565b91506000848761020c8a6101c96101c1600f89900b8a6103ad565b6102169190610693565b610220919061064c565b9050600061022e828461070b565b90508786880302818161024357610243610664565b0499505050505050505050505b9392505050565b600082610264838761064c565b111561029c576040517f9088714600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b846102a9575060006102e1565b826102b6575060006102e1565b836102c3575060006102e1565b60006102d08685856100c0565b651cae8c13e0009087028602049150505b949350505050565b62124f806102ff620f42406406fc23ac00610693565b61030991906106d0565b81565b6000677fffffffffffffff82111561032357600080fd5b5060401b90565b600081600f0b6000141561033d57600080fd5b600082600f0b604085600f0b901b8161035857610358610664565b0590507fffffffffffffffffffffffffffffffff80000000000000000000000000000000811280159061039b57506f7fffffffffffffffffffffffffffffff8113155b6103a457600080fd5b90505b92915050565b6000600f83810b9083900b017fffffffffffffffffffffffffffffffff80000000000000000000000000000000811280159061039b57506f7fffffffffffffffffffffffffffffff8113156103a457600080fd5b60008082600f0b1361041257600080fd5b608061041d836104bd565b600f0b6fb17217f7d1cf79abc9e3b39803f2f6af02901c9050919050565b60008161044a575060006103a7565b600083600f0b121561045b57600080fd5b600f83900b6fffffffffffffffffffffffffffffffff8316810260401c90608084901c0277ffffffffffffffffffffffffffffffffffffffffffffffff8111156104a457600080fd5b60401b81198111156104b557600080fd5b019392505050565b60008082600f0b136104ce57600080fd5b6000600f83900b6801000000000000000081126104ed576040918201911d5b6401000000008112610501576020918201911d5b620100008112610513576010918201911d5b6101008112610524576008918201911d5b60108112610534576004918201911d5b60048112610544576002918201911d5b60028112610553576001820191505b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc0820160401b600f85900b607f8490031b6780000000000000005b60008113156105b45790800260ff81901c8281029390930192607f011c9060011d61058e565b509095945050505050565b6000806000606084860312156105d457600080fd5b505081359360208301359350604090920135919050565b6000806000806080858703121561060157600080fd5b5050823594602084013594506040840135936060013592509050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000821982111561065f5761065f61061d565b500190565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff04831182151516156106cb576106cb61061d565b500290565b600082610706577f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b500490565b60008282101561071d5761071d61061d565b50039056fea26469706673582212201f3ac4e9b17e87fbcab9edfe69728a64881f4588b4f0830afe689468d85a040064736f6c63430008090033";

type PremiumEngineConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: PremiumEngineConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class PremiumEngine__factory extends ContractFactory {
  constructor(...args: PremiumEngineConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<PremiumEngine> {
    return super.deploy(overrides || {}) as Promise<PremiumEngine>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): PremiumEngine {
    return super.attach(address) as PremiumEngine;
  }
  override connect(signer: Signer): PremiumEngine__factory {
    return super.connect(signer) as PremiumEngine__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): PremiumEngineInterface {
    return new utils.Interface(_abi) as PremiumEngineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): PremiumEngine {
    return new Contract(address, _abi, signerOrProvider) as PremiumEngine;
  }
}
