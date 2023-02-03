class ChargeCalculate {
  constructor(customer, usage, provider) {
    this._customer = customer;
    this._usage = usage;
    this._provider = provider;
  }

  charge(customer, usage, provider) {
    const baseCharge = this._customer.baseRate * this._usage;
    return baseCharge + this._provider.connectionCharge;
  }
}

function charge(customer, usage, provider) {
  return new ChargeCalculate(customer, usage, provider).charge(customer, usage, provider)
}

export default charge;
