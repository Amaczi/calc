// Return rounded negative value with currency
export const negativeCurrency = (value, currency) => {
  return `-${Math.round(value)} ${currency}`;
};

// Return rounded positive value with currency
export const positiveCurrency = (value, currency) => {
  return `${Math.round(value)} ${currency}`;
};

// To do - Return total earnings after taxes
export const totalEarnings = (informations, expenses, additional) => {
  return 0;
};

// Return total vat after deduction of tax
export const totalVat = (informations, expenses) => {
  const netto = informations.netto.replace(",", ".");
  const vat = informations.vat;
  const expensesVat = totalExpensesVat(expenses);
  return netto * vat - expensesVat;
};

// Return single expense VAT
export const singleVat = (expense) => {
  if (
    expense.name !== undefined &&
    expense.netto !== undefined &&
    expense.vat !== undefined &&
    expense.category !== undefined
  ) {
    const netto = expense.netto.replace(",", ".");
    const vat = expense.vat;
    if (expense.category === "other") return netto * vat;
    else return netto * vat * 0.5;
  }
};

// To do - Return income tax
export const incomeTax = (informations, additional, expenses) => {
  return 0;
};

// Return total ZUS
export const totalZus = (informations, additional) => {
  if (additional.sickInsurance === true) {
    return (
      singleZus("emerytalna", informations) +
      singleZus("rentowa", informations) +
      singleZus("fundusz_pracy", informations) +
      singleZus("wypadkowa", informations) +
      healthCare(informations, additional) +
      singleZus("chorobowa", informations)
    );
  } else {
    return (
      singleZus("emerytalna", informations) +
      singleZus("rentowa", informations) +
      singleZus("fundusz_pracy", informations) +
      singleZus("wypadkowa", informations) +
      healthCare(informations, additional)
    );
  }
};

// To do - Return single ZUS
export const singleZus = (name, informations) => {
  const netto = informations.netto.replace(",", ".");
  const skladki = {
    emerytalna: 0.1952,
    rentowa: 0.08,
    chorobowa: 0.0245,
    fundusz_pracy: 0.0245,
    wypadkowa: 0.0167,
  };
  // return skladki[name] * netto;
  return 0;
};

// To do - Return health care tax
export const healthCare = (informations, additional) => {
  return 0;
};

// To do - Return sick insurance tax
export const sickInsurance = (informations, additional) => {
  if (additional.sickInsurance === true) {
    return singleZus("chorobowa", informations);
  } else {
    return 0;
  }
};

// Return total expenses
export const totalExpenses = (expenses) => {
  let total = 0;
  expenses.forEach((expense) => {
    if (
      expense.name !== undefined &&
      expense.netto !== undefined &&
      expense.vat !== undefined &&
      expense.category !== undefined
    ) {
      const netto = expense.netto.replace(",", ".");
      total = total + Number(netto);
    }
  });
  return total;
};

// Return total expenses vat
export const totalExpensesVat = (expenses) => {
  let total = 0;
  expenses.forEach((expense) => {
    if (
      expense.name !== undefined &&
      expense.netto !== undefined &&
      expense.vat !== undefined &&
      expense.category !== undefined
    ) {
      const netto = expense.netto.replace(",", ".");
      const vat = expense.vat;
      if (expense.category === "other") total = total + Number(netto * vat);
      else total = total + Number(netto * vat) * 0.5;
    }
  });
  return total;
};
