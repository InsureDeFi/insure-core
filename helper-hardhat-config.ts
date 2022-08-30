type NetworkConfigItem = {
  name: string;
  priceFeed?: string;
};

type NetworkConfigMap = {
  [chainId: string]: NetworkConfigItem;
};

export const networkConfig: NetworkConfigMap = {
  default: {
    name: "hardhat",
  },
  31337: {
    name: "localhost",
  },
  71401: {
    name: "godwoken testnet",
    priceFeed: "0x0c2362c9A0586Dd7295549C65a4A5e3aFE10a88A",
  },
};

export const developmentChains: string[] = ["hardhat", "localhost"];
export const VERIFICATION_BLOCK_CONFIRMATIONS = 2;
