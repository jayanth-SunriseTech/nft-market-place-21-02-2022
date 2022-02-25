import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import Logout from '../../Assets/exit.png'
import NFT from '../../Assets/NFT-9.png'
import Filters from "../FilterNav/Filters";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import HistoryIcon from '@mui/icons-material/History';
import LockIcon from '@mui/icons-material/Lock';
import SellIcon from '@mui/icons-material/Sell';
import VisibilityIcon from '@mui/icons-material/Visibility';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import './MenuBoard.css'

function MenuBoard() {
  return (
    <div className="menuBoard_page">
      <div className="container-fluid">
        <div className=" row row1">
          <div className="col-1">
           <img src={Logout}/>
          </div>
          <div className="col-8"></div>
          <div className="col-3 menu_btn_grp">
            <div className="edit_btn_div">
              <button className="edit_btn">Edit</button>
            </div>
            <div className="list_btn_div">
              <button className="list_btn">List</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-1"></div>
              <div className="col-lg-4">
                <div className="menuNFTConainer">
                  <img  src={NFT} />
                </div>
              </div>
              <div className="col-lg-5">
                  <div className="row nftTitleHeadingContainer detailsRow" >
                    <div className="heading">
                    <h3 className="NFTHeading">Purple Overlay</h3>
                    </div>
                    <div className="ratings">
                      <span>Owned by Itz_tari</span>
                      <span><VisibilityIcon /> 200 Views</span>
                      <span><StarBorderIcon/></span>
                      <span><StarBorderIcon/></span>
                      <span><StarBorderIcon/></span>
                      <span><StarBorderIcon/></span>
                      <span><StarBorderIcon/></span>
                    </div>
                  </div>
                  <div className="row unclockContainer detailsRow">
                    <div className="unlockIcon"><LockIcon/></div>
                  <span className="proContentHeading">Includes Unlockable Content</span>
                  </div>
                  <div className="row saleContainer detailsRow">
                    <div className="sale">
                      <span className="saleTitle">Sale ends December 28,2022 at 11:38 pm  ACDT</span>
                    </div>
                      
                      <div className=" container placeBid_btn">
                        <div >
                        <button >Place Bid</button>
                        </div>
                        <div >
                        <button className="makeOffer_btn">Make Offer</button>
                        </div>
                      </div>
                  </div>
                  <div className="row NFTPRiceContainer">
                    <h5 className="currentPrice">Current Price  <span className=" NFTPrice">3.05 INDI</span></h5>
                  </div>
              </div>
              <div className="col-lg-2"></div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-4">
            <Filters/>
          </div>
          <div className="col-lg-5">
            <div className="price_history_container">
              {/* <div className="priceBox"></div> */}
              <div class="card mt-3 menuBoard_card">
                          <div class="card-header bg-light">
                            <div className="row">
                            <div className="col-1 menuIcon">
                            <ShowChartIcon/>
                            </div>
                            <div className="col-10 menuText"><span className="card_title">Price History</span></div>
                            <div className="col-1 menuDownIcon">
                            <KeyboardArrowDownIcon/>
                            </div>
                            </div>
                          </div>
                          <div class="card-body">
                        
                          </div>
                        </div>
            </div>
            <div className="Listings_container">
            {/* <div className="priceBox"></div> */}
            <div class="card mt-3 menuBoard_card">
                          <div class="card-header bg-light">
                            <div className="row">
                            <div className="col-1 menuIcon">
                            <SellIcon/>
                            </div>
                            <div className="col-10 menuText"><span className="card_title">Listings</span></div>
                            <div className="col-1 menuDownIcon">
                            <KeyboardArrowDownIcon/>
                            </div>
                            </div>
                          </div>
                          <div class="card-body">
                           
                          </div>
                        </div>
            </div>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-10">
          {/* <div className="priceBox"></div> */}
          <div class="card mt-3 menuBoard_card">
                          <div class="card-header bg-light">
                            <div className="row">
                            <div className="col-1 menuIcon">
                            <HistoryIcon/>
                            </div>
                            <div className="col-10 menuText"> <span className="card_title">Recent Activity</span></div>
                            <div className="col-1 menuDownIcon">
                            <KeyboardArrowDownIcon/>
                            </div>
                            </div>
                          </div>
                          <div class="card-body">
                        
                          </div>
                        </div>
          </div>
          <div className="col-lg-1"></div>
        
        </div>
      </div>
    </div>
  );
}

export default MenuBoard;
