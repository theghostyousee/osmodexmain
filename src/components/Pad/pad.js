import React from "react";
import "../Navbar/Navbar.css";
import "../Header/Header.css";
import "../Home/Home.css";
import '../Lottery/Lottery.css'
import Coming from '../../media/coming.svg'

export default function pad() {
  return (
    <div className="main">
      <div className="wrap">
        <div className="coming-soon">
            <img src={Coming}></img>
        </div>
      </div>
    </div>
  )
}


