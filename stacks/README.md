## Prerequisites

### Required
- Install `clarinet`
  - `clarinet` is a runtime for `Clarity` (the smart-contract language for stacks). It intends to streamline local development, testing, and deployment.
  - [Installation reference](https://docs.stacks.co/write-smart-contracts/clarinet#installing-clarinet)
  ```bash
  brew install clarinet
  ```
### Optional
- [Clarity tooling for VSCode](https://marketplace.visualstudio.com/items?itemName=HiroSystems.clarity-lsp)
  - provides intellisense/auto-complete for native functions
  - auto-checks contracts on save.
  - display in-line errors


## Running Smart Contracts Locally
- Running `clarinet console` from the root directory of a project (e.g. `hello-world`) will drop you into a clarinet REPL with all contracts within the `contracts` directory pre-loaded. You can then call smart-contract functions like so `(contract-call? .hello-world say-hi)`

## Deploying to Testnet
- You'll need a Stacks wallet. I believe the only one that's currently available is [Hiro](https://www.hiro.so/wallet). Create an account.
- Stacks has an in-browser testnet sandbox available [here](https://explorer.stacks.co/sandbox/deploy?chain=testnet). Open it up and connect the wallet you just created
- Now we need to add some free STX test tokens to our wallet so we can deploy to the testnet. We can do that with something that Stacks calls a "faucet". We can "use" the faucet via Stack's API or through this [page](https://explorer.stacks.co/sandbox/faucet?chain=testnet). Click on the link and request some tokens