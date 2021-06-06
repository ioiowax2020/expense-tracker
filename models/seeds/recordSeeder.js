
const bcrypt = require('bcryptjs')
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}

const Record = require('../record')
const User = require('../user')
const db = require('../../config/mongoose')
const restaurant = require('./recordSeeder.json')

const SEED_USER = {
  name: 'root',
  email: 'root@example.com',
  password: '12345678'
}



db.once('open', () => {
  console.log('mongodb connected!')

  bcrypt
    .genSalt(10)
    .then(salt => bcrypt.hash(SEED_USER.password, salt))
    .then(hash => User.create({
      name: SEED_USER.name,
      email: SEED_USER.email,
      password: hash
    }))
    .then(user => {

      const userId = user._id
      const recordSeederJSON = restaurant.results

      console.log(recordSeederJSON)

      return Promise.all(Array.from(recordSeederJSON, (_, i) =>

        Record.create({
          name: recordSeederJSON[i].name,
          date: recordSeederJSON[i].date,
          category_name: recordSeederJSON[i].category_name,
          amount: recordSeederJSON[i].amount,
          merchant: recordSeederJSON[i].merchant,
          userId
        })

      ))

    })
    .then(() => {
      console.log('done.')
      process.exit()
    })

})