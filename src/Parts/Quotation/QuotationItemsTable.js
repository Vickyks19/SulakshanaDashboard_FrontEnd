import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
import { formatCurrency } from "./helpers/common";

const styles = StyleSheet.create({
  table: {
    display: "table",
    width: "100%",
    border: "1px solid grey",
    borderRightWidth: 0,
    borderBottomWidth: 0,
    borderTopWidth: 0,
    fontSize: "15px",
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    border: "1px solid grey",
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 10,
  },
  tableHeader: {
    fontSize: 10,
    margin: "5 5 2 5",
    fontFamily: "Helvetica-Bold",
    textAlign: "right",
  },
});

function QuotationItemsTable({ quotationNew }) {
  console.log(22, quotationNew);
  return (
    <>
      <View style={styles.table}>
        <View style={[styles.tableRow, { backgroundColor: "lightgray" }]}>
          <View style={[styles.tableCol, { width: "4%" }]}>
            <Text style={[styles.tableHeader, { textAlign: "center" }]}>#</Text>
          </View>
          <View style={[styles.tableCol, { width: "60%" }]}>
            <Text style={[styles.tableHeader, { textAlign: "left" }]}>
              Item & Description
            </Text>
          </View>
          <View style={[styles.tableCol, { width: "12%" }]}>
            <Text style={[styles.tableHeader]}>Qty</Text>
          </View>
          <View style={[styles.tableCol, { width: "12%" }]}>
            <Text style={[styles.tableHeader]}>Rate</Text>
          </View>
          <View style={[styles.tableCol, { width: "12%" }]}>
            <Text style={[styles.tableHeader]}>Amount</Text>
          </View>
        </View>

        {quotationNew.items?.map((e, i) => {
          return (
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, { width: "4%" }]}>
                <Text style={[styles.tableCell]}>{i + 1}</Text>
              </View>
              <View style={[styles.tableCol, { width: "60%" }]}>
                <Text style={[styles.tableCell]}>
                  {e?.size || ""} {e?.name || ""}
                </Text>
              </View>
              <View style={[styles.tableCol, { width: "12%" }]}>
                <Text style={[styles.tableCell]}>{e?.qty}</Text>
              </View>
              <View style={[styles.tableCol, { width: "12%" }]}>
                <Text style={styles.tableCell}>{formatCurrency(e?.price)}</Text>
              </View>
              <View style={[styles.tableCol, { width: "12%" }]}>
                <Text style={styles.tableCell}>{formatCurrency(e?.price)}</Text>
              </View>
            </View>
          );
        })}
      </View>
    </>
  );
}

export default QuotationItemsTable;
