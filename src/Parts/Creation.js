import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';

// import DatePicker from "react-date-picker";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import './Frame.css';
import { Button, IconButton } from '@material-ui/core';

function Creation() {
  const [creation, setCreation] = useState([]);
  const [rowData, setRowData] = useState('');
  // console.log(frames);

  const [viewPost, setPostShow] = useState(false);
  const handlePostShow = () => setPostShow(true);
  const handlePostClose = () => setPostShow(false);

  const [viewEdit, setEditShow] = useState(false);
  const handleEditShow = () => setEditShow(true);
  const Edit = () => setEditShow(true);
  const handleEditClose = () => setEditShow(false);

  const [id, setId] = useState('');

  const [viewDelete, setDeleteShow] = useState(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const handleDeleteClose = () => setDeleteShow(false);

  //   const name = { firstname: "", middlename: "", lastname: "" };
  // const initialValue = {
  //   // name: "",
  //   firstname: "",
  //   middlename: "",
  //   lastname: "",
  //   address: "",
  //   billingaddress: "",
  //   phonenumber: "",
  //   additionphonenumber: "",
  //   dob: "",
  //   emailid: "",
  //   gender: "",
  // };
  // const [store, setStore] = useState(initialValue);

  const [firstname, setFirstname] = useState('');
  const [middlename, setMiddlename] = useState('');
  const [lastname, setLastname] = useState('');
  const [address, setAddress] = useState('');
  const [billingaddress, setBillingaddress] = useState('');
  const [phonenumber, setPhonenumber] = useState('');
  const [additionphonenumber, setAdditionphonenumber] = useState('');
  const [dob, setDob] = useState(new Date());
  const [emailid, setEmailId] = useState('');
  const [gender, setGender] = useState('');

  // const handleChange = (e) => {
  //   setStore({ [e.target.firstname]: e.target.value });
  // };
  //   const handleChange = (e) => {
  //     setStore({
  //       ...store,
  //       [e.target.firstname]: e.target.value,
  //       [e.target.middlename]: e.target.value,
  //       [e.target.lastname]: e.target.value,
  //       [e.target.address]: e.target.value,
  //       [e.target.billingaddress]: e.target.value,
  //       [e.target.phonenumber]: e.target.value,
  //       [e.target.additionphonenumber]: e.target.value,
  //       [e.target.dob]: e.target.value,
  //       [e.target.emailid]: e.target.value,
  //       [e.target.gender]: e.target.value,
  //     });
  //     console.log(store);
  //   };

  const FrameData = () => {
    axios
      .get('http://localhost:4000/creationData')

      .then((data) => {
        setCreation(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    // const Data = { slNo, name, width, height, rate };
    // console.log(1, Data);
    e.preventDefault();
    axios
      .post('http://localhost:4000/creation', {
        // initialValue,
        firstname,
        middlename,
        lastname,
        address,
        billingaddress,
        phonenumber,
        additionphonenumber,
        dob,
        gender,
        emailid,
      })
      .then((data) => {
        setCreation([data.data.data, ...creation]);
        console.log(1, 2, creation);
        setPostShow(false);
        setFirstname('');
        setMiddlename('');
        setLastname('');
        setAddress('');
        setBillingaddress('');
        setPhonenumber('');
        setAdditionphonenumber('');
        setGender('');
        setEmailId('');
        setDob('');
        // e.target.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (e) => {
    console.log(e);
    e.preventDefault();
    // const Store = [setStore()];
    const Store = [setFirstname(''), setId];
    axios
      .put(`http://localhost:4000/creationData/${id}`, {
        firstname: firstname,
        middlename: middlename,
        lastname: lastname,
        address: address,
        billingaddress: billingaddress,
        phonenumber: phonenumber,
        additionphonenumber: additionphonenumber,
        dob: dob,
        gender: gender,
        emailid: emailid,
      })

      .then((data) => {
        const index = creation.findIndex((e) => e._id === id);
        console.log(12, index);
        const newFrames = creation;
        newFrames.splice(index, 1, data.data.data);
        console.log(newFrames);
        setCreation(newFrames);
        setEditShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:4000/creationData/${id}`)
      .then((data) => {
        const newFrames = creation.filter((e) => e._id !== id);
        setCreation(newFrames);
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
    <div className='pcoded-content'>
      <h5>CUSTOMER</h5>
      <div className='pcoded-inner-content'>
        {/* Main-body start */}
        <div className='main-body'>
          <div className='page-wrapper'>
            {/* Page-body start */}

            <div className='page-body'>
              {/* Basic table card start */}
              <div className='card'>
                <div className='card-header'>
                  <Button
                    onClick={handlePostShow}
                    variant='contained'
                    color='primary'
                    size='small'
                  >
                    Add Customer
                  </Button>
                  {/* <button
                    className='btn btn-primary btn-sm'
                    onClick={handleDelete}
                    style={{ marginLeft: '80%' }}
                  >
                    Delete
                  </button> */}
                </div>
                <div className='card-block table-border-style'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>S. No.</th>
                          <th>Name</th>
                          <th>Mobile</th>
                          <th>Address</th>
                          <th>Billing Address</th>
                          <th>DOB</th>
                          <th>Email</th>
                          <th>Gender</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        {creation.map((item, index) => {
                          return (
                            <tr key={item._id}>
                              <td>
                                <span style={{ paddingRight: '10px' }}>
                                  <input type='checkbox' />
                                </span>
                                {index + 1}
                              </td>
                              <td style={{ textTransform: 'capitalize' }}>
                                {item.firstname +
                                  '' +
                                  item.middlename +
                                  '' +
                                  item.lastname}
                              </td>
                              <td>{item.phonenumber}</td>
                              <td>{item.address}</td>
                              <td>{item.billingaddress}</td>
                              <td>{item.dob}</td>
                              <td>{item.emailid}</td>
                              <td>{item.gender}</td>
                              <td style={{ minWidth: 190 }}>
                                <IconButton
                                  size='small'
                                  onClick={() => {
                                    handleEditShow(
                                      setRowData(item),
                                      // setStore(item.value),
                                      setFirstname(item.firstname),
                                      setMiddlename(item.middlename),
                                      setLastname(item.lastname),
                                      setAddress(item.address),
                                      setBillingaddress(item.billingaddress),
                                      setPhonenumber(item.phonenumber),
                                      setAdditionphonenumber(
                                        item.additionphonenumber
                                      ),
                                      setDob(item.dob),
                                      setGender(item.gender),
                                      setEmailId(item.emailid),
                                      setId(item._id)
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
                  <div className='model-box-view'>
                    <Modal
                      show={viewPost}
                      onHide={handleSubmit}
                      backdrop='static'
                      keyboard={false}
                    >
                      <Modal.Header>
                        <Modal.Title>Creation</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div>
                          <div className='form-row'>
                            <div className='col-md-4 mb-3'>
                              <label>FirstName</label>
                              <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setFirstname(e.target.value)}
                                placeholder='Please enter FirstName'
                                required
                              />
                            </div>
                            <div className='col-md-4 mb-3'>
                              <label>MiddleName</label>
                              <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setMiddlename(e.target.value)}
                                placeholder='Please enter MiddleName'
                                required
                              />
                            </div>
                            <div className=' col-md-4 mb-3'>
                              <label>LastName</label>
                              <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setLastname(e.target.value)}
                                placeholder='Please enter LastName'
                                required
                              />
                            </div>
                          </div>
                          <div className='form-group mt-3'>
                            <label>Address</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setAddress(e.target.value)}
                              placeholder='Please enter address'
                              required
                            />
                          </div>
                          <div className='form-group'>
                            <label
                              style={{
                                margin: '0 0 -15px',
                                justifyContent: 'space-between',
                              }}
                            >
                              <span>
                                <input
                                  type='checkbox'
                                  onChange={(e) => setAddress(e.target.value)}
                                  required
                                />
                              </span>
                              <p> Same as Address</p>
                            </label>
                          </div>

                          <div className='form-group mt-3'>
                            <label>BillingAddress</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) =>
                                setBillingaddress(e.target.value)
                              }
                              placeholder='Please enter billingaddress'
                              required
                            />
                          </div>
                          <div className='form-row'>
                            <div className='col-md-6 mb-3'>
                              <label>Phonenumber</label>
                              <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setPhonenumber(e.target.value)}
                                placeholder='Please enter phonenumber'
                                required
                                maxLength={10}
                              />
                            </div>
                            <div className='col-md-6 mb-3'>
                              <label>AdditionPhonenumber </label>
                              <input
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                  setAdditionphonenumber(e.target.value)
                                }
                                placeholder='Please enter additionphonenumber'
                                required
                                maxLength={10}
                              />
                            </div>
                          </div>
                          <div className='form-group mt-3'>
                            <label>EmailID</label>
                            <input
                              type='email'
                              className='form-control'
                              onChange={(e) => setEmailId(e.target.value)}
                              placeholder='Please enter emailid'
                              required
                            />
                          </div>
                          <div className='form-row'>
                            <div className='col-md-6 mb-4'>
                              <label> DOB</label>
                              <input
                                // DatePicker
                                type='date'
                                className='form-control'
                                onChange={(e) => setDob(e.target.value)}
                                placeholder='Please enter dob'
                                required
                              />
                            </div>

                            <div className='col-md-6 mb-4'>
                              <label>Gender</label>

                              <select
                                id='inputState'
                                class='form-control'
                                onChange={(e) => setGender(e.target.value)}
                              >
                                <option selected>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                          </div>

                          <button
                            type='submit'
                            className='btn btn-success btn-sm '
                            onClick={handleSubmit}
                            data-dismiss='modal'
                          >
                            Add Data
                          </button>
                          <button
                            className='btn btn-danger btn-sm'
                            variant='secondary'
                            onClick={handlePostClose}
                            style={{ paddingLeft: '15px' }}
                            data-dismiss='modal'
                          >
                            Close
                          </button>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                  {/* edit */}
                  <div className='model-box-view'>
                    <Modal
                      show={viewEdit ? viewEdit : viewDelete}
                      onHide={
                        handleEditClose ? handleEditClose : handleDeleteClose
                      }
                      backdrop='static'
                      keyboard={false}
                    >
                      <Modal.Header>
                        <Modal.Title>
                          {viewEdit ? 'Edit' : 'Delete'}
                        </Modal.Title>
                      </Modal.Header>

                      <Modal.Body>
                        <div>
                          <div className='form-row'>
                            <div className='col-md-4 mb-3'>
                              <label>FirstName</label>
                              <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setFirstname(e.target.value)}
                                placeholder='Please enter FirstName'
                                defaultValue={rowData.firstname}
                              />
                            </div>
                            <div className='col-md-4 mb-3'>
                              <label>MiddleName</label>
                              <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setMiddlename(e.target.value)}
                                placeholder='Please enter MiddleName'
                                defaultValue={rowData.middlename}
                                required
                              />
                            </div>
                            <div className=' col-md-4 mb-3'>
                              <label>LastName</label>
                              <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setLastname(e.target.value)}
                                placeholder='Please enter LastName'
                                defaultValue={rowData.lastname}
                                required
                              />
                            </div>
                          </div>
                          <div className='form-group mt-3'>
                            <label>Address</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setAddress(e.target.value)}
                              placeholder='Please enter address'
                              defaultValue={rowData.address}
                              required
                            />
                          </div>
                          <div className='form-group'>
                            <label
                              style={{
                                margin: '0 0 -15px',
                                justifyContent: 'space-between',
                              }}
                            >
                              <span>
                                <input
                                  type='checkbox'
                                  onChange={(e) => setAddress(e.target.value)}
                                  required
                                />
                              </span>
                              <p> Same as Address</p>
                            </label>
                          </div>

                          <div className='form-group mt-3'>
                            <label>BillingAddress</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) =>
                                setBillingaddress(e.target.value)
                              }
                              placeholder='Please enter billingaddress'
                              defaultValue={rowData.billingaddress}
                              required
                            />
                          </div>
                          <div className='form-row'>
                            <div className='col-md-6 mb-3'>
                              <label>Phonenumber</label>
                              <input
                                type='text'
                                className='form-control'
                                onChange={(e) => setPhonenumber(e.target.value)}
                                placeholder='Please enter phonenumber'
                                defaultValue={rowData.phonenumber}
                                required
                              />
                            </div>
                            <div className='col-md-6 mb-3'>
                              <label>AdditionPhonenumber </label>
                              <input
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                  setAdditionphonenumber(e.target.value)
                                }
                                placeholder='Please enter additionphonenumber'
                                defaultValue={rowData.additionphonenumber}
                                required
                              />
                            </div>
                          </div>
                          <div className='form-group mt-3'>
                            <label>EmailID</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setEmailId(e.target.value)}
                              placeholder='Please enter emailid'
                              defaultValue={rowData.emailid}
                              required
                            />
                          </div>
                          <div className='form-row'>
                            <div className='col-md-6 mb-4'>
                              <label> DOB</label>
                              <input
                                type='date'
                                className='form-control'
                                onChange={(e) => setDob(e.target.value)}
                                defaultValue={rowData.dob}
                                placeholder='Please enter dob'
                                required
                              />
                            </div>

                            <div className='col-md-6 mb-4'>
                              <label>Gender</label>

                              <select
                                id='inputState'
                                class='form-control'
                                onChange={(e) => setGender(e.target.value)}
                                defaultValue={rowData.gender}
                              >
                                <option selected>Choose...</option>
                                <option>Male</option>
                                <option>Female</option>
                              </select>
                            </div>
                          </div>

                          <button
                            type='submit'
                            className='btn btn-success btn-sm'
                            onClick={viewEdit ? handleEdit : handleDelete}
                          >
                            {viewEdit ? 'Update' : 'Delete'}
                          </button>

                          <button
                            variant='secondary'
                            className='btn btn-danger btn-sm'
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
  );
}

export default Creation;
