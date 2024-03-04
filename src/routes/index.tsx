import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from "../pages/landing";
import ErrorPage from "../pages/error/Error";
// import Testnet from "../pages/landing/testnet/Testnet";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<ErrorPage />} />
        {/* <Route path="/" element={<Testnet />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
