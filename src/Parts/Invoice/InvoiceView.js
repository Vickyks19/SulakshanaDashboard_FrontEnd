import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import InvoiceNo from "./InvoiceNo";
import InvoiceBillTo from "./InvoiceBillTo";
import InvoiceTable from "./InvoiceTable";
import TitleInvoice from "./TitleInvoice";

const InvoiceView = (filterInvoice) => {
  return (
    <>
      <Document>
        <Page size="A4" className="page">
          <TitleInvoice title="Invoice" />
          <InvoiceNo invoiceNew={filterInvoice} />
          <InvoiceBillTo invoiceNew={filterInvoice} />
          {/* <InvoiceTable invoiceNew={filterInvoice} /> */}
        </Page>
      </Document>
    </>
  );
};

export default InvoiceView;
