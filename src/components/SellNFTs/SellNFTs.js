import React from 'react'
import SellNFTCard from './SellNFTCard';
import './SellNFTs.css';

function SellNFTs() {
  return (
    <div className="topCollections_page">
    <div className="container-fluid">
        <div className="row topCollections_heading_container">
            <h1 className="topCollections_heading">Create and Sell your NFTs</h1>
        </div>
        <div className="row" style={{marginTop:'2%'}} >
            <div className='col-1'></div>
            <div className='col-10'>
                <div className='row'>
                <div className="col-3 sellNFTCard">
         <SellNFTCard/>
        </div>
        <div className="col-3 sellNFTCard">
        <SellNFTCard/>
        </div>
        <div className="col-3 sellNFTCard">
        <SellNFTCard/>
        </div>
        <div className="col-3 topCollections_list">
        <SellNFTCard/>
        </div>
                </div>
            </div>
       
            <div className='col-1'></div>
      </div>
      <div className="row createSell_btn_row" >
          <button className="createSell_btn">Create</button>
      </div>
    </div>
  </div>
  )
}

export default SellNFTs