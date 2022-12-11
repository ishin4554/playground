class ProductionPlan {
  constructor(production) {
    this._initialProduction = production;
    this._productionAccumulator = 0;
    this._adjustments = []
  }

  get production() {
    console.assert(this._productionAccumulator === this.calculatedProductionAccumulator)
    return this._initialProduction + this._productionAccumulator;
  }
// 作者在這裡傾向保留這個屬性，而不是 inline，猜測是因為這個屬性有可能被公開，或是 reduce 方法並不是這麼直覺
  get calculatedProductionAccumulator() {
    return this._adjustments.reduce((sum, a) => sum + a.amount, 0)
  }

  applyAdjustment(anAdjustment) {
    this._adjustments.push(anAdjustment)
    this._productionAccumulator += anAdjustment.amount;
  }
}

export default ProductionPlan;
