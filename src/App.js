// React & Styles imports
import React, { useState } from "react";
import "./app.css";

// Components & Other imports
import Informations from "./components/informations/Informations";
import Additional from "./components/additional/Additional";
import Expenses from "./components/expenses/Expenses";
import Summary from "./components/summary/Summary";

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

export default function App() {
  const [informations, setInformations] = useState(DEFAULT_INFORMATIONS);
  const [additional, setAdditional] = useState(DEFAULT_ADDITIONAL);
  const [expenses, setExpenses] = useState(DEFAULT_EXPENSES);
  return (
    <div id="calc_wrapper">
      <div className="calc_column">
        <Informations
          informations={informations}
          setInformations={setInformations}
        />
        <Additional additional={additional} setAdditional={setAdditional} />
        <Expenses expenses={expenses} setExpenses={setExpenses} />
      </div>
      <div className="calc_column">
        <Summary
          informations={informations}
          additional={additional}
          expenses={expenses.expenses}
        />
      </div>
    </div>
  );
}
