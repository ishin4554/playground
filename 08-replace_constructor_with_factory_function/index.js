class Employee {
  constructor(name, typeCode) {
    this._name = name;
    this._typeCode = typeCode;
  }
  get name() { return this._name; }
  get type() { return Employee.legalTypeCode[this._typeCode]}
  static get legalTypeCode() {
    return { "E": "Engineer", "M": "Manager", "S": "Salesman" }
  }
}
export default Employee;
