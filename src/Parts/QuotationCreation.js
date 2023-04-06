import "./Frame.css";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, IconButton, Modal as MUIModal } from "@material-ui/core";
import Modal from "react-bootstrap/Modal";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
// import { TableSortLabel } from '@mui/material';

import QuotationView from "./QuotationView";
import "./QuotationCreation.css";

import { useNavigate } from "react-router-dom";

import "./Frame.css";
import Quotation from "./Quotation";

function QuotationCreation() {
  const [quotations, setQuotations] = useState([]);
  console.log(1, quotations);

  const [filterNew, setFilterNew] = useState({});

  const [newData, setNewData] = useState({});

  const [viewPost, setPostShow] = useState(false);
  const handlePostShow = () => {
    setPostShow(!viewPost);
  };

  const [view, setViewShow] = useState(false);

  const addQuotation = () => {
    setNewData({});
    handlePostShow();
  };

  const [id, setId] = useState("");

  const QuoteData = () => {
    axios
      .get("http://localhost:4000/quotationData")
      .then((data) => {
        console.log(47, data.data.data);
        setQuotations(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleView = (id) => {
    const filterNew = quotations.find((item) => item._id === id);
    console.log(12, filterNew);
    setFilterNew(filterNew);
  };

  const togglePopup = () => {
    setViewShow(!view);
  };

  const captureEdit = (id) => {
    console.log(75, id);
    let filtered = quotations.find((item) => item._id === id);
    setNewData(filtered);
    handlePostShow();
  };

  const handleDelete = (id) => {
    console.log(71, id);
    axios
      .delete(`http://localhost:4000/quotationData/${id}`)
      .then((res) => {
        const newQuote = quotations.filter((e) => e._id !== id);
        setQuotations(newQuote);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    QuoteData();
  }, []);

  return (
    <>
      <div className="pcoded-content">
        <h5>QUOTATION</h5>
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

                    <Button
                      onClick={addQuotation}
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      Add Quotation
                    </Button>
                  </div>
                  <div className="card-block table-border-style">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Quotation No.</th>
                            <th>Customer Name</th>

                            <th>Billing Address</th>
                            <th>Grand Total</th>

                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {quotations.map((item, index) => {
                            return (
                              <tr key={item._id}>
                                <td>
                                  <span style={{ marginRight: 10 }}>
                                    <input type="checkbox" />
                                  </span>
                                  {item.quotationNo}
                                </td>
                                <td>{item.customername}</td>
                                <td>{item.billingaddress}</td>
                                <td>{item.grandTotal}</td>
                                <td style={{ minWidth: 190 }}>
                                  <Button
                                    size="small"
                                    variant="outlined"
                                    onClick={(e) => {
                                      handleView(item._id, togglePopup());
                                    }}
                                  >
                                    View
                                  </Button>

                                  <IconButton
                                    size="small"
                                    onClick={(e) => {
                                      captureEdit(item._id, setId(item._id), e);
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
                                    onClick={(e) => {
                                      handleDelete(item._id);
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

                    <MUIModal open={view}>
                      <QuotationView
                        quotationNew={filterNew}
                        onClose={() => setViewShow(false)}
                      />
                    </MUIModal>
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
      <Modal
        show={viewPost}
        onHide={handlePostShow}
        backdrop="static"
        keyboard={false}
        dialogClassName="modal-90w"
      >
        <Quotation
          onHide={handlePostShow}
          newdata={newData}
          quotations={quotations}
          setQuotations={setQuotations}
        />
      </Modal>
    </>
  );
}

export default QuotationCreation;
