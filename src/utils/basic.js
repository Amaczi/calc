// Return rounded negative value with currency
export const negativeCurrency = (value, currency) => {
  return `-${Math.round(value)} ${currency}`;
};

// Return rounded positive value with currency
export const positiveCurrency = (value, currency) => {
  return `${Math.round(value)} ${currency}`;
};
