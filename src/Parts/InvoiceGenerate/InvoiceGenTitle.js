import React from "react";
import { Text, View, StyleSheet, Image } from "@react-pdf/renderer";
import shopInfo from "./InvoiceGen.constants";
import logo from "../../images/sulakshana.jpg";

const styles = StyleSheet.create({
  titleContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "left",
    lineHeight: 1.5,
    borderBottom: "1px solid grey",
    border: "1px solid grey",
    padding: "2px 0",
  },
  title: {
    fontFamily: "Helvetica-Bold",
    fontSize: "14px",
  },
  address: {
    fontSize: "10px",
  },
  logo: {
    width: 150,
    height: 80,
    marginRight: 10,
  },
});
function InvoiceGenTitle() {
  return (
    <View style={styles.titleContainer}>
      <Image src={logo} style={styles.logo} />
      <View>
        <Text style={styles.title}>{shopInfo.shopName}</Text>
        <Text style={styles.address}>{shopInfo.address1}</Text>
        <Text style={styles.address}>{shopInfo.address2}</Text>
        <Text style={styles.address}>{shopInfo.address3}</Text>
        <Text style={styles.address}>{shopInfo.country}</Text>
      </View>
    </View>
  );
}

export default InvoiceGenTitle;
