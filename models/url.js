const mongoose = require('mongoose')
const Schema = mongoose.Schema

const urlSchema = new Schema({
  inputUrl: {
    type: String,
    require: true,
    unique: true
  },
  shortUrl: {
    type: String,
    require: true,
    unique: true
  },
  createDate: {
    type: Date,
    default: Date.now()
  }
})

module.exports = mongoose.model('Url', urlSchema)