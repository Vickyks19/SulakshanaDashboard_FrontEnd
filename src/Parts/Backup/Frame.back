import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MdFilterFrames } from "react-icons/md";
import { SiGlassdoor } from "react-icons/si";
import { HiOutlineReceiptTax } from "react-icons/hi";
import "./Frame.css";

function Main() {
  const [frames, setFrames] = useState([]);
  const [rowData, setRowData] = useState("");

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

  const [name, setName] = useState("");
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [rate, setRate] = useState("");

  const FrameData = () => {
    axios
      .get("http://localhost:4000/frameData")

      .then((data) => {
        setFrames(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/frame", {
        name,
        width,
        height,
        rate,
      })
      .then((data) => {
        setFrames([data.data.data, ...frames]);
        setPostShow(false);
        setName("");
        setWidth("");
        setHeight("");
        setRate("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (e) => {
    console.log(e);
    e.preventDefault();
    const Store = [setName(""), setWidth, setHeight, setRate, setId];

    axios
      .put(`http://localhost:4000/frameData/${id}`, {
        name: name,
        width: width,
        height: height,
        rate: rate,
      })

      .then((data) => {
        const index = frames.findIndex((e) => e._id === id);
        console.log(12, index);
        const newFrames = frames;
        newFrames.splice(index, 1, data.data.data);
        console.log(newFrames);
        setFrames(newFrames);
        setEditShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:4000/frameData/${id}`)
      .then((data) => {
        const newFrames = frames.filter((e) => e._id !== id);
        setFrames(newFrames);
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
                <h5>Frame</h5>
                <div className="pcoded-inner-content">
                  {/* Main-body start */}
                  <div className="main-body">
                    <div className="page-wrapper">
                      {/* Page-body start */}
                      <div className="page-body">
                        {/* Basic table card start */}
                        <div className="card">
                          <div className="card-header">
                            <h5>Frame</h5>
                            <button
                              className="btn btn-primary btn-sm"
                              onClick={() => {
                                handlePostShow();
                              }}
                            >
                              Add
                            </button>
                          </div>
                          <div className="card-block table-border-style">
                            <div className="table-responsive">
                              <table className="table">
                                <thead>
                                  <tr>
                                    <th>Sl NO</th>
                                    <th>Name</th>
                                    <th>Width</th>
                                    <th>Height</th>
                                    <th>Rate</th>
                                    <th>Action</th>
                                  </tr>
                                </thead>
                                <tbody>
                                  {frames.map((item, index) => {
                                    return (
                                      <tr key={item._id}>
                                        <td>
                                          <span>
                                            <input type="checkbox" />
                                          </span>
                                          {index + 1}
                                        </td>
                                        <td>{item.name}</td>
                                        <td>{item.width}</td>
                                        <td>{item.height}</td>
                                        <td>{item.rate}</td>
                                        <td style={{ minWidth: 190 }}>
                                          <button
                                            size="sm"
                                            varient="primary"
                                            onClick={() => {
                                              handleEditShow(
                                                setRowData(item),
                                                setName(item.name),
                                                setWidth(item.width),
                                                setHeight(item.height),
                                                setRate(item.rate),
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

                            {/* Add */}
                            <div className="model-box-view">
                              <Modal
                                show={viewPost}
                                onHide={handleSubmit}
                                backdrop="static"
                                keyboard={false}
                              >
                                <Modal.Header>
                                  <Modal.Title>Frame</Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div>
                                    <div className="form-group mt-3">
                                      <label>Name</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                          setName(e.target.value)
                                        }
                                        placeholder="Please enter Name"
                                        required
                                      />
                                    </div>
                                    <div className="form-group mt-3">
                                      <label>Width</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                          setWidth(e.target.value)
                                        }
                                        placeholder="Please enter width"
                                        required
                                      />
                                    </div>
                                    <div className="form-group mt-3">
                                      <label>Height</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                          setHeight(e.target.value)
                                        }
                                        placeholder="Please enter Height"
                                        required
                                      />
                                    </div>
                                    <div className="form-group mt-3">
                                      <label>Rate</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                          setRate(e.target.value)
                                        }
                                        placeholder="Please enter Rate"
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
                                    <Button
                                      className="btn btn-danger btn-sm"
                                      variant="secondary"
                                      onClick={handlePostClose}
                                      style={{ paddingLeft: "15px" }}
                                      data-dismiss="modal"
                                    >
                                      Close
                                    </Button>
                                  </div>
                                </Modal.Body>
                              </Modal>
                            </div>
                            {/* Add End */}

                            {/* Edit & Delete */}
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
                                    {viewEdit ? "Edit" : "Delete"}
                                  </Modal.Title>
                                </Modal.Header>
                                <Modal.Body>
                                  <div>
                                    <div className="form-group mt-3">
                                      <label>Name</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                          setName(e.target.value)
                                        }
                                        placeholder="Please enter Name"
                                        defaultValue={rowData.name}
                                      />
                                    </div>
                                    <div className="form-group mt-3">
                                      <label>Width</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                          setWidth(e.target.value)
                                        }
                                        placeholder="Please enter width"
                                        defaultValue={rowData.width}
                                      />
                                    </div>
                                    <div className="form-group mt-3">
                                      <label>Height</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                          setHeight(e.target.value)
                                        }
                                        placeholder="Please enter Height"
                                        defaultValue={rowData.height}
                                      />
                                    </div>
                                    <div className="form-group mt-3">
                                      <label>Rate</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                          setRate(e.target.value)
                                        }
                                        placeholder="Please enter Rate"
                                        defaultValue={rowData.rate}
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

export default Main;
