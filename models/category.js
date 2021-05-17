const mongoose = require('mongoose')
const Schema = mongoose.Schema

const categorySchema = new Schema({

  category_name: String,
  category: String,
  icon: String,
})

module.exports = mongoose.model('Category', categorySchema)