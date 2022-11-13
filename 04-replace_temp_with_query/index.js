export class Order {
  constructor(quantity, item) {
    this._quantity = quantity;
    this._item = item;
  }

  get price() {
    let basePrice = this._quantity * this._item.price;
    // 初始 98 折
    let discountFactor = 0.98;
    // 滿千再多打 0.3 折
    if (basePrice > 1000) discountFactor -= 0.03;
    return basePrice * discountFactor;
  }
}
