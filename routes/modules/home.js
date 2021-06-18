const express = require('express')
const router = express.Router()
const { check } = require('express-validator')
const checkUrl = require('../../modules/checkUrl')
const Url = require('../../models/url')
const randomStr = require('../../modules/randomString')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', [check('inputUrl').isURL().withMessage('網址格式有誤，請輸入正確網址!!')], checkUrl, (req, res) => {
  const { inputUrl } = req.body
  const protocol = req.protocol
  const host = req.headers.host
  const url = req.originalUrl

  Url.find({ inputUrl })
    .then(result => {
      // 資料庫有資料就直接抓資料回來輸出
      const shortener = `${protocol}://${host}${url}${result[0].shortUrl}`
      res.render('result', { shortener })
    }).catch(() => {
      // 資料庫沒有資料時，搜尋全部資料，檢查縮網址是否重複後新建
      Url.find()
        .lean()
        .then(results => {
          const shortUrl = randomStr(...results)
          Url.create({
            inputUrl,
            shortUrl
          })
            .then(() => {
              const shortener = `${protocol}://${host}${url}${shortUrl}`
              res.render('result', { shortener })
            }).catch(err => console.log(err))
        })
    }).catch(err => console.log(err))
})

router.get('/:shortUrl', (req, res) => {
  const shortUrl = req.params.shortUrl
  Url.find({ shortUrl })
    .then(result => {
      res.redirect(`${result[0].inputUrl}`)
    }).catch(err => {
      res.render('notFound', { notFound: '很抱歉!找不到您所需要的網址!!' })
    })
})

module.exports = router