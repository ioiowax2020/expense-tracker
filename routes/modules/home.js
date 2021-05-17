const express = require('express')
const category = require('../../models/category')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

const tools = require('../../models/seeds/tool')


router.get('/', (req, res) => {

  const categoryOb = tools.categoryObject()

  return Record.find()
    .lean()
    .then((records) => {
      const amountSum = tools.amountSum(records)

      tools.categoryObject(records)

      res.render('index', { records, amountSum, categoryOb })
    })
    .catch(error => console.log('error'))

})

module.exports = router