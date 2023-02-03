import createEngineer from "../index";

describe('replace constructor with factory function', function () {
  test('should be Engineer', function () {
    const candidate = createEngineer('Terry')
    expect(candidate.type).toBe('Engineer');
  });
});
