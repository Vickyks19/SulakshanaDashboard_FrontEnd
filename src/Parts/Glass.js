import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Glass() {
  const [glass, setGlass] = useState([]);
  const [rowData, setRowData] = useState('');

  const [viewPost, setPostShow] = useState(false);
  const handlePostShow = () => setPostShow(true);
  const handlePostClose = () => setPostShow(false);

  const [viewEdit, setEditShow] = useState(false);
  const handleEditShow = () => setEditShow(true);
  const handleEditClose = () => setEditShow(false);

  const [id, setId] = useState('');

  const [viewDelete, setDeleteShow] = useState(false);
  const handleDeleteShow = () => setDeleteShow(true);
  const handleDeleteClose = () => setDeleteShow(false);

  const [slNo, setSlNo] = useState('');
  const [name, setName] = useState('');
  const [width, setWidth] = useState('');
  const [height, setHeight] = useState('');
  const [rate, setRate] = useState('');

  const FrameData = () => {
    axios
      .get('http://localhost:4000/glassData')

      .then((data) => {
        setGlass(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/glass', {
        name,
        width,
        height,
        rate,
      })
      .then((data) => {
        setGlass([data.data.data, ...glass]);
        setPostShow(false);
        setName('');
        setWidth('');
        setHeight('');
        setRate('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    const Edit = [setName(''), setWidth(), setHeight(), setRate()];
    axios
      .put(`http://localhost:4000/glassData/${id}`, {
        slNo,
        name,
        width,
        height,
        rate,
      })
      .then((data) => {
        const index = glass.findIndex((e) => e._id === id);
        const newFrames = glass;
        newFrames.splice(index, 1, data.data.data);
        setGlass(newFrames);
        setEditShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:4000/glassData/${id}`)
      .then((data) => {
        const newFrames = glass.filter((e) => e._id !== id);
        setGlass(newFrames);
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
      <h5>Glass</h5>
      <div className='pcoded-inner-content'>
        {/* Main-body start */}
        <div className='main-body'>
          <div className='page-wrapper'>
            <div className='page-body'>
              {/* Basic table card start */}
              <div className='card'>
                <div className='card-header'>
                  {/* <h5>Glass</h5> */}
                  <button
                    className='btn btn-primary btn-sm'
                    onClick={() => {
                      handlePostShow();
                    }}
                  >
                    Add
                  </button>
                  {/* 
                            <div className="card-header-right">
                              <ul className="list-unstyled card-option">
                                <li>
                                  <i className="icofont icofont-simple-left" />
                                </li>

                                <li>
                                  <i className="icofont icofont-ui-edit" />
                                </li>
                                <li>
                                  <i className="icofont icofont-ui-delete" />
                                </li>
                                <li>
                                  <i className="icofont icofont-error close-card" />
                                </li>
                              </ul>
                            </div> */}
                </div>
                <div className='card-block table-border-style'>
                  <div className='table-responsive'>
                    <table className='table'>
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
                        {glass.map((item, index) => {
                          return (
                            <tr key={item._id}>
                              <td>
                                <span>
                                  <input type='checkbox' />
                                </span>
                                {index + 1}
                              </td>
                              <td>{item.name}</td>
                              <td>{item.width}</td>
                              <td>{item.height}</td>
                              <td>{item.rate}</td>
                              <td style={{ minWidth: 190 }}>
                                <button
                                  size='sm'
                                  varient='primary'
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
                                  size='sm'
                                  varient='primary'
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
                  {/* Add start */}
                  <div className='model-box-view'>
                    <Modal
                      show={viewPost}
                      onHide={handlePostClose}
                      backdrop='static'
                      keyboard={false}
                    >
                      <Modal.Header>
                        <Modal.Title>GLass</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div>
                          <div className='form-group mt-3'>
                            <label>Name</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setName(e.target.value)}
                              placeholder='Please enter Name'
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>Width</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setWidth(e.target.value)}
                              placeholder='Please enter width'
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>Height</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setHeight(e.target.value)}
                              placeholder='Please enter Height'
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>Rate</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setRate(e.target.value)}
                              placeholder='Please enter Rate'
                            />
                          </div>
                          <button
                            type='submit'
                            className='btn btn-success btn-sm'
                            onClick={handleSubmit}
                          >
                            Add
                          </button>
                          <button
                            variant='secondary'
                            className='btn btn-danger btn-sm'
                            onClick={handlePostClose}
                          >
                            Close
                          </button>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                  {/* Add end */}
                  {/* Edit & Delete */}
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
                          <div className='form-group mt-3'>
                            <label>Name</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setName(e.target.value)}
                              placeholder='Please enter Name'
                              defaultValue={rowData.name}
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>Width</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setWidth(e.target.value)}
                              placeholder='Please enter width'
                              defaultValue={rowData.width}
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>Height</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setHeight(e.target.value)}
                              placeholder='Please enter Height'
                              defaultValue={rowData.height}
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>Rate</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setRate(e.target.value)}
                              placeholder='Please enter Rate'
                              defaultValue={rowData.rate}
                            />
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
                  {/* Edit & Delete end */}
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

export default Glass;
