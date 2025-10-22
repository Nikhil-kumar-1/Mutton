import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Home/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Home/Footer/Footer";
import About from "./components/About/About";
import ContactUs from "./components/ContactUs/ContactUs";


const App = () => {
  return (
    <>
      <Navbar />

      {/* Routes define here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>

      <Footer />
    </>
  );
};

export default App;
