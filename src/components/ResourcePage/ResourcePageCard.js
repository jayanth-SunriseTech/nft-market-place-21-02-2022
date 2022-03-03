import React from "react";
import './ResourcePage.css';

function ResourcePageCard({ heading, desc }) {
  return (
    <div className="col-6 col-md-3 col-lg-3 resourceCard">
      <div className="ResourcePageCard" >
        <div className="resourceCard_title_container">
          <h4 className="ResourcePageCard_title">{heading}</h4>
        </div>
        <div className="resourceCard_desc_container">
          <p className="ResourcePageCarddesc">{desc}</p>
        </div>
      </div>
    </div>
  );
}

export default ResourcePageCard;