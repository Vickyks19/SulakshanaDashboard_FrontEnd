import React from "react";
import { Text, View } from "@react-pdf/renderer";
// import "./BillTo.css";

function InvoiceBillTo({ invoiceNew }) {
  console.log(6, invoiceNew);
  return (
    <View
      className="headerContainer_billTo"
      style={{ marginTop: "30px", paddingLeft: "1%" }}
    >
      <Text className="billTo" style={{ fontSize: "15px", paddingLeft: "1%" }}>
        Bill To:
      </Text>
      <Text
        className="cus"
        style={{ marginTop: "10px", fontSize: "15px", paddingLeft: "2%" }}
      >
        {invoiceNew?.invoiceNew.customername}
      </Text>
      <Text style={{ marginTop: "5px", fontSize: "15px", paddingLeft: "2%" }}>
        {invoiceNew?.invoiceNew.billingaddress}
      </Text>
    </View>
  );
}

export default InvoiceBillTo;
