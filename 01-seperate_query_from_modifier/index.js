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

export default alertForMiscreant;
