<<<<<<< HEAD
import React from "react";
import { Text, View, StyleSheet } from "@react-pdf/renderer";
// import "./QuotationTitle.css";

function QuotationTitle({ title }) {
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
=======
import React from 'react';
import { Text, View, StyleSheet, Image } from '@react-pdf/renderer';
import shopInfo from './Quotation.constants';
import logo from '../../images/sulakshana.jpg';

const styles = StyleSheet.create({
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'left',
    lineHeight: 1.5,
    borderBottom: '1px solid grey',
    border: '1px solid grey',
    padding: '2px 0',
  },
  title: {
    fontFamily: 'Helvetica-Bold',
    fontSize: '14px',
  },
  address: {
    fontSize: '10px',
  },
  logo: {
    width: 150,
    height: 80,
    marginRight: 10,
  },
});

function QuotationTitle({ title }) {
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
>>>>>>> 55c1922b45cb8204c6e6aa92b9912f9ee78a56bb
    </View>
  );
}

export default QuotationTitle;
