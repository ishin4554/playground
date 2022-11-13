import {Department, Person} from "../index";

describe('hide delegate', function () {
  test('should be delegate', function () {
    const person = new Person('David');
    const department = new Department();
    department.manager = 'Lucy';
    person.department = department;
    expect(person.department.manager).toBe('Lucy');
  });
});
