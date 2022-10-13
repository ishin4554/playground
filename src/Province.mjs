import { Producer } from './Producer.mjs';
export class Province {
  constructor(doc) {
    this._name = doc.name;
    this._producers = [];
    this._totalProduction = 0;
    this._demand = doc.demand;
    this._price = doc.price;
    // 在 new Province 時就建立好 producer list
    doc.producers.forEach(d => this.addProducer(new Producer(this, d)))
  }
  addProducer(arg) {
    this._producers.push(arg);
    this._totalProduction += arg.production;
  }
  get name() { return this._name; }
  get producers() { return this._producers.slice(); }
  get totalProduction() { return this._totalProduction; }
  set totalProduction(arg) { this._totalProduction = arg; }
  get demand() { return this._demand; }
  set demand(arg) { this._demand = arg; };
  get price() { return this._price; }
  set price(arg) { this._price = parseInt(arg); }
  get profit() {
    // 破壞原本的程式碼確定有出現錯誤
    // return this.demandValue - this.demandCost * 2;
    return this.demandValue - this.demandCost;
  }
  get demandCost() {
    let remainingDemand = this.demand;
    let result = 0;
    this.producers
      .sort((a, b) => a.cost - b.cost)
      .forEach(p => {
        // 當有生產缺口時，若現有需求 < 產量，則貢獻全部需求即可，反之則貢獻預計產量。
        const contribution = Math.min(remainingDemand, p.production)
        remainingDemand -= contribution;
        // 生產者貢獻量 * 成本總和即為最後的需求成本
        result += contribution * p.cost;
      })
    return result
  }
  get demandValue() {
    return this.satisfiedDemand * this.price;
  }
  get satisfiedDemand() {
    return Math.min(this._demand, this.totalProduction);
  }
  get shortfall() {
    // 當需求與實際產量有落差時，中間落差則是生產缺口
    return this._demand - this.totalProduction;
  }
}
