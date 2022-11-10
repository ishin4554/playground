// 2. encapsulate record 封裝紀錄為類別，並透過 getter, setter 控制被使用的方式
class Organization {
  // 將 data 欄位與物件融合，避免直接修改到 ref 或使用 deepClone 來複製
  constructor(data) {
    this._name = data.name;
    this._country = data.country;
  }
  set name(aString) {
    this._name = aString;
  }
  get name() {
    return this._name
  }
  set country(aCountryCode) {
    this._country = aCountryCode;
  }
  get country() {
    return this._country
  }
}

const organization = new Organization({
  name: "Acme Gooseberries",
  country: "GB"
})

// 3. 移除 encapsulate variable
const getOrganization = () => organization;

export const render = () => {
  let result = ''
  result += `<h1>${getOrganization().name}</h1>`
  return result
}
