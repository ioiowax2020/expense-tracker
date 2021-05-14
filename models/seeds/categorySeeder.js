const Record = require('../category')
const db = require('../../config/mongoose')

db.once('open', () => {

  console.log('mongodb connected!')

  Record.create(
    {
      category: '家居物業',
      icon: '<i class="fas fa-home"></i>',
    },
    {
      category: '交通出行',
      icon: '<i class="fas fa-shuttle-van"></i>',
    },
    {
      category: '休閒娛樂',
      icon: '<i class="fas fa-grin-beam"></i>',

    },
    {
      category: '餐飲食品',
      icon: '<i class="fas fa-utensils"></i>',
    },
    {
      category: '醫療',
      icon: '<i class="fas fa-hospital"></i>',
    },
    {
      category: '其它',
      icon: '<i class="fas fa-pen"></i>',
    },
  ).then(() => {
    console.log('categorySeeds done!')
    db.close()
  }).then(() => {
    console.log('db done!')

  })

})
