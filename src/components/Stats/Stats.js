import React from 'react';
import './Stats.css'
import NFT from "../../Assets/NFT-5.png";
import Tilt from "react-parallax-tilt";
import CopyRightFooter from '../CopyRightFooter/CopyRightFooter';
function Stats() {
  return (
    <>
    <div className='container-fluid stats_page'>
      <div className='row'>
        <div className='col-lg-1 col-md-1 col-1'></div>
        <div className='col-lg-10 col-md-10 col-10'>
        <div className='stats_heading_container'>
          <h2>Top NFTs </h2>
          <small>
          The top NFTS on INDIGENA, Ranked by volume, floor price and other statistic
          </small>
        </div>
        </div>
        <div className='col-lg-1 col-md-1 col-1'></div>
      
      </div>
     
<div className=' row stats_btn_grp'>
  <div className='col-lg-2'></div>
  <div className='col-lg-8 stats_btn_container'>
  <div class="form-group stats-form">
                            
                            <select
                              class="form-select stats-select"
                              id="exampleFormControlSelect1"
                            >
                              <option value="" selected disabled>Last 7 days</option>
                              <option>Last 2 weeks</option>
                              <option>Last Month</option>
                            </select>
                            
                          </div>
  <div class="form-group stats-form">
                            
                            <select
                              class="form-select stats-select"
                              id="exampleFormControlSelect1"
                            >
                              <option value="" selected disabled>All Categories</option>
                              <option>Fixed Price</option>
                              <option>Auction</option>
                            </select>
                            
                          </div>
  <div class="form-group stats-form">
                            
                            <select
                              class="form-select stats-select"
                              id="exampleFormControlSelect1"
                            >
                              <option value="" selected disabled>All chains</option>
                              <option>Ethereum</option>
                              <option>BSC SmartChain</option>
                            </select>
                            
                          </div>
  </div>
  <div className='col-lg-2'></div>
 <div className='row'>
   <div className='col-lg-1'></div>
   <div className='col-lg-10 table-responsive'>
   <table className='stats_table'>
     <thead>
       <tr>
         <th>Collection</th>
         <th>Floor Price</th>
         <th>Volume(24)</th>
         <th>Volume %(24)</th>
         <th>Avg Price(24)</th>
         <th>Avg Price %(24)</th>
         <th>Floor %(24)</th>
       </tr>
     </thead>
     <tbody>
       <tr >
         <td><div className="row UserCollectionPageRow1">
   
        
         
         
          <div className="profileImage_container">
                  
      <img className="stats-profile-image" src={NFT} alt="" />
      <div className='stats-details'>
          <div>
          <span className='stats-details-name'>Lorem Ipsum</span>
          </div>
        
      </div>
      
                  </div>
          
      
    
         <div className="col-lg-10 UserCollectionPage_heading_container">
         
         </div>
       </div></td>
         <td>12.00</td>
         <td>505.20</td>
         <td>+70.62%</td>
         <td>20.21</td>
         <td>+50.14%</td>
         <td>+2.65%</td>
       </tr>
       <tr >
         <td><div className="row UserCollectionPageRow1">
   
        
         
         
          <div className="profileImage_container">
                  
      <img className="stats-profile-image" src={NFT} alt="" />
      <div className='stats-details'>
          <div>
          <span className='stats-details-name'>Lorem Ipsum</span>
          </div>
        
      </div>
      
                  </div>
          
      
    
         <div className="col-lg-10 UserCollectionPage_heading_container">
         
         </div>
       </div></td>
         <td>12.00</td>
         <td>505.20</td>
         <td>+70.62%</td>
         <td>20.21</td>
         <td>+50.14%</td>
         <td>+2.65%</td>
       </tr>
       <tr >
         <td><div className="row UserCollectionPageRow1">
   
        
         
         
          <div className="profileImage_container">
                  
      <img className="stats-profile-image" src={NFT} alt="" />
      <div className='stats-details'>
          <div>
          <span className='stats-details-name'>Lorem Ipsum</span>
          </div>
        
      </div>
      
                  </div>
          
      
    
         <div className="col-lg-10 UserCollectionPage_heading_container">
         
         </div>
       </div></td>
         <td>12.00</td>
         <td>505.20</td>
         <td>+70.62%</td>
         <td>20.21</td>
         <td>+50.14%</td>
         <td>+2.65%</td>
       </tr>
       <tr >
         <td><div className="row UserCollectionPageRow1">
   
        
         
         
          <div className="profileImage_container">
                  
      <img className="stats-profile-image" src={NFT} alt="" />
      <div className='stats-details'>
          <div>
          <span className='stats-details-name'>Lorem Ipsum</span>
          </div>
        
      </div>
      
                  </div>
          
      
    
         <div className="col-lg-10 UserCollectionPage_heading_container">
         
         </div>
       </div></td>
         <td>12.00</td>
         <td>505.20</td>
         <td>+70.62%</td>
         <td>20.21</td>
         <td>+50.14%</td>
         <td>+2.65%</td>
       </tr>
       <tr >
         <td><div className="row UserCollectionPageRow1">
   
        
         
         
          <div className="profileImage_container">
                  
      <img className="stats-profile-image" src={NFT} alt="" />
      <div className='stats-details'>
          <div>
          <span className='stats-details-name'>Lorem Ipsum</span>
          </div>
        
      </div>
      
                  </div>
          
      
    
         <div className="col-lg-10 UserCollectionPage_heading_container">
         
         </div>
       </div></td>
         <td>12.00</td>
         <td>505.20</td>
         <td>+70.62%</td>
         <td>20.21</td>
         <td>+50.14%</td>
         <td>+2.65%</td>
       </tr>
       
     </tbody>
   </table>
   </div>
   <div className='col-lg-1'></div>
  
 </div>

</div>
      </div>
      <CopyRightFooter/>
      </>
  )
}

export default Stats