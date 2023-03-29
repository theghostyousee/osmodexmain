import "../Navbar/Navbar.css";
import "../Header/Header.css";
import "../Home/Home.css";
import "./Lottery.css";
import ArrowDown from "../../media/arrowdown.svg";
import icon from '../../media/logo.svg';
import React, { useState }  from "react";
import contractABI from "./contractABI.json";
import Web3 from "web3";
import champ from "../../media/champi.png";

function Lottery() {

  const [amount, setAmount] = useState("");
  const [connected, setConnected] = useState(false);
  const [stackValue, setStackValue] = useState("");

  const ETH_TO_STACK_RATIO = 41873;

  const connectMetaMask = async () => {
    if (typeof window.ethereum !== "undefined") {
      try {
        await window.ethereum.request({ method: "eth_requestAccounts" });
        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        setConnected(true);
        console.log("Connected to MetaMask with account:", accounts[0]);
      } catch (error) {
        console.error(error);
      }
    } else {
      console.error("Please install MetaMask");
    }
  };

  const handleAmountChange = (event) => {
    const value = event.target.value;
    setAmount(value);
    setStackValue(value * ETH_TO_STACK_RATIO);
  };

  const handleMaxClick = async () => {
    const web3 = new Web3(window.ethereum);
    const accounts = await web3.eth.getAccounts();
    const balance = await web3.eth.getBalance(accounts[0]);
    const value = web3.utils.fromWei(balance, "ether");
    setAmount(value);
    setStackValue(value * ETH_TO_STACK_RATIO);
  };

  const handleUnlockWallet = async () => {
    const web3 = new Web3(window.ethereum);
    const contractAddress = "0x846E6EeD5ef561BB08040eD64E83299be159ee30";
    const contract = new web3.eth.Contract(contractABI, contractAddress);

    const chainId = await window.ethereum.request({ method: "eth_chainId" });

    if (chainId !== "0x144") {
      // Prompt the user to switch to the zkSync Era Mainnet
      await window.ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x144" }],
      });
    }

  

    const sender = (await web3.eth.getAccounts())[0];
    const value = web3.utils.toWei(amount, "ether");

    try {
      const result = await contract.methods.buyPresale().send({
        from: sender,
        value: value,
      });
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  };


  return (
    <div className="main">
      <div className="wrap">
        <div className="swap-presale">
        </div>

        <div className="swap-card">
          <div className="swap-card-presale">
            <div className="presale-title">
              <h2>Presale</h2>
              <p>Contribute to the presale with a <strong>max buy of 5 ETH</strong></p>
            </div>
          </div>

          <div className="input-wrap">
            <div className="input">
              <h3>From</h3>
              <input placeholder="0.0" type="number" value={amount}
                onChange={handleAmountChange}></input>
              <div className="currency-value" onClick={handleMaxClick}>
                <h4>MAX</h4>
              </div>
            </div>

            <div className="separator">
              <img src={ArrowDown}></img>
            </div>
            <div className="input">
              <h3>To</h3>
              <input placeholder="0.0" type="number" value={stackValue} readOnly />
              <div className="currency-presale">
                <img className="custom" src={icon}></img>
                <h4>OSMO</h4>
              </div>
            </div>

            <div className="wrap-button">
              {connected ? (
                <button onClick={handleUnlockWallet}>Contribute</button>
              ) : (
                <button onClick={connectMetaMask}>Unlock Wallet</button>
              )}
            </div>
          </div>
        </div>
        <div className = "champi">
        </div>
      </div>
    </div>
  );
}

export default Lottery;
