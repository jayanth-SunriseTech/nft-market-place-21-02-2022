import React from 'react';
import './Auction.css'

function Auction() {
   

    const handleSelection = (e) => {
        const checked = e.target.checked;

        if (checked) {
            console.log('checked')
        } 
        else {
            console.log('Not checked')
        }
    }
  return (
    <div className=' container-fluid Auction_page'>
<div className='row'>
    <div className="col-lg-2"></div>
    <div className="col-lg-8">
        <form>
        <div className="row">
            <div className="col-lg-12 input_label"> 
                <span >Method</span>
            </div>
        </div>
        <div className='row'>
        <div className='col-lg-12'>
        <div class="form-group">
                                  
                                  <select
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                  >
                                    <option>Sell to highest bidder</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
        </div>
        </div>
        <div className="row">
            <div className="col-lg-12 input_label">
                <span >Price</span>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-2">
            <div class="form-group">
                              
                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="INDI"
                                
                              />
            </div>
            </div>
            <div className="col-lg-10">
            <div class="form-group">
                              
                              <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                aria-describedby="emailHelp"
                                placeholder="Amount"
                                
                              />
            </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12 input_label">
                <span >Duration</span>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-12">
            <div class="form-group">
                                  
                                  <select
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                  >
                                    <option>7 days</option>
                                    <option>14 days</option>
                                    <option>21 days</option>
                                  </select>
                                </div>
            </div>
        </div>
        <div className="row">
            <div className="col-lg-10 input_label">
                <span >Include Reserve Price</span>
            </div>
            <div className="col-lg-2">

<div class="form-check form-switch">
                                                  <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                              onClick={(e)=>handleSelection(e)}
                            />
</div>
            </div>
        </div>
        </form>
        <button className='section-bottom-button'>List for sale</button>
    </div>
    <div className="col-lg-2"></div>
</div>
    </div>
  )
}

export default Auction