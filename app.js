const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const PORT = 3000
const hbshelpers = require('handlebars-helpers')
const multihelpers = hbshelpers()



const routes = require('./routes')

require('./config/mongoose')





app.engine('hbs',
  exphbs({
    helpers: multihelpers, //handlebars help
    efaultlayout: 'main',
    extname: '.hbs'
  }))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOverride('_method'))
app.use(routes)




app.listen(PORT, () => { console.log(`Now is listening on http://localhost:${PORT}`) })