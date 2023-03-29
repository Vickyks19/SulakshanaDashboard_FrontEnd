import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  container: {
    border: "1px solid grey",
    lineHeight: 1.5,
    padding: "2px 5px",
  },

  label: { fontSize: 10 },
  value: { fontSize: 10 },
  fontBold: {
    fontFamily: "Helvetica-Bold",
  },
});

function BillTo({ quotationNew }) {
  return (
    <View>
      <View style={[styles.container, { backgroundColor: "lightgrey" }]}>
        <Text style={styles.label}>Bill To</Text>
      </View>
      <View style={[styles.container, { borderTopWidth: 0 }]}>
        <Text style={[styles.value, styles.fontBold]}>
          {quotationNew?.customername || ""}
        </Text>
        <Text style={[styles.value, styles.fontBold]}>
          {quotationNew?.billingaddress || ""}
        </Text>
      </View>
      <View style={[styles.container, { borderTopWidth: 0 }]}>
        <Text style={styles.value}>Subject :</Text>
        <Text style={styles.value}>Picture Framing</Text>
      </View>
    </View>
  );
}

export default BillTo;
