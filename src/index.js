import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import Header from  './components/Header/Header';
import Navbar from  './components/Navbar/Navbar';
import Home from  './components/Home/Home';
import Swap from  './components/Swap/swap';
import Liquidity from  './components/Liquidity/Liquidity';
import Refferal from  './components/Refferal/Refferal';
import Stake from  './components/Stake/Stake';
import Lottery from  './components/Lottery/Lottery';
import Nav from  './components/Nav/Nav';
import Pad from  './components/Pad/pad';
import './components/Header/Header.css';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Header />
      <Navbar />
      <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/pool" element={<Liquidity />} />
          <Route path="/swap" element={<Swap/>} />
          <Route path="/stake" element={<Stake/>} />
          <Route path="/refferal" element={<Refferal/>} />
          <Route path="/presale" element={<Lottery/>} />
          <Route path="/nft" element={<Pad/>} />
          <Route path="/pad" element={<Pad/>} />
      </Routes>
    </Router>
  </React.StrictMode>
);


reportWebVitals();
