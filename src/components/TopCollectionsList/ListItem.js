import React from 'react';
import "./TopCollectionsList.css";

function ListItem({rating,profileImage,userName,collectionName,index}) {
  return (
      
    <div className='listItem_container'>
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-2'  style={{display:'flex',alignItems:'center',justifyContent:'flex-start'}}>{index+1}</div>
                <div className='col-2' style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                    <img src={profileImage} className='listItem_img'/>
                </div>
                <div className='col-6' style={{display:'flex',alignItems:'flex-start',flexDirection:'column'}}>
                    <h4 className='collectionName'>{collectionName}</h4>
                    <span className='userName'>{userName}</span>
                   
                </div>
                <div className='col-2'style={{display:'flex',alignItems:'center',justifyContent:'center'}}>
                <span className='collection_pts'>+{rating}%</span>
                </div>
            </div>
        </div> 
    </div>
   
  )
}

export default ListItem