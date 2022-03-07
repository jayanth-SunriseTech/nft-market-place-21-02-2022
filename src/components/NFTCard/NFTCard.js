import React from 'react';
import nft from '../../Assets/nft.png';
import "./NFTCard.css";

function NFTCard({nftImage,price}) {

  const handleClick = () => {
    alert("hi");
  }
  return (
    <div className='col-6 col-md-4 col-lg-3'>
    <div className='nftContainer'>
  {/* <img className="card-img-top" src={nft} alt="Card image cap"/> */}
  <div className="NFT_card_body" >
  <img src={nftImage} className="nftCard" />
  <span class="price_container">{price}</span>
  <button type='button' onClick={handleClick} className="bid_btn pc_bid">Place a Bid
    </button> 
  <button type='button' onClick={handleClick} className="bid_btn mobile_bid"> Bid
    </button> 
    
  </div>
</div>
</div>
  ) 
}
 
export default NFTCard