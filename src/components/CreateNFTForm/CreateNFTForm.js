import React from 'react';
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


registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview)

function CreateNFTForm() {

  const [files, setFiles] = useState([])

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
              <table>
                <thead>
                  <tr>
                    <th>Type</th>
                    <th>Name</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><input type='text'  className='form-control' placeholder='Character'/></td>
                    <td><input type='text' className='form-control'  placeholder='Male'/></td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div className="modal-footer">
                
                <button
                  type="button"
                  className="btn btn-primary"
                  
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
             
                <p style={{ color: "black", textAlign: "left" }}>
                This is levels modal.
                </p>
              </div>
              <div className="modal-footer">
                
                <button
                  type="button"
                  className="btn btn-primary"
                  
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
                  <tr>
                    <td><input type='text' placeholder='Character'/></td>
                    <td><input type='text' placeholder='Male'/></td>
                  </tr>
                </tbody>
              </table>
              </div>
              <div className="modal-footer">
                
                <button
                  type="button"
                  className="btn btn-primary"
                  
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