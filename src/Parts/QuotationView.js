import "./QuotationView.css";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

import QuotationTitle from "./Quotation/QuotationTitle";
import QuotationNo from "./Quotation/QuotationNo";
import QuotationItemsTable from "./Quotation/QuotationItemsTable";
import BillTo from "./Quotation/BillTo";
import "./QuotationView.css";

const QuotationView = (filterNew) => {
  console.log(1, filterNew);

  return (
    <>
      <Document>
        <Page size="A4" className="page">
          <QuotationTitle title="Quotation" />
          <QuotationNo quotationNew={filterNew} />
          <BillTo quotationNew={filterNew} />
          <QuotationItemsTable quotationNew={filterNew} />
        </Page>
      </Document>
    </>
  );
};

export default QuotationView;
