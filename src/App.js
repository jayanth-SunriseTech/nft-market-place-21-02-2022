import React, { useEffect } from "react";
import Navbar from './components/Navbar/Navbar';
import { useDispatch, useSelector } from "react-redux";
import { connectWallet } from "./redux/WalletAction";
import {
    BrowserRouter,
    Routes,
    Route
  } from "react-router-dom";

import "./App.css";
import Banner from "./components/Banner/Banner";
import Home from "./components/Home/Home";
import NFTCard from "./components/NFTCard/NFTCard";

const App = () => {

    const wallet = useSelector(state => state.WalletConnect);
    const dispatch = useDispatch();

    useEffect(() => {
        const {web3Modal} = wallet;
        if(web3Modal.cachedProvider) {
            dispatch(connectWallet());
        }
        // eslint-disable-next-line
    }, []);

    return (
        <div className="App">
                <>
           <BrowserRouter>
               < Navbar />
               <Routes>
               <Route exact path="/" element={<Home/>}/>
               <Route exact path="/card" element={<NFTCard/>}/>
               </Routes>
               </BrowserRouter>
            </>
            </div>
    );
}

export default App;
