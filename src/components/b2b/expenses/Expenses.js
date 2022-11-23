// React & Styles imports
import React from "react";
import "./expenses.css";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";
import { vanillaCells, vanillaRenderers } from "@jsonforms/vanilla-renderers";

// Components & Other imports
import schema from "./schema.json";
import uischema from "./uischema.json";

export default function Expenses({ expenses, setExpenses }) {
  return (
    <div id="expenses">
      <h2>Koszty</h2>
      <div id="expenses_legend">
        <p className="expenses_legend_small">#</p>
        <p className="expenses_legend_large">Netto</p>
        <p className="expenses_legend_medium">VAT</p>
        <p className="expenses_legend_large">Kategoria</p>
        <p className="expenses_legend_medium">Usuń</p>
      </div>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={expenses}
        renderers={vanillaRenderers}
        cells={materialCells}
        onChange={({ data }) => setExpenses(data)}
      />
    </div>
  );
}
