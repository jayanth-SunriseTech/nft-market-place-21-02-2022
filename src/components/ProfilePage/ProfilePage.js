import React from 'react'
import FilterNav from '../FilterNav/FilterNav'
import NFTCard from '../NFTCard/NFTCard'
import UserProfileCard from '../UserProfileCard/UserProfileCard';
import NFTCardData from '../SampleData/TopTrendingList';

function ProfilePage({ showFilter , setShowFilter }) {
  return (
    <div className='container-fluid ProfilePage_page'>
        <div className='row'>
        <div className='col-1'></div>
            <div className='col-10 collction_profile_card_container'>
            <UserProfileCard/>
            </div>
            <div className='col-1'></div>
        </div>
        <div className='row'>
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

export default ProfilePage