class Order {
  constructor(data) {
    this.priority = data.priority;
  }
}

const rawOrders = [{priority: 'high'}, {priority: 'normal'}, {priority: 'rush'}]
const orders = rawOrders.map(o => new Order(o))

export function getHighPriorityCount() {
  return orders.filter(o => "high" === o.priority || "rush" === o.priority).length;
}
