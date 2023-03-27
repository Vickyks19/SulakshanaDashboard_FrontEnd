import React, { Fragment } from "react";
// import "./QuotationNo.css";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    borderBottom: "1px solid black",
  },

  quotationNoContainer: {
    flexDirection: "row",
    marginTop: "30px",
    paddingLeft: "2%",
  },

  quotationNo: { fontSize: "13px", marginLeft: "-5px" },
  label: { width: "20%", fontSize: "15px" },

  quotationDateContainer: { flexDirection: "row", padding: "2%" },
  quotationDate: { fontSize: "13px", marginLeft: "-60px" },
});

function QuotationNo({ quotationNew }) {
  console.log(11, quotationNew);
  return (
    <View style={styles.container}>
      <View style={styles.quotationNoContainer}>
        <Text style={styles.label}>Quotation No:</Text>
        <Text style={styles.quotationNo}>
          {quotationNew?.quotationNew?.quotationNo}
        </Text>
      </View>
      <View style={styles.quotationDateContainer}>
        <Text
          // style={{ width: "20%", fontSize: "15px", marginLeft: "56px" }}
          style={styles.label}
        >
          Date:
        </Text>
        <Text style={styles.quotationDate}>
          {quotationNew?.quotationNew?.date}
        </Text>
      </View>
    </View>
  );
}

export default QuotationNo;
