import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import Home from "./pages/Home";
import Result from "./pages/Result";
import BuyCredit from "./pages/BuyCredit";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Login from "./components/Login";
import { AppContext } from "./context/AppContext";
import Policies from "./components/Policies";
import TermsAndConditions from './pages/TermsAndConditions';
import PrivacyPolicy from './pages/PrivacyPolicy';
import ShippingPolicy from './pages/ShippingPolicy';
import CancellationRefunds from './pages/CancellationRefunds';
import ContactUs from './pages/ContactUs';


const App = () => {
  const { showLogin } = useContext(AppContext);

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <ToastContainer position="bottom-right" />
      <Navbar />
      {showLogin && <Login />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buy" element={<BuyCredit />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/shipping-policy" element={<ShippingPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cancellation-refunds" element={<CancellationRefunds />} />
      </Routes>
      <Policies />
      <Footer />
    </div>
  );
};

export default App;
