import _ from 'lodash';
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

class CustomerData {
  constructor(data) {
    this._data = data;
  }
  setUsage(customerID, year, month, amount) {
    this._data[customerID].usages[year][month] = amount;
  }
  get rawData() {
    return _.cloneDeep(this._data);
  }
}

const {
  customerID,
  year,
  month,
  amount
} = updateData;

const getCustomerData = () => customerData;
const getRawDataOfCustomers = () => customerData.rawData;
const setRawDataOfCustomers = (arg) => { customerData = new CustomerData(arg); }

setRawDataOfCustomers(customerData);

getCustomerData().setUsage(customerID, year, month, amount);

export const compareUsage = (customerID, laterYear, month) => {
  const later = getRawDataOfCustomers()[customerID].usages[laterYear][month];
  const earlier = getRawDataOfCustomers()[customerID].usages[laterYear - 1][month];
  return { laterAmount: later, change: later - earlier}
}
