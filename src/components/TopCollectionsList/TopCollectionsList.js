import React from 'react';
import ListItem from './ListItem';
import "./TopCollectionsList.css";
import TopCollectionsListData from '../SampleData/TopCollectionsList';

function TopCollectionsList() {
  return (
    <div className="topCollections_page">
      <div className="container-fluid">
          <div className="row topCollections_heading_container">
              <h1 className="topCollections_heading">Top Collections Over <span className='seven_days'>Last 7 days</span></h1>
          </div>
          <div className="row" style={{marginTop:'5%'}} >
              <div className='col-1'></div>
              <div className='col-10'>
                  <div className='row'>
                    <div className='col-4' style={{marginRgiht:'10%'}}>
                    {TopCollectionsListData.slice(0,5).map((e,index)=>
                  <ListItem collectionName={e.collectionName} userName={e.userName} profileImage={e.profileImage} rating={e.rating} index={index}/>
                  )}
                    </div>
                    <div className='col-4' style={{marginRgiht:'10%'}}>
                    {TopCollectionsListData.slice(4,9).map((e,index)=>
                  <ListItem collectionName={e.collectionName} userName={e.userName} profileImage={e.profileImage} rating={e.rating} index={5+index}/>
                  )}
                    </div>
                    <div className='col-4' style={{marginRgiht:'10%'}}>
                    {TopCollectionsListData.slice(9,14).map((e,index)=>
                  <ListItem collectionName={e.collectionName} userName={e.userName} profileImage={e.profileImage} rating={e.rating} index={10+index}/>
                  )}
                    </div>
                  
                  </div>
              </div>
         
              <div className='col-1'></div>
        </div>
        <div className="row topCollections_btn_row" >
            <button className="collection_btn">Stats</button>
        </div>
      </div>
    </div>
  )
}

export default TopCollectionsList