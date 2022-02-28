import React from "react";
import "./CollectionProfile.css";
import banner from '../../Assets/banner.png'
import fb from '../../Assets/user-profile-fb.png'
import email from '../../Assets/user-profile-email.png'
import twitter from '../../Assets/user-profile-twitter.png'
import youtube from '../../Assets/user-profile-youtube.png'
import profilePic from '../../Assets/rectangle-11.png'

function CollectionProfileCard() {
  return (
    <div class="container CollectionProfile_card">
      <div class="row">
        <div class="col-md-12 col-sm-12">
          <div class="profile-block">
            <div class="profile-block-thumb cover-container">
              {/* <img
                src={banner}
                alt=""
                title=""
              /> */}
            </div>
            <div class="profile-img">
              <a href="#">
                <img
                  src={profilePic}
                  alt=""
                  title=""
                />
              </a>
            </div>
            <div className="profile-Contact">
              <div className="row CollectionSocialIcon_Container">
                <div className="col-lg-10"></div>
                <div className="col-lg-2 ">
                  <div className="row">
                    <div className="col-lg-3">
                      <img  src={fb} alt='social-fb'/>
                    </div>
                    <div className="col-lg-3">
                      <img src={twitter} alt='social-fb'/>
                    </div>
                    <div className="col-lg-3">
                      <img src={youtube} alt='social-fb'/>
                    </div>
                    <div className="col-lg-3">
                      <img src={email} alt='social-fb'/>
                    </div>
                   
                  </div>
                </div>
              </div>
            </div>
            <div className="profile-name">
              <h2>Kai</h2>
            </div>
            <div className="profile-details">
              <div className="row profile-details-group ">
                <div className="col-lg-1"></div>
                <div className="col-lg-10">
                  <div className="row">
                    <div className="col-lg-6 ">
                      <div className="profile-details-columns">
                        <div className="asset-key">
                          <span>Items</span>
                          <div className="asset-value">xxxxxxx</div>
                        </div>

                        <div className="asset-key">
                          <span>Sales</span>
                          <div className="asset-value">xxxxxxx</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6">
                      <div className="profile-details-columns">
                        <div className="asset-key">
                          <span>Floor</span>
                          <div className="asset-value">xxxxxxx</div>
                        </div>

                        <div className="asset-key">
                          <span>Volume</span>
                          <div className="asset-value">xxxxxxx</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-1"></div>
              </div>
            </div>
            <div className=" container-fluid profile-slogan">
                <div className="row">
                <div className="col-lg-12 profile-slogan-container">
                    <h2>Slogan</h2>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CollectionProfileCard;