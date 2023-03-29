import './Header.css'
import Logo from '../../media/SwapStack.svg'
import logo from '../../media/logo.svg'
import arbitrum from '../../media/arbitrum.svg'
import zk from '../../media/zk.svg'
import Web3 from 'web3';
import { useState } from 'react';

function Header(){





    const [connected, setConnected] = useState(false);

    const connectMetaMask = async () => {
      if (typeof window.ethereum !== "undefined") {
        try {
          // Get the current chain ID
          const chainId = await window.ethereum.request({ method: "eth_chainId" });
          // Check if the current chain ID matches the zkSync Era Mainnet chain ID
          if (chainId !== "0x144") {
            // Prompt the user to switch to the zkSync Era Mainnet
            await window.ethereum.request({
              method: "wallet_switchEthereumChain",
              params: [{ chainId: "0x144" }],
            });
          }
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

  
    
    
    return(
        <div className="header">


            <div className='here'>
                <img src={logo} id="head-logo"></img>
            </div>

            <div className="head-infos">
                <div className="arbitrum">

                    <img src={zk}></img>
                    <h2></h2>
                </div>

                <button onClick={connectMetaMask}>
                  {connected ? "Connected" : "Connect"}
                </button>
            </div>
        </div>


    );
}


export default Header;