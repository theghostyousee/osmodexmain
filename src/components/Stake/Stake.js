import React from "react";
import "./Stake.css";
import "../Home/Home.css";
import Cup from "../../media/cup.svg";
import champ from "../../media/champi.png";

function Stake() {
  return (
    <div className="main">
      <div className="wrap">
        <div className="first-row">
          <div className="tvl-card">
            <h3>Total Value Locked (TVL) In Stake</h3>
            <h1>$-</h1>
            <h3>Across all Stake</h3>
          </div>

          <div className="info-card">
            <div className="rewards">
              <img src={Cup}></img>
              <p>Rewards earned: 0 OSMO</p>
            </div>
            <div className="claim-all">
              <button>Claim all</button>
            </div>
          </div>
        </div>
        <div className="farm-card">
            <div className="row-1">
                <div className="bubble">
                    <h3>OSMO</h3>
                    <p>Stake OSMO earn OSMO</p>
                </div>
                <div className="bubble">
                    <h3>Earned</h3>
                    <p>0.0</p>
                </div>
                <div className="bubble">
                    <h3>APR</h3>
                    <p>-%</p>
                </div>
                <div className="bubble">
                    <h3>Deposit Fee</h3>
                    <p>2.00%</p>
                </div>
                <div className="bubble">
                    <h3>Total staked</h3>
                    <p>- OSMO</p>
                </div>
            </div>
            <div className="row-1">
                <div className="bubble">
                    <h3>ETH</h3>
                    <p>Stake ETH earn OSMO</p>
                </div>
                <div className="bubble">
                    <h3>Earned</h3>
                    <p>0.0</p>
                </div>
                <div className="bubble">
                    <h3>APR</h3>
                    <p>-%</p>
                </div>
                <div className="bubble">
                    <h3>Deposit Fee</h3>
                    <p>3.00%</p>
                </div>
                <div className="bubble">
                    <h3>Total staked</h3>
                    <p>- OSMO</p>
                </div>
            </div>
            <div className="to-top">
                <button>To Top</button>
            </div>
        </div>
        <div className = "champi">
        </div>
      </div>
    </div>
  );
}

export default Stake;
