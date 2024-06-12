var express = require('express');
var router = express.Router();
const bcrypt = require('bcrypt')
const userFn = require('../functions/users')
const authFn = require('../functions/auth')
const path = require('path')

router.post('/sign-up', function(req, res) {
  const user = req.body
  if(user && user.email && user.password) {
    const hash = bcrypt.hash(user.password, 10)
    hash
      .then(passwordHash => {
        user.password = passwordHash
        return user
      })
      .catch(error => {
        res.status(404)
        console.error('error passord hash', error.message)
        throw new Error(`Problem with password`)
      })
      .then(user => {
        return userFn.insert(user, path.join(__dirname, '..', 'data', 'users.json'))
      })
      .then((response) => {
        console.log('response', response)
        if(response.message === 'success') {
          res.status(201)
        }
        res.json(response)
      })
      .catch(error => {
        res.status(404)
        console.error('error global hash', error.message)
        throw new Error(`Problem with password`)
      })
  }
})

router.post('/', function(req, res) {
  const user = req.body
  const usersFilename = path.join(__dirname, '..', 'data', 'users.json')
  if(!(user && user.email && user.password)) {
    res.status(404).json({ message: "email or password failed"})
  }
  
  const localUsers = userFn.findAll(usersFilename)
  .then(users => {
    return userFn.findOne(user, users)
  })
  .catch(error => `error users route ${error.message}`)

  localUsers
    .then(useFromBack => {
      return authFn.comparePassword(useFromBack, user)
    })
    .then(result => {
      console.log('result', result)
      if(result.isSame === true) {
        const token = authFn.generateToken(user)
        console.log('token', token)
        res.json({ email : user.email, token })
      }
    })
    .catch(error => console.error('error here', error.message))
})

module.exports = router;
