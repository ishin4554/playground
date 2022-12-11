class ProductionPlan {
  constructor() {
    this._production = 0;
    this._adjustments = []
  }

  get production() {
    return this.calculatedProduction
  }

  get calculatedProduction() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0)
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment)
    this._production += anAdjustment.amount;
  }
}

export default ProductionPlan;
