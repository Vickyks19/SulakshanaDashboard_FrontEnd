import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import { IconButton, Button } from '@material-ui/core';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

function Painting() {
  const [painting, setPainting] = useState([]);
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

  const [paintingName, setPaintingName] = useState('');
  const [artistName, setArtistName] = useState('');
  const [purchaseRate, setPurchaseRate] = useState('');
  const [sellingRate, setSellingRate] = useState('');
  const [tax, setTax] = useState('');
  //   const [totalAmount, setTotalAmount] = useState("");

  const PaintingData = () => {
    axios
      .get('http://localhost:4000/paintingData')

      .then((data) => {
        console.log(40, data);
        setPainting(data.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/painting', {
        paintingName,
        artistName,
        purchaseRate,
        sellingRate,
        tax,
        // totalAmount,
      })
      .then((data) => {
        setPainting([data.data.data, ...painting]);
        setPostShow(false);
        setPaintingName('');
        setArtistName('');
        setPurchaseRate('');
        setSellingRate('');
        setTax('');
        // setTotalAmount("");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = (e) => {
    console.log(e);
    e.preventDefault();
    const Store = [
      setPaintingName(''),
      setArtistName,
      setPurchaseRate,
      setSellingRate,
      setTax,
      //   setTotalAmount,
      setId,
    ];

    axios
      .put(`http://localhost:4000/paintingData/${id}`, {
        paintingName: paintingName,
        artistName: artistName,
        purchaseRate: purchaseRate,
        sellingRate: sellingRate,
        tax: tax,
        // totalAmount: totalAmount,
      })

      .then((data) => {
        const index = painting.findIndex((e) => e._id === id);
        console.log(12, index);
        const newFrames = painting;
        newFrames.splice(index, 1, data.data.data);
        console.log(newFrames);
        setPainting(newFrames);
        setEditShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (e) => {
    e.preventDefault();
    axios
      .delete(`http://localhost:4000/paintingData/${id}`)
      .then((data) => {
        const newFrames = painting.filter((e) => e._id !== id);
        setPainting(newFrames);
        setDeleteShow(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    PaintingData();
  }, []);

  return (
    <div className='pcoded-content'>
      <h5>PAINTING</h5>
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
                    Add Painting
                  </Button>
                </div>
                <div className='card-block table-border-style'>
                  <div className='table-responsive'>
                    <table className='table'>
                      <thead>
                        <tr>
                          <th>S. No.</th>
                          <th>Painting Name</th>
                          <th>Artist Name</th>
                          <th>Purchase Rate</th>
                          <th>Selling Rate</th>
                          <th>Tax</th>
                          <th>Total Amount</th>
                          <th>Actions</th>
                        </tr>
                      </thead>

                      <tbody>
                        {painting.map((item, index) => {
                          return (
                            <tr key={item._id}>
                              <td>
                                <span style={{ paddingRight: 10 }}>
                                  <input type='checkbox' />
                                </span>
                                {index + 1}
                              </td>
                              <td>{item.paintingName}</td>
                              <td>{item.artistName}</td>
                              <td>{item.purchaseRate}</td>
                              <td>{item.sellingRate}</td>
                              <td>{item.tax}</td>
                              <td>{item.sellingRate}</td>
                              <td style={{ minWidth: 190 }}>
                                <IconButton
                                  size='small'
                                  onClick={() => {
                                    handleEditShow(
                                      setRowData(item),
                                      setPaintingName(item.paintingName),
                                      setArtistName(item.artistName),
                                      setPurchaseRate(item.purchaseRate),
                                      setSellingRate(item.sellingRate),
                                      setTax(item.tax),
                                      // setTotalAmount(
                                      //   item.totalAmount
                                      // ),
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

                  {/* Add */}
                  <div className='model-box-view'>
                    <Modal
                      show={viewPost}
                      onHide={handleSubmit}
                      backdrop='static'
                      keyboard={false}
                    >
                      <Modal.Header>
                        <Modal.Title>Painting</Modal.Title>
                      </Modal.Header>
                      <Modal.Body>
                        <div>
                          <div className='form-group mt-3'>
                            <label>PaintingName</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setPaintingName(e.target.value)}
                              placeholder='Please enter Name'
                              required
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>ArtistName</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setArtistName(e.target.value)}
                              placeholder='Please enter width'
                              required
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>PurchaseRate</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setPurchaseRate(e.target.value)}
                              placeholder='Please enter Height'
                              required
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>SellingRate</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setSellingRate(e.target.value)}
                              placeholder='Please enter Rate'
                              required
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>Tax</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setTax(e.target.value)}
                              placeholder='Please enter Rate'
                              required
                            />
                          </div>
                          {/* <div className="form-group mt-3">
                                      <label>TotalAmount</label>
                                      <input
                                        type="text"
                                        className="form-control"
                                        onChange={(e) =>
                                          setTotalAmount(e.target.value)
                                        }
                                        placeholder="Please enter Rate"
                                        required
                                      />
                                    </div> */}
                          <button
                            type='submit'
                            className='btn btn-success btn-sm '
                            onClick={handleSubmit}
                            data-dismiss='modal'
                          >
                            Add
                          </button>
                          <Button
                            className='btn btn-danger btn-sm'
                            variant='secondary'
                            onClick={handlePostClose}
                            style={{ paddingLeft: '15px' }}
                            data-dismiss='modal'
                          >
                            Close
                          </Button>
                        </div>
                      </Modal.Body>
                    </Modal>
                  </div>
                  {/* Add End */}

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
                            <label>PaintingName</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setPaintingName(e.target.value)}
                              placeholder='Please enter Name'
                              defaultValue={rowData.paintingName}
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>ArtistName</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setArtistName(e.target.value)}
                              placeholder='Please enter width'
                              defaultValue={rowData.artistName}
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>PurchaseRate</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setPurchaseRate(e.target.value)}
                              placeholder='Please enter Height'
                              defaultValue={rowData.purchaseRate}
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>SellingRate</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setSellingRate(e.target.value)}
                              placeholder='Please enter Rate'
                              defaultValue={rowData.sellingRate}
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>Tax</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setTax(e.target.value)}
                              placeholder='Please enter Rate'
                              defaultValue={rowData.tax}
                            />
                          </div>
                          <div className='form-group mt-3'>
                            <label>TotalAmount</label>
                            <input
                              type='text'
                              className='form-control'
                              onChange={(e) => setSellingRate(e.target.value)}
                              placeholder='Please enter Rate'
                              defaultValue={rowData.sellingRate}
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

export default Painting;
