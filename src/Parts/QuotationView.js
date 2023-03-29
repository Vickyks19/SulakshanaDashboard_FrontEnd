import { Document, Page, PDFViewer, StyleSheet } from '@react-pdf/renderer';

import QuotationTitle from './Quotation/QuotationTitle';
import QuotationNo from './Quotation/QuotationNo';
import QuotationItemsTable from './Quotation/QuotationItemsTable';
import BillTo from './Quotation/BillTo';
import { QuotationFooter } from './Quotation/QuotationFooter';
import { IconButton } from '@material-ui/core';
import CloseIcon from '@mui/icons-material/Close';

const styles = StyleSheet.create({
  page: {
    flexDirection: 'column',
    fontFamily: 'Helvetica',
    fontSize: '11px',
    padding: '10px',
    border: '1px solid grey',
  },
});

const QuotationView = ({ quotationNew, onClose }) => {
  console.log(1, quotationNew);

  return (
    <div
      style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50vw',
      }}
    >
      <IconButton
        onClick={onClose}
        variant='contained'
        size='small'
        style={{ float: 'right' }}
      >
        <CloseIcon style={{ color: '#FFFFFF' }} />
      </IconButton>
      <PDFViewer width='1000px' height='700px' className='pdf'>
        <Document>
          <Page size='A4' style={styles.page} width='2000' height='2000'>
            <QuotationTitle title='Quotation' />
            <QuotationNo quotationNew={quotationNew} />
            <BillTo quotationNew={quotationNew} />
            <QuotationItemsTable quotationNew={quotationNew} />
            <QuotationFooter quotationNew={quotationNew} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default QuotationView;
