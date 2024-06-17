class Auth {
  constructor(bcrypt, jwt, secret, error = { message: 'Wrong email/or password' }) {
    this.bcrypt = bcrypt
    this.jwt = jwt
    this.error = error
    this.secret = secret
  }
  
  hash(plainPassword, saltRound = 10) {
    return this.bcrypt.hash(plainPassword, saltRound)
      .then(passwordHash => {
        return passwordHash
      })
      .catch(() => {
        throw new Error(this.auth.error.message)
      })
  }

  comparePassword(plain, hash) {
    return new Promise((resolve, reject) => {
      return this.bcrypt.compare(plain, hash, (error, res) => {
          if (res) resolve({ isOk: res })
          reject(this.error.message)
      })
    })
  }

  generateToken(user, duration = '2h') {
    return this.jwt.sign(
      {
        email: user.email
      },
      this.secret,
      { 
        expiresIn: duration 
      }
    )
  }
}
module.exports = Auth