import {Department, Person} from "../index";

describe('remove middle man', function () {
  test('should not delegate', function () {
    const person = new Person('David');
    const department = new Department();
    department.manager = 'Lucy';
    person.department = department;
    expect(person.department.manager).toBe('Lucy');
  });
});
