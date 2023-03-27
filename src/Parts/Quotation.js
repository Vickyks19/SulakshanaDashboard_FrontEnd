import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Quotation.css";
import { useNavigate, useLocation } from "react-router-dom";

function Quotation() {
  const [creation, setCreation] = useState([]);
  const [record, setRecord] = useState({});
  const [quotation, setQuotation] = useState([]);

  const location = useLocation();
  console.log(14, location.state);
  const newdata = location?.state || {};
  console.log(15, newdata);

  const [price, setPrice] = useState({
    frame: 0,
    mount: 0,
    glass: 0,
    hardboard: 0,
    sellingRate: 0,
  });

  const [qty, setQty] = useState({});
  const [withTax, setWithTAx] = useState(false);
  const [withoutTax, setWithoutTAx] = useState("");
  let navigate = useNavigate();

  const [quotationNo, setQuotationNo] = useState(0);
  const [date, setDate] = useState();
  const [customername, setCustomername] = useState(
    newdata?.newdata?.customername || ""
  );
  const [billingaddress, setBillingaddress] = useState(
    newdata?.newdata?.billingaddress || ""
  );

  const [paintingName, setPaintingName] = useState("");
  // const [sellingRate, setSellingRate] = useState(0);

  const [size, setSize] = useState({});
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);
  const [tax, setTax] = useState(0);
  const [grandTotal, setgrandToatal] = useState(0);

  let addMode = {};
  let editMode = {};
  if (newdata) {
    addMode.display = "none";
  } else {
    editMode.display = "none";
  }

  const handlePostClose = () => {
    navigate("/quotation");
  };

  const FrameData = () => {
    axios
      .get("http://localhost:4000/getData")

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
      .post("http://localhost:4000/quotation", {
        quotationNo,
        date,
        customername,
        billingaddress,
        items,
        total,
        grandTotal,
      })

      .then((data) => {
        setQuotation([data.data.data, ...quotation]);

        console.log(12, quotation);
        navigate("/quotation");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  // const handleEdit = (e) => {
  //   console.log(e);
  //   e.preventDefault();

  //   axios
  //     .put(`http://localhost:4000/quotationData/${id}`, {
  //       quotationNo: quotationNo,
  //       date: date,
  //       customername: customername,
  //       billingaddress: billingaddress,
  //       items: items,
  //       total: total,
  //       grandTotal: grandTotal,
  //     })

  //     .then((data) => {
  //       console.log(1, data);
  //       const index = quotation.findIndex((e) => e._id === id);
  //       console.log(12, index);
  //       const newFrames = quotation;
  //       newFrames.splice(index, 1, data.data.data);
  //       console.log(newFrames);
  //       setQuotation(newFrames);
  //       setEditShow(false);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };

  const setSelected = (customername) => {
    let billingaddress =
      record.creationData.find((item) => {
        return (
          item.firstname + "" + item.middlename + "" + item.lastname ===
          customername
        );
      })?.billingaddress || "";
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
        Name: "painting",
        price: sellingRate,
        test: sellingRate,
      },
    ]);

    console.log(items);
    const index = items.findIndex((item) => {
      console.log(0, item, item.Name);
      return item?.Name === "painting";
    });
    console.log(1, index);
    if (index > -1) {
      const newPaint = items;
      console.log(2, newPaint);
      newPaint.splice(index, 1, {
        name: paintingName,
        Name: "painting",
        price: sellingRate,
        test: sellingRate,
      });
      setItems(newPaint);
      console.log(3, newPaint);
    }
  };

  const calculate = (qty, entity) => {
    const rate =
      record[`${entity}Data`].find((item) => {
        return (
          item.width.toString() + " * " + item.height.toString() ===
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
  };

  // const calculateEdit = (qty, entity) => {

  //   const rate =
  //     record[`${entity}Data`].find((item) => {
  //       return (
  //         item.width.toString() + " * " + item.height.toString() ===
  //         size[`${entity}Size`]
  //       );
  //     })?.rate || 0;

  //   const newprice = qty * rate;

  //   setPrice({ ...price, [entity]: newprice });

  //   setItems([
  //     ...items,
  //     {
  //       name: entity,
  //       size: size?.[`${entity}Size`],
  //       price,
  //       qty,
  //     },
  //   ]);

  //   const index = items.findIndex((item) => {
  //     return item.name === entity;
  //   });

  //   if (index > -1) {
  //     const itemNew = items;
  //     itemNew.splice(index, 1, {
  //       name: entity,
  //       size: size?.[`${entity}Size`],
  //       price,
  //       qty,
  //     });

  //     setItems(itemNew);
  //   }
  // };

  useEffect(() => {
    const value =
      price.frame +
      price.mount +
      price.glass +
      price.hardboard +
      price.sellingRate;

    setTotal(value);

    const newItems = items.map((item) => {
      if (item?.Name !== "painting") {
        return { ...item, price: price[item.name] };
      }
      return item;
    });
    setItems(newItems);
    console.log(183, newItems, price.sellingRate);
  }, [price]);

  const onwithTax = () => {
    const tax = (total * Math.floor(withTax)) / 100;
    console.log(500, +tax);
    setTax(tax);
    const grandTotal = total + tax;
    setgrandToatal(grandTotal);
  };

  const onwithoutTax = () => {
    const withoutTax = total;
    const grandTotal = total;
    setgrandToatal(grandTotal);
  };

  useEffect(() => {
    FrameData();
  }, []);

  return (
    <>
      <div className="container" style={newdata ? editMode : addMode}>
        <div className="Add">
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label>Quotation No</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                onChange={(e) => setQuotationNo(e.target.value)}
                required
                defaultValue={newdata?.newdata?.quotationNo}
              />
            </div>
            <div className="col-md-4 mb-3">
              <label>Date</label>
              <input
                type="date"
                className="form-control"
                placeholder=""
                onChange={(e) => setDate(e.target.value)}
                required
                defaultValue={newdata?.newdata?.date}
              />
            </div>
          </div>

          <div className="form-row">
            <div className=" col-md-4 mb-3">
              <label>Customer Name</label>
              <select
                id="inputState"
                searchable={true}
                class="form-control"
                onChange={(e) => {
                  setCustomername(e.target.value);
                  setSelected(e.target.value);
                  console.log(300, e.target.value);
                }}
                value={customername}
              >
                <option>Select...</option>
                {record.creationData?.map((item, index) => (
                  <option
                    key={index}
                    //  value={item.customername}
                    value={item.id}
                  >
                    {item.firstname + "" + item.middlename + "" + item.lastname}
                  </option>
                ))}
              </select>
              {/* )} */}
            </div>
            <div className=" col-md-4 mb-3">
              <label>Billing Address</label>

              <input
                type="text"
                value={billingaddress}
                className="form-control"
                placeholder=""
                required
              />
            </div>
          </div>

          <div className="form-group col-md-4 mt-3">
            <label>Items</label>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4 mt-3">
              <label style={{ margin: "10% 50%" }}>Frmaes</label>
            </div>
            <div className="form-group col-md-2 mt-3">
              <label>Sizes</label>

              <select
                id="inputState"
                class="form-control"
                onChange={(e) => {
                  setSize({ ...size, frameSize: e.target.value });
                }}
                value={items.size}
              >
                <option>Select...</option>
                {record.frameData?.map((item) => (
                  <option
                    key={item.id}
                    // value={item.id}
                    value={item.size}
                  >
                    {item.width} * {item.height}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-1 mt-3">
              <label>Qty</label>
              <input
                type="text"
                name="qty"
                id="qty"
                className="form-control"
                placeholder=""
                required
                onChange={(e) => {
                  calculate(e.target.value, "frame");
                }}
              />
            </div>

            <div className="form-group col-md-1 mt-3">
              <label>Price</label>
              <input
                type="text"
                name="price.frame"
                className="form-control"
                placeholder=""
                required
                value={price.frame}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group col-md-4 mt-3">
              <label style={{ margin: "10% 50%" }}>Mount</label>
            </div>
            <div className="form-group col-md-2 mt-3">
              <label>Sizes</label>

              <select
                id="inputState"
                class="form-control"
                onChange={(e) => {
                  setSize({ ...size, mountSize: e.target.value });
                  console.log(145, e.target.value, size);
                }}
              >
                <option value="all">Select...</option>
                {record.mountData?.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                    // selected={
                    //   newdata?.newdata?.items[{}]?.size === items?.size || ""
                    // }
                  >
                    {item.width} * {item.height}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-1 mt-3">
              <label>Qty</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                required
                onChange={(e) => {
                  calculate(e.target.value, "mount");
                }}
              />
            </div>

            <div className="form-group col-md-1 mt-3">
              <label>Price</label>
              <input
                type="text"
                name="price.mount"
                className="form-control"
                placeholder=""
                value={price.mount}
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4 mt-3">
              <label style={{ margin: "10% 50%" }}>Glass</label>
            </div>
            <div className="form-group col-md-2 mt-3">
              <label>Sizes</label>

              <select
                id="inputState"
                class="form-control"
                onChange={(e) =>
                  setSize({ ...size, glassSize: e.target.value })
                }
              >
                <option>Select...</option>
                {record.glassData?.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                    // selected={
                    //   newdata?.newdata?.items?.size === items?.name || ""
                    // }
                  >
                    {item.width} * {item.height}
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-1 mt-3">
              <label>Qty</label>
              <input
                type="text"
                className="form-control"
                placeholder=""
                required
                onChange={(e) => {
                  calculate(e.target.value, "glass");
                }}
                // defaultValue={newdata?.newdata?.items[2]?.qty}
              />
            </div>

            <div className="form-group col-md-1 mt-3">
              <label>Price</label>

              <input
                type="text"
                name="price.glass"
                value={price.glass}
                className="form-control"
                placeholder=""
                required
              ></input>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4 mt-3">
              <label style={{ margin: "10% 50%" }}>Hardboard</label>
            </div>
            <div className="form-group col-md-2 mt-3">
              <label>Sizes</label>

              <select
                id="inputState"
                class="form-control"
                onChange={(e) =>
                  setSize({ ...size, hardboardSize: e.target.value })
                }
              >
                <option>Select...</option>
                {record.hardboardData?.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                    // selected={newdata?.newdata.items.size === items.size || {}}
                  >
                    <option>
                      {item.width} * {item.height}
                    </option>
                  </option>
                ))}
              </select>
            </div>
            <div className="form-group col-md-1 mt-3">
              <label>Qty</label>
              <input
                type="text"
                name="qty"
                className="form-control"
                placeholder=""
                onChange={(e) => {
                  calculate(e.target.value, "hardboard");
                }}
                // defaultValue={newdata?.items[3]?.qty}
                required
              />
            </div>

            <div className="form-group col-md-1 mt-3">
              <label>Price</label>
              <input
                type="price"
                name="price.hardboard"
                value={price.hardboard}
                className="form-control"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-4 mt-3">
              <label style={{ margin: "10% 50%" }}>Painting</label>
            </div>
            <div className="form-group col-md-2 mt-3">
              <label>PaintingName</label>

              <select
                id="inputState"
                class="form-control"
                onChange={(e) => {
                  setPaintingName(e.target.value);
                  setPaint(e.target.value);
                }}
              >
                <option>Select...</option>
                {record.paintingData?.map((item) => (
                  <option
                    key={item.id}
                    value={item.id}
                    // selected={
                    //   newdata?.newdata.items.name === items.paintingName || ""
                    // }
                  >
                    <option>{item.paintingName}</option>
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group col-md-1 mt-3">
              <label>SellingRate</label>
              <input
                type="price"
                value={price.sellingRate}
                className="form-control"
                placeholder=""
                required
              />
            </div>
          </div>
          <div className="form-group col-md-4 mb-3">
            <label>Total</label>
            <input
              type="text"
              className="form-control"
              value={total}
              placeholder=""
              required
            />
          </div>
          <div className="form-row">
            <div className="form-group col-md-4 mb-3">
              <label>Tax</label>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group col-md-8 mb-6">
              <div>
                <input
                  type="radio"
                  id="withTax"
                  onClick={onwithTax}
                  value="WithTax"
                  name="tax"
                />
                  <label for="withTax">WithTax</label> {" "}
                <input
                  type="radio"
                  id="withoutTax"
                  onClick={onwithoutTax}
                  name="tax"
                  style={{ paddingLeft: "10px" }}
                />
                  <label for="withoutTax">Without Tax</label>
                <select
                  id="inputState"
                  class="form-control"
                  onChange={(e) => setWithTAx(e.target.value)}
                >
                  <option>Select...</option>
                  {record.taxData?.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.taxpercentage}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="form-group col-md-4 mb-3">
            <label>Grand Total</label>
            <input
              type="text"
              className="form-control"
              value={grandTotal}
              required
            />
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-success btn-sm "
          >
            {newdata ? "Edit" : "Add"}
          </button>

          <button
            className="btn btn-danger btn-sm"
            onClick={handlePostClose}
            variant="secondary"
          >
            Close
          </button>
        </div>
      </div>
    </>
  );
}

export default Quotation;
