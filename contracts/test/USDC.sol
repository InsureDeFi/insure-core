// SPDX-License-Identifier: AGPL-3.0-only
pragma solidity 0.8.17;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract USDC is ERC20 {
  constructor() ERC20("USDCoin", "USDC") {
    _mint(msg.sender, 100000 * 1e6);
  }

  function mint(address to, uint256 amount) external {
    _mint(to, amount);
  }

  function claim(address to) external {
    _mint(to, 10000 * 1e6);
  }

  function decimals() public view virtual override returns (uint8) {
    return 6;
  }
}
