import React from 'react';
import nft from '../../Assets/nft.png';
import "./NFTCard.css";

function NFTCard({nftImage,price}) {
  return (
    <div className='col-6 col-md-4 col-lg-3'>
    <div className='nftContainer'>
  {/* <img className="card-img-top" src={nft} alt="Card image cap"/> */}
  <div className="NFT_card_body" >
  <img src={nftImage} className="nftCard" />
  <span class="price_container">{price}</span>
  <button class="bid_btn">
    <span className='pc_bid'>Place a Bid</span>
    <span className='mobile_bid'>Bid</span>
    </button> 
    
  </div>
</div>
</div>
  ) 
}
 
export default NFTCard