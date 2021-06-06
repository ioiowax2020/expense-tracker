const express = require('express')
const router = express.Router()

const home = require('./modules/home')
const records = require('./modules/records')
const filters = require('./modules/filters')
const User = require('./modules/users')
const { authenticator } = require('../middleware/auth')




router.use('/records', authenticator, records)
router.use('/filters', authenticator, filters)
router.use('/users', User)
router.use('/', authenticator, home)


module.exports = router