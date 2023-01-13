import deliveryDate from "../index";

class Order {
  constructor(deliveryState, deliveryDate) {
    this.deliveryState = deliveryState;
    this.deliveryDate = deliveryDate;
  }

  get placedOn() {
    return {
      plusDays: (aDay) =>
        new Date(this.deliveryDate.getTime() + aDay * 1000 * 60 * 60 * 24)
    }
  }
}

describe('remove flag argument', function () {
  test('should be example 1', function () {
    const order = new Order('MA', new Date('2022-01-02'))
    expect(deliveryDate(order, true).toISOString()).toBe(new Date('2022-01-04').toISOString())
  });
});
