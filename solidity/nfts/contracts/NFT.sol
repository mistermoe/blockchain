// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "hardhat/console.sol";

contract NFT is ERC721URIStorage {
    using Counters for Counters.Counter;

    // initialized to 0
    Counters.Counter private _tokenIDs;


    // name and symbol of NFT
    constructor() ERC721 ("TBDNFT", "TBD") {
        console.log("DIS MY NFT CONTRACT. WUUUT WUUUUT");
    }

    function mintNFT() public {
        // is this inherently atomic?
        uint256 nftID = _tokenIDs.current();

        // `msg.sender` is made available by the EVM when a function is called.
        // all globally available variables are listed here:
        // https://docs.soliditylang.org/en/develop/units-and-global-variables.html#block-and-transaction-properties
        _safeMint(msg.sender, nftID);
        _setTokenURI(nftID, "https://raw.githubusercontent.com/mistermoe/blockchain/master/solidity/nfts/metadata.json");

        console.log("An NFT w/ ID %s has been minted to %s", nftID, msg.sender);

        _tokenIDs.increment();
    }
}