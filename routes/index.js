const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const records = require('./modules/records')
const filters = require('./modules/filters')
const users = require('./modules/users')


router.use('/', home)
router.use('/records', records)
router.use('/filters', filters)
router.use('/users', users)



module.exports = router