import React from 'react'
import FilterNav from '../components/FilterNav/FilterNav'
import Filters from '../components/FilterNav/Filters'
import OurCollections from '../components/OurCollections/OurCollections'

function MarketPlaceMain({ showFilter , setShowFilter }) {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <FilterNav showFilter={showFilter}  setShowFilter={setShowFilter}/>
            <div className='row' >
            <OurCollections/>
            </div>
        </div>
    </div>
  )
}

export default MarketPlaceMain