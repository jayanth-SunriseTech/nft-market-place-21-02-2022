import React from "react";
import CollectionCard from "../CollectionCard/CollectionCard";
import "./OurCollections.css";
import OurCollectionsList from "../SampleData/OurCollectionsList";
import collectionImage1 from "../../Assets/rectangle.png";
import collectionImage2 from "../../Assets/rectangle-11.png";
import collectionImage3 from "../../Assets/rectangle-1.png";
import collectionImage4 from "../../Assets/rectangle-2.png";
import collectionImage5 from "../../Assets/rectangle-11.png";

function OurCollections() {
  return (
    <div className="OurCollections_page">
      <div className="container-fluid">
        <div className="row collection_heading_container">
          <h1 className="our_collections_heading">Our Collections</h1>
        </div>
        <div className="row">
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row mobile_carousel">
              <div className="row collections_pc">
                {OurCollectionsList.map((e) => (
                  <CollectionCard
                    collectionName={e.collectionName}
                    desc={e.desc}
                    collectionImage={e.collectionImage}
                  />
                ))}
              </div>
              <div
                id="carouselExampleIndicators"
                class="carousel slide"
                data-ride="carousel"
              >
                <ol class="carousel-indicators">
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="0"
                    class="active"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="1"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="2"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="3"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="4"
                  ></li>
                  <li
                    data-target="#carouselExampleIndicators"
                    data-slide-to="5"
                  ></li>
                </ol>
                <div class="carousel-inner">
                  <div className="row">
                    <div class="carousel-item active">
                      <div
                        className="col-md-4 col-lg-4 col-12"
                        style={{ height: "440px" }}
                      >
                        <div className="collection_card_container">
                          <div class="card collection_card">
                            <img
                              class="card_img"
                              src={collectionImage2}
                              alt="Card image cap"
                            />
                            <div class="card_body">
                              <h5 class="card-title">Kai</h5>
                              <p class="card-text">Kai represents the current Indigena Team</p>
                              <button class="live_btn">Live</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                      <div
                        className="col-md-4 col-lg-4 col-12"
                        style={{ height: "440px" }}
                      >
                        <div className="collection_card_container">
                          <div class="card collection_card">
                            <img
                              class="card_img"
                              src={collectionImage2}
                              alt="Card image cap"
                            />
                            <div class="card_body">
                              <h5 class="card-title">Kai</h5>
                              <p class="card-text">Enter the sandbox and become neighbour of Johnny Doe</p>
                              <button class="live_btn">Live</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                    <div
                        className="col-md-4 col-lg-4 col-12"
                        style={{ height: "440px" }}
                      >
                        <div className="collection_card_container">
                          <div class="card collection_card">
                            <img
                              class="card_img"
                              src={collectionImage3}
                              alt="Card image cap"
                            />
                            <div class="card_body">
                              <h5 class="card-title">Arrente</h5>
                              <p class="card-text">Enter the sandbox and become neighbour of Johnny Doe</p>
                              <button class="live_btn">Live</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                    <div
                        className="col-md-4 col-lg-4 col-12"
                        style={{ height: "440px" }}
                      >
                        <div className="collection_card_container">
                          <div class="card collection_card">
                            <img
                              class="card_img"
                              src={collectionImage4}
                              alt="Card image cap"
                            />
                            <div class="card_body">
                              <h5 class="card-title">Johnny Doe</h5>
                              <p class="card-text">Enter the sandbox and become neighbour of Johnny Doe</p>
                              <button class="live_btn">Live</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                    <div
                        className="col-md-4 col-lg-4 col-12"
                        style={{ height: "440px" }}
                      >
                        <div className="collection_card_container">
                          <div class="card collection_card">
                            <img
                              class="card_img"
                              src={collectionImage5}
                              alt="Card image cap"
                            />
                            <div class="card_body">
                              <h5 class="card-title">Kai</h5>
                              <p class="card-text">Enter the sandbox and become neighbour of Johnny Doe</p>
                              <button class="live_btn">Live</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="carousel-item">
                    <div
                        className="col-md-4 col-lg-4 col-12"
                        style={{ height: "440px" }}
                      >
                        <div className="collection_card_container">
                          <div class="card collection_card">
                            <img
                              class="card_img"
                              src={collectionImage4}
                              alt="Card image cap"
                            />
                            <div class="card_body">
                              <h5 class="card-title">Johnny Doe</h5>
                              <p class="card-text">Enter the sandbox and become neighbour of Johnny Doe</p>
                              <button class="live_btn">Live</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  class="carousel-control-prev"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="prev"
                >
                  <span
                    class="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Previous</span>
                </a>
                <a
                  class="carousel-control-next"
                  href="#carouselExampleIndicators"
                  role="button"
                  data-slide="next"
                >
                  <span
                    class="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span class="sr-only">Next</span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row btn_row">
          <button className="section-bottom-button">Collections</button>
        </div>
      </div>
    </div>
  );
}

export default OurCollections;
