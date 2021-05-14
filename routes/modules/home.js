const express = require('express')
const router = express.Router()

const Record = require('../../models/expense')

router.get('/', (req, res) => {

  res.render('index')
  // Record.find()
  //   .lean()
  //   .then(Records => res.render('index', { Records }))
  //   .catch(erroe => console.error(error))
})

module.exports = router