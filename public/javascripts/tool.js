

const tools = {

  getAmountSum(records) {
    let sum = 0
    records.forEach(record => {
      sum += record.amount
    });
    return sum
  },
  getValuefromfilter(filter) {
    let newfilter = ''
    newfilter = filter[0]
    return newfilter

  },
}

module.exports = tools