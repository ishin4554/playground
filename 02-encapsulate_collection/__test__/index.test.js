import {getNumAdvancedCourses} from "../index";

describe('encapsulate collection', function () {
  test('should be advanced courses length', function () {
    expect(getNumAdvancedCourses()).toBe(0)
  });
});
