const https = require('node:https')
const UserRepository = require('../../repositories/user.js')
const UserImport = require('../../classes/user-import.js')
const DB = require('../../classes/db.js')
const UserModel = require('./../../models/schemas/user.js')
const reader = new Promise((resolve, reject) => {
  https.get('https://jsonplaceholder.typicode.com/users', (response) => {
    let data = ''
    response.on('data', (chunk) => {
        data += chunk
      })
    response.on('end', () => {
        try {
          resolve(data)
        } catch{
          reject(new Error ('JSON parse error'))
        }
      })
    response.on('error', (error) => {
      throw new Error (`error from http client : ${error.message}`)
    })
  }).end()
})
const userRepository = new UserRepository(reader, UserModel, new DB())

const importUser = new UserImport(userRepository)
importUser.all()
