import React, { useState, useEffect, Fragment } from "react";
import axios from "axios";

import InvoiceView from "./Invoice/InvoiceView";
import { IconButton, Button, Modal as MUIModal } from "@material-ui/core";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Modal from "react-bootstrap/Modal";
import { useNavigate } from "react-router-dom";
import InvoiceCreation from "./InvoiceCreation";
import InvoiceGenerate from "./InvoiceGenerate/InvoiceGenerate";

function Invoice({ invoNew, onOpen }) {
  console.log(100, invoNew);

  const [invoices, setInvoices] = useState([]);
  console.log(14, invoices);
  const [filterInvoice, setFilterInvoice] = useState({});
  console.log(2, filterInvoice);

  const [newDataInv, setNewDataInv] = useState({});
  console.log(3, newDataInv);
  let navigate = useNavigate();

  const [viewPost, setPostShow] = useState(false);
  const handlePostShow = () => {
    setPostShow(!viewPost);
  };

  const [view, setViewShow] = useState(false);

  const [id, setId] = useState("");
  console.log(29, invoices?._id);

  const EditInvoice = () => {
    setNewDataInv({});
    handlePostShow();
  };

  const FrameData = () => {
    axios
      .get(`http://localhost:4000/invoiceData`)
      .then((data) => {
        console.log(41, data.data.data);
        setInvoices(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleView = (id) => {
    const filterInvoice = invoices.find((item) => item._id === id);
    setFilterInvoice(filterInvoice);
    console.log(3, filterInvoice);
  };

  const togglePopup = () => {
    setViewShow(!view);
  };

  const captureEdit = (id) => {
    console.log(75, id);
    let filteredInv = invoices.find((item) => item._id === id);
    setNewDataInv(filteredInv);
    handlePostShow();
  };

  const handleDelete = (id) => {
    console.log(66, id);
    axios
      .delete(`http://localhost:4000/invoiceData/${id}`)
      .then((res) => {
        const newInv = invoices.filter((e) => e._id !== id);
        setInvoices(newInv);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    FrameData();
  }, []);
  return (
    <>
      <div className="pcoded-content">
        <h5>Invoice</h5>
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

                    {/* <Button
                      onClick={addQuotation}
                      variant="contained"
                      color="primary"
                      size="small"
                    >
                      Add Quotation
                    </Button> */}
                  </div>
                  <div className="card-block table-border-style">
                    <div className="table-responsive">
                      <table className="table">
                        <thead>
                          <tr>
                            <th>Invoice No.</th>
                            <th>Customer Name</th>

                            <th>Billing Address</th>
                            <th>Grand Total</th>

                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoices.map((item, index) => {
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
                                      EditInvoice();
                                      captureEdit(item._id, setId(item._id));
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
                      <InvoiceView
                        invoiceNew={filterInvoice}
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
        <InvoiceCreation
          onHide={handlePostShow}
          invdata={newDataInv}
          invoices={invoices}
          setInvoices={setInvoices}
        />
      </Modal>

      {/* <MUIModal open={onOpen}>
        <InvoiceGenerate
          invoiceGenNew={invoNew}
          onClose={() => setViewShow(false)}
        />
      </MUIModal> */}
    </>
  );
}

export default Invoice;
