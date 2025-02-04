// SPDX-License-Identifier: MIT
pragma solidity >=0.8.0;

/**
 * @title Basic Defi Example
 * @author Edward Z
 * @notice I hope you like this simple tutorial.
 */

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract Dai is ERC20 {
    constructor() ERC20("Dai StableCoin", "DAI") {}

    function faucet(address _recipient, uint _amount) external {
        _mint(_recipient, _amount);
    }
}
