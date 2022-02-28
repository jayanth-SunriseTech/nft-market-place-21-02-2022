import React from 'react';
import './CreateNFTForm.css'
import LogoutIcon from '@mui/icons-material/Logout';
import AddIcon from '@mui/icons-material/Add';


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
                <form>
                <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input
                                type="text"
                                class="form-control"
                                id="exampleInputEmail1"
                                
                                placeholder="Item name"
                                
                              />
                              </div>
                              <div class="form-group">
                              <label for="exampleInputEmail1">Description</label>
                              <small
                                id="emailHelp"
                                class="form-text text-muted"
                              >
                                The description will be included  on the item's details page underneath it's image.
                              </small>
                               <textarea aria-describedby="emailHelp" class="form-control" aria-label="With textarea"></textarea>
                </div>
                <div class="form-group">
                            <label for="exampleFormControlSelect1">
                             Collection
                            </label>
                            <small
                              id="exampleFormControlSelect1"
                              class="form-text text-muted"
                            >
                              This is the collection where your item will appear.
                            </small>
                            <select
                              class="form-control"
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
                              <div className='row'>
                                  <div className="col-lg-1"></div>
                                  <div className="col-lg-10">
                                      <ul>
                                          <li>
                                              <span>
                                                  <div className="row">
                                                  <div className="col-lg-10">
                                                      <h4>Properties</h4>
                                                      <span>Textual traits that show up as rectangles</span>
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
                                                  <div className="col-lg-10">
                                                      <h4>Levels</h4>
                                                      <span>Numerical traits that show up as progreebar</span>
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
                                                  <div className="col-lg-10">
                                                      <h4>Stats</h4>
                                                      <span>Numerical traits that show up as numbers</span>
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
                                                  <div className="col-lg-10">
                                                      <h4>Unlockable Contents</h4>
                                                      <span>Includes unlockable content that can only be revealed by the owner of ther item.</span>
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
                                                  <div className="col-lg-10">
                                                      <h4>Mystery Prize</h4>
                                                      <span>Includes mystery prizes, etc tokens,NFTs.</span>
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
                                                  <div className="col-lg-10">
                                                      <h4>Explicit and Sensitive Content</h4>
                                                      <span>See tis item as explicit and sensitive content</span>
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
                <label for="exampleInputEmail1">Supply</label>
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
                            <label for="exampleFormControlSelect1">
                             Blockchain
                            </label>
                            
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
                <button>Create</button>
                </div>
                <div className="col-lg-3"></div>
            </div>
        </div>
    </div>
  )
}

export default CreateNFTForm