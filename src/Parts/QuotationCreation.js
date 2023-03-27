import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Link, Navigate } from "react-router-dom";
import { MdFilterFrames } from "react-icons/md";
import { SiGlassdoor } from "react-icons/si";
import { HiOutlineReceiptTax } from "react-icons/hi";
import QuotationView from "./QuotationView";
import "./QuotationCreation.css";

import { useNavigate } from "react-router-dom";
// import DatePicker from "react-date-picker";

import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

import "./Frame.css";

function QuotationCreation() {
  const [quotation, setQuotation] = useState([]);

  const [rowData, setRowData] = useState("");

  const [filterNew, setFilterNew] = useState({});
  console.log(33, filterNew);

  // const [editData, setEditData] = useState({});
  // console.log(35, editData);

  const [newdata, setNewData] = useState({});
  console.log(38, newdata);

  const [quotationNo, setQuotationNo] = useState(0);
  const [items, setItems] = useState([]);

  console.log(31, filterNew);
  // console.log(frames);
  let navigate = useNavigate();
  const [viewPost, setPostShow] = useState(false);
  const handlePostShow = () => setPostShow(true);

  const [view, setViewShow] = useState(false);

  const [viewEdit, setEditShow] = useState(false);

  const [isEditing, setIsEditing] = useState(false);

  const [id, setId] = useState("");

  const [price, setPrice] = useState({
    frame: 0,
    mount: 0,
    glass: 0,
    hardboard: 0,
    sellingRate: 0,
  });

  const FrameData = () => {
    axios
      .get(`http://localhost:4000/quotationData`)

      .then((data) => {
        setQuotation(data.data.data);
        console.log(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleView = (id) => {
    const filterNew = quotation.find((item) => item._id === id);
    console.log(12, filterNew);
    setFilterNew(filterNew);
  };

  const togglePopup = () => {
    setViewShow(!view);
  };

  // const changeEditState = (id) => {
  //   console.log(80, item._id, id);
  //   if (item._id === id) {
  //     setIsEditing((isEditing) => !isEditing);
  //   } else if (isEditing === false) {
  //     setIsEditing((isEditing) => !isEditing);
  //   }
  // };

  const captureEdit = (id) => {
    let filtered = quotation.find((item) => item._id === id);
    setNewData(filtered);
    console.log(82, filtered, newdata);
    navigate("/quote", { state: { newdata: filtered } });
  };

  const handleDelete = (e) => {
    // e.preventDefault();
    axios
      .delete(`http://localhost:4000/quotationData/${id}`)
      .then((data) => {
        const newFrames = quotation.filter((e) => e._id !== id);
        setQuotation(newFrames);
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
                    QUOTATION
                  </div>
                  <ul className="pcoded-item pcoded-left-item">
                    <li>
                      <a href="/quotation">
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
                      <a href="/invoice">
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
                      <a href="/painting">
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
                <h5>Quotation</h5>
                <div className="pcoded-inner-content">
                  {/* Main-body start */}
                  <div className="main-body">
                    <div className="page-wrapper">
                      {/* Page-body start */}

                      <div className="page-body">
                        {/* Basic table card start */}
                        <div className="card">
                          <div className="card-header">
                            {/* <h5>Quotation</h5> */}
                            <a href="/quote">
                              <button
                                className="btn btn-primary btn-sm"
                                onClick={handlePostShow}
                              >
                                Add
                              </button>
                            </a>
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
                                    <th>Grand Total</th>
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
                                          {item.quotationNo}
                                        </td>
                                        <td>{item.customername}</td>
                                        <td>{item.billingaddress}</td>
                                        <td>{item.grandTotal}</td>
                                        <td style={{ minWidth: 190 }}>
                                          <button
                                            size="sm"
                                            varient="primary"
                                            value="Click to Open QuatationView"
                                            onClick={(e) => {
                                              handleView(
                                                item._id,
                                                togglePopup()
                                              );
                                            }}
                                          >
                                            View
                                          </button>

                                          <button
                                            size="sm"
                                            varient="primary"
                                            onClick={(e) => {
                                              captureEdit(
                                                item._id
                                                // setQuotationNo(
                                                //   item.quotationNo
                                                // ),
                                                // setItems(item.items),
                                                // console.log(
                                                //   493,
                                                //   item.quotationNo,
                                                //   item.items
                                                // )
                                              );
                                            }}
                                          >
                                            Edit
                                          </button>

                                          <button
                                            size="sm"
                                            varient="primary"
                                            onClick={(e) => {
                                              handleDelete(e);
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
                            {view ? (
                              <div className="popup-box">
                                <Fragment className="box">
                                  <PDFViewer
                                    width="1000"
                                    height="600"
                                    className="pdf"
                                  >
                                    <QuotationView quotationNew={filterNew} />
                                  </PDFViewer>
                                </Fragment>
                              </div>
                            ) : null}

                            {/* {viewEdit ? (
                              <div className="popup-box">
                                <Quotation />
                              </div>
                            ) : null} */}
                          </div>
                        </div>
                      </div>
                      {/* Page-body end */}
                    </div>
                  </div>
                  {/* Main-body end */}
                  {/* <div id="styleSelector" /> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuotationCreation;
