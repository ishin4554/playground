const organization = {
  name: "Acme Gooseberries",
  country: "GB"
}

export const render = () => {
  let result = ''
  result += `<h1>${organization.name}</h1>`
  return result
}
