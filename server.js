require('dotenv').config()

const express = require('express')
const app = express() // we are calling express here and assigning it to app

const mongoose = require('mongoose')

// Configs
const PORT = process.env.PORT || 3000

// Controllers
const vlogController = require('./controllers/vlogController')
const userController = require('./controllers/user/userController')
const Vlog = require('./models/vlogs')

//connect to database
const db = require('./db')
db.once('open', () => {
  console.log('connected to mongo')
})

//Middleware
const setupMiddleware = require('./middleware/setupMiddleware')
setupMiddleware(app)

/**
 * View engine STAYS
 */
app.set('view engine', 'jsx')
app.engine('jsx', require('jsx-view-engine').createEngine())

//CONTROLLERS
app.use('/vlogs', vlogController)
app.use('/user', userController)

app.get('/search', (req, res) => {
  const { query } = req.query
  Vlog.find({}, (err, docs) => {
    const results = []
    if (err) {
      console.error(err)
    } else {
      for (let i = 0; i < docs.length; i++) {
        if (docs[i].body['0'].toLowerCase().includes(query.toLowerCase())) {
          results.push(docs[i])
        }
      }
    }
    res.render('vlogs/Searchindex', { vlogs: results })
  })
})

// We are just going to redirect to /vlogs if the user goes to our base route
app.get('/', (req, res) => {
  res.redirect('/vlogs/')
})

//Listen on the port
app.listen(PORT, () => {
  console.log(`Server listening @ http://localhost:${PORT}/`)
})

// //include the method-override package place this where you instructor places it
// const methodOverride = require('method-override')

// // DB setup
// mongoose.connect(process.env.MONGO_URI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })

// mongoose.connection.once('open', () => {
//   console.log('connected to mongo')
// })

// /**
//  * Middleware
//  */

// app.use(express.static('public')) //tells express to try to match requests with files in the directory called 'public'

// //...
// //after app has been defined
// //use methodOverride.  We'll be adding a query parameter to our delete form named _method
// app.use(methodOverride('_method'))

// // Middleware example
// function logger(req, res, next) {
//   console.info(req.path)
//   next()
// }

// app.use(logger)

// // Allow express to use urlencoded
// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// //use methodOverride.  We'll be adding a query parameter to our delete form named _method
// app.use(methodOverride('_method'))

// // Allow express to use urlencoded
// app.use(express.urlencoded({ extended: true }))
// // Allowing express to recieve json in the body
// app.use(express.json())
