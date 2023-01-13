const thermostat = {
  selectedTemperature: 20,
  currentTemperature: 30,
}

class HeatingPlan {
  constructor(min, max) {
    this._max = max;
    this._min = min;
  }
  get targetTemperature() {
    if(thermostat.selectedTemperature > this._max) return this._max;
    else if(thermostat.selectedTemperature < this._min) return this._min;
    else return thermostat.selectedTemperature;
  }
}
export  { thermostat, HeatingPlan };
