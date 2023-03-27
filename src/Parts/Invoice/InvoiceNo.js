import React, { Fragment } from "react";
// import "./QuotationNo.css";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

function InvoiceNo({ invoiceNew }) {
  console.log(4, invoiceNew);
  return (
    <>
      <View style={{ borderBottom: "1px solid black" }}>
        <View
          className="quotationNoContainer"
          style={{
            flexDirection: "row",
            marginTop: "30px",
            paddingLeft: "2%",
          }}
        >
          <Text className="label" style={{ width: "20%", fontSize: "15px" }}>
            Invoice No:
          </Text>
          <Text
            className="quotationNo"
            style={{ fontSize: "15px", marginLeft: "-5px" }}
          >
            {invoiceNew?.invoiceNew.quotationNo}
          </Text>
        </View>
        <View
          className="quotationDateContainer"
          style={{
            flexDirection: "row",
            padding: "2%",
          }}
        >
          <Text
            className="label"
            style={{ width: "20%", fontSize: "15px", marginLeft: "56px" }}
          >
            Date:
          </Text>
          <Text style={{ fontSize: "15px", marginLeft: "-60px" }}>
            {invoiceNew?.invoiceNew.date}
          </Text>
        </View>
      </View>
    </>
  );
}

export default InvoiceNo;
