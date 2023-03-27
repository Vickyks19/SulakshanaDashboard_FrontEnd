import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container_table: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginLeft: "2px",
    marginTop: "24px",
    border: "2px solid black",
    width: "100%",
  },
  container_items: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid black",
    paddingBottom: "2%",
    width: "100%",
  },

  description: {
    fontSize: "15px",
  },
  qty: {
    fontSize: "15px",
    marginLeft: "21%",
  },
  rate: {
    fontSize: "15px",
    marginLeft: "20%",
  },
  amount: {
    fontSize: "15px",
    marginLeft: "20%",
  },

  row: {
    marginTop: "3%",
    paddingBottom: "2%",
    display: "flex",
    flexDirection: "row",
    borderBottom: "1px solid black",
    width: "100%",
  },
  description_item: {
    fontSize: "15px",
  },
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

  qty_item: {
    fontSize: "15px",
    paddingLeft: "25.5%",
  },
  rate_item: {
    fontSize: "15px",
    paddingLeft: "21%",
  },
  amount_item: {
    fontSize: "15px",
    paddingLeft: "22%",
  },

  // description_mount: {
  //   fontSize: "15px",
  // },
  // qty_mount: {
  //   fontSize: "15px",
  //   marginRight: "-5%",
  //   marginLeft: "26%",
  // },
  // rate_mount: {
  //   fontSize: "15px",
  //   marginLeft: "25.5%",
  // },
  // amount_mount: {
  //   fontSize: "15px",
  //   marginLeft: "24%",
  // },

  // description_glass: {
  //   fontSize: "15px",
  // },
  // qty_glass: {
  //   fontSize: "15px",
  //   marginRight: "-5%",
  //   marginLeft: "27%",
  // },
  // rate_glass: {
  //   fontSize: "15px",
  //   marginLeft: "25.5%",
  // },
  // amount_glass: {
  //   fontSize: "15px",
  //   marginLeft: "24.3%",
  // },

  // description_hardboard: {
  //   fontSize: "15px",
  // },
  // qty_hardboard: {
  //   fontSize: "15px",
  //   marginRight: "-5%",
  //   marginLeft: "21.2%",
  // },
  // rate_hardboard: {
  //   fontSize: "15px",
  //   marginLeft: "25.5%",
  // },
  // amount_hardboard: {
  //   fontSize: "15px",
  //   marginLeft: "24.6%",
  // },
});

function InvoiceTable({ invoiceNew }) {
  return (
    <View className="container_table" style={styles.container_table}>
      <View className="container_items" style={styles.container_items}>
        {/* <Text className="description_items" style={{ fontSize: "15px" }}>
          SlNo
        </Text> */}
        <Text className="description_items" style={styles.description}>
          Item Description
        </Text>
        <Text className="qty_items" style={styles.qty}>
          Qty
        </Text>
        <Text className="rate_items" style={styles.rate}>
          Rate
        </Text>
        <Text className="amount_items" style={styles.amount}>
          Amount
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.description_item}>
          {invoiceNew?.invoiceNew.items[0].size}{" "}
          {invoiceNew?.invoiceNew.items[0].name}
        </Text>
        <Text style={styles.qty_item}>
          {invoiceNew?.invoiceNew.items[0].qty}
        </Text>
        <Text style={styles.rate_item}>
          {invoiceNew?.invoiceNew.items[0].price}
        </Text>
        <Text style={styles.amount_item}>
          {invoiceNew?.invoiceNew.items[0].price}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.description_item}>
          {invoiceNew?.invoiceNew.items[1].size}{" "}
          {invoiceNew?.invoiceNew.items[1].name}
        </Text>
        <Text style={styles.qty_item}>
          {invoiceNew?.invoiceNew.items[1].qty}
        </Text>
        <Text style={styles.rate_item}>
          {invoiceNew?.invoiceNew.items[1].price}
        </Text>
        <Text style={styles.amount_item}>
          {invoiceNew?.invoiceNew.items[1].price}
        </Text>
      </View>

      <View style={styles.row}>
        <Text style={styles.description_item}>
          {invoiceNew?.invoiceNew.items[2].size}{" "}
          {invoiceNew?.invoiceNew.items[2].name}
        </Text>
        <Text style={styles.qty_item}>
          {invoiceNew?.invoiceNew.items[2].qty}
        </Text>
        <Text style={styles.rate_item}>
          {invoiceNew?.invoiceNew.items[2].price}
        </Text>
        <Text style={styles.amount_item}>
          {invoiceNew?.invoiceNew.items[2].price}
        </Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.description_item}>
          {invoiceNew?.invoiceNew.items[3].size}{" "}
          {invoiceNew?.invoiceNew.items[3].name}
        </Text>
        <Text style={styles.qty_item}>
          {invoiceNew?.invoiceNew.items[3].qty}
        </Text>
        <Text style={styles.rate_item}>
          {invoiceNew?.invoiceNew.items[3].price}
        </Text>
        <Text style={styles.amount_item}>
          {invoiceNew?.invoiceNew.items[3].price}
        </Text>
      </View>
      {/* <View className="row" style={styles.row}>
        <Text style={styles.description_item}>
          {invoiceNew?.invoiceNew.items[4].size}{" "}
          {invoiceNew?.invoiceNew.items[4].name}
        </Text>
        <Text style={styles.qty_item}>
          {invoiceNew?.invoiceNew.items[4].qty}
        </Text>
        <Text style={styles.rate_item}>
          {invoiceNew?.invoiceNew.items[4].price}
        </Text>
        <Text style={styles.amount_item}>
          {invoiceNew?.invoiceNew.items[4].price}
        </Text>
      </View> */}

      <View
        className="row_total"
        style={{
          marginTop: "5%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text
          className="total"
          style={{ fontSize: "15px", marginLeft: "83.5%" }}
        >
          Total
        </Text>
        <Text
          className="total_item"
          style={{
            fontSize: "15px",
            marginLeft: "5%",
          }}
        >
          {invoiceNew.invoiceNew.total}
        </Text>
      </View>

      <View
        className="row_total"
        style={{
          marginTop: "2%",
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Text
          className="total"
          style={{ fontSize: "15px", marginLeft: "76.2%" }}
        >
          GrandTotal
        </Text>
        <Text
          className="total_item"
          style={{
            fontSize: "15px",
            marginRight: "-2%",
            marginLeft: "5%",
          }}
        >
          {invoiceNew.invoiceNew.grandTotal}
        </Text>
      </View>
    </View>
  );
}

export default InvoiceTable;
