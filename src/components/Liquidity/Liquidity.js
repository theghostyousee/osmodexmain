import "./Liquidity.css";
import "../Swap/swap.css";
import React, { useState } from "react";
import Logo from '../../media/logo.svg';
import Settings from "../../media/settings.svg";
import { Link } from "react-router-dom";
import { NavLink } from 'react-router-dom';
import champ from "../../media/champi.png";

function Liquidity() {
  const [activeButton, setActiveButton] = useState("swap");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const swapClassName = 'static';
  const liquidityClassName = 'static yes';

  return (
    <div className="main">
      <div className="wrap">
        <div className="swap-liquidity">
          <div className="wrap-liquidity">
            <Link to="/swap">
              <button
                className={swapClassName}
                onClick={() => handleClick("swap")}
              >
                Swap
              </button>
            </Link>
            <Link to="/pool">
              <button
                className={liquidityClassName}
                onClick={() => handleClick("liquidity")}
              >
                Liquidity
              </button>
            </Link>
          </div>
        </div>

        <div className="liquidity-card">
          <div className="liquidity-top">
            <div className="liquidity-logo">
              <img src={Logo}></img>
            </div>
            <div className="liquidity-title">
              <h2>Your Liquidity</h2>
              <p>Add liquidity to receive LP tokens</p>
            </div>
            <img src={Settings} id="settings"></img>
          </div>
          <div className="lp-content">
            <div className="connect-wallet">
              <p>Connect to a wallet to view your liquidity</p>
            </div>
          </div>

          <div className="lp-button">
            <button>+ Add Liquidity</button>
          </div>
        </div>

        <div className = "champi">
        </div>
      </div>
    </div>
  );
}

export default Liquidity;
