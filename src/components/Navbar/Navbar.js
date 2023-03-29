import "./Navbar.css";
import Home from "../../media/home.svg";
import Swap from "../../media/swap.svg";
import Yield from "../../media/yield.svg";
import NFT from "../../media/nft.svg";
import Docs from "../../media/docs.svg";
import Refferal from "../../media/refferal.svg";
import Pad from "../../media/launchpad.svg";
import Lottery from "../../media/lottery.svg";
import Twitter from "../../media/twitter.svg";
import Telegram from "../../media/telegram.svg";
import Discord from "../../media/discord.svg";
import { Link } from "react-router-dom";

function Navbar() {
  const handleLinkClick = (event) => {
    const parentLi = event.target.closest('li');
    const allLis = parentLi.parentElement.children;
    for (let li of allLis) {
      li.style.background = 'transparent';
    }
    parentLi.style.background = '#fcf8fb91';
  }
  

  return (
    <div className="SideNav">
      <ul className="ul-one">
        <li>
          <img src={Home} alt="dash"></img>
          <Link to="/" onClick={handleLinkClick}>Home</Link>
        </li>
        <li className="active">
          <img src={Swap} alt="dash"></img>
          <Link to="/swap" onClick={handleLinkClick}>Swap</Link>
        </li>
        <li>
          <img src={Yield} alt="dash"></img>
          <Link to="/stake" onClick={handleLinkClick}>Yield</Link>
        </li>
        <li>
          <img src={Pad} alt="dash"></img>
          <Link to="/presale" onClick={handleLinkClick}>Presale</Link>
        </li>
        <li>
          <img src={Refferal} alt="dash"></img>
          <Link to="/refferal" onClick={handleLinkClick}>Refferal</Link>
        </li>
        <li>
          <img src={Lottery} alt="dash"></img>
          <Link to="/nft" onClick={handleLinkClick}>NFT</Link>
        </li>
        <li>
          <img src={NFT} alt="dash"></img>
          <Link to="/pad" onClick={handleLinkClick}>Launchpad</Link>
        </li>
        <li>
          <img src={Docs} alt="dash"></img>
          <a href="https://osmodex.gitbook.io/osmodex/">Docs</a>
        </li>
      </ul>
      <ul className="ul-two">
        <div className="socials">
          <img src={Twitter} alt="dash"></img>
          <img src= {Discord} alt="dash"></img>
        </div>
      </ul>
    </div>
  );
}

export default Navbar;

