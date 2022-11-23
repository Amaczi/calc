// React & Styles imports
import React from "react";
import "./expenses.css";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";

// Components & Other imports
import schema from "./schema.json";
import uischema from "./uischema.json";

export default function Expenses({ expenses, setExpenses }) {
  return (
    <div id="expenses">
      <h2>Wydatki</h2>
      <span></span>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={expenses}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data }) => setExpenses(data)}
      />
    </div>
  );
}
