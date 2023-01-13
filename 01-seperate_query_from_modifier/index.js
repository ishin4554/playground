const setOffAlarms = () => {
  console.log('turn off alarms');
}

const alertForMiscreant = (people) => {
  if(findMiscreant(people) !== '') setOffAlarms();
}

const findMiscreant = (people) => {
  for (const p of people) {
    if (p === "Don") {
      return "Don";
    }
    if (p === "John") {
      return "John"
    }
    return ""
  }
}

export {
  findMiscreant,
  alertForMiscreant
};
