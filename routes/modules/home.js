const express = require('express')
const category = require('../../models/category')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', (req, res) => {

  // return Category.find()
  //   .lean()
  //   .sort({ _id: 'asc' })
  //   .then(categories => res.render('index', { categories }))
  //   .catch(erroe => console.error(error))

  return Record.find()
    .lean()
    .then((records) => res.render('index', { records }))
    .catch(error => console.log('error'))

})

module.exports = router