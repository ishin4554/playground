import ProductionPlan from "../index";

describe('replace derived variable with query', function () {
  test('should get production', function () {
    const plan = new ProductionPlan(20)
    plan.applyAdjustment({amount: 20})
    expect(plan.production).toBe(40);
  });
});
