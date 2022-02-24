import React from "react";
import nft from '../../Assets/nft.png'
import banner from '../../Assets/banner.png'
import './Banner.css'


function Banner() {
  return (
    <div className="banner_conatainer" >
      <div className="container-fluid bg_mobile" >
        <div className="row bg_container"  >
          <div className="col-1"></div>
          <div className="col-md-5 col-lg-5 col-sm-12 left_main_content">
            <span className="left_title_1">Discover, Collect &#x26; Sell Extraordinary Cultural NFTS</span>
            <span className="left_title_2">Connecting Indigenous with Blockchain</span>
            <div className="btn_grp">
            <button className="explore_btn">Explore</button>
            <button className="create_btn">Create</button>
            </div>
          </div>
          <div className="col-md-5 col-lg-5 col-sm-12"> 
              <img className="banner_nft" src={nft}/>
          </div>
          <div className="col-1"></div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
