import Person from '../index';

describe('remove setting method', function () {
  test('should be martin', function () {
    const martin = new Person();
    martin.name = "martin";
    martin.id = "1234"
    expect(martin.name).toBe('martin');
    expect(martin.id).toBe('1234');
  });
});
