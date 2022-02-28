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
import Filters from "./components/FilterNav/Filters";

import UiContext from './components/UIContext/UIContext'
import { useContext } from "react";
import MenuBoard from "./components/MenuBoard/MenuBoard";
import MarketPlaceMain from "./MarketPlaceMain/MarketPlaceMain";
import ListItem from "./components/ListItem/ListItem";
import Auction from "./components/Auction/Auction";
import FixedPrice from "./components/FixedPrice/FixedPrice";
import CollectionProfile from "./components/CollectionProfileCard/CollectionProfileCard";
import CollectionProfilePage from "./components/CollectionProfileCard/CollectionProfilePage/CollectionProfilePage";
import ProfilePage from "./components/ProfilePage/ProfilePage";

const App = () => {

const  uiContext = useContext(UiContext)
const showFilter = uiContext.showFilter
const setShowFilter = uiContext.setShowFilter
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
               <Route exact path="/filter" element={<FilterNav showFilter={showFilter}  setShowFilter={setShowFilter} />}/>
               <Route exact path="/menuboard" element={<MenuBoard/>}/>
               <Route exact path="/list-item-sale" element={<ListItem/>}/>
               <Route exact path="/marketplace" element={<MarketPlaceMain showFilter={showFilter}  setShowFilter={setShowFilter}/>}/>
               <Route exact path="/auction" element={<Auction showFilter={showFilter}  setShowFilter={setShowFilter}/>}/>
               <Route exact path="/fixed-price" element={<FixedPrice showFilter={showFilter}  setShowFilter={setShowFilter}/>}/>
               <Route exact path="/collection-profile" element={<CollectionProfilePage showFilter={showFilter}  setShowFilter={setShowFilter}/>}/>
               <Route exact path="/user-profile" element={<ProfilePage showFilter={showFilter}  setShowFilter={setShowFilter}/>}/>
               </Routes>
              
               </BrowserRouter>
            </>
            </div>
    );
}

export default App;
