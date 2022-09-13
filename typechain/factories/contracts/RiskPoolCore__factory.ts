/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import type { PromiseOrValue } from "../../common";
import type { RiskPoolCore, RiskPoolCoreInterface } from "../../contracts/RiskPoolCore";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "RiskPoolCore__AssetAlreadyInitialized",
    type: "error",
  },
  {
    inputs: [],
    name: "RiskPoolCore__NotPoolManager",
    type: "error",
  },
  {
    inputs: [],
    name: "RiskPoolCore__UnlockBeforeExpiry",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint256",
        name: "assetId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "asset",
        type: "string",
      },
    ],
    name: "AssetInitialized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint8",
        name: "version",
        type: "uint8",
      },
    ],
    name: "Initialized",
    type: "event",
  },
  {
    inputs: [],
    name: "CORE_REVISION",
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
    name: "addressesProvider",
    outputs: [
      {
        internalType: "contract AddressesProvider",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "assetIds",
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
        name: "",
        type: "uint256",
      },
    ],
    name: "expiredPolicyFunds",
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
    name: "getAssets",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "policyId",
        type: "uint256",
      },
    ],
    name: "getPolicy",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "premium",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "payOutAmount",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "assetValue",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "endTime",
            type: "uint256",
          },
          {
            internalType: "address",
            name: "insured",
            type: "address",
          },
          {
            internalType: "uint8",
            name: "threshold",
            type: "uint8",
          },
          {
            internalType: "bool",
            name: "utilized",
            type: "bool",
          },
          {
            internalType: "string",
            name: "asset",
            type: "string",
          },
        ],
        internalType: "struct CoreLibrary.Policy",
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
        internalType: "string",
        name: "assetSymbol",
        type: "string",
      },
    ],
    name: "initAsset",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "contract AddressesProvider",
        name: "_addressesProvider",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "isActive",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "isFreezed",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lockedAssets",
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
    name: "policyCount",
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
        name: "policyId",
        type: "uint256",
      },
    ],
    name: "updateStateOnApplyCover",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "assetSymbol",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "endTime",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "premium",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "payOutAmount",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentAssetPrice",
        type: "uint256",
      },
      {
        internalType: "uint8",
        name: "payOutThreshold",
        type: "uint8",
      },
      {
        internalType: "address",
        name: "reciever",
        type: "address",
      },
    ],
    name: "updateStateOnPolicy",
    outputs: [
      {
        internalType: "uint256",
        name: "policyId",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "updateStateOnUnlock",
    outputs: [
      {
        internalType: "uint256",
        name: "unlocksAt",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "unlockAmount",
        type: "uint256",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061001961001e565b6100de565b600054610100900460ff161561008a5760405162461bcd60e51b815260206004820152602760248201527f496e697469616c697a61626c653a20636f6e747261637420697320696e697469604482015266616c697a696e6760c81b606482015260840160405180910390fd5b60005460ff90811610156100dc576000805460ff191660ff9081179091556040519081527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b565b611b5b806100ed6000396000f3fe608060405234801561001057600080fd5b50600436106100f55760003560e01c806367e4ac2c11610097578063c4d66de811610066578063c4d66de81461021d578063c72c4d1014610230578063cf3fb2d51461027b578063de54d4291461028e57600080fd5b806367e4ac2c146101ae57806389995859146101c357806390c1a782146101eb578063b9469e1a1461020b57600080fd5b8063274fc72a116100d3578063274fc72a146101455780632b07fce31461014e5780634141f9e91461016e5780634889ca901461018357600080fd5b80630c7de4e9146100fa57806317de3e3a1461011557806322f3e2d414610128575b600080fd5b610102600181565b6040519081526020015b60405180910390f35b610102610123366004611450565b610297565b6003546101359060ff1681565b604051901515815260200161010c565b61010260015481565b61016161015c3660046114e1565b610557565b60405161010c9190611565565b61018161017c3660046114e1565b610711565b005b610102610191366004611600565b805160208183018101805160058252928201919093012091525481565b6101b66108a6565b60405161010c9190611635565b6101d66101d13660046114e1565b61097f565b6040805192835260208301919091520161010c565b6101026101f93660046114e1565b60076020526000908152604090205481565b60035461013590610100900460ff1681565b61018161022b3660046116b5565b610af1565b6000546102569062010000900473ffffffffffffffffffffffffffffffffffffffff1681565b60405173ffffffffffffffffffffffffffffffffffffffff909116815260200161010c565b6101816102893660046116d9565b610cf0565b61010260025481565b60008060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663073bf33d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561030057600080fd5b505afa158015610314573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610338919061174b565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461039c576040517f9df7bcda00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b84600160008282546103ae9190611797565b9091555050600280549060006103c3836117af565b9190505590506040518061012001604052808281526020018781526020018681526020018581526020018881526020018373ffffffffffffffffffffffffffffffffffffffff1681526020018460ff1681526020016000151581526020018981525060066000838152602001908152602001600020600082015181600001556020820151816001015560408201518160020155606082015181600301556080820151816004015560a08201518160050160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060c08201518160050160146101000a81548160ff021916908360ff16021790555060e08201518160050160156101000a81548160ff02191690831515021790555061010082015181600601908051906020019061050f929190611226565b509050506000610520886001610ef5565b9050856007600083815260200190815260200160002060008282546105459190611797565b90915550919998505050505050505050565b6105c16040518061012001604052806000815260200160008152602001600081526020016000815260200160008152602001600073ffffffffffffffffffffffffffffffffffffffff168152602001600060ff168152602001600015158152602001606081525090565b600082815260066020818152604092839020835161012081018552815481526001820154928101929092526002810154938201939093526003830154606082015260048301546080820152600583015473ffffffffffffffffffffffffffffffffffffffff811660a083015260ff740100000000000000000000000000000000000000008204811660c0840152750100000000000000000000000000000000000000000090910416151560e0820152908201805491929161010084019190610688906117e8565b80601f01602080910402602001604051908101604052809291908181526020018280546106b4906117e8565b80156107015780601f106106d657610100808354040283529160200191610701565b820191906000526020600020905b8154815290600101906020018083116106e457829003601f168201915b5050505050815250509050919050565b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663073bf33d6040518163ffffffff1660e01b815260040160206040518083038186803b15801561077957600080fd5b505afa15801561078d573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107b1919061174b565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610815576040517f9df7bcda00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60008181526006602052604081206005810180547fffffffffffffffffffff00ffffffffffffffffffffffffffffffffffffffffff1675010000000000000000000000000000000000000000001790556004810154909190610878906001610ef5565b6002909201805460018054919091039055546000928352600760205260409092208054929092039091555050565b60606004805480602002602001604051908101604052809291908181526020016000905b828210156109765783829060005260206000200180546108e9906117e8565b80601f0160208091040260200160405190810160405280929190818152602001828054610915906117e8565b80156109625780601f1061093757610100808354040283529160200191610962565b820191906000526020600020905b81548152906001019060200180831161094557829003601f168201915b5050505050815260200190600101906108ca565b50505050905090565b600080600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663073bf33d6040518163ffffffff1660e01b815260040160206040518083038186803b1580156109ea57600080fd5b505afa1580156109fe573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610a22919061174b565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610a86576040517f9df7bcda00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b610a91836000610ef5565b915042821115610acd576040517f43b396f700000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b50600081815260076020526040812080546001805482900390559190559092909150565b600054610100900460ff1615808015610b115750600054600160ff909116105b80610b2b5750303b158015610b2b575060005460ff166001145b610bbb576040517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152602e60248201527f496e697469616c697a61626c653a20636f6e747261637420697320616c72656160448201527f647920696e697469616c697a6564000000000000000000000000000000000000606482015260840160405180910390fd5b600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610c1957600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff166101001790555b600080547fffffffffffffffffffff0000000000000000000000000000000000000000ffff166201000073ffffffffffffffffffffffffffffffffffffffff851602179055600380547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff001660011790558015610cec57600080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff00ff169055604051600181527f7f26b83ff96e1f2b6a682f133852f6798a09c465da95921460cefb38474024989060200160405180910390a15b5050565b600060029054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1663f4c5a81e6040518163ffffffff1660e01b815260040160206040518083038186803b158015610d5857600080fd5b505afa158015610d6c573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610d90919061174b565b73ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff1614610df4576040517f9df7bcda00000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60058282604051610e0692919061183c565b908152602001604051809103902054600014610e4e576040517f04aebac000000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b60048054600181018255600091909152610e8b907f8a35acfbc15ff81a39ae7d344fd709f28e8600b4aa8c65c6b64bfe7fe36bd19b0183836112aa565b506004546040518190600590610ea4908690869061183c565b908152602001604051809103902081905550807f9a928c810f8c4b81ed3610b4de5c79be654fd518462512126000619ed07b68898484604051610ee892919061184c565b60405180910390a2505050565b6000806000806000610f0687610f2c565b91945092509050610f218383610f1c8985611797565b610f52565b979650505050505050565b60008080610f45610f4062015180866118c8565b610f75565b9196909550909350915050565b600062015180610f638585856110e9565b610f6d91906118dc565b949350505050565b60008080838162253d8c610f8c8362010bd9611919565b610f969190611919565b9050600062023ab1610fa983600461198d565b610fb39190611a49565b90506004610fc48262023ab161198d565b610fcf906003611919565b610fd99190611a49565b610fe39083611ab1565b9150600062164b09610ff6846001611919565b61100290610fa061198d565b61100c9190611a49565b9050600461101c826105b561198d565b6110269190611a49565b6110309084611ab1565b61103b90601f611919565b9250600061098f61104d85605061198d565b6110579190611a49565b9050600060506110698361098f61198d565b6110739190611a49565b61107d9086611ab1565b905061108a600b83611a49565b945061109785600c61198d565b6110a2836002611919565b6110ac9190611ab1565b915084836110bb603187611ab1565b6110c690606461198d565b6110d09190611919565b6110da9190611919565b9a919950975095505050505050565b60006107b28410156110fa57600080fd5b838383600062253d8c60046064600c611114600e88611ab1565b61111e9190611a49565b61112a88611324611919565b6111349190611919565b61113e9190611a49565b61114990600361198d565b6111539190611a49565b600c80611161600e88611ab1565b61116b9190611a49565b61117690600c61198d565b611181600288611ab1565b61118b9190611ab1565b6111979061016f61198d565b6111a19190611a49565b6004600c6111b0600e89611ab1565b6111ba9190611a49565b6111c6896112c0611919565b6111d09190611919565b6111dc906105b561198d565b6111e69190611a49565b6111f2617d4b87611ab1565b6111fc9190611919565b6112069190611919565b6112109190611ab1565b61121a9190611ab1565b98975050505050505050565b828054611232906117e8565b90600052602060002090601f016020900481019282611254576000855561129a565b82601f1061126d57805160ff191683800117855561129a565b8280016001018555821561129a579182015b8281111561129a57825182559160200191906001019061127f565b506112a692915061133c565b5090565b8280546112b6906117e8565b90600052602060002090601f0160209004810192826112d8576000855561129a565b82601f1061130f578280017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0082351617855561129a565b8280016001018555821561129a579182015b8281111561129a578235825591602001919060010190611321565b5b808211156112a6576000815560010161133d565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600082601f83011261139157600080fd5b813567ffffffffffffffff808211156113ac576113ac611351565b604051601f83017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0908116603f011681019082821181831017156113f2576113f2611351565b8160405283815286602085880101111561140b57600080fd5b836020870160208301376000602085830101528094505050505092915050565b73ffffffffffffffffffffffffffffffffffffffff8116811461144d57600080fd5b50565b600080600080600080600060e0888a03121561146b57600080fd5b873567ffffffffffffffff81111561148257600080fd5b61148e8a828b01611380565b9750506020880135955060408801359450606088013593506080880135925060a088013560ff811681146114c157600080fd5b915060c08801356114d18161142b565b8091505092959891949750929550565b6000602082840312156114f357600080fd5b5035919050565b6000815180845260005b8181101561152057602081850181015186830182015201611504565b81811115611532576000602083870101525b50601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b6020815281516020820152602082015160408201526040820151606082015260608201516080820152608082015160a0820152600060a08301516115c160c084018273ffffffffffffffffffffffffffffffffffffffff169052565b5060c083015160ff811660e08401525060e08301516101006115e68185018315159052565b840151610120848101529050610f6d6101408401826114fa565b60006020828403121561161257600080fd5b813567ffffffffffffffff81111561162957600080fd5b610f6d84828501611380565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156116a8577fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffc08886030184526116968583516114fa565b9450928501929085019060010161165c565b5092979650505050505050565b6000602082840312156116c757600080fd5b81356116d28161142b565b9392505050565b600080602083850312156116ec57600080fd5b823567ffffffffffffffff8082111561170457600080fd5b818501915085601f83011261171857600080fd5b81358181111561172757600080fd5b86602082850101111561173957600080fd5b60209290920196919550909350505050565b60006020828403121561175d57600080fd5b81516116d28161142b565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b600082198211156117aa576117aa611768565b500190565b60007fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8214156117e1576117e1611768565b5060010190565b600181811c908216806117fc57607f821691505b60208210811415611836577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b8183823760009101908152919050565b60208152816020820152818360408301376000818301604090810191909152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601260045260246000fd5b6000826118d7576118d7611899565b500490565b6000817fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff048311821515161561191457611914611768565b500290565b6000808212827f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0384138115161561195357611953611768565b827f800000000000000000000000000000000000000000000000000000000000000003841281161561198757611987611768565b50500190565b60007f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff6000841360008413858304851182821616156119ce576119ce611768565b7f80000000000000000000000000000000000000000000000000000000000000006000871286820588128184161615611a0957611a09611768565b60008712925087820587128484161615611a2557611a25611768565b87850587128184161615611a3b57611a3b611768565b505050929093029392505050565b600082611a5857611a58611899565b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff83147f800000000000000000000000000000000000000000000000000000000000000083141615611aac57611aac611768565b500590565b6000808312837f800000000000000000000000000000000000000000000000000000000000000001831281151615611aeb57611aeb611768565b837f7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff018313811615611b1f57611b1f611768565b5050039056fea264697066735822122068a7e4f8b96ca63ab1d5d4691490c721267720253e980f73e8659cee9f85ddcb64736f6c63430008090033";

type RiskPoolCoreConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: RiskPoolCoreConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class RiskPoolCore__factory extends ContractFactory {
  constructor(...args: RiskPoolCoreConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<RiskPoolCore> {
    return super.deploy(overrides || {}) as Promise<RiskPoolCore>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): RiskPoolCore {
    return super.attach(address) as RiskPoolCore;
  }
  override connect(signer: Signer): RiskPoolCore__factory {
    return super.connect(signer) as RiskPoolCore__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RiskPoolCoreInterface {
    return new utils.Interface(_abi) as RiskPoolCoreInterface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): RiskPoolCore {
    return new Contract(address, _abi, signerOrProvider) as RiskPoolCore;
  }
}
