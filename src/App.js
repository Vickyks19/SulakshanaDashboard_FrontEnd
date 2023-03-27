import React from "react";
import Home from "./pages/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login/Login";
// import Main from "./Parts/Main";
import Sidee from "./components/Side/Sidee";
import Mount from "./Parts/Mount";
import Glass from "./Parts/Glass";
import Hardboard from "./Parts/Hardboard";
import Tax from "./Parts/Tax";
import "./App.css";
import Dashboard from "./Parts/Dashboard";
import Creation from "./Parts/Creation";
import Frame from "./Parts/Frame";
// import Create from "./Parts/Create";
import Quotation from "./Parts/Quotation";
import QuotationCreation from "./Parts/QuotationCreation";
import QuotationView from "./Parts/QuotationView";
import Invoice from "./Parts/Invoice";
import Painting from "./Parts/Painting";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          {/* <Route path="/sidee" element={<Sidee />} /> */}
          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path="/frame" element={<Main />} /> */}
          <Route path="/frame" element={<Frame />} />
          <Route path="/mount" element={<Mount />} />
          <Route path="/glass" element={<Glass />} />
          <Route path="/hardboard" element={<Hardboard />} />
          <Route path="/tax" element={<Tax />} />
          <Route path="/creation" element={<Creation />} />
          {/* <Route path="/creation-1" element={<Create />} />
           */}
          <Route path="/quotation" element={<QuotationCreation />} />
          <Route path="/quote" element={<Quotation />} />
          <Route path="/quotationView" element={<QuotationView />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/painting" element={<Painting />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
