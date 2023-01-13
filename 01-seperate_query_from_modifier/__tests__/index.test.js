import alertForMiscreant from '../index';

describe('separate query from modifier', function () {
  test('should be exampel 1', function () {
    expect(alertForMiscreant(['Don', 'Other One'])).toBe("Don")
  });
});
