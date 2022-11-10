import {compareUsage} from "../ex2";

describe('ex2', function () {
  test('should be laterAmount and change', function () {
    expect(compareUsage('1920', '2016', '1')).toEqual({
      change: -50,
      laterAmount: 20,
    })
  });
});
