// this script can be used to run your smart contract locally
const { ethers } = require("hardhat");

async function main() {
    const contractFactory = await ethers.getContractFactory('NFT');
    const contract = await contractFactory.deploy();

    await contract.deployed();

    console.log(`Contract deployed to -> ${contract.address}`);
}

(async () => {
    try {
        await main();
        process.exit(0);
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
})();