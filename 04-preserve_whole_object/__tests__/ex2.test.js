import HeatingPlan from "../ex2";

let alerts = [];

const xxNEWwithinRange = (aPlan, tempRange) => {
  const low = tempRange.low;
  const high = tempRange.high;
  const isWithinRange = aPlan.withinRange(low, high)
  return isWithinRange;
}
const addAlert = (aRoom, aPlan) => {
  const tempRange = aRoom.daysTempRange;
  const isWithinRange = xxNEWwithinRange(aPlan, tempRange);
  if (!isWithinRange) alerts.push("room temperature went outside range");
}

describe('preserve whole project', function () {
  test('should be example 1', function () {
    const room = {
      daysTempRange: {
        low: 10,
        high: 40,
      }
    }
    const plan = new HeatingPlan()
    addAlert(room, plan);
    expect(alerts).toEqual(["room temperature went outside range"])
  });
});
