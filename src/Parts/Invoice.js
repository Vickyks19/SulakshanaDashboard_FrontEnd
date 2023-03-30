import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import InvoiceView from './Invoice/InvoiceView';
import { IconButton, Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';

import { useNavigate } from 'react-router-dom';
// import DatePicker from "react-date-picker";

import { PDFViewer } from '@react-pdf/renderer';

import './Frame.css';

function Invoice() {
  const [quotation, setQuotation] = useState([]);
  const [invoice, setInvoice] = useState([]);
  console.log(1, invoice);
  const [rowData, setRowData] = useState('');
  // const [filterNew, setFilterNew] = useState({});
  const [filterInvoice, setFilterInvoice] = useState({});
  console.log(2, filterInvoice);
  // console.log(frames);
  let navigate = useNavigate();
  const [viewPost, setPostShow] = useState(false);
  const handlePostShow = () => setPostShow(true);
  //   const handlePostClose = () => setPostShow(false);

  const [view, setViewShow] = useState(false);
  // const handleViewShow = () => setViewShow(true);
  // const handleViewClose = () => setViewShow(false);

  const [viewEdit, setEditShow] = useState(false);
  const handleEditShow = () => setEditShow(true);
  const Edit = () => setEditShow(true);
  const handleEditClose = () => setEditShow(false);

  const [id, setId] = useState('');

  const [viewDelete, setDeleteShow] = useState(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const handleDeleteClose = () => setDeleteShow(false);

  const FrameData = () => {
    axios
      .get(`http://localhost:4000/quotationData`)

      .then((data) => {
        setInvoice(data.data.data);
        console.log(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleView = (id) => {
    const filterInvoice = invoice.find((item) => item._id === id);

    setFilterInvoice(filterInvoice);
    console.log(3, filterInvoice);
  };

  const togglePopup = () => {
    setViewShow(!view);
  };

  useEffect(() => {
    FrameData();
  }, []);
  return (
    <div>
      <div className='pcoded-content'>
        <h5>INVOICE</h5>
        <div className='pcoded-inner-content'>
          {/* Main-body start */}
          <div className='main-body'>
            <div className='page-wrapper'>
              {/* Page-body start */}

              <div className='page-body'>
                {/* Basic table card start */}
                <div className='card'>
                  <div className='card-header'>
                    <a href='/quote'>
                      <Button
                        onClick={handlePostShow}
                        variant='contained'
                        color='primary'
                        size='small'
                      >
                        Add Invoice
                      </Button>
                    </a>
                  </div>
                  <div className='card-block table-border-style'>
                    <div className='table-responsive'>
                      <table className='table'>
                        <thead>
                          <tr>
                            <th>Quotation No</th>
                            <th>Customer Name</th>
                            {/* <th>Phonenumber</th> */}
                            {/* <th>Address</th> */}
                            <th>Billing Address</th>
                            <th>Grand Total</th>
                            {/* <th>EmailID</th> */}
                            {/* <th>Gender</th> */}
                            <th>Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {invoice.map((item, index) => {
                            return (
                              <tr key={item._id}>
                                <td>
                                  <span style={{ paddingRight: 10 }}>
                                    <input type='checkbox' />
                                  </span>
                                  {item.quotationNo}
                                </td>
                                <td>{item.customername}</td>
                                <td>{item.billingaddress}</td>
                                <td>{item.grandTotal}</td>
                                <td style={{ minWidth: 190 }}>
                                  <Button
                                    size='small'
                                    variant='outlined'
                                    onClick={(e) => {
                                      handleView(item._id, togglePopup());
                                    }}
                                  >
                                    View
                                  </Button>

                                  <Button
                                    size='small'
                                    variant='contained'
                                    color='primary'
                                    style={{ margin: '0 5px' }}
                                    onClick={() => {
                                      handleEditShow(
                                        // setRowData(item),
                                        // setStore(item.value),

                                        setId(item._id)
                                      );
                                    }}
                                  >
                                    Generate
                                  </Button>

                                  <IconButton
                                    size='small'
                                    onClick={() => {
                                      handleDeleteShow(
                                        setRowData(item),
                                        setId(item._id)
                                      );
                                    }}
                                  >
                                    <DeleteIcon
                                      style={{ color: '#f03939' }}
                                      fontSize='small'
                                    />
                                  </IconButton>
                                </td>
                              </tr>
                            );
                          })}
                        </tbody>
                      </table>
                    </div>
                    {view ? (
                      <div className='popup-box'>
                        {/*<div className="box">*/}
                        {/* <QuotationView
                                  content={<p>hello</p>}
                                  descripion={<p>frame</p>}
                                  qty={<p>qty</p>}
                                /> */}
                        <Fragment className='box'>
                          <PDFViewer width='1000' height='600' className='pdf'>
                            <InvoiceView invoiceNew={filterInvoice} />
                          </PDFViewer>
                        </Fragment>
                        {/*</div>*/}
                      </div>
                    ) : null}
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
          <div id='styleSelector' />
        </div>
      </div>
    </div>
  );
}

export default Invoice;
