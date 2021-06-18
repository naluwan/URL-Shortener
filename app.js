const { request } = require('express')
const express = require('express')
const bodyParser = require('body-parser')
const hbs = require('express-handlebars')
const routes = require('./routes')
const app = express()

const PORT = 3000
require('./config/mongoose')

app.engine('hbs', hbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes)

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})