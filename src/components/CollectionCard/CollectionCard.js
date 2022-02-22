import React from 'react';
import CollectionCardImg from '../../Assets/collection-card.PNG';
import "./CollectionCard.css";

function CollectionCard({collectionName,desc,collectionImage}) {
  return (
    <div className='col-4' style={{height:'440px'}}>
   <div className='collection_card_container'>
    <div class="card collection_card">
    <img class="card_img" src={collectionImage} alt="Card image cap"/>
    <div class="card_body">
      <h5 class="card-title">{collectionName}</h5>
      <p class="card-text">{desc}</p>
      <button  class="live_btn">Live</button>
    </div>
  </div>
  </div>
  </div>
  )
}

export default CollectionCard