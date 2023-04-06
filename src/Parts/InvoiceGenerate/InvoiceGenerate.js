import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";
import InvoiceTitle from "./InvoiceGenTitle";
import InvoiceNo from "./InvoiceGenNo";
import InvoiceBillTo from "./InvoiceGenBillTo";
import InvoiceTable from "./InvoiceGenTable";
import { IconButton } from "@material-ui/core";
import CloseIcon from "@mui/icons-material/Close";
import InvoiceGenFooter from "./InvoiceGenFooter";

const styles = StyleSheet.create({
  page: {
    flexDirection: "column",
    fontFamily: "Helvetica",
    fontSize: "11px",
    padding: "10px",
    border: "1px solid grey",
  },
});

function InvoiceGenerate({ invoiceGenNew, onClose }) {
  console.log(26, invoiceGenNew);
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
            <InvoiceNo invoiceGenNew={invoiceGenNew} />
            <InvoiceBillTo invoiceGenNew={invoiceGenNew} />
            <InvoiceTable invoiceGenNew={invoiceGenNew} />
            <InvoiceGenFooter invoiceGenNew={invoiceGenNew} />
          </Page>
        </Document>
      </PDFViewer>
    </div>
  );
}

export default InvoiceGenerate;
