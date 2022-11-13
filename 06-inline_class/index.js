export class Shipment {
  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`
  }

  set shippingCompany(arg) {
    this._shippingCompany = arg;
  }

  get shippingCompany() {
    return this._shippingCompany;
  }

  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }

  get trackingNumber() {
    return this._trackingNumber;
  }
}


