const Record = require('../record')
const db = require('../../config/mongoose')


db.once('open', () => {
  console.log('mongodb connected!')

  Record.create(
    {
      "name": "捷運",
      "date": "2020/12/23",
      "icon": `<i class="fas fa- shuttle - van"></i>`,
      "amount": 45
    },
    {
      "name": "午餐",
      "date": "2020/12/25",
      "icon": `<i class="fas fa-utensils"></i>`,
      "amount": 150
    },
    {
      "name": "卡拉ＯＫ",
      "date": "2020/12/25",
      "icon": `<i class="fas fa-grin-beam"></i>`,
      "amount": 690
    },
    {
      "name": "買衣服",
      "date": "2020/12/30",
      "icon": `<i class="fas fa-grin-beam"></i>`,
      "amount": 1500
    },
    {
      "name": "買書",
      "date": "2020/12/31",
      "icon": `<i class="fas fa-grin-beam"></i>`,
      "amount": 800
    },
    {
      "name": "珍珠奶茶",
      "date": "2021/01/01",
      "icon": `<i class="fas fa-utensils"></i>`,
      "amount": 45
    }
  ).then(() => {
    console.log('recordSeeds done!')
    db.close()
  }).then(() => {
    console.log('db done!')

  })
})