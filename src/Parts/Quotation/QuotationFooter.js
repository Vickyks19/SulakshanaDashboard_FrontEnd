import { Text, View } from '@react-pdf/renderer';
import React from 'react';

export const QuotationFooter = () => {
  return (
    <View style={{ display: 'flex', flexDirection: 'row' }}>
      <View style={{ width: '60%' }}>
        <Text>Item 1</Text>
      </View>
      <View
        style={{ width: '40%', border: '1px solid gray', borderTopWidth: 0 }}
      >
        <Text>Item 2</Text>
      </View>
    </View>
  );
};
