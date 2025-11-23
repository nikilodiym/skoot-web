import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../src/component/Header";
import Home from "../src/screens/Home/Home"
import About from "../src/screens/AboutPage/About";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
