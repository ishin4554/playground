class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  // 因為 Priority getter 為 toString 故 function 也調整為 priorityString()
  get priorityString() {
    return this._priority.toString();
  }

  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

class Priority {
  constructor(value) {
    this._value = value;
  }

  // 作者認為對使用方來說，取得字串比較像是轉換而非取得屬性。
  toString() {
    return this._value;
  }
}

const rawOrders = [{priority: 'high'}, {priority: 'normal'}, {priority: 'rush'}]
const orders = rawOrders.map(o => new Order(o))

export function getHighPriorityCount() {
  return orders.filter(o => "high" === o.priorityString || "rush" === o.priorityString).length;
}
