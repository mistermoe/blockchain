// this script is used to deploy this contract to a blockchain
const { ethers } = require("hardhat");

async function main() {
    const contractFactory = await ethers.getContractFactory('NFT');
    const contract = await contractFactory.deploy();

    await contract.deployed();

    console.log(`Contract deployed to -> ${contract.address}`);

    for (let i = 0; i < 2; i += 1) {
        const txn = await contract.mintNFT();
        await txn.wait();
    }
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