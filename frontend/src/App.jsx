import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Home/Footer/Footer";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";
import PrivacyPolicy from "./components/Home/Footer/PrivacyPolicy";
import TermsOfService from "./components/Home/Footer/TermsOfServices";
import SmoothScrollToTop from "./components/ScrollToTop";


const App = () => {
  return (
    <>
      <Navbar />

      {/* Routes define here */}
      <SmoothScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
