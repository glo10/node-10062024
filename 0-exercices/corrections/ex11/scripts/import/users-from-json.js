const UserRepository = require('../../repositories/user.js')
const UserModel = require('../../models/schemas/user.js')
const UserImport = require('../../classes/user-import.js')
const DB = require('../../classes/db.js')
const path = require('path')
const fs = require('node:fs/promises')
const jsonFile = path.resolve(__dirname, '..', '..', 'models', 'data', 'users.json')
const reader = fs.readFile(jsonFile, { encoding: 'utf8' })
const userRepo = new UserRepository(reader, UserModel, new DB())


const importUser = new UserImport(userRepo)
importUser.all()
