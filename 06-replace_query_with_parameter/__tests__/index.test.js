import {HeatingPlan, thermostat} from '../index';

let cur = 'off';

const setToHeat = () => cur = 'heat';
const setToCool = () => cur = 'cool';
const setOff = () => cur = 'off';

const setMachine = (thePlan) => {
  if (thePlan.targetTemperature > thermostat.currentTemperature) setToHeat();
  else if (thePlan.targetTemperature < thermostat.currentTemperature) setToCool();
  else setOff();
}

describe('replace query with parameter', function () {
  test('should be cool', function () {
    const plan = new HeatingPlan(10, 20)
    setMachine(plan);
    expect(cur).toBe('cool');
  });
});
