class Organization {
  constructor(data) {
    // 確認所有使用 name 的地方都改為 title 之後，就可以移除檢查
    this._title = data.title;
    this._country = data.country;
  }

  get title() {
    return this._title
  }

  set title(aString) {
    this._title = aString
  }

  get country() {
    return this._country
  }

  set country(aCountryCode) {
    this._country = aCountryCode
  }
}

const organization = new Organization({title: "Acme Gooseberries", country: "GB"})
export default organization;
