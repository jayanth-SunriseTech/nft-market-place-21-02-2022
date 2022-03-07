import React from 'react';
import './ResourcePage.css';
import SearchIcon from '@mui/icons-material/Search';
import resourceData from '../SampleData/ResourcePage';
import ResourcePageCard from './ResourcePageCard';
import FAQAccordion from '../FAQAccordion/FAQAccordion';
import CopyRightFooter from '../CopyRightFooter/CopyRightFooter';
import FAQHeadings from '../SampleData/FAQHeadings';

function ResourcePage() {
  return (
      <>
    <div className='container-fluid ResourcePage'>
<div className='row resourceRow1'>
    
    <div className='col-lg-12'>
    <div className='resource_banner'>
        <div className="resourceSearch_container">
            .
                            <div className="resource_search">
                        <input className="resource_searchbar" placeholder="Search" type="text" name="txtBox" />
                        <button className="resource_search_btn">
                        <SearchIcon color="action" class="resource_search_icon"></SearchIcon>
                        </button>
                        </div>
                        </div>
    </div>
    </div>
    
  
</div>
<div className='row resourceRow2'>
    <div className='col-lg-1'></div>
    <div className='col-lg-10 col-12'>
        <div className='row resourcePageCard_container'>
    {resourceData.map((e)=>
               <ResourcePageCard  heading={e.heading} desc={e.desc} />
               )}
               </div>
    </div>
    <div className='col-lg-1'></div>

</div>

<div className='row resourceRow3'>
    <div className='col-lg-2 col-1'></div>
    <div className='col-lg-8 col-10 faq_accordion_containe'>
        
    <FAQAccordion />
 
    </div>
    <div className='col-lg-2 col-1'></div>
</div>
    </div>
    <CopyRightFooter/>
    </>
  )
}

export default ResourcePage