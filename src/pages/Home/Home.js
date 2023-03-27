import React from "react";
import Main from "../../Parts/Main";
import Sidee from "../../components/Side/Sidee";
import Mount from "../../Parts/Mount";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Hardboard from "../../Parts/Hardboard";
import Glass from "../../Parts/Glass";
import Tax from "../../Parts/Tax";

function Home() {
  return (
    <div>
      {/* <Route>
        <Route path="/home" element={<Sidee />} exact />
        <Route path="/Frame" element={<Main />} exact />
        <Route path="/Mount" element={<Mount />} exact />
        <Route path="/Glass" element={<Glass />} exact />
        <Route path="/Hardboard" element={<Hardboard />} exact />
        <Route path="/Tax" element={<Tax />} exact />
      </Route> */}
      <Sidee />
      <Main />
    </div>
  );
}

export default Home;
