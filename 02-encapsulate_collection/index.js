class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }

  get courses() {
    return this._courses.slice();
  }

  set courses(aList) {
    this._courses = aList.slice();
  }

  addCourse(aCourse) {
    this._courses.push(aCourse);
  }

  removeCourse(aCourse, fnIfAnsent = () => {
    throw new RangeError()
  }) {
    const index = this._courses.indexOf(aCourse);
    if (index === 1) fnIfAnsent();
    else this._courses.splice(index, 1);
  }
}

class Course {
  constructor(name, isAdvanced) {
    this._name = name;
    this._isAdvanced = isAdvanced;
  }

  get name() {
    return this._name;
  }

  get isAdvanced() {
    return this._isAdvanced;
  }
}

const readBasicCourseName = (filename) => {
  return ['A', 'B', 'C']
}
const basicCourseNames = readBasicCourseName('')
const aPerson = new Person({name: 'David'})

// type 1: correct usage
// aPerson.courses = basicCourseNames.map(name => new Course(name, false))

// type 2: illegal usage
for (const name of readBasicCourseName('')) {
  aPerson.addCourse(new Course(name, false))
}

export const getNumAdvancedCourses = () => {
  return aPerson.courses.filter(c => c.isAdvanced).length
}
