const express = require('express')
const session = require('express-session')
const app = express()
const exphbs = require('express-handlebars')
const methodOverride = require('method-override')
const hbshelpers = require('handlebars-helpers')
const multihelpers = hbshelpers()

const PORT = process.env.PORT || 3000

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
  secret: 'ThisIsMySecretOnexpenseTracker',
  resave: false,
  saveUninitialized: true
}))

app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.use(methodOverride('_method'))

usePassport(app)

app.use((req, res, next) => {

  res.locals.isAuthenticated = req.isAuthenticated()
  res.locals.user = req.user
  console.log(res.locals)
  next()
})

app.use(routes)
app.listen(PORT, () => { console.log(`Now is listening on http://localhost:${PORT}`) })