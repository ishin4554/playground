class Person {
  constructor(name) {
    this._name = name;
    this._courses = [];
  }

  get name() {
    return this._name;
  }

  get courses() {
    return this._courses;
  }

  set courses(aList) {
    this._courses = aList;
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
  aPerson.courses.push(new Course(name, false))
}

export const getNumAdvancedCourses = () => {
  return aPerson.courses.filter(c => c.isAdvanced).length
}
