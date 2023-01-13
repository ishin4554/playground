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
    let selectedTemperature = thermostat.selectedTemperature;
    return this.xxNEWtargetTemperature(selectedTemperature);
  }

  xxNEWtargetTemperature(selectedTemperature) {
    if (selectedTemperature > this._max) return this._max;
    else if (selectedTemperature < this._min) return this._min;
    else return selectedTemperature;
  }
}

export {thermostat, HeatingPlan};
