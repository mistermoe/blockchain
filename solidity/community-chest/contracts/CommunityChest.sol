//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract CommunityChest {
    function withdraw() public {
        payable(msg.sender).transfer(address(this).balance);
    }

    function deposit(uint256 amount) public payable {
        console.log(msg.value);
        console.log(amount);
        require(msg.value == amount);
        // nothing else to do!
    }

    function getBalance() public view returns (uint256) {
        return address(this).balance;
    }
}
