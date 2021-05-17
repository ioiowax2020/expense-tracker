const Record = require('../category')
const db = require('../../config/mongoose')

db.once('open', () => {

  console.log('mongodb connected!')

  Record.create(
    {
      category: 'allObject',
      category_name: '全部',
      icon: '<i class="fas fa-home"></i>',
    },
    {
      category: 'isLife',
      category_name: '家居樂業',
      icon: '<i class="fas fa-home"></i>',
    },
    {
      category: 'isVechcle',
      category_name: '交通出行',
      icon: '<i class="fas fa-shuttle-van"></i>',
    },
    {
      category: 'isEntertainment',
      category_name: '休閒娛樂',
      icon: '<i class="fas fa-grin-beam"></i>',

    },
    {
      category: 'isFood',
      category_name: '餐飲食品',
      icon: '<i class="fas fa-utensils"></i>',
    },
    {
      category: 'isMedical',
      category_name: '醫療費用',
      icon: '<i class="fas fa-hospital"></i>',
    },
    {
      category: 'other',
      category_name: '其它',
      icon: '<i class="fas fa-pen"></i>',
    },
  ).then(() => {
    console.log('categorySeeds done!')
    db.close()
  }).then(() => {
    console.log('db done!')

  })

})
