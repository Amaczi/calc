// React & Styles imports
import React from "react";
import "./additional.css";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";

// Components & Other imports
import schema from "./schema.json";
import uischema from "./uischema.json";

export default function Additional({ additional, setAdditional }) {
  return (
    <div id="additional">
      <h2>Dodatkowe informacje</h2>
      <span></span>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={additional}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data }) => setAdditional(data)}
      />
    </div>
  );
}
