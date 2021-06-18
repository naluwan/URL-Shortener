const { request } = require('express')
const express = require('express')
const hbs = require('express-handlebars')
const app = express()

const PORT = 3000
require('./config/mongoose')

app.engine('hbs', hbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

app.use(express.static('public'))


app.get('/', (req, res) => {
  res.render('index')
})

app.listen(PORT, () => {
  console.log(`Express is running on http://localhost:${PORT}`)
})