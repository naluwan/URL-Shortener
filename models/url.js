const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  url: {
    type: String,
    require: true
  },
  shortUrl: {
    type: String,
    require: true
  },
  createDate: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Url', urlSchema)