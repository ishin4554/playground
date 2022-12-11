import distanceTraveled from '../ex1'

describe('split variable ex1', function () {
  test('should get distance', function () {
    const scenario = {
      primaryForce: 10,
      mass: 10,
      delay: 5,
      secondaryForce: 20,
    }
    expect(distanceTraveled(scenario, 10)).toBe(75);
  });
});
