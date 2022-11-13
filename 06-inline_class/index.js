export class TrackingInformation {
  get shippingCompany() {
    return this._shippingCompany;
  }

  set shippingCompany(arg) {
    this._shippingCompany = arg
  }

  get trackingNumber() {
    return this._trackingNumber;
  }

  set trackingNumber(arg) {
    this._trackingNumber = arg;
  }

}

export class Shipment {
  get trackingInfo() {
    return `${this.shippingCompany}: ${this.trackingNumber}`
  }

  get trackingInformation() {
    return this._trackingInformation;
  }

  set trackingInformation(aTrackingInformation) {
    this._trackingInformation = aTrackingInformation;
  }

  set shippingCompany(arg) {
    this._trackingInformation.shippingCompany = arg;
  }

  get shippingCompany() {
    return this._trackingInformation.shippingCompany;
  }

  set trackingNumber(arg) {
    this._trackingInformation.trackingNumber = arg;
  }

  get trackingNumber() {
    return this._trackingInformation.trackingNumber;
  }
}


