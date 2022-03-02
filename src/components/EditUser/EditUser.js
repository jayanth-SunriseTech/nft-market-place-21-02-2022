import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useState } from "react";
import CopyRightFooter from "../CopyRightFooter/CopyRightFooter";
import './EditUser.css'
import { useRef } from "react";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function EditUser() {
  const [files, setFiles] = useState([]);
  const[file,setFile] = useState(null);
  const fileInput=useRef();

  return (
    <>
      <div className="EditUser_page">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-2 col-2 col-md-2">
              <LogoutIcon />
            </div>
            <div className="col-lg-10"></div>
          </div>
          <div className="row">
            <div className="col-lg-3"></div>
            <div className="col-lg-6">
              <div className="row">
                <div className="col-lg-3"></div>
                <div className="col-lg-6 headingContainer">
                  <span className="EditUser_Heading">
                    Account
                  </span>
                </div>
                <div className="col-lg-3"></div>
              </div>
              <form>
              <div class="form-group">
                  <div className="col-lg-12 collection_input_label">
                    <span>Profile</span>
                  </div>
                  <small
                    id="exampleFormControlSelect1"
                    class="form-text text-muted collectionSmallText"
                  >
                    Profile Details can be edited here.
                  </small>
                  <input
                    type="text"
                    class="form-control user-name-input"
                    id="exampleInputEmail1"
                    placeholder="First name"
                  />
                  <input
                    type="text"
                    class="form-control user-name-input"
                    id="exampleInputEmail1"
                    placeholder="Last name"
                  />
                  <input
                    type="text"
                    class="form-control user-name-input"
                    id="exampleInputEmail1"
                    placeholder="User name"
                  />
                </div>
                <div className="form-group">
                <div className="col-lg-12 collection_input_label">
                    <span>Profile Image</span>
                  </div>
                  <div className="profileImage_container">
                  <label className="imglabel" htmlFor="fileInput">
      
      <span className='writeIcon'>{file && ( 
      <img className="imgUpload" src={URL.createObjectURL(file)} alt="" />
      )}
            </span>
          </label>
         
            <input type='file' id="fileInput" style={{ display: "none" }} onChange={(e) => setFile(e.target.files[0])} ref={fileInput} />
            <div className=" container editImg_btn">
                        <div >
                        <button >Change</button>
                        </div>
                        <div > 
                        <button className="remove_btn">Remove</button>
                        </div>
                      </div>
                  </div>
                </div>
                <div className="form-group">
                <div className="col-lg-12 collection_input_label">
                  <span>Banner Image</span>
                </div>

                <small
                  id="exampleFormControlSelect1"
                  class="form-text text-muted collectionSmallText"
                >
                  This image will appear at the top of your collection page
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
                 <div className="row">
                  <div className=" container editUser_btn">
                        <div >
                        <button >Change</button>
                        </div>
                        <div > 
                        <button className="remove_btn">Remove</button>
                        </div>
                      </div>
                  </div>

              </div>
                 
               
               
                <div class="form-group">
                  <div className="col-lg-12 collection_input_label">
                    <span>About</span>
                  </div>

                  <small
                    id="emailHelp"
                    class="form-text text-muted collectionSmallText"
                  >
                   Describe about yourself here.
                  </small>
                  <textarea
                    name="user-message"
                    id="user-message"
                    class="form-control"
                    cols="20"
                    rows="10"
                    placeholder="Provide a detailed description of yourself."
                  ></textarea>
                </div>

                <div class="form-group">
                  <div className="col-lg-12 collection_input_label">
                    <span>Personal Information</span>
                  </div>
                  <small
                    id="exampleFormControlSelect1"
                    class="form-text text-muted collectionSmallText"
                  >
                    Profile Details can be edited here.
                  </small>
                  <input
                    type="text"
                    class="form-control user-name-input"
                    id="exampleInputEmail1"
                    placeholder="Email address"
                  />
                  <input
                    type="text"
                    class="form-control user-name-input"
                    id="exampleInputEmail1"
                    placeholder="Phone Number"
                  />
                   <select class="form-select" id="exampleFormControlSelect1">
                    <option value="" selected disabled>
                      Country
                    </option>
                    <option>USA</option>
                    <option>India</option>
                    <option>Japan</option>
                    <option>Australia</option>
                    <option>United Kingdom</option>
                  </select>
                </div>
                <div class="form-group">
                  <div className="col-lg-12 collection_input_label">
                    <span>Social Links</span>
                  </div>
                  <small
                    id="exampleFormControlSelect1"
                    class="form-text text-muted collectionSmallText"
                  >
                    Add your Social profile links here.
                  </small>
                  <input
                    type="text"
                    class="form-control user-name-input"
                    id="exampleInputEmail1"
                    placeholder="Facebook"
                  />
                  <input
                    type="text"
                    class="form-control user-name-input"
                    id="exampleInputEmail1"
                    placeholder="Twitter"
                  />
                  <input
                    type="text"
                    class="form-control user-name-input"
                    id="exampleInputEmail1"
                    placeholder="Other"
                  />
                </div>
              </form>
              <div className="row">
              <small
                    id="exampleFormControlSelect1"
                    class="form-text text-muted AccountCreation"
                  >
                    The account was created on January 5, 2020 , 8:35:40 PM 
                  </small>
              </div>
              <button className="mintNFT_btn">Create</button>
            </div>
            <div className="col-lg-3"></div>
          </div>
        </div>
      </div>
      <CopyRightFooter />
    </>
  );
}

export default EditUser;
