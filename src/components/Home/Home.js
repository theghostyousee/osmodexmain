import "./Home.css";
import "../Navbar/Navbar.css";
import "../Header/Header.css";
import Arrow from "../../media/parachute.png";
import champ from "../../media/champi.png";
import BGs from "../../media/BG.png";

function Home() {
  return (
    <div className="main">
      <div className="wrap">
        <div className="first-row">
          <div className="trading-card">
            <h1>Start trading</h1>
            <img src={Arrow}></img>
          </div>

          <div className="earning-card">
            <h3>Earn up to</h3>
            <h1>520%</h1>
            <h3>APR in Farms</h3>
          </div>
        </div>

        <div className="first-row">
          <div className="tvl-card">
            <h3>Total Value Locked (TVL)</h3>
            <h1>$-</h1>
            <h3>Across all LPs and Stake</h3>
          </div>

          <div className="info-card">
            <div className="range">
              <h2>Osmo Price</h2>
              <h3>$0.0</h3>
            </div>
            <div className="range">
              <h2>Burned</h2>
              <h3>0,000,000 OSMO</h3>
            </div>
            <div className="range">
              <h2>Circulating Supply</h2>
              <h3>0,000,000 OSMO</h3>
            </div>
          </div>
        </div>


        <div className = "champi">
        </div>


      </div>
    </div>
  );
}

export default Home;
