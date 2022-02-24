import React from 'react'
import NFTCard from '../NFTCard/NFTCard';
import NFTCardData from '../SampleData/TopTrendingList';
import "./TopTrending.css";


function TopTrending() {
  return (
    <div className='topTrending_page'>
        <div className="container-fluid">
          <div className="row trending_heading_container">
              <h1 className="top_trending_heading">Top Trending</h1>
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
        <div className="row btn_row" >
            <button className="section-bottom-button trending_btn">Trending</button>
        </div>
      </div>
    </div>
  )
}

export default TopTrending