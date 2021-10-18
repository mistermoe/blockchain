# Stellar

## Overview
- Stellar claims the following:
> Stellar makes sending money as easy as email. It provides a way for people and financial institutions like banks, remittance companies, and mobile payment apps to send payments between each other in any asset quickly and almost at no cost.
- Stellar can be used to hold, transfer, and trade any type of "asset"

- Alright.. sounds awesome. What's an _asset_ here?
  - Assets can be dollars, euros, stocks, bitcoin, ICO tokens etc.
  - The concept of assets are baked straight into the "stellar core". No smart contracts required
  - Assets can be broken down into 3 different types
    - Lumens -> Native currency of the network. Lumens act as a bridge currency in a decentralized exchange
    - Non-Anchored assets -> assets that originate on the network and don't represent assets outside the token. Similar to ERC20 tokens
    - Anchored assets - assets that did not orginate on the network. These assets are anchored on the network by an "anchoring entity" or "anchor"
      - So, USD, BTC, ETH etc. would all classify as "anchorable assets"

- Ok, thoughts are coming together. Now.. what's an _anchor_ or _anchoring entity_?
  - Anchors act as a bridge between outside currencies and the stellar network
  - Anchors can be thought of as a bank in the sense that they:
    - Accept deposits
    - Issue corresponding credit on the stellar ledger to your stellar account address in the form of a transaction
    - Honor withdrawls by receiving the credit they gave you 
  - Anchors can be: banks, payment processing companies or exchanges
  - The thought here is that, because all of these anchors are operating on the same network, it's easy to exchange all types of assets on the stellar network
  - To hold an asset issues from an anchor, you must issue a **trustline** from your stellar account to that anchor's stellar account

## Concepts

### Stellar Consensus Network
- AKA Federated Byzantine Agreement
  - Ok, what is the O.G. Byzantine Agreement?
    - AKA Byzantine Fault Tolerance (BFT)
      - an alternative to proof of work where validators (aka miners) send messages back and forth and use a voting process where a new ledger is confirmed if 66% of validators agree on the ledger
      - BFT is open-membership in the sense that anyone can spin up and run a validator node. However, unfortunately, a list of recommended validators is required and provided by a central authority. WOMP WOMP.
      - Significantly faster and cheaper than proof of work but sacrifices decentralization features 
- The Fedarated Byzantine Agreement does away with the centralized validator list by, instead, requiring validators to provide a list of other validators that they trust. This is called a "quorum slice"
- The quorum slices of each validator overlap to form an overall quorum or.. "network consensus" on a transaction
- Stellar Consensus Network prefers fault tolerance and safety
  - safety in the sense that, if an accidental fork were to happen, the network is halted until consensus can be reached
- There is **no mining process**. Just messages passing and a voting process. This leads to transaction processing times of ~3-5s

### Assets
- Assets can be dollars, euros, stocks, bitcoin, ICO tokens etc.
- The concept of assets are baked straight into the "stellar core". No smart contracts required
- Assets can be broken down into 3 different types
  - Lumens -> Native currency of the network. Lumens act as a bridge currency in a decentralized exchange
  - Non-Anchored assets -> assets that originate on the network and don't represent assets outside the token. Similar to ERC20 tokens
  - Anchored assets - assets that did not orginate on the network. These assets are anchored on the network by an "anchoring entity" or "anchor"
    - So, USD, BTC, ETH etc. would all classify as "anchorable assets"

### Anchors
- Anchors act as a bridge between outside currencies and the stellar network
- Anchors can be thought of as a bank in the sense that they:
  - Accept deposits
  - Issue corresponding credit on the stellar ledger to your stellar account address in the form of a transaction
  - Honor withdrawls by receiving the credit they gave you 
- Anchors can be: banks, payment processing companies or exchanges
- The thought here is that, because all of these anchors are operating on the same network, it's easy to exchange all types of assets on the stellar network
- To hold an asset issues from an anchor, you must issue a **trustline** from your stellar account to that anchor's stellar account

### Accounts
- users interact with the stellar network through accounts.
- accounts are stored on the global ledger
- everything else on the ledger e.g. assets, trust lines, trades are "owned" by account
- account access is controlled by pub/priv keys
- multisig accounts exist

### Transactions
- How you apply changes to your account e.g. make a payment
- transactions must be signed by an account's private key
- transactions are made up of operations

### Operations
- operations are units of work like make payments, enter orders into stellar's dex, and issue trustlines

### Stellar Addresses
- Stellar has a "Federation Protocol". This is like DNS. They resolve addresses into stellar public keys
- Stellar addresses are "email-like" and human-readable 
- addresses take the form of `username*domain` e.g. `moe*squareup.com`

### Wallets
- Stellar wallets don't hold digital cash. Instead, they allow users to:
  - view the current state and history of the stellar ledger
  - sign and sumbit transactions
- Wallets act as as a visual layer built atop Stellar as opposed to a storage mechanism or extension

## Helpful Resources
- [Homepage]()
- [API Reference](https://developers.stellar.org/api)
- [Remittances](https://www.stellar.org/learn/stellar-for-remittances)
- [Github](https://github.com/stellar/)
- [The Business and Benefits of Anchors of the Stellar Network](https://www.youtube.com/watch?v=v8Z77ZWCfkc&ab_channel=StellarDevelopmentFoundation)
  - 

### Third-party key-management services
- [Albedo](https://albedo.link/)
- [StellarAuth](https://stellarauth.com/)
- [Stellar Authenticator](https://stellar-authenticator.org/)
- [Ledger](https://www.ledger.com/)
- [Trezor](https://trezor.io/)
- [StellarGuard](https://stellarguard.me/)
- [LobstrVault](https://vault.lobstr.co/)

