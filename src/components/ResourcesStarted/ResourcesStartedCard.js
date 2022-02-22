import React from "react";
import './ResourcesStarted.css'

function ResourcesStartedCard({image}) {
  return (
    <div className="col-4">
    <div className="resourceCard_Container">
      {/* <img className="card-img-top" src={nft} alt="Card image cap"/> */}
      <div className="resource_Card_body">
        <img
          src={image}
          className="resourceCard_img"
        />
      </div>
    </div>
    </div>
  );
}

export default ResourcesStartedCard;
