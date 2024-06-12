import Store from '../base/store.js'

export default class CookieStore extends Store {
  save (key, value, timeout = (30 * 24 * 60 * 60 * 1000)) { // save for 30 days default
    const current = new Date()
    current.setTime(current.getTime() + timeout)
    const expires = current.toUTCString()
    document.cookie = `${key}=${value}; expires=${expires};SameSite=Lax; secure;path=/`
    return this
  }

  get (key) {
    return document.cookie
      .split('; ')
      .find((item) => item.startsWith(`${key}=`))?.split('=')[1]
  }

  remove (key) {
    document.cookie = `${key}=;`
    return this
  }
}
