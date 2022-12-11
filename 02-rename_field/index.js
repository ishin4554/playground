class Organization {
  constructor(data) {
    // 如果要讓資料開始支援 title 這個欄位
    this._title = (data.title !== undefined) ? data.title : data.name;
    this._country = data.country;
  }

  get name() {
    return this._title
  }

  set name(aString) {
    this._title = aString
  }

  get country() {
    return this._country
  }

  set country(aCountryCode) {
    this._country = aCountryCode
  }
}

const organization = new Organization({name: "Acme Gooseberries", country: "GB"})
export default organization;
