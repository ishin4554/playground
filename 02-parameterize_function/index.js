const tenPercentRaise = (aPerson) => {
  aPerson.salary = aPerson.salary.multiply(1.1);
}

const fivePercentRaise = (aPerson) => {
  aPerson.salary = aPerson.salary.multiply(1.05);
}

const raise = (aPerson, factor) => {
  aPerson.salary = aPerson.salary.multiply(1 + factor);
}

