import React from 'react';
import './CreateNFTForm.css'
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';
import './CreateNFTForm.css'
// import { FilePond, registerPlugin } from "react-filepond";
// import "filepond/dist/filepond.min.css";
// import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
// import FilePondPluginImagePreview from "filepond-plugin-image-preview";
// import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

function CreateNFTForm() {

  return (
    <div className='createNFTForm_page'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-2">
                    <LogoutIcon/>
                </div> 
                <div className="col-lg-10"></div>
            </div>
            <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6">
                  <div className='row'>
                    <div className='col-lg-3'></div>
                    <div className='col-lg-6'>
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
                                class="form-text text-muted"
                              >
                                The description will be included  on the item's details page underneath it's image.
                              </small>
                               <textarea aria-describedby="emailHelp" class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div class="form-group">
                <div className="col-lg-12 input_label">
                <span >Collection</span>
            </div>
                            <small
                              id="exampleFormControlSelect1"
                              class="form-text text-muted"
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
                                                  <div className="col-lg-10 NFTDetailsList ">
                                                      <h4>Properties</h4>
                                                      <p>Textual traits that show up as rectangles</p>
                                                  </div>
                                                  <div className="col-lg-2">
                                                  <AddIcon/>
                                                  </div>
                                                  </div>
                                              </span>
                                          </li>
                                          <li>
                                              <span>
                                                  <div className="row">
                                                  <div className="col-lg-10 NFTDetailsList">
                                                      <h4>Levels</h4>
                                                      <p>Numerical traits that show up as progreebar</p>
                                                  </div>
                                                  <div className="col-lg-2">
                                                  <AddIcon/>
                                                  </div>
                                                  </div>
                                              </span>
                                          </li>
                                          <li>
                                              <span>
                                                  <div className="row">
                                                  <div className="col-lg-10 NFTDetailsList">
                                                      <h4>Stats</h4>
                                                      <p>Numerical traits that show up as numbers</p>
                                                  </div>
                                                  <div className="col-lg-2">
                                                  <AddIcon/>
                                                  </div>
                                                  </div>
                                              </span>
                                          </li>
                                          <li>
                                              <span>
                                                  <div className="row">
                                                  <div className="col-lg-10 NFTDetailsList">
                                                      <h4>Unlockable Contents</h4>
                                                      <p>Includes unlockable content that can only be revealed by the owner of ther item.</p>
                                                  </div>
                                                  <div className="col-lg-2">
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
                                                  <div className="col-lg-10 NFTDetailsList">
                                                      <h4>Mystery Prize</h4>
                                                      <p>Includes mystery prizes, etc tokens,NFTs.</p>
                                                  </div>
                                                  <div className="col-lg-2">
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
                                                  <div className="col-lg-10 NFTDetailsList">
                                                      <h4>Explicit and Sensitive Content</h4>
                                                      <p>See tis item as explicit and sensitive content</p>
                                                  </div>
                                                  <div className="col-lg-2">
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
                              class="form-text text-muted"
                            >
                              The number of copies that can be minted.
                            </small>
                <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                
                                placeholder="Item name"
                                
                              />
                              </div>
                              <div class="form-group">
                              <div className="col-lg-12 input_label">
                <span >Blockchain</span>
            </div>                    
                            <select
                              class="form-control"
                              id="exampleFormControlSelect1"
                            >
                              <option value="" selected disabled>Select Chain</option>
                              <option>Ethereum</option>
                              <option>BSC Smart Chain</option>
                            </select>
                            
                          </div>
                          <div className="form-group">
                         Drag and Drop
                          </div>
                </form>
                <button className='mintNFT_btn'>Create</button>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    </div>
  )
}

export default CreateNFTForm