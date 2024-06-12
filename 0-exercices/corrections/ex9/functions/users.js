const fs = require('node:fs/promises')

function insert(user, filename) {
  if (! (user.email && user.password)) {
    throw new Error('unknow user')
  }
  return findAll(filename)
  .then(users => {
    if (findOne(user, users)) {
      return { message :'impossible to create a new account'}
    } else {
      users.push(user)
      return rewrite(users, filename)
    }
  })
  
}

function findOne(user, users) {
  if(users) {
    return users.find(u => u.email == user.email)
  }
  return null
}

async function findAll(filename) {
  const usersReader = fs.readFile(filename, { encoding: 'utf8' })
  return usersReader
    .then(data => JSON.parse(data))
    .then((users) => { // fin lecture fichier
      if(users.length === 0) {
        users = [] 
      }
      return users
    })
    .catch (err => {
      console.error(`Error parsing ${filename} ${err.message}`)
      throw new Error('Parse JSON file failed')
    })
}

function rewrite(users, filename) {
  return fs.writeFile(filename, JSON.stringify(users))
    .then(() => {
      return { message : 'success' }
    })
    .catch(error => {
      console.error('error ', error.message)
      return error
    })
}
module.exports = {
  rewrite,
  insert,
  findAll,
  findOne
}