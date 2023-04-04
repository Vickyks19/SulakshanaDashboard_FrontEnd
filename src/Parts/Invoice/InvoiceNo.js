import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import * as dayjs from "dayjs";

const styles = StyleSheet.create({
  container: {
    padding: 5,
    lineHeight: 1.5,
    border: "1px solid grey",
    borderBottomWidth: 0,
    borderTopWidth: 0,
  },

  keyValue: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: { width: "20%", fontSize: 10 },
  value: { fontSize: 10, fontFamily: "Helvetica-Bold" },
});

function InvoiceNo({ invoiceNew }) {
  console.log(4, invoiceNew);
  return (
    <View style={styles.container}>
      <View style={styles.keyValue}>
        <Text style={styles.label}>Quotation No</Text>
        <Text>: </Text>
        <Text style={styles.value}>{invoiceNew?.quotationNo}</Text>
      </View>
      <View style={styles.keyValue}>
        <Text style={styles.label}>Date</Text>
        <Text>: </Text>
        <Text style={styles.value}>
          {dayjs(invoiceNew?.date).format("DD/MM/YYYY")}
        </Text>
      </View>
      <View style={styles.keyValue}>
        <Text style={styles.label}>Due Date</Text>
        <Text>: </Text>
        <Text style={styles.value}>
          {dayjs(invoiceNew?.date).format("DD/MM/YYYY")}
        </Text>
      </View>
      <View style={styles.keyValue}>
        <Text style={styles.label}>Terms</Text>
        <Text>: </Text>
        <Text style={styles.value}>Due on Receipt</Text>
      </View>
      <View style={styles.keyValue}>
        <Text style={styles.label}>P.O.#</Text>
        <Text>: </Text>
        <Text style={styles.value}>266</Text>
      </View>
    </View>
  );
}

export default InvoiceNo;
