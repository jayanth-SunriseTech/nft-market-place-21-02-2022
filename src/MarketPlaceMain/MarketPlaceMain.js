import React from 'react'
import FilterNav from '../components/FilterNav/FilterNav'
import Filters from '../components/FilterNav/Filters'
import NFTCard from '../components/NFTCard/NFTCard'
import NFTCardData from '../components/SampleData/TopTrendingList'
import OurCollections from '../components/OurCollections/OurCollections'
import SearchIcon from '@mui/icons-material/Search';

function MarketPlaceMain({ showFilter , setShowFilter }) {
  return (
    <div className='container-fluid'>
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
     
  )
}

export default MarketPlaceMain