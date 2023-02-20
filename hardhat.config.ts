import * as dotenv from "dotenv";

import type { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-etherscan";
import "@typechain/hardhat";
import "hardhat-deploy";
import "solidity-coverage";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";
import "@primitivefi/hardhat-dodoc";
import "./tasks";

dotenv.config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: { chainId: 31337 },
    localhost: { chainId: 31337 },
    "godwoken-testnet": {
      url: "https://godwoken-testnet-v1.ckbapp.dev",
      accounts: PRIVATE_KEY ? [PRIVATE_KEY] : [],
      saveDeployments: true,
      chainId: 71401,
    },
  },
  gasReporter: {
    enabled: !!process.env.REPORT_GAS,
    currency: "USD",
    outputFile: "gas-report.txt",
  },
  contractSizer: {
    runOnCompile: false,
  },
  dodoc: {
    runOnCompile: true,
    include: ["contracts/"],
    exclude: ["contracts/test"],
    keepFileStructure: true,
    freshOutput: true,
  },
  namedAccounts: {
    deployer: 0,
    feeCollector: 1,
    user: 2,
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000000,
      },
    },
  },
  mocha: {
    timeout: 200000, // 200 seconds max for running tests
  },
  typechain: {
    outDir: "typechain",
    target: "ethers-v5",
  },
};

export default config;
