export class Producer {
  constructor(aProvince, data) {
    this._province = aProvince;
    this._cost = data.cost;
    this._name = data.name;
    this._production = data.production || 0
  }
  get name() { return this._name; }
  get cost() { return this._cost; }
  set cost(arg) { this._cost = parseInt(arg); }
  get production() { return this._production; }
  // TODO: production 重構
  set production(amountStr) {
    const amount = parseInt(amountStr);
    // 有來自 UI 的輸入，先解析數字避免型別錯誤。
    const newProduction = Number.isNaN(amount) ? 0 : amount;
    this._province.totalProduction += newProduction - this._production;
    this._production = newProduction;
  }
}
