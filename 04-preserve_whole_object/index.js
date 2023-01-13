class HeatingPlan {
  constructor() {
    this._temperatureRange = {
      low: 20,
      high: 30,
    }
  }

  xxNEWwithinRange(aNumberRange) {
    return (aNumberRange.low >= this._temperatureRange.low) && (aNumberRange.high <= this._temperatureRange.high)
  }
}

export default HeatingPlan;
