const express = require('express')
const session = require('express-session')
const app = express()
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const flash = require('connect-flash')
const hbshelpers = require('handlebars-helpers')
const multihelpers = hbshelpers()

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const PORT = process.env.PORT

const routes = require('./routes')

const usePassport = require('./config/passport')

require('./config/mongoose')

app.engine('hbs',
  exphbs({
    helpers: multihelpers, //handlebars help
    efaultlayout: 'main',
    extname: '.hbs'
  }))
app.set('view engine', 'hbs')
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOverride('_method'))

usePassport(app)
app.use(flash())
app.use((req, res, next) => {

  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  res.locals.success_msg = req.flash('success_msg')
  res.locals.warning_msg = req.flash('warning_msg')

  console.log(res.locals)

  next()
})

app.use(routes)
app.listen(PORT, () => { console.log(`Now is listening on http://localhost:${PORT}`) })