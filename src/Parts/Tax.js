import React, { useState, useEffect } from "react";
import axios from "axios";
import Modal from "react-bootstrap/Modal";
import { IconButton, Button } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
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

function Tax() {
  const [tax, setTax] = useState([]);
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

  const [page, setPage] = React.useState(2);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <div className="pcoded-content">
      <h5>TAX</h5>
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
                  <Button
                    onClick={handlePostShow}
                    variant="contained"
                    color="primary"
                    size="small"
                  >
                    Add Tax
                  </Button>

                  <div className="card-header-right">
                    <ul className="list-unstyled card-option"></ul>
                  </div>
                </div>
                <div className="card-block table-border-style">
                  <div className="table-responsive">
                    <TableContainer component={Paper}>
                      <Table sx={{ minWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell align="center">
                              <Checkbox size="small" color="primary" />
                            </TableCell>

                            <TableCell align="center">Sl No</TableCell>
                            <TableCell align="center">Tax</TableCell>
                            <TableCell align="center">Action</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {tax.map((item, index) => (
                            <TableRow key={item._id}>
                              <TableCell
                                component="th"
                                scope="row"
                                align="center"
                              >
                                <Checkbox size="small" color="primary" />
                              </TableCell>
                              <TableCell align="center">{index + 1}</TableCell>
                              <TableCell align="center">
                                {item.taxpercentage}
                              </TableCell>
                              <TableCell align="center">
                                <IconButton
                                  size="small"
                                  onClick={() => {
                                    handleEditShow(
                                      setRowData(item),
                                      setTaxPercentage(item.taxpercentage),
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
                              onChange={(e) => setTaxPercentage(e.target.value)}
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
                        handleEditClose ? handleEditClose : handleDeleteClose
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
                              onChange={(e) => setTaxPercentage(e.target.value)}
                              placeholder="Please enter TaxPercentage"
                              defaultValue={rowData.taxpercentage}
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

export default Tax;
