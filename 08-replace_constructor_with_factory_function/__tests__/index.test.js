import Employee from "../index";

describe('replace constructor with factory function', function () {
  test('should be Engineer', function () {
    const candidate = new Employee('Terry', 'E')
    expect(candidate.type).toBe('Engineer');
  });
});
