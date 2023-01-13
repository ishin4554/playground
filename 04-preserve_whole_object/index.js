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

  xxNEWwithinRange(aNumberRange) {
    return this.withinRange(aNumberRange.low, aNumberRange.high)
  }
}

export default HeatingPlan;
