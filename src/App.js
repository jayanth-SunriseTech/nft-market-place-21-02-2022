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
import CollectionCard from "./components/CollectionCard/CollectionCard";
import OurCollections from "./components/OurCollections/OurCollections";
import TopTrending from "./components/TopTrending/TopTrending";
import TodaysPick from "./components/TodaysPick/TodaysPick";
import TopCollectionsList from "./components/TopCollectionsList/TopCollectionsList";
import SellNFTs from "./components/SellNFTs/SellNFTs";
import Stats from "./components/Stats/Stats";
import FilterNav from "./components/FilterNav/FilterNav";

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
               <Route exact path="/filter" element={<FilterNav/>}/>
               <Route exact path="/stats" element={<Stats/>}/>
               </Routes>
               </BrowserRouter>
            </>
            </div>
    );
}

export default App;
