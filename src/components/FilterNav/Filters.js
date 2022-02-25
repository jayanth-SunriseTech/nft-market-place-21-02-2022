import React, { useState } from "react";
import './FilterNav.css';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import FilterListIcon from '@mui/icons-material/FilterList';
import SellIcon from '@mui/icons-material/Sell';
import GridViewIcon from '@mui/icons-material/GridView';
import ShowChartIcon from '@mui/icons-material/ShowChart';

function Filters({ showFilter , setShowFilter }) {
    const[showStatusDropDown,setShowStatusDropDown] = useState(false);
    const[showPriceDropDown,setShowPriceDropDown] = useState(false);
    const[showFileDropDown,setShowFileDropDown] = useState(false);
    const[showSaleDropDown,setShowSaleDropDown] = useState(false);

    const handleStatus = () => {
        setShowStatusDropDown(!showStatusDropDown)
    }
    const handlePrice = () => {
        setShowPriceDropDown(!showPriceDropDown)
    }
    const handleFile = () => {
        setShowFileDropDown(!showFileDropDown)
    }
    const handleSale = () => {
        setShowSaleDropDown(!showSaleDropDown)
    }

    const handleShowFilter = () => {
        setShowFilter(!showFilter)
    }

  return (
    <div className=" container-fluid filterOtpions_container">
      <div className="row dropdownRow">
          <div className="col-2 icon">
        
          </div>
          <div className="col-8 filtertext">
              Filters
          </div>
          <div onClick={handleShowFilter} className="col-2 downIcon">
          <ArrowBackIcon/>
          </div>
          
      </div>
      <div onClick={handleStatus} className={showStatusDropDown ? "row dropdownRow statusdropDown_active":"row dropdownRow statusdropDown"}>
          <div className="col-2 icon">
          <AnalyticsIcon/>
          </div>
          <div className="col-8 text">
              Status
          </div>
          <div  className="col-2 downIcon">
          <KeyboardArrowDownIcon/>
          </div>
          <div className={showStatusDropDown ? "dropDown_content StatusdropDown_content_active":"StatusdropDown_content"} >
              <button className="status_btn">Fixed Price</button>
              <button className="status_btn">Auction</button>
          </div>
      </div>
      <div onClick={handlePrice} className={showPriceDropDown ? "row dropdownRow statusdropDown_active":"row dropdownRow statusdropDown"}>
      <div className="col-2 icon">
          <SellIcon/>
          </div>
          <div className="col-8 text">
              Price
          </div>
          <div className="col-2 downIcon">
          <KeyboardArrowDownIcon/>
          </div>
          <div  className={showPriceDropDown ? "dropDown_content PricedropDown_content_active container-fluid":" dropDown_content PricedropDown_content container-fluid"} >
              <div className="row currencyRow">
              <input type='text' className="CurrencyInput" placeholder="United States Dollar (USD)" />
              </div>
              <div className="row minRow">
              <input type='text' className="sortInput" placeholder="Min" />
              <span>To</span>
              <input type='text' className="sortInput" placeholder="Max" />
              </div>
              <button className="filterapply_btn">Apply</button>
          </div>
      </div>
      <div onClick={handleFile} className={showFileDropDown ? "row dropdownRow filedropDown_active":"row dropdownRow filedropDown"}>
      <div className="col-2 icon">
          <GridViewIcon/>
          </div>
          <div className="col-8 text">
              Files Type
          </div>
          <div className="col-2 downIcon">
          <KeyboardArrowDownIcon/>
          </div>
          <div className={showFileDropDown ? "dropDown_content FiledropDown_content_active ":" dropDown_content FiledropDown_content "} >
             <input type='radio' id="image" value='Image' name="file"/>
             <label for='image'>Image</label> 
             <input type='radio' id="Video" value='Video' name="file"/>
             <label for='Video'>Video</label> 
             <input type='radio' id="Audio" value='Audio' name="file"/>
             <label for='Audio'>Aduio</label> 
             
          </div>
      </div>
      <div onClick={handleSale} className={showSaleDropDown ? "row dropdownRow saledropDown_active":"row dropdownRow saledropDown"}>
      <div className="col-2 icon">
          <ShowChartIcon/>
          </div>
          <div className="col-8 text">
              On Sale In
          </div>
          <div className="col-2 downIcon">
          <KeyboardArrowDownIcon/>
          </div>
          <div className={showSaleDropDown ? "dropDown_content StatusdropDown_content_active":"StatusdropDown_content"} >
              <button className="status_btn">Fixed Price</button>
              <button className="status_btn">Auction</button>
          </div>
      </div>
      </div>
 
  );
}

export default Filters;
