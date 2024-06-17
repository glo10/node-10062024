class User {
  constructor(data, filename, repository, auth) {
    this.filename = filename;
    this.data = data;
    this.repository = repository;
    this.auth = auth;
  }

  login() {
    if (!(this.data.email && this.data.password)) {
      return { message: "email or password failed" };
    }

    const localUsers = this.repository
      .findAll(this.filename)
      .then((users) => {
        return this.repository.findOne(this.data, users);
      })
      .catch((error) => `error users route ${error.message}`);

    return localUsers
      .then((user) => {
        return this.auth.comparePassword(this.data.password, user.password);
      })
      .then((result) => {
        if (result.isOk === true) {
          const token = this.auth.generateToken(this.data);
          return { email: this.data.email, token };
        }
      })
      .catch(error => error);
  }

  subscribe() {
    if (this.data && this.data.email && this.data.password) {
      const hash = this.auth.hash(this.data.password);
      return hash
        .then((passwordHash) => {
          this.data.password = passwordHash;
          return this.data;
        })
        .catch(() => {
          throw new Error(this.auth.error.message);
        })
        .then((user) => {
          return this.repository.insert(user, this.filename);
        })
        .then((response) => {
          if (response.message === "success") {
            return response;
          }
          throw new Error(this.auth.error.message);
        })
        .catch(error => error);
    }
    throw new Error(this.auth.error.message);
  }
}
module.exports = User