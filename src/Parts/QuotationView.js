import { Document, Page, PDFViewer, StyleSheet } from '@react-pdf/renderer';

import QuotationTitle from './Quotation/QuotationTitle';
import QuotationNo from './Quotation/QuotationNo';
import QuotationItemsTable from './Quotation/QuotationItemsTable';
import BillTo from './Quotation/BillTo';
import { QuotationFooter } from './Quotation/QuotationFooter';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontFamily: 'Helvetica',
    fontSize: '11px',
    padding: '10px',
    border: '1px solid grey',
  },
});

const QuotationView = (filterNew) => {
  console.log(1, filterNew);

  return (
    <>
      <PDFViewer width='1000' height='1000' className='pdf'>
        <Document>
          <Page size='A4' style={styles.page} width='2000' height='2000'>
            <QuotationTitle title='Quotation' />
            <QuotationNo quotationNew={filterNew} />
            <BillTo quotationNew={filterNew} />
            <QuotationItemsTable quotationNew={filterNew} />
            <QuotationFooter />
          </Page>
        </Document>
      </PDFViewer>
    </>
  );
};

export default QuotationView;
