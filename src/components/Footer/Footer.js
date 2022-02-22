import React from 'react';
import './Footer.css'

function Footer() {
  return (
    <div className='footer_Page'>
        <div className='row'>
            <div className='col-1'></div>
            <div className='col-6'>
                <div className='row'>
                    <div className='col-1'></div>
                    <div className='col-2 listItem_content'>
                        <ul className='footer_list'>
                            <li className='footer_list_item'>Resources</li>
                            <li className='footer_list_item'>Learning Tools</li>
                            <li className='footer_list_item'>Help Center</li>
                            <li className='footer_list_item'>Partners</li>
                            <li className='footer_list_item'>Newsletters</li>
                            <li className='footer_list_item'>Our story</li>
                        </ul>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-2 listItem_content'>
                    <ul className='footer_list'>
                            <li className='footer_list_item'>Marketplace</li>
                            <li className='footer_list_item'>Explore</li>
                            <li className='footer_list_item'>Collections</li>
                            
                        </ul>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-2 listItem_content'>
                    <ul className='footer_list'>
                            <li className='footer_list_item'>My Account</li>
                            <li className='footer_list_item'>Profile</li>
                            <li className='footer_list_item'>Favourites</li>
                            <li className='footer_list_item'>My Collections</li>
                            <li className='footer_list_item'>Settings</li>
                        </ul>
                    </div>
                    <div className='col-1'></div>
                    <div className='col-2 listItem_content'>
                    <ul className='footer_list'>
                            <li className='footer_list_item'>Legal</li>
                            <li className='footer_list_item'>Terms &#x26; Conditions</li>
                            <li className='footer_list_item'>Privacy Policy</li>
                            <li className='footer_list_item'>Available Countries</li>
                            <li className='footer_list_item'>Brand Guidelines</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='col-5'></div>
        </div>
        <div className='row footer_copyRight_con'>
            <h4>Copyright &#9400;  2021. All Rights Reserved.</h4>
        </div>
    </div>
  )
}

export default Footer