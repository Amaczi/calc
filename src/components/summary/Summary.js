// React & Styles imports
import React from "react";
import "./summary.css";

// Components & Other imports
import { Money, Coins, Receipt, Bank, KeyReturn } from "phosphor-react";
import {
  negativeCurrency,
  positiveCurrency,
  totalEarnings,
  totalVat,
  singleVat,
  incomeTax,
  totalZus,
  singleZus,
  healthCare,
  sickInsurance,
  totalExpensesVat,
  totalExpenses,
} from "../../utils/basic";

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

function SummaryExtra({ desc, value }) {
  return (
    <div className="summary_row summary_extra">
      <div className="summary_row_icon"></div>
      <div className="summary_row_desc">
        <p>{desc}</p>
      </div>
      <div className="summary_row_value">
        <p>{value}</p>
      </div>
    </div>
  );
}

export default function Summary({ informations, additional, expenses }) {
  const currency = informations.currency;
  return (
    <div id="summary">
      <h2>Podsumowanie</h2>
      <SummaryRow
        icon={<Money size={32} color="#1976d2" weight="light" />}
        desc="Na rękę"
        value={positiveCurrency(
          totalEarnings(informations, additional, expenses),
          currency
        )}
      />
      <SummaryRow
        icon={<Receipt size={32} color="#1976d2" weight="light" />}
        desc="Podatek VAT"
        value={positiveCurrency(totalVat(informations, expenses), currency)}
      />
      {expenses.map((expense, index) => {
        return (
          <SummaryExtra
            key={index}
            desc={expense.name}
            value={negativeCurrency(singleVat(expense), currency)}
          />
        );
      })}
      <SummaryRow
        icon={<KeyReturn size={32} color="#1976d2" weight="light" />}
        desc="Podatek Dochodowy"
        value={positiveCurrency(
          incomeTax(informations, additional, expenses),
          currency
        )}
      />
      <SummaryRow
        icon={<Bank size={32} color="#1976d2" weight="light" />}
        desc="ZUS"
        value={positiveCurrency(totalZus(informations, additional), currency)}
      />
      <SummaryExtra
        desc="Składka zdrowotna"
        value={positiveCurrency(healthCare(informations, additional), currency)}
      />
      <SummaryExtra
        desc="Składka emerytalna"
        value={positiveCurrency(
          singleZus("emerytalna", informations),
          currency
        )}
      />
      <SummaryExtra
        desc="Składka rentowa"
        value={positiveCurrency(singleZus("rentowa", informations), currency)}
      />
      <SummaryExtra
        desc="Składka wypadkowa"
        value={positiveCurrency(singleZus("wypadkowa", informations), currency)}
      />
      <SummaryExtra
        desc="Fundusz pracy"
        value={positiveCurrency(
          singleZus("fundusz_pracy", informations),
          currency
        )}
      />
      <SummaryExtra
        desc="Składka chorobowa"
        value={positiveCurrency(
          sickInsurance(informations, additional),
          currency
        )}
      />
      <SummaryRow
        icon={<Coins size={32} color="#1976d2" weight="light" />}
        desc="Koszty Razem"
        value={positiveCurrency(totalExpenses(expenses), currency)}
      />
      <SummaryExtra
        desc="Odliczony vat"
        value={negativeCurrency(totalExpensesVat(expenses), currency)}
      />
    </div>
  );
}
