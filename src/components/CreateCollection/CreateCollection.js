import React from "react";
import "./CreateCollection.css"
import LogoutIcon from "@mui/icons-material/Logout";
import AddIcon from "@mui/icons-material/Add";
import { FilePond, registerPlugin } from "react-filepond";
import "filepond/dist/filepond.min.css";
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";
import { useState } from "react";
import plusIcon from "../../Assets/plus-icon.png";
import CopyRightFooter from "../CopyRightFooter/CopyRightFooter";

registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);

function CreateCollection() {
  const [files, setFiles] = useState([]);

  return (
      <>
    <div className="CreateCollection_page">
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
                <span className="createNFT_Heading">Create my Collections</span>
              </div>
              <div className="col-lg-3"></div>
            </div>
            <form>
              <div className="form-group LogoUpload">
                <div className="col-lg-12 collection_input_label">
                  <span>Logo Image</span>
                </div>

                <small
                  id="exampleFormControlSelect1"
                  class="form-text text-muted collectionSmallText"
                >
                  This image will also be used for Navigation
                </small>
                <FilePond
                  files={files}
                  onupdatefiles={setFiles}
                  allowMultiple={true}
                  maxFiles={3}
                  server="/api"
                  name="files"
                  labelIdle='Drag & Drop your files <br/>or <span class="filepond--label-action"><br/>Browse Files</span>'
                  className="logoUpload"
                />
              </div>
              <div className="form-group FeaturedUpload">
                <div className="col-lg-12 collection_input_label">
                  <span>Featured Image</span>
                </div>

                <small
                  id="exampleFormControlSelect1"
                  class="form-text text-muted collectionSmallText"
                >
                  This Image will be used for featuring your collection on the
                  homepage, category page, or other promotional areas of
                  Indigena Market
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
              </div>
              <div class="form-group">
                <div className="col-lg-12 collection_input_label">
                  <span>Name</span>
                </div>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputEmail1"
                  placeholder="Item name"
                />
              </div>
              <div class="form-group">
                <div className="col-lg-12 collection_input_label">
                  <span>Description</span>
                </div>

                <small
                  id="emailHelp"
                  class="form-text text-muted collectionSmallText"
                >
                  The description will be included on the item's details page
                  underneath it's image.
                </small>
                <textarea
                  name="user-message"
                  id="user-message"
                  class="form-control"
                  cols="20"
                  rows="10"
                  placeholder="Provide a detailed description of your item."
                ></textarea>
              </div>
              <div class="form-group">
                <div className="col-lg-12 collection_input_label">
                  <span>Royalty</span>
                </div>
                <small
                  id="exampleFormControlSelect1"
                  class="form-text text-muted collectionSmallText"
                >
                  Determine your royalties
                </small>
                <select class="form-select" id="exampleFormControlSelect1">
                  <option value="" selected disabled>
                    Select a %
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div class="form-group">
                <div className="col-lg-12 collection_input_label">
                  <span>Category</span>
                </div>
                <small
                  id="exampleFormControlSelect1"
                  class="form-text text-muted collectionSmallText"
                >
                  Adding a category will help make your item discoverable on
                  Indigena Market
                </small>
                <select class="form-select" id="exampleFormControlSelect1">
                  <option value="" selected disabled>
                    Select a Category
                  </option>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
              <div className="form-group">
                <div className="row ">
                  <div className="col-lg-1"></div>
                  <div className="col-lg-10">
                    <ul>
                      <li>
                        <span>
                          <div className="row">
                            <div className="col-lg-10 col-10 col-md-10 NFTDetailsList">
                              <h4>Explicit and Sensitive Content</h4>
                              <p>
                                See tis item as explicit and sensitive content
                              </p>
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
                              <h4>Add Collaborator</h4>
                              <p>
                                Collaborators can modify collection settings,
                                receive payments for items they created, change
                                the collection's royalty payout address, and
                                create new items.
                              </p>
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
            </form>
            <button className="mintNFT_btn">Create</button>
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
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
          role="document"
        >
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
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Character"
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Male"
                      />
                    </td>
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
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
          role="document"
        >
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
        <div
          className="modal-dialog modal-dialog-scrollable modal-dialog-centered"
          role="document"
        >
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
                    <td>
                      <input type="text" placeholder="Character" />
                    </td>
                    <td>
                      <input type="text" placeholder="Male" />
                    </td>
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
  );
}

export default CreateCollection;
