const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')
const { getAmountSum, getValuefromfilter } = require('../../public/javascripts/tool')




router.get('/', (req, res) => {
  const category = req.query.category

  Promise.all([Record.find().lean().sort({ date: 'desc' }),
  Category.find().lean()])
    .then(results => {
      const record = results[0]
      const categories = results[1]
      const filterRecord = []

      filterRecord.push(
        record.filter(records => (records.category_name === category))
      )
      const records = getValuefromfilter(filterRecord)
      const amountSum = getAmountSum(records)


      if (!records.length) {

        res.render('index', { error: 'error', categories, category })
      } else {
        categories.isSelect =
          res.render('index', { records, amountSum, categories, category })
      }



    })
    .catch(error => console.log('error'))
})


module.exports = router