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

  xxNEWwithinRange(tempRange) {
    const low = tempRange.low;
    const high = tempRange.high;
    const isWithinRange = this.withinRange(low, high)
    return isWithinRange;
  }
}

export default HeatingPlan;
