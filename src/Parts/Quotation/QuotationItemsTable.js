import React from 'react';
import { Text, View, StyleSheet } from '@react-pdf/renderer';

const styles = StyleSheet.create({
  // container_table: {
  //   flexDirection: "row",
  //   flexWrap: "wrap",
  //   marginLeft: "2px",
  //   marginTop: "24px",
  //   border: "2px solid black",
  //   width: "100%",
  // },
  // container_items: {
  //   marginTop: "20px",
  //   display: "flex",
  //   flexDirection: "row",
  //   borderBottom: "1px solid black",
  //   paddingBottom: "2%",
  //   width: "100%",
  // },

  // description: {
  //   fontSize: "15px",
  // },
  // qty: {
  //   fontSize: "15px",
  //   marginLeft: "21%",
  // },
  // rate: {
  //   fontSize: "15px",
  //   marginLeft: "20%",
  // },
  // amount: {
  //   fontSize: "15px",
  //   marginLeft: "20%",
  // },

  // row: {
  //   marginTop: "3%",
  //   paddingBottom: "2%",
  //   display: "flex",
  //   flexDirection: "row",
  //   borderBottom: "1px solid black",
  //   width: "100%",
  // },
  // description_item: {
  //   fontSize: "15px",
  // },
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

  // qty_item: {
  //   fontSize: "15px",
  //   paddingLeft: "25.5%",
  // },
  // rate_item: {
  //   fontSize: "15px",
  //   paddingLeft: "21%",
  // },
  // amount_item: {
  //   fontSize: "15px",
  //   paddingLeft: "22%",
  // },

  // row: {
  //   marginTop: 3,
  //   paddingBottom: 2,
  //   display: "flex",
  //   flexDirection: "row",
  //   borderBottom: "1px solid black",
  //   width: 100,
  // },
  // description_item: {
  //   fontSize: "15px",
  // },

  // qty_item: {
  //   fontSize: "15px",
  //   paddingLeft: 150,
  // },
  // rate_item: {
  //   fontSize: "15px",
  //   paddingLeft: 100,
  // },
  // amount_item: {
  //   fontSize: "15px",
  //   paddingLeft: 100,
  // },

  table: {
    display: 'table',
    width: '100%',
    border: '1px solid grey',
    borderRightWidth: 0,
    borderBottomWidth: 0,
    marginTop: 30,
    fontSize: '15px',
  },
  tableRow: {
    margin: 'auto',
    flexDirection: 'row',
  },
  tableCol: {
    width: '25%',
    border: '1px solid grey',
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  tableCell: {
    margin: 'auto',
    marginTop: 5,
    fontSize: 10,
  },
  tableHeader: {
    fontSize: 10,
    margin: '5 5 2 5',
    fontWeight: 'bold',
    textAlign: 'right',
  },
});

function QuotationItemsTable({ quotationNew }) {
  console.log(22, quotationNew);
  return (
    <>
      <View style={styles.table}>
        <View style={[styles.tableRow, { backgroundColor: 'lightgray' }]}>
          <View style={[styles.tableCol, { width: '4%' }]}>
            <Text style={[styles.tableHeader, { textAlign: 'center' }]}>#</Text>
          </View>
          <View style={[styles.tableCol, { width: '60%' }]}>
            <Text style={[styles.tableHeader, { textAlign: 'left' }]}>
              Item & Description
            </Text>
          </View>
          <View style={[styles.tableCol, { width: '12%' }]}>
            <Text style={[styles.tableHeader]}>Qty</Text>
          </View>
          <View style={[styles.tableCol, { width: '12%' }]}>
            <Text style={[styles.tableHeader]}>Rate</Text>
          </View>
          <View style={[styles.tableCol, { width: '12%' }]}>
            <Text style={[styles.tableHeader]}>Amount</Text>
          </View>
        </View>

        {quotationNew.quotationNew.items?.map((e, i) => {
          return (
            <View style={styles.tableRow}>
              <View style={[styles.tableCol, { width: '4%' }]}>
                <Text style={[styles.tableCell]}>{i + 1}</Text>
              </View>
              <View style={[styles.tableCol, { width: '60%' }]}>
                <Text style={[styles.tableCell]}>
                  {e?.size || ''} {e?.name || ''}
                </Text>
              </View>
              <View style={[styles.tableCol, { width: '12%' }]}>
                <Text style={[styles.tableCell]}>{e?.qty}</Text>
              </View>
              <View style={[styles.tableCol, { width: '12%' }]}>
                <Text style={styles.tableCell}>{e?.price}</Text>
              </View>
              <View style={[styles.tableCol, { width: '12%' }]}>
                <Text style={styles.tableCell}>{e?.price}</Text>
              </View>
            </View>
          );
        })}
      </View>

      {/* <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={[styles.tableCell, { fontSize: 13 }]}>Total </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew.quotationNew?.total}
          </Text>
        </View>
      </View>

      <View style={styles.tableRow}>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}></Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={[styles.tableCell, { fontSize: 13 }]}>Grand Total </Text>
        </View>
        <View style={styles.tableCol}>
          <Text style={styles.tableCell}>
            {quotationNew.quotationNew?.grandTotal}
          </Text>
        </View>
      </View>*/}
    </>
  );
}

export default QuotationItemsTable;
