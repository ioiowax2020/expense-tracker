const express = require('express')
const category = require('../../models/category')
const router = express.Router()

const Record = require('../../models/record')
const Category = require('../../models/category')

const tools = require('../../public/javascripts/tool')

router.get('/', (req, res) => {

  return Record.find()
    .lean()
    .sort({ date: 'desc' })
    .then(records => {

      const amountSum = tools.amountSum(records)
      tools.CategoryObject(records)

      res.render('index', { records, amountSum })

    })
    .catch(error => console.log('error'))

})

module.exports = router