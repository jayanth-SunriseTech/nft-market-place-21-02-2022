import React from 'react'
import FilterNav from '../FilterNav/FilterNav'

import NFTCard from '../NFTCard/NFTCard'
import NFTCardData from '../SampleData/TopTrendingList'

import SearchIcon from '@mui/icons-material/Search';
import CopyRightFooter from '../CopyRightFooter/CopyRightFooter';
import './MarketPlaceMain.css'

function MarketPlaceMain({ showFilter , setShowFilter }) {
  return (
    <>
    <div className='container-fluid CollectionMainPage'>
        <div className='row marketPlaceFilterRow' >
        <div className='searchBarMobile'>
                <div className="filtersearchbar_container">
                            <div className="search">
                        <input className="filtersearchbar" placeholder="Search" type="text" name="txtBox" />
                        <button className="search_btn">
                        <SearchIcon color="action" class="search_icon"></SearchIcon>
                        </button>
                        </div>
                        </div>
                </div>
          <FilterNav showFilter={showFilter}  setShowFilter={setShowFilter}/>
           </div>
            <div className="row" >
            <div className='col-1'></div> 
            <div className='col-10'>
              <div className='row'> 
            {NFTCardData.map((e)=>
          <NFTCard nftImage={e.nftImage} price={e.price} />
          )}
          </div>
            </div>
            <div className='col-1'></div>
        
        
            </div>
           
            
            
        </div>
         
         <CopyRightFooter/>
        
        </>
     
  )
}

export default MarketPlaceMain