import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
import Mount from "./Parts/Mount";
import Glass from "./Parts/Glass";
import Hardboard from "./Parts/Hardboard";
import Tax from "./Parts/Tax";
import "./App.css";
import Dashboard from "./Parts/Dashboard";
import Frame from "./Parts/Frame";
import Quotation from "./Parts/Quotation";
import QuotationCreation from "./Parts/QuotationCreation";
import QuotationView from "./Parts/QuotationView";
import Invoice from "./Parts/Invoice";
import Painting from "./Parts/Painting";
import { createTheme, ThemeProvider } from "@material-ui/core";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import Customer from "./Customer";
// import { ProSidebarProvider } from "react-pro-sidebar";

const theme = createTheme({
  palette: {
    primary: {
      main: "#303549",
    },
  },
});

function App() {
  return (
    // <ProSidebarProvider>
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <div className="App">
          <Routes>
            <Route path="/" element={<Login />} />
          </Routes>
          <div id="pcoded" className="pcoded">
            <div className="pcoded-overlay-box" />
            <div className="pcoded-container navbar-wrapper">
              <Navbar />
              <div className="pcoded-main-container">
                <div className="pcoded-wrapper">
                  <Sidebar />
                  <Routes>
                    <Route path="/dashboard" element={<Dashboard />} />
                    <Route path="/frame" element={<Frame />} />
                    <Route path="/mount" element={<Mount />} />
                    <Route path="/glass" element={<Glass />} />
                    <Route path="/hardboard" element={<Hardboard />} />
                    <Route path="/tax" element={<Tax />} />
                    <Route path="/customer" element={<Customer />} />
                    <Route path="/quotation" element={<QuotationCreation />} />
                    <Route path="/quote" element={<Quotation />} />
                    <Route path="/quotationView" element={<QuotationView />} />
                    <Route path="/invoice" element={<Invoice />} />
                    <Route path="/painting" element={<Painting />} />
                  </Routes>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </ThemeProvider>
    // </ProSidebarProvider>
  );
}

export default App;
