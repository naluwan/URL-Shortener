const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const checkUrl = require('../../modules/checkUrl')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', [check('inputUrl').isURL().withMessage('網址格式有誤，請輸入正確網址!!')], checkUrl, (req, res) => {
  const { inputUrl } = req.body

})

module.exports = router