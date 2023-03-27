import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

function TitleInvoice({ title }) {
  return (
    <View className="titleContainer" style={{ alignItems: "center" }}>
      <Text
        className="reportTitle"
        style={{
          // color: "Black",
          letterSpacing: "1px",
          fontSize: "15px",
          textTransform: "uppercase",
        }}
      >
        {title}
      </Text>
    </View>
  );
}

export default TitleInvoice;
