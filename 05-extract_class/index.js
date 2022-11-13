class TelephoneNumber {
  get officeAreaCode() {
    return this._officeAreaCode;
  }

  set officeAreaCode(arg) {
    this._officeAreaCode = arg;
  }

  get officeNumber() {
    return this._officeNumber;
  }

  set officeNumber(arg) {
    this._officeNumber = arg;
  }

  get telephoneNumber() {
    return `(${this.officeAreaCode}) ${this.officeNumber}`
  }
}

export class Person {
  constructor() {
    this._telephoneNumber = new TelephoneNumber();
    this._name = '';
  }

  get name() {
    return this._name;
  }

  set name(arg) {
    this._name = arg;
  }

  get telephoneNumber() {
    return this._telephoneNumber.telephoneNumber;
  }

  get officeAreaCode() {
    return this._telephoneNumber.officeAreaCode;
  }

  set officeAreaCode(arg) {
    this._telephoneNumber.officeAreaCode = arg;
  }

  get officeNumber() {
    return this._telephoneNumber.officeNumber;
  }

  set officeNumber(arg) {
    this._telephoneNumber.officeNumber = arg;
  }
}
