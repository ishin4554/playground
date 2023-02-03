import Person from '../index';

describe('remove setting method', function () {
  test('should be martin', function () {
    const martin = new Person('1234');
    martin.name = "martin";
    expect(martin.name).toBe('martin');
    expect(martin.id).toBe('1234');
  });
});
