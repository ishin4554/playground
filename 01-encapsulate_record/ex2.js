let customerData = {
  '1920': {
    name: 'martin',
    id: '1920',
    usages: {
      '2016': {
        '1': 50,
        '2': 55
      },
      '2015': {
        '1': 70,
        '2': 63
      }
    }
  },
};
const updateData = {
  customerID: 1920,
  year: 2016,
  month: 1,
  amount: 20,
};
const {
  customerID,
  year,
  month,
  amount
} = updateData;

customerData[customerID].usages[year][month] = amount;

export const compareUsage = (customerID, laterYear, month) => {
  const later = customerData[customerID].usages[laterYear][month];
  const earlier = customerData[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier}
}
