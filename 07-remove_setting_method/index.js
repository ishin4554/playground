class Person {
  constructor(id) {
    this._name = '';
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(arg) {
    return this._name = arg;
  }

  get id() {
    return this._id;
  }
}

export default Person;
