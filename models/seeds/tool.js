
const tools = {

  amountSum(records) {
    let sum = 0
    records.forEach(record => {
      sum += record.amount
    });
    return sum
  },

  categoryObject(records) {
    let output = " "
    switch (records) {

      case 'allObject':
        output = `<i class="fas fa-home"></i>`
        break
      case 'isLife':
        output = `<i class="fas fa-home"></i>`
        break

      case 'isVechcle':
        output = `<i class="fas fa-shuttle-van"></i>`
        break
      case 'isEntertainment':
        output = `<i class="fas fa-grin-beam"></i>`
        break
      case 'isFood':
        output = `<i class="fas fa-utensils"></i>`
        break
      case 'isMedical':
        output = `<i class="fas fa-hospital"></i>`
        break
      case 'other':
        output = `<i class="fas fa-pen"></i>`
        break
    }
    return output
  },

}
module.exports = tools