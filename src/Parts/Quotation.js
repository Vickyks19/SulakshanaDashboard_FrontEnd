import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Quotation.css';
import { useNavigate, useLocation } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import { Button } from '@material-ui/core';

function Quotation({ onHide, newdata, setQuotations, quotations }) {
  const [creation, setCreation] = useState([]);
  const [record, setRecord] = useState({});

  const [id, setId] = useState(newdata?._id);

  const [price, setPrice] = useState({
    frame: 0,
    mount: 0,
    glass: 0,
    hardboard: 0,
    sellingRate: 0,
  });

  const [withTax, setWithTax] = useState(false);
  let navigate = useNavigate();

  const [quotationNo, setQuotationNo] = useState(newdata?.quotationNo || 0);
  const [date, setDate] = useState();
  const [customername, setCustomername] = useState(newdata?.customername || '');
  const [billingaddress, setBillingaddress] = useState(
    newdata?.billingaddress || ''
  );

  const [paintingName, setPaintingName] = useState('');

  const [size, setSize] = useState({});
  const [taxOptions, setTaxOptions] = useState(false);
  const [items, setItems] = useState([]);
  console.log(36, items);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [grandTotal, setgrandToatal] = useState(newdata?.grandTotal || 0);

  let addMode = {};
  let editMode = {};
  if (newdata) {
    addMode.display = 'none';
  } else {
    editMode.display = 'none';
  }

  const handlePostClose = () => {
    navigate('/quotation');
  };

  const FrameData = () => {
    axios
      .get('http://localhost:4000/getData')

      .then((data) => {
        setRecord(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post('http://localhost:4000/quotation', {
        quotationNo,
        date,
        customername,
        billingaddress,
        items,
        total,
        grandTotal,
      })

      .then((data) => {
        setQuotations([data.data.data, ...quotations]);

        onHide();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleEdit = () => {
    axios
      .put(`http://localhost:4000/quotationData/${newdata?._id}`, {
        quotationNo: quotationNo,
        date: date,
        customername: customername,
        billingaddress: billingaddress,
        items: items,
        total: total,
        grandTotal: grandTotal,
      })
      .then((data) => {
        const index = quotations.findIndex((item) => {
          return item._id === id;
        });
        const newFrames = quotations;
        newFrames.splice(index, 1, data.data.data);
        setQuotations(newFrames);
        onHide();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const setSelected = (customername) => {
    let billingaddress =
      record.creationData.find((item) => {
        return (
          item.firstname + '' + item.middlename + '' + item.lastname ===
          customername
        );
      })?.billingaddress || '';
    setBillingaddress(billingaddress);
  };

  const setPaint = (paintingName) => {
    let sellingRate =
      record.paintingData.find((item) => {
        return item.paintingName === paintingName;
      })?.sellingRate || 0;

    setPrice({ ...price, sellingRate });

    setItems([
      ...items,
      {
        name: paintingName,
        Name: 'painting',
        price: sellingRate,
      },
    ]);
    const index = items.findIndex((item) => {
      return item?.Name === 'painting';
    });
    if (index > -1) {
      const newPaint = items;
      newPaint.splice(index, 1, {
        name: paintingName,
        Name: 'painting',
        price: sellingRate,
      });
      setItems(newPaint);
    }
  };

  const calculate = (qty, entity) => {
    if (size[`${entity}Size`]) {
      const rate =
        record[`${entity}Data`].find((item) => {
          return (
            item.width.toString() + ' * ' + item.height.toString() ===
            size[`${entity}Size`]
          );
        })?.rate || 0;

      const newprice = qty * rate;

      setPrice({ ...price, [entity]: newprice });

      setItems([
        ...items,
        {
          name: entity,
          size: size?.[`${entity}Size`],
          price,
          qty,
        },
      ]);

      const index = items.findIndex((item) => {
        return item.name === entity;
      });
      if (index > -1) {
        const itemNew = items;
        itemNew.splice(index, 1, {
          name: entity,
          size: size?.[`${entity}Size`],
          price,
          qty,
        });
        setItems(itemNew);
      }
    }
  };

  useEffect(() => {
    const value =
      price?.frame +
      price?.mount +
      price?.glass +
      price?.hardboard +
      price?.sellingRate;

    setTotal(value);

    const newItems = items.map((item) => {
      if (item?.Name !== 'painting') {
        return { ...item, price: price[item.name] };
      }

      return item;
    });
    setItems(newItems);
  }, [price]);

  const onwithTax = () => {
    const tax = (total * Math.floor(withTax)) / 100;
    setTax(tax);
    const grandTotal = total + tax;
    setgrandToatal(grandTotal);
    setTaxOptions(false);
  };

  const onwithoutTax = () => {
    setTaxOptions(true);
    const withoutTax = total;
    const grandTotal = total;
    setgrandToatal(grandTotal);
  };

  const formEdit = () => {
    if (newdata?._id) {
      // newdata?.items?.map((item) => {
      //   console.log(229, item.size !== "placeholder");
      //   if (item.size !== "placeholder") {
      //     console.log(230, newdata?.items, items);
      //     setItems([...items, ...newdata?.items]);
      //     console.log(232, items);
      //   }
      // });

      let newsize = {};
      newdata?.items?.map((item) => {
        if (item?.Name !== 'painting') {
          newsize[`${item.name}Size`] = item.size;
          return { [`${item.name}Size`]: item.size };
        }
      });
      console.log(240, newsize);
      setSize(newsize);
      console.log(242, size);

      let priceNew = {};
      newdata?.items?.map((item) => {
        if (item?.Name !== 'painting') {
          priceNew[`${item.name}`] = item.price;
          return { [`${item.name}`]: item.price };
        } else {
          priceNew.sellingRate = item.price;
        }
      });

      setPrice({ ...price, ...priceNew });

      const paintEdit = newdata?.items?.find((item) => {
        if (item.Name === 'painting') {
          return item?.name;
        }
      });
      return setPaintingName(paintEdit?.name);
    }
  };

  const Qty = (entity) => {
    const newQty = newdata?.items?.find((item) => {
      if (item.name === entity) {
        return item.qty;
      }
    });
    return newQty?.qty;
  };

  useEffect(() => {
    formEdit();
    Qty();
  }, []);

  useEffect(() => {
    FrameData();
  }, []);

  return (
    <>
      <Modal.Header>
        <Modal.Title>
          {`${newdata?._id ? 'Edit' : 'Add'} Quotation`}
        </Modal.Title>
      </Modal.Header>
      <div style={{ height: '600px', position: 'relative' }}>
        <Modal.Body style={{ maxHeight: '100%', overflow: 'auto' }}>
          <div className='container' style={newdata ? editMode : addMode}>
            <div className='Add'>
              <div className='form-row mt-3 mb-2'>
                <div className='col-md-3 mb-3'>
                  <label>Quotation No</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder=''
                    onChange={(e) => setQuotationNo(e.target.value)}
                    required
                    value={quotationNo}
                  />
                </div>
                <div className='col-md-3 mb-3'>
                  <label>Date</label>
                  <input
                    type='date'
                    className='form-control'
                    placeholder=''
                    onChange={(e) => setDate(e.target.value)}
                    required
                    defaultValue={newdata?.date}
                  />
                </div>
                <div className=' col-md-3 mb-3'>
                  <label>Customer Name</label>
                  <select
                    id='inputState'
                    searchable={true}
                    class='form-control'
                    onChange={(e) => {
                      setCustomername(e.target.value);
                      setSelected(e.target.value);
                    }}
                    value={customername}
                  >
                    <option>Select Customer</option>
                    {record.creationData?.map((item, index) => (
                      <option key={index} value={item.id}>
                        {item.firstname +
                          '' +
                          item.middlename +
                          '' +
                          item.lastname}
                      </option>
                    ))}
                  </select>
                </div>
                <div className=' col-md-3 mb-3'>
                  <label>Billing Address</label>

                  <input
                    type='text'
                    value={billingaddress}
                    className='form-control'
                    placeholder=''
                    disabled
                    required
                  />
                </div>
              </div>

              <div className='form-row mb-3'>
                <div className='form-group col-md-3'>
                  <label>Frame (Sizes)</label>
                  <select
                    id='inputState'
                    class='form-control'
                    searchable={true}
                    onChange={(e) => {
                      if (e.target.value !== 'placeholder') {
                        setSize({ ...size, frameSize: e.target.value });
                      } else {
                        setSize({ ...size, frameSize: '' });
                      }
                    }}
                    value={size.frameSize}
                  >
                    <option value='placeholder'>Select Size</option>
                    {record.frameData?.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.width} * {item.height}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='form-group col-md-1'>
                  <label>Qty</label>
                  <input
                    type='text'
                    name='qty'
                    id='qty'
                    className='form-control'
                    placeholder=''
                    required
                    onChange={(e) => {
                      calculate(e.target.value, 'frame');
                    }}
                    defaultValue={Qty('frame')}
                  />
                </div>

                <div className='form-group col-md-1'>
                  <label>Price</label>
                  <input
                    type='text'
                    name='price.frame'
                    className='form-control'
                    placeholder=''
                    required
                    disabled
                    value={price.frame}
                    defaultValue={price.frame}
                  />
                </div>
                <div className='form-group col-md-1'></div>

                <div className='form-group col-md-3'>
                  <label>Mount (Sizes)</label>
                  <select
                    id='inputState'
                    class='form-control'
                    onChange={(e) => {
                      setSize({ ...size, mountSize: e.target.value });
                    }}
                    value={size.mountSize}
                  >
                    <option value='placeholder'>Select Size</option>
                    {record.mountData?.map((item) => (
                      <option key={item.id} value={item.id}>
                        {item.width} * {item.height}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='form-group col-md-1'>
                  <label>Qty</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder=''
                    required
                    onChange={(e) => {
                      calculate(e.target.value, 'mount');
                    }}
                    defaultValue={Qty('mount')}
                  />
                </div>

                <div className='form-group col-md-1'>
                  <label>Price</label>
                  <input
                    type='text'
                    name='price.mount'
                    className='form-control'
                    placeholder=''
                    value={price.mount}
                    defaultValue={price.mount}
                    disabled
                    required
                  />
                </div>
              </div>

              <div className='form-row mb-3'>
                <div className='form-group col-md-3'>
                  <label>Glass (Sizes)</label>

                  <select
                    id='inputState'
                    class='form-control'
                    searchable={true}
                    onChange={(e) =>
                      setSize({ ...size, glassSize: e.target.value })
                    }
                    value={size.glassSize}
                  >
                    <option value='placeholder'>Select Size</option>
                    {record.glassData?.map((item) => (
                      <option
                        key={item.id}
                        value={item.size}
                        selected={item.width * item.height === size.glassSize}
                      >
                        {item.width} * {item.height}
                      </option>
                    ))}
                  </select>
                </div>
                <div className='form-group col-md-1'>
                  <label>Qty</label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder=''
                    required
                    onChange={(e) => {
                      calculate(e.target.value, 'glass');
                    }}
                    defaultValue={Qty('glass')}
                  />
                </div>

                <div className='form-group col-md-1'>
                  <label>Price</label>

                  <input
                    type='text'
                    name='price.glass'
                    value={price.glass}
                    defaultValue={price.glass}
                    className='form-control'
                    placeholder=''
                    disabled
                    required
                  ></input>
                </div>
                <div className='form-group col-md-1'></div>

                <div className='form-group col-md-3'>
                  <label>Hardboard (Sizes)</label>

                  <select
                    id='inputState'
                    class='form-control'
                    onChange={(e) =>
                      setSize({
                        ...size,
                        hardboardSize: e.target.value,
                      })
                    }
                    value={size.hardboardSize}
                  >
                    <option value='placeholder'>Select...</option>
                    {record.hardboardData?.map((item) => (
                      <option key={item.id} value={item.id}>
                        <option>
                          {item.width} * {item.height}
                        </option>
                      </option>
                    ))}
                  </select>
                </div>
                <div className='form-group col-md-1'>
                  <label>Qty</label>
                  <input
                    type='text'
                    name='qty'
                    className='form-control'
                    placeholder=''
                    onChange={(e) => {
                      calculate(e.target.value, 'hardboard');
                    }}
                    defaultValue={Qty('hardboard')}
                    required
                  />
                </div>

                <div className='form-group col-md-1'>
                  <label>Price</label>
                  <input
                    type='price'
                    name='price.hardboard'
                    value={price.hardboard}
                    defaultValue={price.hardboard}
                    className='form-control'
                    placeholder=''
                    disabled
                    required
                  />
                </div>
              </div>

              <div className='form-row mb-2'>
                <div className='form-group col-md-4'>
                  <label>Painting Name</label>
                  <select
                    id='inputState'
                    class='form-control'
                    onChange={(e) => {
                      setPaintingName(e.target.value);
                      setPaint(e.target.value);
                    }}
                    value={paintingName}
                  >
                    <option>Select...</option>
                    {record.paintingData?.map((item) => (
                      <option key={item.id} value={item.id}>
                        <option>{item.paintingName}</option>
                      </option>
                    ))}
                  </select>
                </div>

                <div className='form-group col-md-4'>
                  <label>Selling Rate</label>
                  <input
                    type='price'
                    value={price.sellingRate}
                    defaultValue={price.sellingRate}
                    className='form-control'
                    placeholder=''
                    disabled
                    required
                  />
                </div>
              </div>
            </div>

            <div className='form-row'>
              <div className='col-md-6'>
                <label>Total</label>
              </div>
              <div className='col-md-6'>
                <label style={{ marginRight: 20 }}>Tax</label>
              </div>
              <div className='form-group col-md-5'>
                <input
                  type='text'
                  className='form-control'
                  value={total}
                  disabled
                  placeholder=''
                  required
                />
              </div>
              <div className='form-group col-md-1'></div>
              <div className='form-group col-md-3 mb-3'>
                <div>
                  <input
                    type='radio'
                    id='withTax'
                    onClick={onwithTax}
                    value='WithTax'
                    name='tax'
                  />
                   {' '}
                  <label for='withTax' style={{ paddingRight: 10 }}>
                    With Tax
                  </label>
                   
                  <input
                    type='radio'
                    id='withoutTax'
                    onClick={onwithoutTax}
                    name='tax'
                    style={{ paddingLeft: '10px' }}
                  />
                    <label for='withoutTax'>Without Tax</label>
                </div>
              </div>
              <div className='form-group col-md-3 mb-3'>
                <select
                  id='inputState'
                  class='form-control'
                  onChange={(e) => setWithTax(e.target.value)}
                  disabled={taxOptions}
                >
                  <option>Select...</option>
                  {record.taxData?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.taxpercentage}
                    </option>
                  ))}
                </select>
              </div>

              <div className='form-group col-md-5 mb-3'>
                <label>Grand Total</label>
                <input
                  type='text'
                  className='form-control'
                  value={grandTotal}
                  disabled
                  required
                />
              </div>
            </div>
          </div>
        </Modal.Body>
      </div>
      <Modal.Footer>
        <Button
          type='submit'
          onClick={newdata?._id ? handleEdit : handleSubmit}
          size='small'
          variant='contained'
          color='primary'
        >
          {newdata?._id ? 'Edit' : 'Add'}
        </Button>

        <Button size='small' variant='outlined' onClick={onHide}>
          Close
        </Button>
      </Modal.Footer>
    </>
    // </Modal>
  );
}

export default Quotation;
