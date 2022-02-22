import React from 'react';
import './JoinIndi.css';
import IndiLabCard from '../../Assets/indi-lab-card.PNG';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import RedditIcon from '@mui/icons-material/Reddit';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import KeyboardDoubleArrowUpIcon from '@mui/icons-material/KeyboardDoubleArrowUp';

function JoinIndi() {
  return (
    <div className='join_Indi_page'>
<div className='container-fluid'>
    <div className='row join_Indi_heading_container'>
        <h1 className='join_Indi_heading'>Join INDI Labs Developers Program</h1>
    </div>
    <div className='row joinIndi_image'>
        <img src={IndiLabCard}/>
    </div>
    <div className='row'>
        <div className='col-4'></div>
        <div className='col-4'></div>
        <div className='col-4 joinComunity_rightSide'>
        <div className='col-6'>
            <h3 className='join_community_heading'>Join Our Community</h3>
            <div className='join_community_icons_container'>
                <div className='community_icon_box'>
                <FacebookIcon />
                </div>
                <div className='community_icon_box'>
                <LinkedInIcon/>
                </div>
                <div className='community_icon_box'>
                <TwitterIcon/>
                </div>
                <div className='community_icon_box'>
                <RedditIcon/>
                </div>
            </div>
        </div>
        <div className='col-6'>
        <KeyboardDoubleArrowUpIcon className="go_to_top_btn"/>
        </div>
        </div>
       
        
    </div>
</div>
    </div>
  )
}

export default JoinIndi