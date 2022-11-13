import {getHighPriorityCount} from "../index";

describe('replace primitive with object', function () {
  test('should be high priorityString count', function () {
    expect(getHighPriorityCount()).toBe(2)
  });
});
