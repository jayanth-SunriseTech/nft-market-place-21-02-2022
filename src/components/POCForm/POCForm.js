import React, { useState } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";
import env from "../Settings";
import Textfield from "./Textfield";

function Register() {
  const validate = Yup.object({
    name: Yup.string()
      .max(15, "Must be within 15 characters")
      .required("Required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Password must be atleast 6 characters")
      .required("Password is required!"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Password must watch")
      .required("Confirm Password is a required field."),
  });

  //   const navigate = useNavigate();
  //   const [loading, setLoading] = useState(false);
  //   const [success, setSuccess] = useState(false);
  //   const [failure, setFailure] = useState(false);

  //   const postData = async (data) => {
  //     setLoading(true);
  //     try {
  //       let Data = await axios.post(`${env.api}/signup`, data);
  //       window.alert("User registered successfully");
  //       setLoading(false);
  //       setFailure(false);
  //       setSuccess(true);
  //       navigate("/signin");
  //     } catch (error) {
  //       setLoading(false);
  //       setFailure(true);
  //       if (error.message === "Request failed with status code 400") {
  //         window.alert(
  //           "E-mail is already registered.Please use different e-mail ID."
  //         );
  //         console.log(error);
  //       } else {
  //         window.alert("Check your connection");
  //         console.log(error);
  //       }
  //     }
  //   };
  return (
    <>
      {loading ? (
        <h2>Loading....</h2>
      ) : (
        <div className="signup__page">
          <div className="signup__container">
            <Formik
              initialValues={{
                name: "",
                email: "",
                password: "",
                confirmPassword: "",
              }}
              validationSchema={validate}
              onSubmit={async (values) => {
                let data = {
                  name: values.name,
                  email: values.email,
                  password: values.password,
                };
                postData(data);
                setLoading(true);
              }}
            >
              {(formik) => (
                <div className="signup__title">
                  <div className=" container-fluid signup__inner">
                    <div className="row">
                      <div className="col-md-4 col-lg-4">
                        <div class="card mt-3">
                          <h5 class="card-header bg-dark text-white">
                            Token Details
                          </h5>
                          <div class="card-body">
                            <Form>
                              <span>
                                <Textfield
                                  label="Token Name"
                                  name="name"
                                  type="text"
                                  placeholder="Your Token Name"
                                />
                              </span>
                              <span>
                                <Textfield
                                  label="Token Symbol"
                                  name="name"
                                  type="text"
                                  placeholder="Your Token Symbol"
                                />
                              </span>
                              <span>
                                <Textfield
                                  label="Token Decimals"
                                  name="name"
                                  type="text"
                                  placeholder="18"
                                />
                              </span>
                              <span>
                                <Textfield
                                  label="Initial Supply"
                                  name="name"
                                  type="text"
                                  placeholder="1"
                                />
                              </span>
                              <span>
                                <Textfield
                                  label="Total Supply"
                                  name="name"
                                  type="text"
                                  placeholder="1"
                                />
                              </span>
                            </Form>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div class="card mt-3">
                          <h5 class="card-header bg-dark text-white">
                            Token Details
                          </h5>
                          <div class="card-body">
                            <Form>
                              <span>
                                <div class="form-group">
                                  <label for="exampleFormControlSelect1">
                                    Supply Type
                                  </label>
                                  <select
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                  >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </span>
                              <span>
                                <div class="form-group">
                                  <label for="exampleFormControlSelect1">
                                    Access Type
                                  </label>
                                  <select
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                  >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </span>
                              <span>
                                <div class="form-group">
                                  <label for="exampleFormControlSelect1">
                                    Transfer Type
                                  </label>
                                  <select
                                    class="form-control"
                                    id="exampleFormControlSelect1"
                                  >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                  </select>
                                </div>
                              </span>
                              <span>
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexSwitchCheckDefault"
                                  >
                                    Default switch checkbox input
                                  </label>
                                </div>
                              </span>
                              <span>
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexSwitchCheckDefault"
                                  >
                                    Default switch checkbox input
                                  </label>
                                </div>
                              </span>
                              <span>
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexSwitchCheckDefault"
                                  >
                                    Default switch checkbox input
                                  </label>
                                </div>
                              </span>
                              <span>
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexSwitchCheckDefault"
                                  >
                                    Default switch checkbox input
                                  </label>
                                </div>
                              </span>
                              <span>
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexSwitchCheckDefault"
                                  >
                                    Default switch checkbox input
                                  </label>
                                </div>
                              </span>
                              <span>
                                <div class="form-check form-switch">
                                  <input
                                    class="form-check-input"
                                    type="checkbox"
                                    role="switch"
                                    id="flexSwitchCheckDefault"
                                  />
                                  <label
                                    class="form-check-label"
                                    for="flexSwitchCheckDefault"
                                  >
                                    Default switch checkbox input
                                  </label>
                                </div>
                              </span>
                            </Form>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-4 col-lg-4">
                        <div className="row">
                          <div class="card mt-3">
                            <h5 class="card-header bg-dark text-white">
                              Token Type and Network
                            </h5>
                            <div class="card-body">
                              <Form>
                                <span>
                                  <div class="form-check form-switch">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="flexSwitchCheckDefault"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="flexSwitchCheckDefault"
                                    >
                                      Default switch checkbox input
                                    </label>
                                  </div>
                                </span>
                                <span>
                                  <div class="form-check form-switch">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      role="switch"
                                      id="flexSwitchCheckDefault"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="flexSwitchCheckDefault"
                                    >
                                      Default switch checkbox input
                                    </label>
                                  </div>
                                </span>
                              </Form>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div class="card">
                            <div class="card-header">Agreement</div>
                            <div class="card-body">
                              <Form>
                                <span>
                                  <div class="form-check">
                                    <input
                                      class="form-check-input"
                                      type="checkbox"
                                      value=""
                                      id="flexCheckDefault"
                                    />
                                    <label
                                      class="form-check-label"
                                      for="flexCheckDefault"
                                    >
                                      Default checkbox
                                    </label>
                                  </div>
                                </span>
                              </Form>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                          <div class="card">
                            <div class="card-header">Featured</div>
                            <div class="card-body">
                              <div class="card">
                                <ul class="list-group list-group-flush">
                                  <li class="list-group-item">
                                    Cras justo odio
                                  </li>
                                  <li class="list-group-item">
                                    Dapibus ac facilisis in
                                  </li>
                                  <li class="list-group-item">
                                    Vestibulum at eros
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="row">
                            <button className="btn btn-success">CONFIRM</button>
                        </div>
                      </div>
                    </div>
                    
                    {success && (
                      <span className="success">
                        Successful.You can log in now!
                      </span>
                    )}
                    {failure && (
                      <span className="failure">Something went wrong!</span>
                    )}
                  </div>
                </div>
              )}
            </Formik>
          </div>
        </div>
      )}
    </>
  );
}

export default Register;
