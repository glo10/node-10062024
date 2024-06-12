const UserModel = require('../models/schemas/user.js')
class UserImport {
  constructor(repository) {
    this.repository = repository
  }

  all() {
    this.repository
      .findAllLocalAndRemote()
        .then(results => {
          const { local, remote } = results
          local.forEach(localUser => {
            if(!remote.find((remoteUser) => localUser.email === remoteUser.email)) {
              delete localUser?.password
              const newRemoteUser = new UserModel({...localUser})
              newRemoteUser
                .save()
                .then(() => console.info(`${localUser.email} a été ajoutée dans la base de données`))
            } else {
              console.log(`${localUser.email} existe déjà dans la base de données`)
            }
          })
        })
        .catch(error => console.error('error importUser', error.message))
  }
}

module.exports = UserImport