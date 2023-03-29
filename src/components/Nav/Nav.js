import { Link } from 'react-router-dom';
import {useRef} from "react";
import { FaBars, FaTimes } from "react-icons/fa";
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
import './Nav.css'

function Nav() {


    const navRef = useRef();

    const showNavbar = () => {
        navRef.current.classList.toggle("responsive_nav");
    }
  
     return (
        <div className='top'>
            <nav ref={navRef}>
                <div className='list'>
                    <img src={Home} alt="dash"></img>
                    <Link to="/">Home</Link>
                </div>
                <div className='list'>
                    <img src={Swap} alt="dash"></img>
                    <Link to="/swap">Swap</Link>
                </div>
                <div className='list'>
                    <img src={Yield} alt="dash"></img>
                    <Link to="/stake">Yield</Link>
                </div>
                <div className='list'>
                    <img src={NFT} alt="dash"></img>
                    <Link to="/pad">Launchpad</Link>
                </div>
                <div className='list'>
                    <img src={Pad} alt="dash"></img>
                    <Link to="/presale">Presale</Link>
                </div>
                <div className='list'>
                    <img src={Lottery} alt="dash"></img>
                    <Link to="/nft">NFT</Link>
                </div>
                <div className='list'>
                    <img src={Refferal} alt="dash"></img>
                    <Link to="/refferal">Refferal</Link>
                </div>
                <div className='list'>
                    <img src={Docs} alt="dash"></img>
                    <a href="https://osmodex.gitbook.io/osmodex/">Docs</a>
                </div>

                <button className="nav-btn nav-close-btn" onClick={showNavbar}>

                    <FaTimes/>

                </button>
                <div className="mobile-tag">
                    <img src={Twitter} alt="dash"></img>
                    <img src={Telegram} alt="dash"></img>
                    <img src= {Discord} alt="dash"></img>
                </div>
            </nav>
            <button  className="nav-btn"  onClick={showNavbar}>
                <FaBars/>
            </button>
        </div>
    );
}

export default Nav;
