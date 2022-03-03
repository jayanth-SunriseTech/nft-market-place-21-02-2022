import React from "react";
import Logout from "../../Assets/exit.png";
import "./ListItem.css";
import NFT from "../../Assets/NFT-9.png";

import Card2 from "../../Assets/listitem-card-1-edited.png";
import Card1 from "../../Assets/listitem-card-2-edited.png";
import { Link } from "react-router-dom";

function ListItem() {
  return (
    <div className="listItem_page">
      <div className="container-fluid">
        <div className="row listItemRow1">
          <div className="col-lg-2 logoutIcon_container">
            <img src={Logout} />
          </div>
          <div className="col-lg-10 listItem_heading_container">
            <h2>List Item for Sale</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          
          <div className="col-lg-7 col-12 auctionContainer">
          <Link className="nav-link"  to='/fixed-price'>
                <img className="fixedContainer" src={Card1}/>
                </Link>
                <Link className="nav-link"  to='/auction'>
            <img className="fixedContainer smallImg" src={Card2}/>
            </Link>
          </div>
          <div className="col-lg-3 previeewContainer">
          <div className="col-lg-10 listItem_heading_container previewHeading">
            <h2 className="previewHeading">Preview</h2>
          </div>
            <div className="listItemNFTConainer">
              <img src={NFT} />
            </div>
          </div>
          <div className="col-lg-1"></div>
        </div>
      </div>
    </div>
  );
}

export default ListItem;
