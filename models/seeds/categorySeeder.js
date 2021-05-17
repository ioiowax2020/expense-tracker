const Category = require('../category')
const db = require('../../config/mongoose')

db.once('open', () => {

  console.log('mongodb connected!')

  Category.create(
    {
      category_name: 'allObject',
      category: '全部',
      icon: '<i class="fas fa-home"></i>',
    },
    {
      category_name: 'isLife',
      category: '家居樂業',
      icon: '<i class="fas fa-home"></i>',
    },
    {
      category_name: 'isVechcle',
      category: '交通出行',
      icon: '<i class="fas fa-shuttle-van"></i>',
    },
    {
      category_name: 'isEntertainment',
      category: '休閒娛樂',
      icon: '<i class="fas fa-grin-beam"></i>',

    },
    {
      category_name: 'isFood',
      category: '餐飲食品',
      icon: '<i class="fas fa-utensils"></i>',
    },
    {
      category_name: 'isMedical',
      category: '醫療費用',
      icon: '<i class="fas fa-hospital"></i>',
    },
    {
      category_name: 'other',
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
