import React from "react";
import "./Refferal.css";
import "../Home/Home.css";
import Copy from "../../media/copy.svg";
import champ from "../../media/champi.png";

function Refferal() {
  return (
    <div className="main">
      <div className="wrap">
        <div className="first-row">

            <div className="invite">

                <h2> Invite your friends. Earn cryptocurrency together</h2>
                <p>Earn a certain commission reward from your friends through invitation on StackSwap and 0.5% of their earnings from Stake and Farm programs.</p>

            </div>
        </div>

        <div className="first-row">
          <div className="farmref-card">
            <p>Farm referral</p>
            <h1>0 OSMO</h1>
            <button>Withdraw</button>
          </div>

          <div className="ref-link-card">
            <h1>My refferal link</h1>
            <div className="leurre">
                <p>https://osmodex.xyz</p>
                <div className="mini-button">
                    <img src={Copy}></img>
                </div>
            </div>
          </div>
        </div>

        <div className="first-row">
            <div className="list-card">

                <div className="top-part">
                    <div className="left-part">
                        <h1>Referral List</h1>
                        <p>All your referral friends in one place</p>
                    </div>
                    <div className="right-part">
                        <input type="text" placeholder="Search wallet.." ></input>
                    </div>
                </div>
                <div className="down-part">
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

export default Refferal;
