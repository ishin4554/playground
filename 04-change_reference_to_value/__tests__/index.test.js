import Person from "../index";

describe('change reference to value', function () {
  test('should get telephone', function () {
    const person = new Person()
    person.officeAreaCode = '03'
    person.officeNumber = '1111111'
    expect(person.officeNumber).toBe('1111111');
    expect(person.officeAreaCode).toBe('03');

  });
});
