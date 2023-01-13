class HeatingPlan {
  constructor() {
    this._temperatureRange = {
      low: 20,
      high: 30,
    }
  }
  withinRange(bottom, top) {
    return (bottom >= this._temperatureRange.low) && (top <= this._temperatureRange.high)
  }
}

export default HeatingPlan;
