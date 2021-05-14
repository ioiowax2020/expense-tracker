const mongoose = require('mongoose')

const MONGODB_URI = 'mongdb://localhost/expense-tracker'


const db = mongoose.connection

db.on('error', () => {

  console.log('mongodb error!')
})
db.once('open', () => {

  console.log('mongdb connected!')
})

module.exports = db