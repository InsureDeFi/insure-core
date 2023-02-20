/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import type { Provider } from "@ethersproject/providers";
import type {
  IPremiumEngine,
  IPremiumEngineInterface,
} from "../../../contracts/interfaces/IPremiumEngine";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "amount",
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
        name: "premium",
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
        name: "amount",
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
        name: "premiumRate",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

export class IPremiumEngine__factory {
  static readonly abi = _abi;
  static createInterface(): IPremiumEngineInterface {
    return new utils.Interface(_abi) as IPremiumEngineInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): IPremiumEngine {
    return new Contract(address, _abi, signerOrProvider) as IPremiumEngine;
  }
}