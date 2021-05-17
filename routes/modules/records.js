const express = require('express')
const router = express.Router()

const Category = require('../../models/category')
const Record = require('../../models/record')

//新增一筆資料
router.get('/new', (req, res) => {

  res.render('new')

})


router.post('/', (req, res) => {
  console.log(req)
  const { name, date, amount, icon } = req.body

  return Record.create({ name, date, amount, icon })
    .then((records) => res.redirect('/'))
    .catch(error => console.log(error))

})

//編輯特定資料

//修改一筆特定資料
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


//刪除一筆資料
router.delete('/:id', (req, res) => {

  const id = req.params.id

  return Record.findById(id)
    .then(records => records.remove())
    .then(() => res.redirect('/'))
    .catch(error => console.log('error'))
})





//exports router
module.exports = router


