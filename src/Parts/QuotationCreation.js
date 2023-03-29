import './Frame.css';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button, IconButton, Modal } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { MdFilterFrames } from 'react-icons/md';
import { SiGlassdoor } from 'react-icons/si';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { HiOutlineReceiptTax } from 'react-icons/hi';
import QuotationView from './QuotationView';
import './QuotationCreation.css';

import { useNavigate } from 'react-router-dom';

import './Frame.css';
import { color } from '@mui/system';
import Navbar from '../components/Navbar/Navbar';

function QuotationCreation() {
  const [quotation, setQuotation] = useState([]);

  const [rowData, setRowData] = useState('');

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

  const [id, setId] = useState('');

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
    navigate('/quote', { state: { newdata: filtered } });
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
    <div className='pcoded-content'>
      <h5>Quotation</h5>
      <div className='pcoded-inner-content'>
        {/* Main-body start */}
        <div className='main-body'>
          <div className='page-wrapper'>
            {/* Page-body start */}

            <div className='page-body'>
              {/* Basic table card start */}
              <div className='card'>
                <div className='card-header'>
                  {/* <h5>Quotation</h5> */}
                  <a href='/quote'>
                    <Button
                      onClick={handlePostShow}
                      variant='contained'
                      color='primary'
                      size='small'
                    >
                      Add Quotation
                    </Button>
                  </a>
                </div>
                <div className='card-block table-border-style'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th></th>
                          <th>Quotation No.</th>
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
                        {quotation.map((item, index) => {
                          return (
                            <tr key={item._id}>
                              <td>
                                <span style={{ marginRight: 10 }}>
                                  <input type='checkbox' />
                                </span>
                              </td>
                              <td>{item.quotationNo}</td>
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

                                <IconButton
                                  size='small'
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
                                  style={{ margin: '0 5px' }}
                                >
                                  <EditIcon
                                    style={{ color: '#3b6ba5' }}
                                    fontSize='small'
                                  />
                                </IconButton>

                                <IconButton
                                  size='small'
                                  onClick={(e) => {
                                    handleDelete(e);
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

                  <Modal open={view}>
                    <QuotationView
                      quotationNew={filterNew}
                      onClose={() => setViewShow(false)}
                    />
                  </Modal>
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
  );
}

export default QuotationCreation;
