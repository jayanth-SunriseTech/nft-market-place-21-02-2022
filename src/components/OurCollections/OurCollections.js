import React from "react";
import CollectionCard from "../CollectionCard/CollectionCard";
import "./OurCollections.css";
import OurCollectionsList from '../SampleData/OurCollectionsList'

function OurCollections() {
  return (
    <div className="OurCollections_page">
      <div className="container-fluid">
          <div className="row collection_heading_container">
              <h1 className="our_collections_heading">Our Collections</h1>
          </div>
        <div className="row" >
          <div className="col-1"></div>
          <div className="col-10">
            <div className="row">
          {OurCollectionsList.map((e)=>
            
            <CollectionCard collectionName={e.collectionName} desc={e.desc} collectionImage={e.collectionImage}/>
          )}
</div>
          </div>
          <div className="col-1"></div>
        </div>
        <div className="row btn_row" >
            <button className="collection_btn">Collections</button>
        </div>
      </div>
    </div>
  );
}

export default OurCollections;
