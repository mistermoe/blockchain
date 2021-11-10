// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
const hre = require("hardhat");

async function main() {
  const [_, randoMcRandy] = await hre.ethers.getSigners();

  const CommunityChest = await hre.ethers.getContractFactory("CommunityChest");
  const communityChest = await CommunityChest.deploy();

  await communityChest.deployed();

  console.log("contract deployed to:", communityChest.address);

  let currBalance = await communityChest.getBalance();
  console.log(`current balance -> ${currBalance}`);


  console.log(`[${randoMcRandy.address}] depositing 1 ether to ${communityChest.address}`);
  const depositTxn = await communityChest
    .connect(randoMcRandy)
    .deposit(hre.ethers.utils.parseEther("1"), {
      value: hre.ethers.utils.parseEther("1")
    });

  await depositTxn.wait();

  currBalance = await communityChest.getBalance();
  console.log(`current balance -> ${currBalance}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
