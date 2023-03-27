import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
// import "./BillTo.css";

const styles = StyleSheet.create({
  container_BillTo: {
    marginTop: "20px",
    paddingLeft: "1%",
    borderBottom: "1px solid black",
    paddingBottom: 10,
  },

  billTo: {
    fontSize: "15px",
    paddingLeft: "1%",
  },

  customername: { marginTop: "10px", fontSize: "13px", paddingLeft: 50 },

  billingaddress: {
    marginTop: "5px",
    fontSize: "13px",
    paddingLeft: 50,
  },
});

function BillTo({ quotationNew }) {
  return (
    <View style={styles.container_BillTo}>
      <Text style={styles.billTo}>Bill To:</Text>
      <Text style={styles.customername}>
        {quotationNew?.quotationNew?.customername || ""}
      </Text>
      <Text style={styles.billingaddress}>
        {quotationNew?.quotationNew?.billingaddress || ""}
      </Text>
    </View>
  );
}

export default BillTo;
