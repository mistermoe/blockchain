# Metadata NFTs

## Overview
This project contains a smart contract that leverages the open zeppelin implementation of [ERC721](https://eips.ethereum.org/EIPS/eip-721) to deploy a metadata driven NFT to an ethereum blockchain

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