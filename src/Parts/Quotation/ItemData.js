import { View, Text } from "@react-pdf/renderer";
import React from "react";

function ItemData({ items }) {
  return (
    <View
      className="row"
      style={{
        marginTop: "20px",
        display: "flex",
        // justifyContent: "space-between",
        flexDirection: "row",
        border: "2px",
      }}
    >
      <Text className="description_items" style={{ fontSize: "15px" }}>
        {items.items.items[0].size}
      </Text>
      <Text
        className="qty_items"
        style={{ fontSize: "15px", marginLeft: "20%" }}
      >
        {items.items.items[0].qty}
      </Text>
      <Text
        className="rate_items"
        style={{ fontSize: "15px", marginLeft: "20%" }}
      >
        {items.items.items[0].price}
      </Text>
      <Text
        className="amount_items"
        style={{ fontSize: "15px", marginLeft: "20%" }}
      >
        {items.items.total}
      </Text>
    </View>
  );
}

export default ItemData;
