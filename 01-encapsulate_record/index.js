const organization = {
  name: "Acme Gooseberries",
  country: "GB"
}

// 1. encapsulate variable
// 命名先很醜也容易搜尋，因為是過度步驟
export const getRawDataOfOrganization = () => {
  return organization
}

const setRawDataOfOrganization = (newName) => {
  getRawDataOfOrganization().name = newName;
}

export const render = () => {
  let result = ''
  result += `<h1>${getRawDataOfOrganization().name}</h1>`
  return result
}
