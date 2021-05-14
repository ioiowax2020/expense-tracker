const mongoose = require('mongoose')
const Schema = mongoose.Schema

const recordSchema = new Schema({

  name: {
    type: String,
    required: true
  },
  date: String,
  amount: Number,
  totalAmount: Number,
})

module.exports = mongoose.model('Record', recordSchema)

