const Record = require('../record')
const db = require('../../config/mongoose')


db.once('open', () => {
  console.log('mongodb connected!')

  Record.create(
    {
      "name": "捷運",
      "date": "2020/12/23",
      "category_name": 'isVechcle',
      "amount": 45
    },
    {
      "name": "午餐",
      "date": "2020/12/25",
      "category_name": 'isFood',
      "amount": 150
    },
    {
      "name": "卡拉ＯＫ",
      "date": "2020/12/25",
      "category_name": 'isEntertainment',
      "amount": 690
    },
    {
      "name": "買衣服",
      "date": "2020/12/30",
      "category_name": 'isEntertainment',
      "amount": 1500
    },
    {
      "name": "買書",
      "date": "2020/12/31",
      "category_name": 'isEntertainment',
      "amount": 800
    },
    {
      "name": "全身檢查",
      "date": "2021/01/01",
      "category_name": 'isMedical',
      "amount": 10000
    }
  ).then(() => {
    console.log('recordSeeds done!')
    db.close()
  }).then(() => {
    console.log('db done!')

  })
})