import React from 'react';
import nft from '../../Assets/nft.png';
import "./NFTCard.css";

function NFTCard() {
  return (
    <div className='nftContainer'>
  {/* <img className="card-img-top" src={nft} alt="Card image cap"/> */}
  <div className="card_body" >
  <img src={nft} className="nftCard" />
  <span class="price_container">3.12 INDI</span>
  <button class="bid_btn">Place a Bid</button>
    
  </div>
</div>
    
  )
}

export default NFTCard