const setOffAlarms = () => {
  console.log('turn off alarms');
}

const alertForMiscreant = (people) => {
  for (const p of people) {
    if(p === "Don") {
      setOffAlarms();
      return "Don";
    }
    if(p === "John") {
      setOffAlarms();
      return "John"
    }
    return ""
  }
}

const findMiscreant = (people) => {
  for (const p of people) {
    if(p === "Don") {
      return "Don";
    }
    if(p === "John") {
      return "John"
    }
    return ""
  }
}

export default alertForMiscreant;
