const { validationResult } = require('express-validator')

const checkUrl = (req, res, next) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(422).render('index', { errorMessages: errors.array() })
  }
  next()
}

module.exports = checkUrl