const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

function comparePassword(userFromFile, userFromClient) {
  return new Promise((resolve, reject) => {
    return bcrypt.compare(userFromClient.password, userFromFile.password, (error, res) => {
      if (error) reject(JSON.stringify({ message: 'something bad happened, try again !' }))
      if (res) resolve({ isSame: res })
      reject({ message: 'unknown user' })
    })
  })
}

function verifyToken(token, secretOrKey) {
  jwt.verify(token, secretOrKey, function(error, decoded) {
    if(!error) {
      console.info(decoded)
    } else {
      console.error(error.message)
    }
  })
}

function generateToken(user, duration = '2h') {
  return jwt.sign(
    {
      email: user.email
    },
    'u8B>FU^Yn,ACnP2p=uFd1NgJsAbfvYkiCmfwGks0!9Wuc]Mn', // SECRET à mettre le plus long et compliqué possible
    { 
      expiresIn: duration 
    }
  )
}

module.exports = {
  comparePassword,
  generateToken,
  verifyToken
}