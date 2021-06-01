const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({

  name: String,
  date: String,
  category_name: String,
  amount: Number,
})

module.exports = mongoose.model('Record', recordSchema)

