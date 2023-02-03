class Person {
  constructor(id) {
    this._name = '';
    this.id = id;
  }
  get name() { return this._name; }
  set name(arg) { return this._name = arg; }
  get id() { return this._id; }
  set id(arg) { this._id = arg; }
}

export default Person;
