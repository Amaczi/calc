// Return converted object into array
const convertObject = (object) => {
  const array = [];
  Object.keys(object).forEach((key) => {
    array.push({
      name: key,
      value: object[key],
    });
  });
  return array;
};

// Return average earnings
export const averageEarnings = (earnings) => {
  const earningsArray = convertObject(earnings);
  let total = 0;
  earningsArray.map((element) => {
    total = total + Number(element.value);
  });
  if (total !== 0) return total / earningsArray.length;
  else return 0;
};

// Return social contributions
export const socialContrib = (earnings) => {
  return averageEarnings(earnings) * 0.1371;
};

// Return calculation basis
export const calcBasis = (earnings) => {
  const avg = averageEarnings(earnings);
  const social = socialContrib(earnings);
  return (avg - social) * 0.8;
};

// Return income tax
export const incomeTax = (earnings) => {
  return calcBasis(earnings) * 0.12 - 300;
};

// Return payoff
export const payoff = (earnings) => {
  return calcBasis(earnings) - incomeTax(earnings);
};
