// React & Styles imports
import React from "react";
import "./informations.css";
import { JsonForms } from "@jsonforms/react";
import {
  materialRenderers,
  materialCells,
} from "@jsonforms/material-renderers";

// Components & Other imports
import schema from "./schema.json";
import uischema from "./uischema.json";

export default function Informations({ informations, setInformations }) {
  return (
    <div id="informations">
      <h2>Informacje</h2>
      <span></span>
      <JsonForms
        schema={schema}
        uischema={uischema}
        data={informations}
        renderers={materialRenderers}
        cells={materialCells}
        onChange={({ data }) => setInformations(data)}
      />
    </div>
  );
}
