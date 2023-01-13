import HeatingPlan from "../ex2";

let alerts = [];
const addAlert = (aRoom, aPlan) => {
  const low = aRoom.daysTempRange.low;
  const high = aRoom.daysTempRange.high;
  if (!aPlan.withinRange(low, high)) alerts.push("room temperature went outside range");
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
