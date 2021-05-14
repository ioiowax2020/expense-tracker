const Record = require('../record')
const db = require('../../config/mongoose')


db.once('open', () => {
  console.log('mongodb connected!')

  Record.create(
    {
      name: '捷運',
      date: '2021/2/21',
      amount: 120,
      totalAmount: 120,
    }
  ).then(() => {
    console.log('recordSeeds done!')
    db.close()
  }).then(() => {
    console.log('db done!')

  })
})