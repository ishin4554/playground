class Order {
  constructor(data) {
    this._priority = data.priority;
  }

  get priority() {
    return this._priority;
  }

  set priority(aString) {
    this._priority = aString;
  }
}

const rawOrders = [{priority: 'high'}, {priority: 'normal'}, {priority: 'rush'}]
const orders = rawOrders.map(o => new Order(o))

export function getHighPriorityCount() {
  return orders.filter(o => "high" === o.priority || "rush" === o.priority).length;
}
