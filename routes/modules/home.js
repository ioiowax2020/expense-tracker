const express = require('express')
const category = require('../../models/category')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

const { getAmountSum, getCategoryIcon } = require('../../public/javascripts/tool')


router.get('/', (req, res) => {
  Promise.all([Record.find().lean().sort({ date: 'desc' }),
  Category.find().lean()])

    .then(results => {
      const records = results[0]
      const categories = results[1]

      const amountSum = getAmountSum(records)

      res.render('index', { records, amountSum })
    })

    .catch(error => console.log('error'))

})

module.exports = router