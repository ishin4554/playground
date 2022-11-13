import {Order} from "../index";

describe('replace temp with query', function () {
  test('should be price', function () {
    expect(new Order(2, {price: 100}).price).toBe(196)
  });
});
