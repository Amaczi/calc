// React & Styles imports
import React from "react";
import "./summary.css";

// Components & Other imports
import { Money, Coins, Receipt, Bank, KeyReturn } from "phosphor-react";
import { positiveCurrency } from "../../../utils/basic";
import {
  averageEarnings,
  socialContrib,
  calcBasis,
  incomeTax,
  payoff,
} from "../../../utils/maternal";

function SummaryRow({ icon, desc, value }) {
  return (
    <>
      <span></span>
      <div className="summary_row">
        <div className="summary_row_icon">{icon}</div>
        <div className="summary_row_desc">
          <p>{desc}</p>
        </div>
        <div className="summary_row_value">
          <p>{value}</p>
        </div>
      </div>
    </>
  );
}

export default function Summary({ earnings }) {
  const currency = "pln";
  return (
    <div id="maternal_summary">
      <h2>Podsumowanie</h2>
      <p>Za okres 12 miesięcy</p>
      <SummaryRow
        icon={<Money size={32} color="#1976d2" weight="light" />}
        desc="Średnia zarobków"
        value={positiveCurrency(averageEarnings(earnings), currency)}
      />
      <SummaryRow
        icon={<Bank size={32} color="#1976d2" weight="light" />}
        desc="Składki społeczne"
        value={positiveCurrency(socialContrib(earnings), currency)}
      />
      <SummaryRow
        icon={<KeyReturn size={32} color="#1976d2" weight="light" />}
        desc="Podstawa wyliczenia"
        value={positiveCurrency(calcBasis(earnings), currency)}
      />
      <SummaryRow
        icon={<Receipt size={32} color="#1976d2" weight="light" />}
        desc="Podatek dochodowy"
        value={positiveCurrency(incomeTax(earnings), currency)}
      />
      <SummaryRow
        icon={<Coins size={32} color="#1976d2" weight="light" />}
        desc="Do wypłaty"
        value={positiveCurrency(payoff(earnings), currency)}
      />
    </div>
  );
}
