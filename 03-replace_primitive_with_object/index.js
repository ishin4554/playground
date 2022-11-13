class Order {
  constructor(data) {
    this.priority = data.priority;
  }

  get priority() {
    return this._priority;
  }

  get priorityString() {
    return this._priority.toString();
  }

  set priority(aString) {
    this._priority = new Priority(aString);
  }
}

class Priority {
  constructor(value) {
    // 若是有相同的 instance 傳入則會沿用，參考 constructorReturnTest
    if (value instanceof Priority) return value;
    if (Priority.legalValues().includes(value)) this._value = value;
    else throw new Error(`<${value}> is invalid of Priority`);
  }

  toString() {
    return this._value;
  }

  get _index() {
    return Priority.legalValues().findIndex(s => s === this._value)
  }

  // 除了檢查是否為合法字串外，同時透過定義好的順序讓字串之間的緊急度被定義
  static legalValues() {
    return ['low', 'normal', 'high', 'rush']
  }

  equals(other) {
    return this._index === other._index;
  }

  higherThan(other) {
    return this._index > other._index;
  }

  lowerThan(other) {
    return this._index < other._index;
  }
}


const rawOrders = [{priority: 'high'}, {priority: 'normal'}, {priority: 'rush'}]
const orders = rawOrders.map(o => new Order(o))

export function getHighPriorityCount() {
  return orders.filter(o => o.priority.higherThan(new Priority("normal"))).length;
}
