
const Auth = require('../classes/auth-class')
const User = require('../classes/user-class')
const UserRepository = require('../repositories/user-repository')
const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
function signIn (req, res) {
  const user = makeUser(req.body)
  user.login()
    .then(result => {
      if(result.token) res.status(200).json(result)
      else throw new Error(result)
    })
    .catch(error => {
      res.status(500).json(error.message)
    })
}

function signUp(req, res) {
  const user = makeUser(req.body)
  user.subscribe()
    .then(result => {
      if(result.message === 'success') res.status(201).json(result.message)
      else throw new Error(result.message)
    })
    .catch(error => {
      res.status(500).json(error.message)
    })
}

function makeUser(data) {
  if(!data) {
    throw new Error('email and password required')
  }
  const userRepository = new UserRepository()
  const auth = new Auth(bcrypt, jwt, 'u8B>FU^Yn,ACnP2p=uFd1NgJsAbfvYkiCmfwGks0!9Wuc]Mn')
  const filename = path.resolve(__dirname, '..', 'data', 'users.json')
  return new User(data, filename, userRepository, auth)
}

module.exports = {
  signIn,
  signUp
}