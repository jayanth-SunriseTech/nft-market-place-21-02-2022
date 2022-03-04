import React, { useContext } from 'react';
import './CreateNFTForm.css'
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import './CreateNFTForm.css'
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useState } from 'react';
import plusIcon from '../../Assets/plus-icon.png';
import CopyRightFooter from '../CopyRightFooter/CopyRightFooter';
import PropertiesContext from '../../Utils/PropertiesContext';


registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

function CreateNFTForm() {

 const propertiesContext = useContext(PropertiesContext) 
  const [files, setFiles] = useState([])
  const [userLevel1, setUserLevel1] = useState([1])
  const [usersetLevel, setUsersetLevel1] = useState([1])
  const [userStats1, setUserStats1] = useState([1])
  const [usersetStats, setUsersetStats1] = useState([1])


  let handleAdd = () => {
    propertiesContext.setPropertiesList([...propertiesContext.propertiesList + 1])
  }

  let handleDelete = (i) => { 

    if(i != 1){

        propertiesContext.propertiesList.splice(i-1,1);
        propertiesContext.setPropertiesList([...propertiesContext.propertiesList])
    }
  }
  let handleLevelAdd = () => {
    propertiesContext.setLevelsList([...propertiesContext.levelsList + 1])
  }

  let handleLevelDelete = (i) => { 

    if(i != 1){

        propertiesContext.levelsList.splice(i-1,1);
        propertiesContext.setLevelsList([...propertiesContext.levelsList])
    }
  }
  let handleStatsAdd= () => {
    propertiesContext.setStatsList([...propertiesContext.statsList + 1])
  }

  let handleStatsDelete = (i) => { 

    if(i != 1){

        propertiesContext.statsList.splice(i-1,1);
        propertiesContext.setStatsList([...propertiesContext.statsList])
    }
  }

  return ( 
    <>
    <div className='createNFTForm_page'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2 col-2 col-md-2">
                    <LogoutIcon/>
                </div> 
                <div className="col-lg-10"></div>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6 headingContainer'>
                      <span className='createNFT_Heading'>Create NFTs</span>
                    </div>
                    <div className='col-lg-3'></div>
                  </div>
                <form>
                <div class="form-group">
                <div className="col-lg-12 input_label">
                <span >Name</span>
            </div>
                <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                
                                placeholder="Item name"
                                
                              />
                              </div>
                              <div class="form-group">
                              <div className="col-lg-12 input_label">
                <span >Description</span>
            </div>
                              
                              <small
                                id="emailHelp"
                                class="form-text text-muted uploadSmallText"
                              >
                                The description will be included  on the item's details page underneath it's image.
                              </small>
                              <textarea name="user-message" id="user-message" class="form-control" cols="20" rows="10" placeholder="Provide a detailed description of your item."></textarea>
                </div>
                <div class="form-group">
                <div className="col-lg-12 input_label">
                <span >Collection</span>
            </div>
                            <small
                              id="exampleFormControlSelect1"
                              class="form-text text-muted uploadSmallText"
                            >
                              This is the collection where your item will appear.
                            </small>
                            <select
                              class="form-select"
                              id="exampleFormControlSelect1"
                            >
                              <option value="" selected disabled>Select Collection</option>
                              <option>1</option>
                              <option>2</option>
                              <option>3</option>
                              <option>4</option>
                              <option>5</option>
                            </select>
                            
                          </div>
                          <div className='form-group'>
                              <div className='row '>
                                  <div className="col-lg-1"></div>
                                  <div className="col-lg-10">
                                      <ul>
                                          <li>
                                              <span>
                                                  <div className="row ">
                                                  <div className="col-lg-10 col-10 col-md-10 NFTDetailsList ">
                                                      <h4>Properties</h4>
                                                      <p>Textual traits that show up as rectangles</p>
                                                  </div>
                                                  <div className="col-lg-2 col-2 col-md-2" >
                                                 
                                                  <img  data-toggle="modal" data-target="#PropertiesModal" className='addIcon' src={plusIcon} alt='add-icon'/>
                                                  
                                                  </div>
                                                  </div>
                                              </span>
                                          </li>
                                          <li>
                                              <span>
                                                  <div className="row">
                                                  <div className="col-lg-10 col-10 col-md-10 NFTDetailsList">
                                                      <h4>Levels</h4>
                                                      <p>Numerical traits that show up as progreebar</p>
                                                  </div>
                                                  <div className="col-lg-2 col-2 col-md-2">
                                                  
                                                  <img data-toggle="modal" data-target="#LevelsModal" className='addIcon' src={plusIcon} alt='add-icon'/>
                                                  </div>
                                                  </div>
                                              </span>
                                          </li>
                                          <li>
                                              <span>
                                                  <div className="row">
                                                  <div className="col-lg-10 col-10 col-md-10 NFTDetailsList">
                                                      <h4>Stats</h4>
                                                      <p>Numerical traits that show up as numbers</p>
                                                  </div>
                                                  <div className="col-lg-2 col-2 col-md-2">
                                                  <img data-toggle="modal" data-target="#StatsModal" className='addIcon' src={plusIcon} alt='add-icon'/>
                                                  </div>
                                                  </div>
                                              </span>
                                          </li>
                                          <li>
                                              <span>
                                                  <div className="row">
                                                  <div className="col-lg-10 col-10 col-md-10 NFTDetailsList">
                                                      <h4>Unlockable Contents</h4>
                                                      <p>Includes unlockable content that can only be revealed by the owner of ther item.</p>
                                                  </div>
                                                  <div className="col-lg-2 col-2 col-md-2">
                                                  <div class="form-check form-switch">
                                                  <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                                                  </div>
                                                  </div>
                                                  </div>
                                              </span>
                                          </li>
                                          <li>
                                              <span>
                                                  <div className="row">
                                                  <div className="col-lg-10 col-10 col-md-10 NFTDetailsList">
                                                      <h4>Mystery Prize</h4>
                                                      <p>Includes mystery prizes, etc tokens,NFTs.</p>
                                                  </div>
                                                  <div className="col-lg-2 col-2 col-md-2">
                                                  <div class="form-check form-switch">
                                                  <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                              
                            />
                                                  </div>
                                                  </div>
                                                  </div>
                                              </span>
                                          </li>
                                          <li>
                                              <span>
                                                  <div className="row">
                                                  <div className="col-lg-10 col-10 col-md-10 NFTDetailsList">
                                                      <h4>Explicit and Sensitive Content</h4>
                                                      <p>See tis item as explicit and sensitive content</p>
                                                  </div>
                                                  <div className="col-lg-2 col-2 col-md-2">
                                                  <div class="form-check form-switch">
                                                  <input
                              class="form-check-input"
                              type="checkbox"
                              role="switch"
                              id="flexSwitchCheckDefault"
                            />
                                                  </div>
                                                  </div>
                                                  </div>
                                              </span>
                                          </li>
                                      </ul>
                                  </div>
                                  <div className="col-lg-1"></div>
                              </div>
                          </div>
                          <div class="form-group">
                          <div className="col-lg-12 input_label">
                <span >Supply</span>
            </div>
                <small
                              id="exampleInputEmail1"
                              class="form-text text-muted uploadSmallText"
                            >
                              The number of copies that can be minted.
                            </small>
                <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                
                                placeholder="Quantity"
                                
                              />
                              </div>
                              <div class="form-group">
                              <div className="col-lg-12 input_label">
                <span >Blockchain</span>
            </div>                    
                            <select
                              class="form-select"
                              id="exampleFormControlSelect1"
                            >
                              <option value="" selected disabled>Select Chain</option>
                              <option>Ethereum</option>
                              <option>BSC Smart Chain</option>
                            </select>
                            
                          </div>
                         
                          <div className="form-group">
                          <div className="col-lg-12 input_label">
                <span >Image, Video, Audio</span>

            </div>  

            <small
                              id="exampleFormControlSelect1"
                              class="form-text text-muted uploadSmallText"
                            >
                              File type supported: JPG, PNG, GIF, SVG, MP4, WEBM, MP3. Max size 100MB
                            </small>
                          <FilePond
                          
        files={files}
        onupdatefiles={setFiles}
        allowMultiple={true}
        maxFiles={3}
        server="/api"
        name="files" 
        labelIdle='Drag & Drop your files <br/>or <span class="filepond--label-action"><br/>Browse Files</span>'
      />
                          </div>
                </form>
                <button className='mintNFT_btn'>Create</button>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
        <div
          className="modal fade"
          id="PropertiesModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="PropertiesModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id="exampleModalLabel"
                  style={{ color: "black" }}
                >
                  Properties Modal
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <table className='PropertiesModalTable'> 
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  {propertiesContext.propertiesList.map((e,i)=>{
                    return (
                      <tr className='inputRow' key={i+1}>
                     
                      <td><div className='charInput'>
                      <button className='delProp_btn' onClick={() =>{handleDelete(i+1)}}><i class="bi bi-x-lg"></i></button><input type='text'  className='form-control characterInput' placeholder='Character'/>
                      </div>
                      </td>
                      <td><input type='text' className='form-control'  placeholder='Male'/></td>
                    </tr>
                    )
                  })}
                 <tr className='add_btn_row'>
                   <td ><button className='add_btn' onClick={handleAdd}>Add</button></td>
                 </tr>
                </tbody>
              </table>
              </div>
              <div className="modal-footer">
                
                <button
                  type="button"
                  className="btn btn-danger"
                  
                  data-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="LevelsModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="LevelsModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id="exampleModalLabel"
                  style={{ color: "black" }}
                >
                  Stats Modal
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <table className='PropertiesModalTable'> 
                <thead>
                  <tr>
                    <div className='row'>
                      <div className='col-2'></div>
                      <div className='col-5'>
                      <th>Name</th>
                      </div>
                      <div className='col-5'>
                      <th>Value</th>
                      </div>
                    </div>
                    
                    
                  </tr>
                </thead>
                <tbody>
                  {propertiesContext.levelsList.map((e,i)=>{
                    return (
                      <tr className='inputRow' key={i+1}>
                     <div className='row'>
                       <div className='col-2'></div>
                       <div className='col-5'>
                       <td><div className='charInput'>
                      <button className='delProp_btn' onClick={() =>{handleLevelDelete(i+1)}}><i class="bi bi-x-lg"></i></button><input type='text'  className='form-control characterInput' placeholder='Character'/>
                      </div>
                      </td>
                       </div>
                       <div className='col-5'>
                       <td><div className='row'>
                         <div className='col-5'>
                         <input onChange={(e)=>setUserLevel1(e.target.value)} type='Number' className='form-control'  value={userLevel1? userLevel1:'3'} min="1" max={usersetLevel}/>
                         </div>
                         <div className='col-2'>
                         <span>of</span>
                         </div>
                         <div className='col-5'>
                         <input onChange={(e)=>setUsersetLevel1(e.target.value)}  type='Number' className='form-control'  value={usersetLevel? usersetLevel:'5'}/>
                         </div>
                       </div>
                         </td>
                       </div>
                     </div>
                      
                     
                    </tr>
                    )
                  })}
                 <tr className='add_btn_row'>
                   <td ><button className='add_btn' onClick={handleLevelAdd}>Add</button></td>
                 </tr>
                </tbody>
              </table>
              </div>
              <div className="modal-footer">
                
                <button
                  type="button"
                  className="btn btn-danger"
                  
                  data-dismiss="modal"
                >
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
        <div
          className="modal fade"
          id="StatsModal"
          tabIndex="-1"
          role="dialog"
          aria-labelledby="StatsModal"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-scrollable modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title"
                  id="exampleModalLabel"
                  style={{ color: "Black" }}
                >
                  Stats Modal
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                {propertiesContext.statsList.map((e,i)=>{
                    return (
                      <tr className='inputRow' key={i+1}>
                     <div className='row'>
                       <div className='col-2'></div>
                       <div className='col-5'>
                       <td><div className='charInput'>
                      <button className='delProp_btn' onClick={() =>{handleStatsDelete(i+1)}}><i class="bi bi-x-lg"></i></button><input type='text'  className='form-control characterInput' placeholder='Character'/>
                      </div>
                      </td>
                       </div>
                       <div className='col-5'>
                       <td><div className='row'>
                         <div className='col-5'>
                         <input onChange={(e)=>setUserStats1(e.target.value)} type='Number' className='form-control'  value={userStats1? userStats1:'3'} min="1" max={usersetStats}/>
                         </div>
                         <div className='col-2'>
                         <span>of</span>
                         </div>
                         <div className='col-5'>
                         <input onChange={(e)=>setUsersetStats1(e.target.value)}  type='Number' className='form-control'  value={usersetStats? usersetStats:'5'}/>
                         </div>
                       </div>
                         </td>
                       </div>
                     </div>
                      
                     
                    </tr>
                    )
                  })}
                   <tr className='add_btn_row'>
                   <td ><button className='add_btn' onClick={handleStatsAdd}>Add</button></td>
                 </tr>
                </tbody>
              </table>
              </div>
              <div className="modal-footer">
                
                <button
                  type="button"
                  className="btn btn-danger"
                  
                  data-dismiss="modal"
                >
                 Save
                </button>
              </div>
            </div>
          </div>
        </div>
    </div>
    <CopyRightFooter/>
    </>
  )
}

export default CreateNFTForm