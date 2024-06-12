const mongoose = require('mongoose')
const { id, password, cluster, name} = require('../config/parameters.js')

class DB {
  async connect() {
    return mongoose.connect(`mongodb+srv://${id}:${password}@${cluster}/${name}?retryWrites=true&w=majority`)
      .then(() => console.info('Connexion à MongoDB réussie !'))
      .catch(() => console.error('Connexion à MongoDB échouée !'))
  }
}

module.exports = DB