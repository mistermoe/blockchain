## Environment Setup
- **Rating**: 10/10
- Interestingly enough, Stellar has no concept of smart contracts. Everything is done by interfacing with the stellar blockchain over their HTTP APIs. Stellar has several SDKs that allow devs to interface with their HTTP APIs. SDKs are provided for JS, Java, Go, Python, Ruby, and a handful more
- This made setup basically negligible because i use many of these languages on a daily basis. I just set up a blank project and pulled in the stellar SDK in a language of my choice


## Consensus Mechanism
- **Rating**: 7.5/10
- The Stellar Consensus Network is a form of Federated Byzantine Agreement that prefers fault tolerance and safety (out of fault tolerance, safety and liveness). This means that:
  - the stellar network has been built to survive the failure of a validator (stellar's version of miners) at any point (fault tolerance)
  - the network will halt transactions if consensus cannot be reached on a given ledger until consensus can be reached (safety)
- opting for safety over liveness makes sense, at least imo, for the stellar blockchain because of what it's trying to achieve. Chains that prefer liveness necessitate the possibility of accidental forks (diverging ledgers). Accidental forks open up room for double spending which 
- Transactions process much faster (3-5s per transaction) because FBA is built around the concept of message-passing and voting (versus mining). Preferring safety makes it so there's no need to wait for multiple ledgers to be confirmed before knowing for certain that your transaction made it because there's no possibility for an accidental fork. This helps with message processing times quite a bit
- FBA offers open-membership. Anyone can run a validator node. Decentralized characteristics are maintained by having each validator node provide a list of other validator nodes they trust. a validator node + that node's trusted nodes makes a quorum slice. network-wide consensus is acheived by quorum slices of each validator overlapping
- This means that the stellar network is not as inherently decentralized as say, bitcoin or ethereum. The networks decentralization is dependent on the number of validating nodes. As more nodes are added to the network, new quorum slices form and the network becomes more decentralized
-  Theoretically (because i haven't looked at the math or proof), the stellar network provides asymptotic security in that no amount of computing power can overtake the network. A bad actor could allegedly create millions of validators, but unless they are able to join existing quorum slices, they'd be unable to affect consensus
   -  Instinctively i'm a bit skeptical about this. I feel like there's room for edge cases. Sure, a bad-actor could set up 1 million validators all of which add one another to their list of trusted validators, but how many. They won't be able to affect consensus unless other validators start adding the malicious validators to their trusted list. But.. how many (or how few) pre-existing validators need to add these malicious validators to their trusted list before the bad-actor wields a significant amount of power?

## Dev Experience
- **Rating**: 6.5/10
- I took the time to play around with both the python and javascript SDKs. Both had a sufficient amount of documentation and followed the same design pattern (the builder pattern). The builder pattern is most-often seen in java and not all that common in JS or Python but it got the job done
- There's certainly a ton of documentation. Some of their walkthroughs are far longer than they could be had they not chosen to use frameworks that aren't widely supported. Their longest and showcased walkthrough uses a frontend framework that i had never heard of until yesterday (stencil). Using say react or vue would have made the walkthrough much more approachable by many and also reduced the amount of code by 1/2 or more
- There's no documented way to run the network locally (like you can do for ethereum using truffle or hardhat). This means that you're always interfacing with stellar's testnet. This is managable and works fine for tinkering but makes writing tests a bit more difficult in that the assertions become brittle because they will likely depend on certain transactions to already exist on the testnet
- Establishing trustlines with anchors needs way more attention and documentation. This is such a crucial and critical part of what stellar is capable of (trustlines with anchors are how you work with off-chain assets on the stellar network). There's no list of approved anchors. The anchor issuer addresses in a lot of the documentation don't exist on the testnet or mainnet (likely because the docs were written before the testnet was reset). I feel like the dev experience could be significantly improved if they provided 1 walkthrough that sets up a stellar account, funds it, and sets up a few trustlines with anchors that issue major fiat assets

## Usage
- **Rating**: 6.5/10
- Stellar is all about streamlining the ability to exchange assets of any type. I sat down and tried to send USD -> GBP on the stellar mainnet and it took me more time than i expected to make it happen
- In order to create an account, you need to generate a public/private keypair. your public key also acts as your address. Your account needs to be funded with 2XLM in order to be cemented on the ledger. The Stellar foundation provides no streamlined way of funding new accounts. I created my keypair and then sent XLM from coinbase pro -> my stellar account to fund it
- Now.. i need to establish trustlines with anchors that issue USD and GBP. [Here](https://stellar.expert/explorer/public/search?term=USD) are all of the versions of USD on the mainnet and [Here](https://stellar.expert/explorer/public/search?term=GBP) for GBP. The closet analogy i could think of (doesn't fully apply 1:1 but it gets across how i was feeling) is walking down some main street in a foreign country looking to exchange some foreign currency for local with no phone and walking by a bunch of shady currency exchange shops not knowing which one to trust
- After selecting anchors and establishing trustlines.. i need to go to..
  - use SDEX to convert XLM to Dollars by finding the best rate and submitting a buy order
  - use SDEX to convert Dollars to Euros by doing the same thing and submitting a buy order
- This took me about ~2h to do and i had to pay 3 fees (albeit very small). Then, about 30 minutes later i learned about path payments tucked away in some obscure example in the golang SDK repo. Path payments simplify the process by eliminating the need for the sender to have a trustline, and by bundling transfer and conversion into a single operation that incurs a single fee. This reduces the overhead and complexity involved in navigating trustlines and the SDEX, and allows a user to easily take advantage of the multiplicity of Stellar assets

- [Account Info](https://stellar.expert/explorer/public/account/GCB2YU2RIHR6DWWQXYWK3ICBSEMMWW2OGA5TRKLGWM54KXPXBRBKE3B3)

## Transactions
- (Account creation txn)[https://stellar.expert/explorer/public/tx/136dabd7d2852fe4b9b55da39baedd821ea274b1a3f3d2c5b0f77c520afcc969]
- (Establish USD trustline w/ AnchorUSD txn)[https://stellar.expert/explorer/public/tx/3b3ac001426d3386fe893de6b253a781ead12f41437fc8ff7ff54bfc2b65b62e]