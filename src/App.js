// React & Styles imports
import React from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Components & Other imports
import B2B from "./components/b2b/wrapper/Wrapper";
import Maternal from "./components/maternal/wrapper/Wrapper";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<B2B />} />
        <Route path="/maternal" element={<Maternal />} />
      </Routes>
    </Router>
  );
}
