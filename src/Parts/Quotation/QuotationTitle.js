import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';
import shopInfo from './Quotation.constants';

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: '14px',
  },
  address: {
    fontSize: '10px',
  },
});

function QuotationTitle({ title }) {
  return (
    <View className='titleContainer' style={{ alignItems: 'left' }}>
      <Text style={styles.title}>{shopInfo.shopName}</Text>
      <Text style={styles.address}>{shopInfo.address1}</Text>
      <Text style={styles.address}>{shopInfo.address2}</Text>
      <Text style={styles.address}>{shopInfo.address3}</Text>
      <Text style={styles.address}>{shopInfo.country}</Text>
    </View>
  );
}

export default QuotationTitle;
