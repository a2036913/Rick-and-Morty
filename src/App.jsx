// import styled from "styled-component";
import "./app.css";
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SingleContact from "./pages/SingleContact";

function App() {
  return (
    <>
      <div className="App">
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<SingleContact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
