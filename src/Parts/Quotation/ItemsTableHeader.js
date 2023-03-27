import React from "react";
import { View, Text } from "@react-pdf/renderer";

function ItemsTableHeader() {
  return (
    <View
      className="container_items"
      style={{
        marginTop: "20px",
        display: "flex",
        // justifyContent: "space-between",
        flexDirection: "row",
        border: "2px",
      }}
    >
      <Text className="description_items" style={{ fontSize: "15px" }}>
        Item Description
      </Text>
      <Text
        className="qty_items"
        style={{ fontSize: "15px", marginLeft: "20%" }}
      >
        Qty
      </Text>
      <Text
        className="rate_items"
        style={{ fontSize: "15px", marginLeft: "20%" }}
      >
        Rate
      </Text>
      <Text
        className="amount_items"
        style={{ fontSize: "15px", marginLeft: "20%" }}
      >
        Amount
      </Text>
    </View>
  );
}

export default ItemsTableHeader;
