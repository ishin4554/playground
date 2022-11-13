import {Shipment, TrackingInformation} from "../index";

describe('inline class', function () {
  test('should be trackingInfo', function () {
    const shipment = new Shipment();
    shipment.trackingInformation = new TrackingInformation();
    shipment.shippingCompany = 'looplus';
    shipment.trackingNumber = 1001;
    expect(shipment.trackingInfo).toBe('looplus: 1001');
  });
});
