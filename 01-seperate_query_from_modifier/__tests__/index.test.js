import { findMiscreant, alertForMiscreant }  from '../index';

describe('separate query from modifier', function () {
  test('should be exampel 1', function () {
    const people = ['Don', 'Other One'];
    const found = findMiscreant(people)
    alertForMiscreant(people);
    expect(found).toBe("Don")
  });
});
