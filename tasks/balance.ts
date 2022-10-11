import { BigNumber, utils } from "ethers";
import { task } from "hardhat/config";
import type { HardhatRuntimeEnvironment, TaskArguments } from "hardhat/types";

task("balance", "Prints an account's balance")
  .addParam("account", "The account's address")
  .setAction(async (taskArgs: TaskArguments, hre: HardhatRuntimeEnvironment): Promise<void> => {
    const account: string = utils.getAddress(taskArgs.account);
    const balance: BigNumber = await hre.ethers.provider.getBalance(account);

    console.log(`${utils.formatEther(balance)} CKB`);
  });
