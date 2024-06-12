const mongoose = require('mongoose')

const newsSchema = mongoose.Schema({
  title: { type : String, required: true},
  pubDate: { type: Date },
  description:{ type: String, required: true},
  link:{ type: String, unique: true },
  enclosure: String
})

module.exports = mongoose.model('News', newsSchema)