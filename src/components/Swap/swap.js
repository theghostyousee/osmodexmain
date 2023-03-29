import "./swap.css";
import "../Navbar/Navbar.css";
import "../Header/Header.css";
import Settings from "../../media/settings.svg";
import Logo from '../../media/logo.svg';

import ArrowDown from "../../media/arrowdown.svg";
import ETH from "../../media/ethereum.png";
import DAI from "../../media/dai.png";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import champ from "../../media/champi.png";

function Swap() {
  const [activeButton, setActiveButton] = useState("swap");

  const handleClick = (buttonName) => {
    setActiveButton(buttonName);
  };

  const swapClassName = activeButton === "swap" ? "static yes" : "static";
  const liquidityClassName =
    activeButton === "liquidity" ? "static yes" : "static";

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

        <div className="swap-card">
          <div className="swap-card-header">
            <div className="swap-logo">
              <img src={Logo}></img>
            </div>

            <div className="swap-title">
              <h2>Exchange</h2>
              <p>Trade tokens in an instant</p>
            </div>
            <img src={Settings} id="settings"></img>
          </div>

          <div className="input-wrap">
            <div className="input">
              <h3>From</h3>
              <input placeholder="0.0"></input>
              <div className="currency-value">
                <img src={ETH}></img>
                <h4>ETH</h4>
              </div>
            </div>

            <div className="separator">
              <img src={ArrowDown}></img>
            </div>
            <div className="input">
              <h3>To</h3>
              <input placeholder="0.0"></input>
              <div className="currency-value">
                <img src={DAI}></img>
                <h4>DAI</h4>
              </div>
            </div>

            <div className="wrap-button">
              <button>Unlock Wallet</button>
            </div>
          </div>
        </div>
        <div className = "champi">
        </div>
      </div>
    </div>
  );
}

export default Swap;
