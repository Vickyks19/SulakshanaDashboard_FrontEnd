import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdFilterFrames } from "react-icons/md";

function Tax() {
  const [tax, setTax] = useState([]);
  const [rowData, setRowData] = useState("");
  // console.log(frames);

  const [viewPost, setPostShow] = useState(false);
  const handlePostShow = () => setPostShow(true);
  const handlePostClose = () => setPostShow(false);

  const [viewEdit, setEditShow] = useState(false);
  const handleEditShow = () => setEditShow(true);
  const handleEditClose = () => setEditShow(false);

  const [id, setId] = useState("");

  const [viewDelete, setDeleteShow] = useState(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const handleDeleteClose = () => setDeleteShow(false);

  const [taxpercentage, setTaxPercentage] = useState("");

  const FrameData = () => {
    axios
      .get("http://localhost:4000/taxData")

      .then((data) => {
        setTax(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/tax", {
        taxpercentage,
      })
      .then((data) => {
        setTax([data.data.data, ...tax]);
        setPostShow(false);
        setTaxPercentage("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (e) => {
    console.log(e);
    e.preventDefault();
    const Store = [setTaxPercentage(), setId];

    axios
      .put(`http://localhost:4000/taxData/${id}`, {
        taxpercentage: taxpercentage,
      })

      .then((data) => {
        const index = tax.findIndex((e) => e._id === id);
        console.log(12, index);
        const newFrames = tax;
        newFrames.splice(index, 1, data.data.data);
        console.log(newFrames);
        setTax(newFrames);
        setEditShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:4000/taxData/${id}`)
      .then((data) => {
        const newFrames = tax.filter((e) => e._id !== id);
        setTax(newFrames);
        setDeleteShow(false);
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
                    className="pcoded-navigatio-lavel"
                    data-i18n="nav.category.navigation"
                  >
                    MASTERS
                  </div>
                  <ul className="pcoded-item pcoded-left-item">
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
                          {/* <i class="ti-layout-grid2-alt"></i> */}
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
                          {/* <i className="ti-home" /> */}
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
                          {/* <MdFilterFrames /> */}
                          <i></i>
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
                          {/* <i className="ti-layers" /> */}
                          <b>FC</b>
                        </span>
                        <span
                          className="/creation"
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
                          {/* <i className="ti-layers" /> */}
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
                          {/* <i className="ti-layers" /> */}
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
                          {/* <i className="ti-layers" /> */}
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
                          {/* <i className="ti-layers" /> */}
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
                          {/* <i className="ti-layers" /> */}
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
                          {/* <i className="ti-layers" /> */}
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
                          {/* <i className="ti-layers" /> */}
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
                <h5>Tax</h5>
                <div className="pcoded-inner-content">
                  {/* Main-body start */}
                  <div className="main-body">
                    <div className="page-wrapper">
                      {/* Page-body start */}
                      <div className="page-body">
                        {/* Basic table card start */}
                        <div className="card">
                          <div className="card-header">
                            {/* <h5>Tax</h5> */}
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => {
                                handlePostShow();
                              }}
                            >
                              Add
                            </button>

                            <div className="card-header-right">
                              <ul className="list-unstyled card-option"></ul>
                            </div>
                          </div>
                          <div className="card-block table-border-style">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>SlNO</th>
                                    <th>Tax</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {tax.map((item, index) => {
                                    return (
                                      <tr key={item._id}>
                                        <td>
                                          <span>
                                            <input type="checkbox" />
                                          </span>
                                          {index + 1}
                                        </td>
                                        <td>{item.taxpercentage}</td>

                                        <td style={{ minWidth: 190 }}>
                                          <button
                                            size="sm"
                                            varient="primary"
                                            onClick={() => {
                                              handleEditShow(
                                                setRowData(item),
                                                setTaxPercentage(
                                                  item.taxpercentage
                                                ),
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
                            <div className="model-box-view">
                              <Modal
                                show={viewPost}
                                onHide={handleSubmit}
                                backdrop="static"
                                keyboard={false}
                              >
                                <Modal.Header>
                                  <Modal.Title>Tax</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div>
                                    <div className="form-group mt-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                          setTaxPercentage(e.target.value)
                                        }
                                        placeholder="Please enter TaxPercentage"
                                        required
                                      />
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
                            </div>
                            {/* Edit & Delete end */}
                            <div className="model-box-view">
                              <Modal
                                show={viewEdit ? viewEdit : viewDelete}
                                onHide={
                                  handleEditClose
                                    ? handleEditClose
                                    : handleDeleteClose
                                }
                                backdrop="static"
                                keyboard={false}
                              >
                                <Modal.Header>
                                  <Modal.Title>
                                    {" "}
                                    {viewEdit ? "Edit" : "Delete"}
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div>
                                    <label>TaxPercentage</label>
                                    <div className="form-group mt-3">
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                          setTaxPercentage(e.target.value)
                                        }
                                        placeholder="Please enter TaxPercentage"
                                        defaultValue={rowData.taxpercentage}
                                      />
                                    </div>

                                    <button
                                      type="submit"
                                      className="btn btn-success btn-sm"
                                      onClick={
                                        viewEdit ? handleEdit : handleDelete
                                      }
                                    >
                                      {viewEdit ? "Update" : "Delete"}
                                    </button>
                                    <button
                                      variant="secondary"
                                      className="btn btn-danger btn-sm"
                                      onClick={
                                        viewEdit
                                          ? handleEditClose
                                          : handleDeleteClose
                                      }
                                    >
                                      Close
                                    </button>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            </div>
                            {/* Edit & Delete end */}
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

export default Tax;
