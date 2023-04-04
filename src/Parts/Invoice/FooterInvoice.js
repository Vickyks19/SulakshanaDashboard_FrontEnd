import { StyleSheet, Text, View } from "@react-pdf/renderer";
import React from "react";
import { currencyToWords, formatCurrency } from "./helpers/common";

const styles = StyleSheet.create({
  footer: {
    fontSize: 10,
    lineHeight: 1.5,
    border: "1px solid grey",
    borderTopWidth: 0,
    height: "50%",
  },
  flex: { display: "flex", flexDirection: "row" },
  justifyEnd: {
    justifyContent: "flex-end",
  },
  leftContainer: { width: "55%", padding: 5 },
  rightContainer: {
    width: "45%",
    borderLeft: "1px solid gray",
  },
  signatureSection: {
    flexDirection: "column",
    alignItems: "center",
    padding: 5,
  },
  fontBold: {
    fontFamily: "Helvetica-Bold",
  },
});
function FooterInvoice({ invoiceNew }) {
  return (
    <View style={[styles.flex, styles.footer]}>
      <View style={styles.leftContainer}>
        <Text>Total In Words</Text>
        <Text style={{ fontFamily: "Helvetica-BoldOblique" }}>
          {currencyToWords(invoiceNew?.total)}
        </Text>

        <View style={{ margin: "15px 0" }}>
          <Text>Thanks for your business.</Text>
          <Text>This is Without GST Estimation</Text>
          <Text>and With Out Transport</Text>
          <Text>Gpay No:9884414404 Palani Frame</Text>
        </View>

        <View style={{ lineHeight: 3 }}>
          <Text>HDFC BANK</Text>
          <Text>Branch: Royapettah High Road</Text>
          <Text>A/C No.50100077100632</Text>
          <Text>Account Holder Name: Palani K</Text>
          <Text>IFSC Code: HDFC0003631</Text>
        </View>
      </View>
      <View style={styles.rightContainer}>
        <View style={{ borderBottom: "1px solid grey", padding: 5 }}>
          <View style={[styles.flex, styles.justifyEnd]}>
            <Text style={{ marginRight: 40 }}>Sub Total</Text>
            <Text>{formatCurrency(invoiceNew?.total)}</Text>
          </View>
          <View
            style={[styles.flex, styles.justifyEnd, { fontWeight: "bold" }]}
          >
            <Text style={[styles.fontBold, { marginRight: 40 }]}>Total</Text>
            <Text style={styles.fontBold}>{`Rs. ${formatCurrency(
              invoiceNew?.total
            )}`}</Text>
          </View>
          <View
            style={[
              styles.flex,
              styles.justifyEnd,
              styles.fontBold,
              { fontSize: 12 },
            ]}
          >
            <Text style={[styles.fontBold, { marginRight: 40 }]}>
              Balance Due
            </Text>

            <Text style={styles.fontBold}>{`Rs. ${formatCurrency(
              invoiceNew?.total
            )}`}</Text>
          </View>
        </View>
        <View style={[styles.flex, styles.signatureSection]}>
          <Text>Authorized Signature</Text>
        </View>
      </View>
    </View>
  );
}

export default FooterInvoice;
