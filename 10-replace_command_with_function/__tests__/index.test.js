import ChargeCalculate from "../index";

describe('replace command with function', function () {
  test('should be charge', function () {
    const customer = { baseRate: 1.1 }
    const usage = 10
    const provider = { connectionCharge: 10 }
    const monthCharge = new ChargeCalculate(customer, usage, provider).charge;
    expect(monthCharge).toBe(21);
  });
});
