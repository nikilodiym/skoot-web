import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "../src/component/Header.jsx";
import Home from "../src/screens/Home/Home.jsx"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
