const Category = require('../../models/category')

const tools = {

  amountSum(records) {
    let sum = 0
    records.forEach(record => {
      sum += record.amount
    });
    return sum
  },
  CategoryObject(records) {

    let categoryOB = ''

    switch (records) {
      case 'isLife':
        categoryOB = `<i class="fas fa-home"></i>`
        break
      case 'isVechcle':
        categoryOB = `<i class="fas fa-shuttle-van"></i>`
        break
      case 'isFood':
        categoryOB = `<i class="fas fa-utensils"></i>`
        break

      case 'isMedical':
        categoryOB = `<i class="fas fa-hospital"></i>`
        break
      case 'other':
        categoryOB = `<i class="fas fa-pen"></i>`
        break
    }

    return categoryOB
  }
}

module.exports = tools