# Concepts
- Think of smart contract like your server code
- smart contract is deployed to the blockchain. This way, anyone in the world will be able to access and run our smart contract (if given permission). Think blockchain === aws
- can expose the ability to **interact** with a smart contract via a client website
- code within a smart contract is run by compute power supplied by miners.
  - miners are paid in [gas](https://ethereum.org/en/developers/docs/gas/) to run code
- smart contracts possess storage called [state variables](). These are permenantly sotred in "contract storage" and their values can be updated
- smart contracts receive context as a variable whenever they are interacted with


# Local Development
- a tool called [hardhat]() allows us to easily spin up a local Ethereum network, give us test Eth (for gas) and fake test accounts to work with.
  - Ethereum network === blockchain
    - using hardhat we can compile and test smart contracts on our local ethereum network
    - after running `npm install hardhat` you can run `npx hardhat` to have `hardhat` scaffold a project for you
    - running `npx hardhat accounts` will generate a bunch of fake ethereum addresses that can be used to simulate real users on the blockchain

# Testnets
- `Rinkeby` is run by the Ethereum foundation
- You can use "faucets" to get fake coins that you then use to deploy to testnets

# EVM - Ethereum Virtual Machine
- The EVM is the runtime for smart contract in ethereum. The EVM is completely isolated in the sense that code running inside it provides no access to network, filesystem or other processes. Smart contracts do have limited access to other smart contracts

# Providers
- TODO: Fill out

# Signers
- TODO: Fill out
- TODO: [read](https://docs.ethers.io/v5/api/signer/#signers)


# Contract Storage

# ABI - Application Binary Interface
- TODO: Fill out
- TODO: [read](https://docs.soliditylang.org/en/v0.5.3/abi-spec.html)

# Events
- TODO: Fill out
- TODO: [read](https://betterprogramming.pub/learn-solidity-events-2801d6a99a92)
- TODO: [read](https://media.consensys.net/technical-introduction-to-events-and-logs-in-ethereum-a074d65dd61e#.7w96id6rs)
- Events can be used to facilitate logging. logs are stored on the blockchain
- Events are referred to as logs within the EVM.
- In Solidity, events can be declared like so:
```
event someName(type [indexed] arg1, ...)
```
- Events can have up to **3 indexed arguments at most**. 3 arguments are not required though. Events can have more than 3 non-indexed arguments
- event arguments can be indexed by adding the `indexed` keyword after the type and before the name of an argument. indexing event arguments requires additional gas.
- Events have 3 use cases:
  - Asynchronous triggers with data
    - events can be emitted by a smart contract. "frontends" can listen (or "watch") for these emitted events. Essentially, this enables asynchronous bidirectional communication
  - cheaper storage
    - logs cost ~8 gas per byte whereas contract storage costs 20,000 gas per 32 bytes
  - provide a way to return data to the caller of a smart contract's mutating function when done through a transaction
    - smart contract functions that write data cannot return anything to the caller. the return value is the hash of the transaction. Transactions cannot return values from a contract because they are not immediately mined.
- Each event becomes a topic. [More Info](https://ethereum.stackexchange.com/questions/12950/what-are-solidity-events-and-how-they-are-related-to-topics-and-logs)
- (?) Where are these events stored
  - Apparently stored on the blockchain. But where on the blockchain?

## Block Bloom Filter

# Time

# Ideas
- `hardhat` VSCode extension

# Misc
- WavePortal Rinkeby contract addresses: 
  - V1 -> 0x3455477D8A0821b6139f35eB4ad45369D9B2C6be
  - V2 -> 0x98f60F7205Ee98b4409aB72C8996182C95c1d93a