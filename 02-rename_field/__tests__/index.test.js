import organization from "../index";

describe('rename field', function () {
  test('should get organization', function () {
    expect(organization.title).toBe("Acme Gooseberries");
    expect(organization.country).toBe("GB");
  });
});
