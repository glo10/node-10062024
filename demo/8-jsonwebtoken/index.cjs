const jwt = require('jsonwebtoken')

const user = {
  id: 1,
  email : 'john@doe.com',
  password: 'admin'
}

const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJqb2huQGRvZS5jb20iLCJpYXQiOjE3MTgxNzc4NjYsImV4cCI6MTcxODE3Nzg2N30.NV4MQB-0T7CSt61chEHRZXKTNURxUxkbNagWWhr8u5g'

delete user.password

const SECRET = '1234567890' // un secret plus complexe que ça
// Générer un token
jwt.sign(user, SECRET, { expiresIn: '1s'}, (error, token) => {
  if(!error) console.log('token', token)
  else console.error(error)
})

// Vérifier un token
jwt.verify(token, SECRET, (error, payload) => {
  if(error) {
    console.error('error ', error)
  } else {
    console.info('payload', payload)
  }
})