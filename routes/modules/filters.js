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
      const filterRecord = []


      filterRecord.push(
        record.filter(records => records.category_name === category)
      )
      console.log(filterRecord)

      const records = getValuefromfilter(filterRecord)
      const amountSum = getAmountSum(records)


      if (category === 'default') {

        res.redirect('/')

      } else if (!records.length) {
        res.render('index', { error: 'error', categories, category })
      }

      return res.render('filter', { records, amountSum, categories, category })

    })

    .catch(error => console.log('error'))
})



router.post('/', (req, res) => {

  const month = req.body.month
  const userId = req.user._id

  console.log(month)

  Promise.all([
    Record.find({ userId }).lean().sort({ date: 'desc' }),
    Category.find().lean()
  ])
    .then(results => {

      const record = results[0]
      const categories = results[1]
      const filterMonth = []


      filterMonth.push(
        record.filter(records => records.date.split('-')[1] === month))

      const records = getValuefromfilter(filterMonth)
      const amountSum = getAmountSum(records)

      if (!records) {

        res.render('index', { error: 'error', categories, month })
      }

      return res.render('filter', { month, records, amountSum })

    })


    .catch(error => console.log('error'))
})



module.exports = router