# Concepts

## Consensus Mechanisms
- A consensus mechanism can only prefer 2 of the following 3 (proven by FLP impossibility proof):
  - fault tolerance
    - system can survive the failure of a node / miner at any point
  - safety
    - a guarantee that something bad will never happen (like an accidental fork)
      - this means if the miners / validators cannot agree on a ledger, the result will NOT be 2 different ledgers
  - liveness
    - a guarantee that ledgers will always be closed and transactions will always be processed to continue making progress
- so.. it sounds like you can never have both safety and liveness?