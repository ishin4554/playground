// 2. encapsulate record 封裝紀錄為類別，並透過 getter, setter 控制被使用的方式
class Organization {
  constructor(data) {
    this._data = data;
  }
  set name(aString) {
    this._data.name = aString;
  }
  get name() {
    return this._data.name
  }
}

const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB"
})

const getOrganization = () => organization;

// 1. encapsulate variable
// 命名先很醜也容易搜尋，因為是過度步驟
export const getRawDataOfOrganization = () => {
  return organization._data
}

const setRawDataOfOrganization = (newName) => {
  getOrganization().name = newName
}

export const render = () => {
  let result = ''
  result += `<h1>${getOrganization().name}</h1>`
  return result
}
