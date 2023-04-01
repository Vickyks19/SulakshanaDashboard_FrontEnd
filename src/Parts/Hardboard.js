import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { IconButton, Button } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Hardboard() {
  const [hardboard, setHardboard] = useState([]);
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
      .get("http://localhost:4000/hardboardData")

      .then((data) => {
        setHardboard(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4000/hardboard", {
        name,
        width,
        height,
        rate,
      })
      .then((data) => {
        setHardboard([data.data.data, ...hardboard]);
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
    e.preventDefault();
    const Edit = [setName(""), setWidth(), setHeight(), setRate()];
    axios
      .put(`http://localhost:4000/hardboardData/${id}`, {
        name,
        width,
        height,
        rate,
      })
      .then((data) => {
        const index = hardboard.findIndex((e) => e._id === id);
        const newFrames = hardboard;
        newFrames.splice(index, 1, data.data.data);
        setHardboard(newFrames);
        setEditShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:4000/hardboardData/${id}`)
      .then((data) => {
        const newFrames = hardboard.filter((e) => e._id !== id);
        setHardboard(newFrames);
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
    <div className="pcoded-content">
      <h5>HARDBOARD</h5>
      <div className="pcoded-inner-content">
        {/* Main-body start */}
        <div className="main-body">
          <div className="page-wrapper">
            {/* Page-body start */}
            <div className="page-body">
              {/* Basic table card start */}
              <div className="card">
                <div className="card-header">
                  {/* <h5>Hardboard</h5> */}
                  <Button
                    onClick={handlePostShow}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Add Hardboard
                  </Button>
                </div>
                <div className="card-block table-border-style">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>S. No.</th>
                          <th>Name</th>
                          <th>Width</th>
                          <th>Height</th>
                          <th>Rate</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {hardboard.map((item, index) => {
                          return (
                            <tr key={item._id}>
                              <td>
                                <span style={{ paddingRight: 10 }}>
                                  <input type="checkbox" />
                                </span>
                                {index + 1}
                              </td>
                              <td>{item.name}</td>
                              <td>{item.width}</td>
                              <td>{item.height}</td>
                              <td>{item.rate}</td>
                              <td style={{ minWidth: 190 }}>
                                <IconButton
                                  size="small"
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
                                  style={{ margin: "0 5px" }}
                                >
                                  <EditIcon
                                    style={{ color: "#3b6ba5" }}
                                    fontSize="small"
                                  />
                                </IconButton>

                                <IconButton
                                  size="small"
                                  onClick={() => {
                                    handleDeleteShow(
                                      setRowData(item),
                                      setId(item._id)
                                    );
                                  }}
                                >
                                  <DeleteIcon
                                    style={{ color: "#f03939" }}
                                    fontSize="small"
                                  />
                                </IconButton>
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
                      onHide={handlePostClose}
                      backdrop="static"
                      keyboard={false}
                    >
                      <Modal.Header>
                        <Modal.Title>Hardboard</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div>
                          <div className="form-group mt-3">
                            <label>Name</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Please enter Name"
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label>Width</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => setWidth(e.target.value)}
                              placeholder="Please enter width"
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label>Height</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => setHeight(e.target.value)}
                              placeholder="Please enter Height"
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label>Rate</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => setRate(e.target.value)}
                              placeholder="Please enter Rate"
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-success btn-sm"
                            onClick={handleSubmit}
                          >
                            Add Data
                          </button>
                          <button
                            variant="secondary"
                            className="btn btn-danger btn-sm"
                            onClick={handlePostClose}
                          >
                            Close
                          </button>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                  {/* Edit & Delete start */}
                  <div className="model-box-view">
                    <Modal
                      show={viewEdit ? viewEdit : viewDelete}
                      onHide={
                        handleEditClose ? handleEditClose : handleDeleteClose
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
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Please enter Name"
                              defaultValue={rowData.name}
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label>Width</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => setWidth(e.target.value)}
                              placeholder="Please enter width"
                              defaultValue={rowData.width}
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label>Height</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => setHeight(e.target.value)}
                              placeholder="Please enter Height"
                              defaultValue={rowData.height}
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label>Rate</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => setRate(e.target.value)}
                              placeholder="Please enter Rate"
                              defaultValue={rowData.rate}
                            />
                          </div>
                          <button
                            type="submit"
                            className="btn btn-success btn-sm"
                            onClick={viewEdit ? handleEdit : handleDelete}
                          >
                            {viewEdit ? "Update" : "Delete"}
                          </button>
                          <button
                            variant="secondary"
                            className="btn btn-danger btn-sm"
                            onClick={
                              viewEdit ? handleEditClose : handleDeleteClose
                            }
                          >
                            Close
                          </button>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                  {/* Edit & Delete start */}
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
  );
}

export default Hardboard;
