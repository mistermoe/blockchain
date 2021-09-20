## Environment Setup
- **Rating**: 10/10
- I didn't have to jump through hoops or balance an elephant on my nose. Just a simple `brew install clarinet` which installs the runtime for Clarity along with a CLI that aims to streamline local development, testing and deployment
- They also have tooling for VSCode in the form of a [plugin](https://marketplace.visualstudio.com/items?itemName=HiroSystems.clarity-lsp).

## Clarity Lang
- **Rating**: 3/10
- Clarity is.. not my favorite. I think it has a lot to do with the fact that it's influenced-by/based-on LISP with means `(parentheses(every(where)))`. According to the clarity [homepage](https://clarity-lang.org/), it is designed by scientists from Princeton and MIT. LISP-based languages may be more familiar to academics but you don't see it all that often as a software engineer. At least, i haven't. I feel like it borrows from `erlang` a bit as well with the convention of using `ok`
- Clarity is interpreted. Their motivation may have been to provide a "what you write is exactly what gets run in the compute layer. You don't have to worry about any funny business coming from the compiler." I see the appeal but I feel like we lose out on levaraging a lot of the tooling that already exists if Clarity compiled into Web Assembly like Ethereum 2.0 or Polkadot. `WASM` is a standard that has been worked on for years by many big names in the tech industry and has gained support in nearly all major browsers. So many languages can compile into WASM already. This means that an engineer can write smart contracts in languages they might be more familiar with and enjoy (e.g. Kotlin, Rust, Typescript, Go). There's already so many new concepts to learn when entering the web 3.0 space. Adding a whole new language and all the quirks that come with it only adds to the whirlwind. Why not leave engineers to use a language they potentially already write everyday?
- the concept behind traits is cool. Think interfaces in Java. 
  - a contract can declare that it adheres to a specific set of traits with `impl-trait`, analagous to `implements SomeInterface` in Java. 
  - A contract can fail deployment to the blockchain if it violates the implemented trait's specification
    - This is a nice failsafe though I surey hope that tooling would tell me that I haven't correctly implemented a trait well before i'm getting ready to deploy to the live chain. 
    - It looks like traits live on the blockchain. you can declare implementation of a trait like so `(impl-trait 'ST1HTBVD3JG9C05J7HBJTHGR0GGW7KXW28M5JS8QE.nft-trait.nft-trait)` but.. the address to the trait changes depending on where the contract is being deployed (e.g. testnet vs. mainnet). This could get ugly in the code. Stacks doesn't provide tooling to swap out trait addresses easily when building for a specific network / environment.
- Aesthetic of [clarity website](https://clarity-lang.org/) made me want to try it
- I wasn't able to find any way to log anything to stdout during local dev
- public functions are callable from others. In theory, nice for modularity. I don't know how this feels in practice yet

## Local Development / Tooling
- **Rating**: 5/10
- the `clarinet` CLI provides some helpful commands to scaffold a project, contracts and tests
- the Clarity repl provides an easy way to try things out.
- Deploying to Stack's Testnet takes awhile. The first few walkthroughs don't show you how to add test tokens to your wallet. They bring it up in the 3rd or 4th walkthrough which I didn't get to until after I stumbled through figuring out how to do it myself. Depositing Test tokens took about 20 minutes and then another 10ish minutes for the sandbox explorer to sync with my connected wallet 
- The [Sandbox Explorer](https://explorer.stacks.co/sandbox/deploy?chain=testnet) provides an easy way to deploy by-way of UI if you want to copy/paste a small contract into an embedded light-weight IDE
- Deploying to the testnet took about 20 minutes. After doing deploying to testnet the first time, i didn't find it to be all that beneficial. Running a testnet node locally felt much faster
- local dev tooling seems to follow a lot of functionality that [hardhat](https://hardhat.org/) provides for ethereum development

