import charge from "../index";

describe('replace command with function', function () {
  test('should be charge', function () {
    const customer = {baseRate: 1.1}
    const usage = 10
    const provider = {connectionCharge: 10}
    const monthCharge = charge(customer, usage, provider);
    expect(monthCharge).toBe(21);
  });
});
