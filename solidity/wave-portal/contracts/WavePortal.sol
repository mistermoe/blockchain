// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract WavePortal {
    // state variable permenantly stored in contract storage
    // initialized to 0. Read more about contract storage in NOTES.md
    uint256 totalWaves;

    // events can be emitted by smart contracts. Frontends can watch or "listen"
    // for these emitted events. Events are stored as logs. They are not considered
    // contract storage. Read me about events in NOTES.md
    event WaveEvent(address indexed from, uint256 timestamp, string message);

    //! TODO: figure out if padding applies to Solidity structs
    struct Wave {
        address waver;
        uint256 timestamp;
        string message;
    }

    Wave[] waves;

    constructor() {
        console.log("Yo mang, I am a mf'ing contract and i'm SMAHT");
    }
    
    function wave(string memory _message) public {
        totalWaves += 1;
        // `msg` is apparently provided to the contract whenever it is interacted
        // with. `msg.sender` is the wallet address of whoever called your function
        console.log("%s waved!", msg.sender);

        //! TODO: read about `block` and `msg` (Moe - 10/03/2021)
        waves.push(Wave(msg.sender, block.timestamp, _message));

        emit WaveEvent(msg.sender, block.timestamp, _message);
    }

    function getAllWaves() public view returns(Wave[] memory) {
        return waves;
    }

    function getTotalWaves() view public returns (uint) {
        console.log("We have %d total waves", totalWaves);
        return totalWaves;
    }
}