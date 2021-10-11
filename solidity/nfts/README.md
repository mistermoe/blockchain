# Metadata NFTs

## Overview
This project contains a smart contract that leverages the open zeppelin implementation of [ERC721](https://eips.ethereum.org/EIPS/eip-721) to deploy an "off-chain" NFT to an ethereum blockchain

## Prerequisites
- node v14+
- [Metamask Wallet](https://metamask.io/download.html)
  - You'll use your metamask wallet to interface with your contract when deployed to a testnet or mainnet
- [Alchemy Account](https://www.alchemy.com/)
  - Alchemy simplifies / streamlines deploying ethereum smart contracts to testnets and mainnet

## Notes
- You can upload your json metadata to [jsonkeeper](https://jsonkeeper.com/b/RUUS)
  - I elected to use this github repo to store and host my json metadata. [Link](https://raw.githubusercontent.com/mistermoe/blockchain/master/solidity/nfts/metadata.json)
- You can upload your image to imgur
  - I elected to use this github repo to store and host my image. [Link](https://raw.githubusercontent.com/mistermoe/blockchain/master/solidity/nfts/nft.png)

## Local Development
Running the following will compile, deploy, and mine the `NFT.sol` smart contract under `contracts/` to a blockchain running locally:
```
npx hardhat run scripts/run.js
```

## Deploying

### Prerequisites
create a `.env` file and include the following environment variables
```
HARDHAT_RINKEBY_URL=ADD_APP_URL_HERE
HARDHAT_RINKEBY_ACCOUNT=ADD_WALLET_KEY_HERE
```
### Testnet
```
npx hardhat run scripts/deploy.js --network rinkeby
```

Metadata hosted at [here](https://raw.githubusercontent.com/mistermoe/blockchain/master/solidity/nfts/metadata.json)


## Smart Contract Addresses
[Rinkeby] v1 -> [0x6F3b548834CEEdDE08c79E34c20CeB33f5e81C24](https://rinkeby.etherscan.io/tx/0xa40db43e6e6c6512a35a3cb3223b7d968df410cd1c796ea66ea7a0b8508d9a8e)