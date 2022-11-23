// React & Styles imports
import React from "react";
import "./earnings.css";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";

// Components & Other imports
import schema from "./schema.json";
import uischema from "./uischema.json";

export default function Earnings({ earnings, setEarnings }) {
  return (
    <div id="earnings">
      <h2>Wynagrodzenie brutto</h2>
      <p>Za ostatnie 12 miesięcy</p>
      <span></span>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={earnings}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data }) => setEarnings(data)}
      />
    </div>
  );
}
