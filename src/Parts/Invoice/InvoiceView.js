import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import InvoiceTitle from "./InvoiceTitle";
import InvoiceNo from "./InvoiceNo";
import InvoiceBillTo from "./InvoiceBillTo";
import InvoiceTable from "./InvoiceTable";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import FooterInvoice from "./FooterInvoice";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    fontFamily: "Helvetica",
    fontSize: "11px",
    padding: "10px",
    border: "1px solid grey",
  },
});

const InvoiceView = ({ invoiceNew, onClose }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "50vw",
      }}
    >
      <IconButton
        onClick={onClose}
        variant="contained"
        size="small"
        style={{ float: "right" }}
      >
        <CloseIcon style={{ color: "#FFFFFF" }} />
      </IconButton>
      <PDFViewer width="1000px" height="700px" className="pdf">
        <Document>
          <Page size="A4" style={styles.page} width="2000" height="2000">
            <InvoiceTitle />
            <InvoiceNo invoiceNew={invoiceNew} />
            <InvoiceBillTo invoiceNew={invoiceNew} />
            <InvoiceTable invoiceNew={invoiceNew} />
            <FooterInvoice invoiceNew={invoiceNew} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
};

export default InvoiceView;
