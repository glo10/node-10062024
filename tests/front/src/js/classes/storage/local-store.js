import Store from '../base/store.js'

export default class LocalStore extends Store {
  constructor (storage) {
    super()
    this.storage = storage
  }

  save (key, value) {
    if (typeof value === 'object') {
      // empeche de stocker un objet vide
      if (!Object.keys(value).length) {
        return this
      }
      value = JSON.stringify(value)
    }
    this.storage.setItem(key, value)
    return this
  }

  get (key) {
    return this.storage.getItem(key)
  }

  remove (key) {
    this.storage.removeItem(key)
  }

  removeAll () {
    this.storage.clear()
  }
}
