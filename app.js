const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const methodOverride = require('method-override')
const exphbs = require('express-handlebars')
const routes = require('./routes')
const port = 3000

// mongoose
mongoose.connect('mongodb://localhost/restaurant_list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error')
})
db.once('open', () => {
  console.log('mongodb connected')
})

// handlebars
app.engine('handlebars', exphbs({ drfaultLayout: 'main' }))
app.set('view engine', 'handlebars')
// static files
app.use(express.static('public'))
// body-parser
app.use(bodyParser.urlencoded({ extended: true }))
// method-override
app.use(methodOverride('_method'))
// routes
app.use(routes)

// start and listen on the Express server
app.listen(port, () => {
  console.log(`Express is listening on localhost:${port}`)
})