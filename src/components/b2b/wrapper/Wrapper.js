// React & Styles imports
import React, { useState } from "react";
import "./wrapper.css";

// Components & Other imports
import Informations from "../informations/Informations";
import Additional from "../additional/Additional";
import Expenses from "../expenses/Expenses";
import Summary from "../summary/Summary";

// Defaults
const DEFAULT_INFORMATIONS = {
  netto: "12000",
  vat: "0.23",
  taxation: "12",
  currency: "pln",
};
const DEFAULT_EXPENSES = {
  expenses: [
    {
      name: "Paliwo",
      netto: "162,60",
      vat: "0.23",
      category: "company_car",
    },
  ],
};
const DEFAULT_ADDITIONAL = {
  sickInsurance: true,
};

export default function Wrapper() {
  const [informations, setInformations] = useState(DEFAULT_INFORMATIONS);
  const [additional, setAdditional] = useState(DEFAULT_ADDITIONAL);
  const [expenses, setExpenses] = useState(DEFAULT_EXPENSES);
  return (
    <div id="b2b_wrapper">
      <div id="b2b_container">
        <div className="b2b_column">
          <Informations
            informations={informations}
            setInformations={setInformations}
          />
          <Additional additional={additional} setAdditional={setAdditional} />
          <Expenses expenses={expenses} setExpenses={setExpenses} />
        </div>
        <div className="b2b_column">
          <Summary
            informations={informations}
            additional={additional}
            expenses={expenses.expenses}
          />
        </div>
      </div>
    </div>
  );
}
