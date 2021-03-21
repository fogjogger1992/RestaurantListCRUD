const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const exphbs = require('express-handlebars')
const restaurantList = require('./restaurant.json')
const port = 3000

// connection
mongoose.connect('mongodb://localhost/restaurant_list', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongodb error')
})

db.once('open', () => {
  console.log('mongodb connected')
})

// express template engine
// handlebars
app.engine('handlebars', exphbs({ drfaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// setting static files
app.use(express.static('public'))

// setting body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// routes setting
app.get('/', (req, res) => {
  res.render('index', { restaurants: restaurantList.results })
})

app.get('/restaurants/:restaurant_id', (req, res) => {
  const restaurant = restaurantList.results.find(restaurant => restaurant.id.toString() === req.params.restaurant_id)

  res.render('show', { restaurant: restaurant })
})

// querystring
app.get('/search', (req, res) => {
  const restaurants = restaurantList.results.filter((restaurant) => {
    return restaurant.name.toLowerCase().includes(req.query.keyword.toLowerCase())
  })
  res.render('index', { restaurants: restaurants, keyword: req.query.keyword })
})

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})