import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdFilterFrames } from "react-icons/md";
import { SiGlassdoor } from "react-icons/si";
import { HiOutlineReceiptTax } from "react-icons/hi";
// import DatePicker from "react-date-picker";

import "./Frame.css";
import Quotation from "./Quotation";

function Creation() {
  const [quotation, setQuotation] = useState([]);
  const [rowData, setRowData] = useState("");
  // console.log(frames);

  const [viewPost, setPostShow] = useState(false);
  const handlePostShow = () => setPostShow(true);
  const handlePostClose = () => setPostShow(false);

  const [viewEdit, setEditShow] = useState(false);
  const handleEditShow = () => setEditShow(true);
  const Edit = () => setEditShow(true);
  const handleEditClose = () => setEditShow(false);

  const [id, setId] = useState("");

  const [viewDelete, setDeleteShow] = useState(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const handleDeleteClose = () => setDeleteShow(false);

  const FrameData = () => {
    axios
      .get("http://localhost:4000/quotationData")

      .then((data) => {
        setQuotation(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FrameData();
  }, []);
  return (
    <div>
      <div id="pcoded" className="pcoded">
        <div className="pcoded-overlay-box" />
        <div className="pcoded-container navbar-wrapper">
          <nav className="navbar header-navbar pcoded-header">
            <div className="navbar-wrapper">
              <div className="navbar-logo">
                <a className="mobile-menu" id="mobile-collapse" href="#!">
                  <i className="ti-menu" />
                </a>
                <a className="mobile-search morphsearch-search" href="#">
                  <i className="ti-search" />
                </a>
                <a href="index.html">
                  <span className="img-fluid"> Sri sulekshna</span>
                  {/* <img class="img-fluid" src="assets/images/logo.png" alt="Theme-Logo" /> */}
                </a>
                <a className="mobile-options">
                  <i className="ti-more" />
                </a>
              </div>
              <div className="navbar-container container-fluid">
                <ul className="nav-left">
                  <li>
                    <div className="sidebar_toggle">
                      <a href="javascript:void(0)">
                        <i className="ti-menu" />
                      </a>
                    </div>
                  </li>
                  <li>
                    <a href="#!" onclick="javascript:toggleFullScreen()">
                      <i className="ti-fullscreen" />
                    </a>
                  </li>
                </ul>
                <ul className="nav-right">
                  <li className="user-profile header-notification">
                    <a href="#!">
                      {/* <img
                      src="assets/images/avatar-4.jpg"
                      className="img-radius"
                      alt="User-Profile-Image"
                    /> */}
                      <span>sri sulekshna</span>
                      <i className="ti-angle-down" />
                    </a>
                    <ul className="show-notification profile-notification">
                      <li>
                        <a href="/">
                          <i className="ti-layout-sidebar-left" /> Logout
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <div className="pcoded-main-container">
            <div className="pcoded-wrapper">
              <nav className="pcoded-navbar">
                <div className="sidebar_toggle">
                  <a href="#">
                    <i className="icon-close icons" />
                  </a>
                </div>
                <div className="pcoded-inner-navbar main-menu">
                  <div
                    className="pcoded-mtext"
                    data-i18n="nav.dash.main"
                    href="/dashboard"
                    style={{ cursor: "pointer", paddingLeft: "30px" }}
                  >
                    <Link to="/dashboard">Dashboard</Link>
                  </div>
                  <div
                    className="pcoded-navigatio-lavel "
                    data-i18n="nav.category.navigation"
                  >
                    MASTERS
                  </div>
                  <ul className="pcoded-item pcoded-left-item ">
                    <li className="active">
                      <a href="/Frame">
                        <span className="pcoded-micon">
                          {/* <i class="ti-home"></i> */}
                          <MdFilterFrames />
                          <b>D</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.dash.main"
                        >
                          FRAME
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li className="pcoded-item pcoded-left-item">
                      <a href="/Mount">
                        <span className="pcoded-micon">
                          {/* <i class="ti-layout-grid2-alt"></i>  */}
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.basic-components.main"
                        >
                          MOUNT
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li className="active">
                      <a href="/Glass">
                        <span className="pcoded-micon">
                          {/* <i className="ti-home" /> */}
                          <SiGlassdoor />
                          <b>D</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.dash.main"
                        >
                          GLASS
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li className="active">
                      <a href="/Hardboard">
                        <span className="pcoded-micon">
                          <i className="ti-home" />
                          <b>D</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.dash.main"
                        >
                          HARDBOARD
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li className="active">
                      <a href="/Tax">
                        <span className="pcoded-micon">
                          {/* <i className="ti-home" /> */}
                          <HiOutlineReceiptTax />
                          <b>D</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.dash.main"
                        >
                          TAX
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                  </ul>
                  <div
                    className="pcoded-navigatio-lavel"
                    data-i18n="nav.category.forms"
                  >
                    CUSTOMER
                  </div>
                  <ul className="pcoded-item pcoded-left-item">
                    <li>
                      <a href="/Creation">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="/Creation"
                          data-i18n="nav.form-components.main"
                        >
                          CREATION
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li>
                      <a href="List">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          LIST
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                  </ul>
                  <div
                    className="pcoded-navigatio-lavel"
                    data-i18n="nav.category.forms"
                  >
                    QUATION
                  </div>
                  <ul className="pcoded-item pcoded-left-item">
                    <li>
                      <a href="/Creation-1">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          CREATION
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li>
                      <a href="/Info">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          INFO
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>

                    <li>
                      <a href="/Invoice">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          INVOICE
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li>
                      <a href="/Painting">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          PAINTING
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li>
                      <a href="/Report">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          REPORT
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                    <li>
                      <a href="/">
                        <span className="pcoded-micon">
                          <i className="ti-layers" />
                          <b>FC</b>
                        </span>
                        <span
                          className="pcoded-mtext"
                          data-i18n="nav.form-components.main"
                        >
                          LOGOUT
                        </span>
                        <span className="pcoded-mcaret" />
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
              <div className="pcoded-content">
                <h5>Creation</h5>
                <div className="pcoded-inner-content">
                  {/* Main-body start */}
                  <div className="main-body">
                    <div className="page-wrapper">
                      {/* Page-body start */}

                      <div className="page-body">
                        {/* Basic table card start */}
                        <div className="card">
                          <div className="card-header">
                            <h5>Craetion</h5>
                            <a href="/quote">
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={() => {
                                  handlePostShow();
                                }}
                              >
                                Add
                              </button>
                            </a>
                            <button
                              className="btn btn-primary btn-sm"
                              //   onClick={handleDelete}
                              style={{ marginLeft: "80%" }}
                            >
                              Delete
                            </button>
                          </div>
                          <div className="card-block table-border-style">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Quotation NO</th>
                                    <th>Customer Name</th>
                                    {/* <th>Phonenumber</th> */}
                                    {/* <th>Address</th> */}
                                    <th>Billing Address</th>
                                    <th>Items</th>
                                    {/* <th>EmailID</th> */}
                                    {/* <th>Gender</th> */}
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {quotation.map((item, index) => {
                                    return (
                                      <tr key={item._id}>
                                        <td>
                                          <span>
                                            <input type="checkbox" />
                                          </span>
                                          {index + 1}
                                        </td>
                                        <td>{item.customername}</td>
                                        <td>{item.billingaddress}</td>
                                        <td></td>
                                        {/* <td>
                                          {item.firstname +
                                            "" +
                                            item.middlename +
                                            "" +
                                            item.lastname}
                                        </td>
                                        <td>{item.phonenumber}</td>
                                        <td>{item.address}</td>
                                        <td>{item.billingaddress}</td>
                                        <td>{item.dob}</td>
                                        <td>{item.emailid}</td>
                                        <td>{item.gender}</td> */}
                                        <td style={{ minWidth: 190 }}>
                                          <button
                                            size="sm"
                                            varient="primary"
                                            onClick={() => {
                                              handleEditShow(
                                                setRowData(item),
                                                // setStore(item.value),

                                                setId(item._id)
                                              );
                                            }}
                                          >
                                            Edit
                                          </button>
                                          <button
                                            size="sm"
                                            varient="primary"
                                            onClick={() => {
                                              handleDeleteShow(
                                                setRowData(item),
                                                setId(item._id)
                                              );
                                            }}
                                          >
                                            Delete
                                          </button>
                                        </td>
                                      </tr>
                                    );
                                  })}
                                </tbody>
                              </table>
                            </div>
                            {/* <div className="model-box-view">
                              <Modal
                                show={viewPost}
                                onHide={handleSubmit}
                                backdrop="static"
                                keyboard={false}
                              >
                                <Modal.Header>
                                  <Modal.Title>Creation</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div>
                                    <div className="form-row">
                                      <div className="col-md-4 mb-3">
                                        <label>FirstName</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          onChange={(e) =>
                                            setFirstname(e.target.value)
                                          }
                                          placeholder="Please enter FirstName"
                                          required
                                        />
                                      </div>
                                      <div className="col-md-4 mb-3">
                                        <label>MiddleName</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          onChange={(e) =>
                                            setMiddlename(e.target.value)
                                          }
                                          placeholder="Please enter MiddleName"
                                          required
                                        />
                                      </div>
                                      <div className=" col-md-4 mb-3">
                                        <label>LastName</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          onChange={(e) =>
                                            setLastname(e.target.value)
                                          }
                                          placeholder="Please enter LastName"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group mt-3">
                                      <label>Address</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                          setAddress(e.target.value)
                                        }
                                        placeholder="Please enter address"
                                        required
                                      />
                                    </div>
                                    <div className="form-group">
                                      <label
                                        style={{
                                          margin: "0 0 -15px",
                                          justifyContent: "space-between",
                                        }}
                                      >
                                        <span>
                                          <input
                                            type="checkbox"
                                            onChange={(e) =>
                                              setAddress(e.target.value)
                                            }
                                            required
                                          />
                                        </span>
                                        <p> Same as Address</p>
                                      </label>
                                    </div>

                                    <div className="form-group mt-3">
                                      <label>BillingAddress</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                          setBillingaddress(e.target.value)
                                        }
                                        placeholder="Please enter billingaddress"
                                        required
                                      />
                                    </div>
                                    <div className="form-row">
                                      <div className="col-md-6 mb-3">
                                        <label>Phonenumber</label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          onChange={(e) =>
                                            setPhonenumber(e.target.value)
                                          }
                                          placeholder="Please enter phonenumber"
                                          required
                                        />
                                      </div>
                                      <div className="col-md-6 mb-3">
                                        <label>AdditionPhonenumber </label>
                                        <input
                                          type="text"
                                          className="form-control"
                                          onChange={(e) =>
                                            setAdditionphonenumber(
                                              e.target.value
                                            )
                                          }
                                          placeholder="Please enter additionphonenumber"
                                          required
                                        />
                                      </div>
                                    </div>
                                    <div className="form-group mt-3">
                                      <label>EmailID</label>
                                      <input
                                        type="email"
                                        className="form-control"
                                        onChange={(e) =>
                                          setEmailId(e.target.value)
                                        }
                                        placeholder="Please enter emailid"
                                        required
                                      />
                                    </div>
                                    <div className="form-row">
                                      <div className="col-md-6 mb-4">
                                        <label> DOB</label>
                                        <input
                                          // DatePicker
                                          type="date"
                                          className="form-control"
                                          onChange={(e) =>
                                            setDob(e.target.value)
                                          }
                                          placeholder="Please enter dob"
                                          required
                                        />
                                      </div>

                                      <div className="col-md-6 mb-4">
                                        <label>Gender</label>

                                        <select
                                          id="inputState"
                                          class="form-control"
                                          onChange={(e) =>
                                            setGender(e.target.value)
                                          }
                                        >
                                          <option selected>Choose...</option>
                                          <option>Male</option>
                                          <option>Female</option>
                                        </select>
                                      </div>
                                    </div>

                                    <button
                                      type="submit"
                                      className="btn btn-success btn-sm "
                                      onClick={handleSubmit}
                                      data-dismiss="modal"
                                    >
                                      Add Data
                                    </button>
                                    <button
                                      className="btn btn-danger btn-sm"
                                      variant="secondary"
                                      onClick={handlePostClose}
                                      style={{ paddingLeft: "15px" }}
                                      data-dismiss="modal"
                                    >
                                      Close
                                    </button>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            </div> */}
                          </div>
                        </div>
                      </div>
                      {/* Page-body end */}
                    </div>
                  </div>
                  {/* Main-body end */}
                  <div id="styleSelector" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Creation;
