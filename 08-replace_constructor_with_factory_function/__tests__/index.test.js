import createEmployee from "../index";

describe('replace constructor with factory function', function () {
  test('should be Engineer', function () {
    const candidate = createEmployee('Terry', 'E')
    expect(candidate.type).toBe('Engineer');
  });
});
