import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../src/component/Header";
import Home from "../src/screens/Home/Home";
import About from "../src/screens/AboutPage/About";
import Location from "../src/screens/LocationPage/Location";
import Careers from "../src/screens/CareersPage/Careers";

import ScrollTop from "./assets/scroll/ScrollTop";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/location" element={<Location />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
