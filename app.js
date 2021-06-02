const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const hbshelpers = require('handlebars-helpers')
const multihelpers = hbshelpers()

const PORT = process.env.PORT || 3000

const routes = require('./routes')

require('./config/mongoose')


app.engine('hbs',
  exphbs({
    helpers: multihelpers, //handlebars help
    efaultlayout: 'main',
    extname: '.hbs'
  }))
app.set('view engine', 'hbs')

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(routes)




app.listen(PORT, () => { console.log(`Now is listening on http://localhost:${PORT}`) })