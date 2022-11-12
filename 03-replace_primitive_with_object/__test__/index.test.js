import {getHighPriorityCount} from "../index";

describe('replace primitive with object', function () {
  test('should be high priority count', function () {
    expect(getHighPriorityCount()).toBe(2)
  });
});
