/* eslint-disable no-process-exit */
// yarn hardhat node
// yarn hardhat run scripts/readPrice.ts --network localhost
import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { PriceOracle } from "../typechain";

async function readPrice(): Promise<void> {
  const priceOracle: PriceOracle = await ethers.getContract("PriceOracle");
  const price: BigNumber = await priceOracle.getPrice("CKB");
  console.log(price.toString());
}

readPrice()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
