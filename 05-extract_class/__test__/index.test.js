import {Person} from "../index";

describe('extract class', function () {
  test('should be toString', function () {
    const person = new Person();
    person.officeAreaCode = '03';
    person.officeNumber = '54545454';
    expect(person.telephoneNumber).toBe('(03) 54545454')
  });
});
