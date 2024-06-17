class UserRepository {
  constructor(reader, model, db) {
    this.reader = reader
    this.model = model
    this.db = db
  }

  async findAllLocalAndRemote() {
    return Promise.all([this.findAll(), this.model.find(), this.db.connect()])
      .then(results => {
        // console.log('results', results)
        return { local : results[0], remote: results[1] }
      })
      .catch(error => console.error('error insertMany', error.message))
  }
  
  findOne(user, users) {
    if(users) {
      return users.find(u => u.email == user.email)
    }
    return null
  }

  list() {
    this.db.find((error, users) => {
      if(!error) return users
      console.error('error list users', error.message)
      throw new Error('can\'t get users')
    })
  }
  
  async findAll() {
    return this.reader
      .then(data => JSON.parse(data))
      .then((users) => {
        if(users.length === 0) {
          users = [] 
        }
        return users
      })
      .catch (err => {
        console.error(`Error parsing ${this.path} ${err.message}`)
        throw new Error('Parse JSON file failed')
      })
  }  
}
module.exports = UserRepository