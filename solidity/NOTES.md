# Concepts
- Think of smart contract like your server code
- smart contract is deployed to the blockchain. This way, anyone in the world will be able to access and run our smart contract (if given permission). Think blockchain === aws
- can expose the ability to **interact** with a smart contract via a client website
- code within a smart contract is run by compute power supplied by miners.
  - miners are paid in [gas]() to run code
- smart contracts possess storage called [state variables](). These are permenantly sotred in "contract storage" and their values can be updated
- smart contracts receive context as a variable whenever they are interacted with


# Local Development
- a tool called [hardhat]() allows us to easily spin up a local Ethereum network, give us test Eth (for gas) and fake test accounts to work with.
  - Ethereum network === blockchain
    - using hardhat we can compile and test smart contracts on our local ethereum network
    - after running `npm install hardhat` you can run `npx hardhat` to have `hardhat` scaffold a project for you
    - running `npx hardhat accounts` will generate a bunch of fake ethereum addresses that can be used to simulate real users on the blockchain


# EVM - Ethereum Virtual Machine
- The EVM is the runtime for smart contract in ethereum. The EVM is completely isolated in the sense that code running inside it provides no access to network, filesystem or other processes. Smart contracts do have limited access to other smart contracts

# Ideas
- `hardhat` VSCode extension