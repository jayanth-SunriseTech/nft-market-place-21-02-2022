import React from 'react';
import './ArtistDashboard.css';
import ImageIcon from '@mui/icons-material/Image';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';

function ArtistDashboard() {
  return (
    <div className=' container-fluid ArtistDashboard_page'>
<div className="row">
    <div className="col-lg-2"></div>
    <div className="col-lg-8">
        <div className="row">
            <div className='ArtistDashboard_title'>
                <h2>Artist Dashboard</h2>
            </div>
        </div>
        <div className="row ">
            <div className="container-fluid artistDashboard_iconGrp">
            <div className="">
<ImageIcon/>
</div>
<div className="">
<FileCopyIcon/>
</div>
<div className="">
<AudiotrackIcon/>
</div>
            </div>

        </div>
        <div className="row">
            <button>Create NFTs</button>
            <button>Create my Collection</button>
        </div>
    </div>
    <div className="col-lg-2"></div>
</div>
    </div>
  )
}

export default ArtistDashboard