const express = require('express')
const router = express.Router()

const Record = require('../../models/record')


//read
router.get('/new', (req, res) => {

  res.render('new')

})

//create
router.post('/', (req, res) => {

  const userId = req.user._id
  const { name, date, amount, category_name, merchant } = req.body
  console.log(req.body)

  return Record.create({ name, date, amount, category_name, merchant, userId })
    .then((records) => res.redirect('/'))
    .catch(error => console.log(error))

})



//update
router.get('/:id/edit', (req, res) => {

  const userId = req.user._id
  const _id = req.params.id

  return Record.findOne({ _id, userId })
    .lean()
    .then(records => res.render('edit', { records }))
    .catch(error => console.log(error))

})

router.put('/:id', (req, res) => {

  const userId = req.user._id
  const _id = req.params.id

  const { name, date, amount, category_name, merchant } = req.body
  console.log(req.body)

  return Record.findOne({ _id, userId })
    .then(records => {
      records.name = name
      records.date = date
      records.amount = amount
      records.category_name = category_name
      records.merchant = merchant
      return records.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))

})


//delete
router.delete('/:id', (req, res) => {

  const userId = req.user._id
  const _id = req.params.id

  return Record.findOne({ _id, userId })
    .then(records => records.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log('error'))
})


//exports router
module.exports = router


