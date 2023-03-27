import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  // container_table: {
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   marginLeft: "2px",
  //   marginTop: "24px",
  //   border: "2px solid black",
  //   width: "100%",
  // },
  // container_items: {
  //   marginTop: "20px",
  //   display: "flex",
  //   flexDirection: "row",
  //   borderBottom: "1px solid black",
  //   paddingBottom: "2%",
  //   width: "100%",
  // },

  // description: {
  //   fontSize: "15px",
  // },
  // qty: {
  //   fontSize: "15px",
  //   marginLeft: "21%",
  // },
  // rate: {
  //   fontSize: "15px",
  //   marginLeft: "20%",
  // },
  // amount: {
  //   fontSize: "15px",
  //   marginLeft: "20%",
  // },

  // row: {
  //   marginTop: "3%",
  //   paddingBottom: "2%",
  //   display: "flex",
  //   flexDirection: "row",
  //   borderBottom: "1px solid black",
  //   width: "100%",
  // },
  // description_item: {
  //   fontSize: "15px",
  // },
  // qty_item: {
  //   fontSize: "15px",
  //   marginRight: "-5%",
  //   marginLeft: "26.5%",
  // },
  // rate_item: {
  //   fontSize: "15px",
  //   marginLeft: "26.5%",
  // },
  // amount_item: {
  //   fontSize: "15px",
  //   marginLeft: "26%",
  // },

  // qty_item: {
  //   fontSize: "15px",
  //   paddingLeft: "25.5%",
  // },
  // rate_item: {
  //   fontSize: "15px",
  //   paddingLeft: "21%",
  // },
  // amount_item: {
  //   fontSize: "15px",
  //   paddingLeft: "22%",
  // },

  // row: {
  //   marginTop: 3,
  //   paddingBottom: 2,
  //   display: "flex",
  //   flexDirection: "row",
  //   borderBottom: "1px solid black",
  //   width: 100,
  // },
  // description_item: {
  //   fontSize: "15px",
  // },

  // qty_item: {
  //   fontSize: "15px",
  //   paddingLeft: 150,
  // },
  // rate_item: {
  //   fontSize: "15px",
  //   paddingLeft: 100,
  // },
  // amount_item: {
  //   fontSize: "15px",
  //   paddingLeft: 100,
  // },

  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 30,
    fontSize: "15px",
    marginLeft: 3,
  },
  tableRow: {
    margin: "auto",
    flexDirection: "row",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: "auto",
    marginTop: 5,
    fontSize: 11,
  },
});

function QuotationItemsTable({ quotationNew }) {
  return (
    <View style={styles.table}>
      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={[styles.tableCell, { fontSize: 13 }]}>
            Item Description
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={[styles.tableCell, { fontSize: 13 }]}>Qty</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={[styles.tableCell, { fontSize: 13 }]}>Rate</Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={[styles.tableCell, { fontSize: 13 }]}>Amount</Text>
        </View>
      </View>

      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[0]?.size || ""}{" "}
            {quotationNew?.quotationNew.items[0]?.name || ""}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[0]?.qty}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[0]?.price}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[0]?.price}
          </Text>
        </View>
      </View>

      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[1]?.size || ""}{" "}
            {quotationNew?.quotationNew.items[1]?.name || ""}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[1]?.qty}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[1]?.price}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[1]?.price}
          </Text>
        </View>
      </View>

      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[2]?.size || ""}{" "}
            {quotationNew?.quotationNew.items[2]?.name || ""}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[2]?.qty}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[2]?.price}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[2]?.price}
          </Text>
        </View>
      </View>

      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[3]?.size || ""} {""}
            {quotationNew?.quotationNew.items[3]?.name || ""}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[3]?.qty}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[3]?.price}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[3]?.price}
          </Text>
        </View>
      </View>

      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[4]?.size || ""} {""}
            {quotationNew?.quotationNew.items[4]?.name || ""}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[4]?.qty}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[4]?.price}
          </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew?.quotationNew.items[4]?.price}
          </Text>
        </View>
      </View>

      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={[styles.tableCell, { fontSize: 13 }]}>Total </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew.quotationNew?.total}
          </Text>
        </View>
      </View>

      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={[styles.tableCell, { fontSize: 13 }]}>Grand Total </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew.quotationNew?.grandTotal}
          </Text>
        </View>
      </View>
    </View>
  );
}

export default QuotationItemsTable;
