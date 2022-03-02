 import React from 'react';
 import Logout from "../../Assets/exit.png";
 import OurCollectionsList from "../SampleData/OurCollectionsList";
 import CollectionCard from "../CollectionCard/CollectionCard";
 import './MarketPlaceCollection.css'
import CopyRightFooter from '../CopyRightFooter/CopyRightFooter';
 
 function MarketPlaceCollection() {
   return (
       <>
    <div className="MarketPlaceCollection_page"> 
      <div className="container-fluid"> 
        <div className="row MarketPlaceCollectionRow1">
          <div className="col-lg-2 logoutIcon_container">
            <img src={Logout} />
          </div>
          <div className="col-lg-10 MarketPlaceCollection_heading_container">
          
          </div>
        </div>
        <div className="row collection_heading_container">
          <h1 className="our_collections_heading">Our Collections</h1>
        </div>
        <div className='row'> 
        <div className='col-1'></div>
        <div className='col-10'>
        <div className="row ">
                {OurCollectionsList.map((e) => (
                  <CollectionCard 
                    collectionName={e.collectionName}
                    desc={e.desc}
                    collectionImage={e.collectionImage}
                  />
                ))}
              </div>
        </div>
        <div className='col-1'></div>

        </div>
      </div>
    </div>
    <CopyRightFooter/>
    </>
   )
 }
 
 export default MarketPlaceCollection