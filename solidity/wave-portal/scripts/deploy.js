// this script deploys the WavePortal contract to an ethereum network.
// to run locally: `npm hardhat run scripts/deploy.js --network localhost`

async function main() {
    const [ deployer ] = await hre.ethers.getSigners();
    const deployerBalance = await deployer.getBalance();

    log(`Deploying contract with account [${deployer.address}]. Balance -> ${deployerBalance.toString()}`);

    const Token = await hre.ethers.getContractFactory('WavePortal');
    const token = await Token.deploy();

    console.log(`Contract deployed @ [${token.address}]`);
}

function log(...args) {
    console.log(`[${new Date().toLocaleTimeString()}] <run.js>`, ...args);
}

(async () => {
    try {
        await main();
    } catch(e) {
        console.error(error);
        process.exit(1);
    }
})();