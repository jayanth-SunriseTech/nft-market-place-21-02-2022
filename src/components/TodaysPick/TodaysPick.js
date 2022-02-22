import React from 'react';
import NFTCard from '../NFTCard/NFTCard';
import NFTCardData from '../SampleData/TopTrendingList';
import "./TodaysPick.css";

function TodaysPick() {
  return (
    <div className="Todays_Picks_page">
      <div className="container-fluid">
          <div className="row todaysPicks_heading_container">
              <h1 className="topPicks_heading">Today's Picks</h1>
          </div>
          <div className="row" >
            <div className='col-1'></div>
            <div className='col-10'>
              <div className='row'>
            {NFTCardData.map((e)=>
          <NFTCard nftImage={e.nftImage} price={e.price} />
          )}
          </div>
            </div>
            <div className='col-1'></div>
        
        </div>
        <div className="row todaysPicks_btn_row" >
            <button className="collection_btn">Marketplace</button>
        </div>
      </div>
    </div>
  )
}

export default TodaysPick