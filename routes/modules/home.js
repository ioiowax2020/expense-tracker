const express = require('express')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

const { getAmountSum } = require('../../public/javascripts/tool')


router.get('/', (req, res) => {
  const userId = req.user._id
  Promise.all([Record.find({ userId }).lean().sort({ date: 'desc' }),
  Category.find().lean()])

    .then(results => {
      const records = results[0]
      const categories = results[1]

      const amountSum = getAmountSum(records)

      res.render('index', { records, amountSum, categories })
    })

    .catch(error => console.log('error'))

})

module.exports = router