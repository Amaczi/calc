// React & Styles imports
import React, { useState } from "react";
import "./wrapper.css";

// Components & Other imports
import Earnings from "../earnings/Earnings";
import Summary from "../summary/Summary";

// Defaults
const DEFAULT_EARNINGS = {
  jan: "5000",
  feb: "3500",
  mar: "4500",
  apr: "5000",
  may: "5000",
  jun: "4000",
  jul: "5000",
  aug: "4500",
  sep: "4700",
  oct: "4500",
  nov: "3000",
  dec: "4000",
};

export default function Wrapper() {
  const [earnings, setEarnings] = useState(DEFAULT_EARNINGS);
  return (
    <div id="calc_wrapper">
      <div className="calc_column">
        <Earnings earnings={earnings} setEarnings={setEarnings} />
      </div>
      <div className="calc_column">
        <Summary earnings={earnings} />
      </div>
    </div>
  );
}
