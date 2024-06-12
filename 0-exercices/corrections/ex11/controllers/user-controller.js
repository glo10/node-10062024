const DB = require('../classes/db.js')
const UserModel = require('../models/schemas/user.js')

exports.add = function (req, res) {
  const errorMessage = 'impossible to create new user for the moment'
  new DB().connect()
    .then(() => {
    const user = new UserModel({...req.body})
    user.save()
      .then(doc => {
        if(doc) {
          res.status(201)
          res.json({ message: "success" })
          return
        }
        throw new Error('Impossible to create new user')
      })
      .catch(error => {
        console.error('error save user', error.message)
        res.status(404).send(errorMessage)
      })
  })
}