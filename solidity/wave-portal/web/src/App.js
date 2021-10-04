import React, { useEffect, useState } from "react";
import { ethers } from "ethers";
import abiJSON from './utils/WavePortal.json';
import './App.css';

export default function App() {
  const [currentAccount, setCurrentAccount] = useState("");
  const [waves, setWaves] = useState([]);

  const contractAddress = "0x98f60F7205Ee98b4409aB72C8996182C95c1d93a";

  //! TODO: add section about ABIs in NOTES.md
  // more info on ABI here: https://docs.soliditylang.org/en/v0.5.3/abi-spec.html
  // ABI == application binary interface
  const { abi: contractABI } = abiJSON;

  const checkIfWalletIsConnected = async () => {
    // `ethereum` is automatically injected onto the `window` object if the
    // metamask extension is installed
    const { ethereum } = window;

    if (!ethereum) {
      console.log("make sure you have metamask installed!");
      return;
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_accounts' });
      
      // accounts will only be returned if we've authorized a website to
      // access them
      if (accounts.length > 0) {
        setCurrentAccount(accounts[0]);
      } else {
        console.log("no authorized account found");
      }
    } catch (error) {
      console.log("ERROR", error);
    }
  }

  const connectWallet = async () => {
    // `ethereum` is automatically injected onto the `window` object if the
    // metamask extension is installed
    const { ethereum } = window;

    if (!ethereum) {
      console.log("make sure you have metamask installed!");
      return;
    }

    try {
      const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
      setCurrentAccount(accounts[0]);
    } catch (error) {
      console.log(`[connectWallet] ERROR -> ${error}`);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, []);

  const getAllWaves = async () => {
    // `ethereum` is automatically injected onto the `window` object if the
    // metamask extension is installed
    const { ethereum } = window;

    if (!ethereum) {
      console.log("make sure you have metamask installed!");
      return;
    }

    // A provider is the mechanism used to communicate with ethereum nodes.
    // in this case specifically, we're using nodes provided by metamask to
    // interact with a contract
    const provider = new ethers.providers.Web3Provider(ethereum);
    const signer = provider.getSigner();

    const contract = new ethers.Contract(contractAddress, contractABI, signer);
    const waves = await contract.getAllWaves();

    const normalizedWaves = [];
    for (let wave of waves) {
      normalizedWaves.push({
        address: wave.waver,
        timestamp: new Date(wave.timestamp * 1000),
        message: wave.message
      });
    }

    setWaves(normalizedWaves);
  }
  

  const wave = async () => {
    const { ethereum } = window;

    if (!ethereum) {
      console.log("make sure you have metamask installed!");
      return;
    }

    try {
      //! TODO: add section about "providers" to NOTES.md
      // A provider is the mechanism used to communicate with ethereum nodes.
      // in this case specifically, we're using nodes provided by metamask to
      // interact with a contract
      const provider = new ethers.providers.Web3Provider(ethereum);
      const signer = provider.getSigner();
  
      const contract = new ethers.Contract(contractAddress, contractABI, signer);

      // reading data from the blockchain is "free"
      let result = await contract.getTotalWaves();
  
      console.log(`[wave] Result of calling smart contract: ${result.toNumber()}`);

      // Writing new data to a contract requires a transaction. That transaction
      // needs to be mined which in turn costs money to do
      const writeTxn = await contract.wave("Herro from Randy McRanderson");
      console.log(`[wave] Waiting for txn to be mined. hash -> ${writeTxn.hash}`)

      // wait for the transaction to be mined
      await writeTxn.wait();
      console.log(`[wave] Txn mined. hash -> ${writeTxn.hash}`);

      result = await contract.getTotalWaves();
      console.log(`[wave] Updated result -> ${result.toNumber()}`);

      await getAllWaves();
    } catch (error) {
      console.log(`[wave] ERROR -> ${error}`);
    }


  }
  
  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
        HI
        </div>

        <div className="bio">
          <p>
            I am Seema from Mumbai
          </p>
        </div>

        <button className="waveButton" onClick={wave}>
          wave at me
        </button>

        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect Wallet
          </button>
        )}

        {waves.map((wave, idx) => {
          return (
            <div key={idx} style={{ backgroundColor: "OldLace", marginTop: "16px", padding: "8px"}}>
              <p>Address: {wave.address}</p>
              <p>Time: {wave.timestamp.toString()}</p>
              <p>Message: {wave.message}</p>
            </div>
          )
        })}
      </div>
    </div>
  );
}
