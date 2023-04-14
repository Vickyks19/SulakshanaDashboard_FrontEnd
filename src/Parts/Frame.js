import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import "./Frame.css";
import { Button, IconButton } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Col } from "antd";
import { DataGrid } from "@mui/x-data-grid";
import { MDBDataTable } from "mdbreact";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
// import Checkbox from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import Pagination from "@mui/material/Pagination";
import TablePagination from "@mui/material/TablePagination";

function Frame() {
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

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const [selected, setSelected] = useState([]);

  return (
    <div className="pcoded-content">
      <h5>FRAME</h5>
      <div className="pcoded-inner-content">
        {/* Main-body start */}
        <div className="main-body">
          <div className="page-wrapper">
            {/* Page-body start */}
            <div className="page-body">
              {/* Basic table card start */}
              <div className="card">
                <div className="card-header">
                  <Button
                    onClick={handlePostShow}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Add Frame
                  </Button>
                </div>
                <div className="card-block table-border-style">
                  <div className="table-responsive">
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">
                              <Checkbox
                                size="small"
                                color="primary"
                                indeterminate={
                                  selected.length > 0 &&
                                  selected.length < frames.length
                                }
                              />
                            </TableCell>

                            <TableCell align="center">Sl No</TableCell>
                            <TableCell align="center">Name</TableCell>
                            <TableCell align="center">Width</TableCell>
                            <TableCell align="center">Height</TableCell>
                            <TableCell align="center">Rate</TableCell>
                            <TableCell align="center">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {frames.map((item, index) => (
                            <TableRow key={item._id}>
                              <TableCell
                                component="th"
                                scope="row"
                                align="center"
                              >
                                <Checkbox size="small" color="primary" />
                              </TableCell>
                              <TableCell align="center">{index + 1}</TableCell>
                              <TableCell align="center">{item.name}</TableCell>
                              <TableCell align="center">{item.width}</TableCell>
                              <TableCell align="center">
                                {item.height}
                              </TableCell>
                              <TableCell align="center">{item.rate}</TableCell>
                              <TableCell align="center">
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
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </TableContainer>
                    {/* <Pagination count={10} color="primary"  />
                     */}
                    <TablePagination
                      component="div"
                      count={100}
                      page={page}
                      // onPageChange={handleChangePage}
                      rowsPerPage={rowsPerPage}
                      // onRowsPerPageChange={handleChangeRowsPerPage}
                    />
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
                              onChange={(e) => setName(e.target.value)}
                              placeholder="Please enter Name"
                              required
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label>Width</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => setWidth(e.target.value)}
                              placeholder="Please enter width"
                              required
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label>Height</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => setHeight(e.target.value)}
                              placeholder="Please enter Height"
                              required
                            />
                          </div>
                          <div className="form-group mt-3">
                            <label>Rate</label>
                            <input
                              type="text"
                              className="form-control"
                              onChange={(e) => setRate(e.target.value)}
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
                          <button
                            variant="secondary"
                            className="btn btn-danger btn-sm"
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
                  {/* Add End */}

                  {/* Edit & Delete */}
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
  );
}

export default Frame;
