class ProductionPlan {
  constructor() {
    this._production = 0;
    this._adjustments = []
  }

  get production() {
    // 加入斷言，如果斷言沒有失敗，才能把回傳欄位換成回傳計算結果
    console.assert(this._production === this.calculatedProduction)
    return this._production
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
