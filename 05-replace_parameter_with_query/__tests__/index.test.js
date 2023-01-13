import Order from '../index';

describe('replace parameter with query', function () {
  test('should be example 1', function () {
    const order = new Order(10, 20)
    expect(order.finalPrice).toBe(190);
  });
});
