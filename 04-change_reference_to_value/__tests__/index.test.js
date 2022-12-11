import {Person, TelephoneNumber} from "../index";

describe('change reference to value', function () {
  test('should get telephone', function () {
    const person = new Person()
    person.officeAreaCode = '03'
    person.officeNumber = '1111111'
    expect(person.officeNumber).toBe('1111111');
    expect(person.officeAreaCode).toBe('03');

  });
  test('should be equal', function () {
    expect(new TelephoneNumber("312", "555-0142").equals(new TelephoneNumber("312", "555-0142"))).toBeTruthy();
  });
});
