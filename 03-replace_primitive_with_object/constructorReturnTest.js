class A {
  constructor(value) {
    if (value instanceof A) return value;
    this._value = value
  }
}

class B {
  constructor(value) {
    this._value = value;
  }
}

const a = new A(1);
const b = new A(a);

console.log(a === b)

const c = new B(1);
const d = new B(c);

console.log(c === d);
