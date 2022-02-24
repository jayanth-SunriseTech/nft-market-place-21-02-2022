import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { connectWallet, connectFailed } from "../../redux/WalletAction";
import SearchIcon from '@mui/icons-material/Search';
import profileImg from '../../Assets/profile.png'
import walletImage from '../../Assets/wallet.png'
import brandLogo from '../../Assets/logo.png'
import './Navbar.css'


const Navbar = () => {
    const dispatch = useDispatch();
    const wallet = useSelector((state) => state.WalletConnect);
    console.log(wallet);

    const connect = () => { 
        console.log('connect');
        dispatch(connectWallet());
    }

    const errorDiv = () => {
        return (
            <p>Wallet Disconnected!</p>
        )
    }
    const disconnect = () => {
        const { web3Modal } = wallet;
        web3Modal.clearCachedProvider();
        dispatch(connectFailed(errorDiv()));
    }
    return (
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className=" container-fluid navbar_mobile" style={{margin:0}}>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
                <img src={brandLogo} className='brand_logo_img'/>
                { !wallet.connected &&  
                                <button className='navbar-toggler mr-auto ml-auto connect_btn_mobile' onClick={connect}>Connect Wallet</button> 
                            }
                        { wallet.connected && 
                            <button className='navbar-toggler mr-auto ml-auto btn btn-danger' onClick={disconnect} >Disconnect: {wallet.address.slice(0, 5) + '...' + wallet.address.slice(-5)}</button>
                        }
                        <div className="searchbar_container">
                            <div className="search">
                        <input className="searchbar" place holder="Search" type="text" name="txtBox" />
                        <button className="search_btn">
                        <SearchIcon color="action" class="search_icon"></SearchIcon>
                        </button>
                        </div>
                        </div>
                        
                        <ul class=" collapse navbar-collapse navbar-nav me-auto mb-2 mb-lg-0 nav_list_container" id="navbarTogglerDemo01">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Explore</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Create</a>
        </li>
        
        <li class="nav-item">
          <a class="nav-link " href="#">Stats</a>
        </li>
        <li class="nav-item">
          <a class="nav-link " href="#">Resources</a>
        </li>
      </ul>
      <div className="account_icons_container">
      <div className="navbar navbar-collapse d-none d-md-block">
      <img src={profileImg} class="user_icon"/>
      <img src={walletImage} class="wallet_icon"/>
                    <div className="nav navbar-nav ms-auto ml-auto">
                        { !wallet.connected &&  
                                <button className='btn connect_btn_pc' onClick={connect}>Connect Wallet</button> 
                            }
                        { wallet.connected && 
                            <button className='btn btn-danger'onClick={disconnect} >Disconnect: {wallet.address.slice(0, 5) + '...' + wallet.address.slice(-5)}</button>
                        }
                    </div>
                </div>
      </div>
                
            </div>
        </nav>
    );
}

export default Navbar;