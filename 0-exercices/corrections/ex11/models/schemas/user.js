const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
  email : { type: String, required: true, unique: true},
  password: { type: String },
  name: String,
  age: Number
})

module.exports = mongoose.model('User', userSchema)