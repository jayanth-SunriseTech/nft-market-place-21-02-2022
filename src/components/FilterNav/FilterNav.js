import React from 'react'
import Filter from '../../Assets/filter.png'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import FilterListIcon from '@mui/icons-material/FilterList';
import Filters from "./Filters";
import './FilterNav.css'

function FilterNav({ showFilter , setShowFilter }) {
    

    const handleShowFilter = () => {
        setShowFilter(!showFilter)
    }
  return (
    <div className='container-fluid filter_nav_container' >
        <div  className='row filterNavRow'>
            <div className='col-sm-1'></div>
            
            <div className='col-md-12 col-lg-12 col-sm-10 filterSearchContainer'>
                <div onClick={handleShowFilter} className='filterIcon'>
                <FilterListIcon/>
                </div>
                <div className='searchBar'>
                <div className="filtersearchbar_container">
                            <div className="search">
                        <input className="filtersearchbar" placeholder="Search" type="text" name="txtBox" />
                        <button className="search_btn">
                        <SearchIcon color="action" class="search_icon"></SearchIcon>
                        </button>
                        </div>
                        </div>
                </div>
                
                <div className='sortBy_btn_container'>
                    <button className='filter_btns sortBy_btn'>Sort by <span className='dropDownIcon'><KeyboardArrowDownIcon/></span></button>
                </div>
                <div className='collections_btn_container'>
                    <button className='filter_btns filterCollection_btn'>Collections</button>
                </div>
            </div>
            <div className='col-sm-1'></div>
            
        </div>
        <div className='row filterRow'>
        {showFilter ? (<>
        <Filters className="filterOnPage" showFilter={showFilter}  setShowFilter={setShowFilter}/>
        </>) : ("")}
        </div>
    </div>
  )
}

export default FilterNav