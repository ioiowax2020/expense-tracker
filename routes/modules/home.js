const express = require('express')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

router.get('/', (req, res) => {

  return Category.find()
    .lean()
    .sort({ _id: 'asc' })
    .then(categories => res.render('index', { categories }))
    .catch(erroe => console.error(error))
  return Record.find()
    .lean()
    .then((records) =>
      res.render('index', { records }))
    .catch(error => console.log('erroe'))


})

router.post('/', (req, res) => {

  console.log(req.body)
  const id = req.params.id
  return Category.findById(id)
    .lean()
    .sort({ _id: 'asc' })
    .then(categories => res.render('index', { categories }))
    .catch(erroe => console.error(error))

})

module.exports = router