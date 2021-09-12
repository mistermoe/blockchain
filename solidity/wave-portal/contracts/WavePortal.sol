// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    // state variable permenantly stored in contract storage
    // initialized to 0
    uint totalWaves;
    
    function wave() public {
        totalWaves += 1;
        // `msg` is apparently provided to the contract whenever it is interacted
        // with. `msg.sender` is the wallet address of whoever called your function
        console.log("%s is waved!", msg.sender);
    }

    function getTotalWaves() view public returns (uint) {
        console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }
    
    constructor() {
        console.log("Yo mang, I am a mf'ing contract and i'm SMAHT");
    }
}