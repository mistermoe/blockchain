// run this script using `npx hardhat run path/to/this/script.js`.
// apparently we don't need to require `hre` because `npx hardhat run` injects it
// into the global run context

async function main() {
    const [owner, randoMcRandy] = await hre.ethers.getSigners();

    // compiles contract and dumps it and other respective files into `artifacts` dir
    const waveContractFactory = await hre.ethers.getContractFactory("WavePortal");
    
    // create local eth network for just this contract and deploy the contract.
    // network is destroyed after script finishes running.
    // point of creating new eth network every time is to have a clean slate for
    // every "local test run". 
    //! TODO: figure out if you can prevent destroying the network or reuse
    //!       a pre-existing local network. Why? :shrug:
    const waveContract = await waveContractFactory.deploy();

    // wait until contract is officially deployed
    await waveContract.deployed();
    
    console.log(`Contract deployed to: [${waveContract.address}] by [${owner.address}]`);

    // interact with contract as owner
    let waveCount = await waveContract.getTotalWaves();
    log(`wave count: ${waveCount}`);
    
    console.log('waving...');
    const waveTxn = await waveContract.wave();
    await waveTxn.wait();
    log('waved.');

    waveCount = await waveContract.getTotalWaves();
    log(`wave count: ${waveCount}`);

    // interact with contract as `randoMcRandy`
    log(`${randoMcRandy.address} fixing to interact with contract...`);
    
    const randyWaveTxn = await waveContract.connect(randoMcRandy).wave();
    await randyWaveTxn.wait();

    waveCount = await waveContract.getTotalWaves();
    log(`wave count: ${waveCount}`);
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