const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')
const { getAmountSum, getValuefromfilter } = require('../../public/javascripts/tool')




router.get('/', (req, res) => {

  const category = req.query.category_name
  const userId = req.user._id

  Promise.all([
    Record.find({ userId }).lean().sort({ date: 'desc' }),
    Category.find().lean()
  ])
    .then(results => {

      const record = results[0]
      const categories = results[1]
      let filterRecord = []


      filterRecord.push(
        record.filter(records => records.category_name === category)
      )
      console.log(filterRecord)

      const records = getValuefromfilter(filterRecord)
      const amountSum = getAmountSum(records)


      if (!records.length) {

        res.render('index', { error: 'error', categories, category, userId })
      }

      return res.render('filter', { records, amountSum, categories, category, userId })


    })
    .catch(error => console.log('error'))
})


module.exports = router