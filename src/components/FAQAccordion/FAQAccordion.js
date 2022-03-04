import React from 'react';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import FilterListIcon from '@mui/icons-material/FilterList';
import SellIcon from '@mui/icons-material/Sell';
import GridViewIcon from '@mui/icons-material/GridView';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import plusIcon from "../../Assets/plus-icon.png";

import './FAQAccordion.css'

function FAQAccordion({id,heading,dataBsTarget,collapseId}) { 
  return (
    <div>
        <div class="accordion faqAccordion accordion-flush" id="accordionFlushExample">
  <div class="accordion-item faqAccordion-item">
    <h2 class="accordion-header" id={id}>
      <button class="accordion-button collapsed first " type="button" data-bs-toggle="collapse" data-bs-target={dataBsTarget} aria-expanded="false" aria-controls="flush-collapseOne">
        <div className='row'>
        
          <div className="col-8 faqtext">
              {heading}
          </div>
          {/* <div className="col-2 icon">
          <img src={plusIcon} alt='faq-plus-icon'/>
          </div> */}
        </div>
      </button> 
    </h2>
    <div id={collapseId} class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body faqAccordion_body">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
velit esse cillum dolore eu fugiat nulla pariatur.</div>
    </div>
  </div>
  
</div>
    </div>
  )
}

export default FAQAccordion