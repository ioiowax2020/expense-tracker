const express = require('express')
const router = express.Router()

const Record = require('../../models/record')


//read
router.get('/new', (req, res) => {

  res.render('new')

})

//create
router.post('/', (req, res) => {

  const { name, date, amount, category_name } = req.body
  console.log(req.body)
  return Record.create({ name, date, amount, category_name })
    .then((records) => res.redirect('/'))
    .catch(error => console.log(error))

})



//update
router.get('/:id/edit', (req, res) => {

  const id = req.params.id

  return Record.findById(id)
    .lean()
    .then(records => res.render('edit', { records }))
    .catch(error => console.log(error))

})

router.put('/:id', (req, res) => {

  const id = req.params.id
  const { name, date, amount, category } = req.body
  console.log(req.body)
  return Record.findById(id)
    .then(records => {
      records.name = name
      records.date = date
      records.amount = amount
      records.category = category
      return records.save()
    })
    .then(() => res.redirect('/'))
    .catch(error => console.log(error))

})


//delete
router.delete('/:id', (req, res) => {


  const id = req.params.id

  return Record.findById(id)
    .then(records => records.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log('error'))
})


//exports router
module.exports = router


