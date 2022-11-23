// React & Styles imports
import React from "react";
import "./summary.css";

// Components & Other imports
import { negativeCurrency, positiveCurrency } from "../../../utils/basic";
import {
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
} from "../../../utils/b2b";

function SummaryRow({ desc, value }) {
  return (
    <>
      <div className="summary_row">
        <div className="summary_row_desc">
          <p>{desc}</p>
        </div>
        <div className="summary_row_value">
          <p>{value}</p>
        </div>
      </div>
      <span></span>
    </>
  );
}

function SummaryExtra({ desc, value }) {
  return (
    <div className="summary_row summary_extra">
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
  const currency = "zł";
  return (
    <div id="summary">
      <h2>Podsumowanie</h2>
      <div id="summary_wrapper">
        <SummaryRow
          desc="Na rękę"
          value={positiveCurrency(
            totalEarnings(informations, additional, expenses),
            currency
          )}
        />
        <SummaryRow
          desc="Podatek VAT"
          value={positiveCurrency(totalVat(informations, expenses), currency)}
        />
        {expenses.map((expense, index) => {
          if (
            expense.name &&
            expense.netto &&
            expense.vat &&
            expense.category
          ) {
            return (
              <SummaryExtra
                key={index}
                desc={expense.name}
                value={negativeCurrency(singleVat(expense), currency)}
              />
            );
          }
        })}
        <SummaryRow
          desc="Podatek Dochodowy"
          value={positiveCurrency(
            incomeTax(informations, additional, expenses),
            currency
          )}
        />
        <SummaryRow
          desc="ZUS"
          value={positiveCurrency(totalZus(informations, additional), currency)}
        />
        <SummaryExtra
          desc="Składka zdrowotna"
          value={positiveCurrency(
            healthCare(informations, additional),
            currency
          )}
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
          value={positiveCurrency(
            singleZus("wypadkowa", informations),
            currency
          )}
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
          desc="Koszty Razem"
          value={positiveCurrency(totalExpenses(expenses), currency)}
        />
        <SummaryExtra
          desc="Uwzględnione koszty"
          value={positiveCurrency(0, currency)}
        />
        <SummaryExtra
          desc="Odliczony VAT"
          value={positiveCurrency(totalExpensesVat(expenses), currency)}
        />
        <SummaryExtra
          desc="Odliczony podatek dochodowy"
          value={positiveCurrency(0, currency)}
        />
      </div>
    </div>
  );
}
