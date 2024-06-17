const fs = require("node:fs/promises");

class UserRepository {
  async insert(user, filename) {
    if (!(user.email && user.password)) {
      throw new Error("Email and password are required");
    }
    return this.findAll(filename)
    .then((users) => {
      if (this.findOne(user, users)) {
        return { message: "impossible to create a new account for the moment" };
      } else {
        users.push(user);
        return this.rewrite(users, filename);
      }
    })
    .catch(error => error)
  }

  findOne(user, users) {
    if (users) {
      return users.find((u) => u.email === user.email);
    }
    return null;
  }

  async findAll(filename) {
    const usersReader = fs.readFile(filename, { encoding: "utf8" });
    return usersReader
      .then((users) => JSON.parse(users))
      .catch((err) => {
        // idéalement ajouter une autre condition pour vérifier que le fichier existe et qu'il est vide 
        if(err.message.match(/unexpected.+JSON.+/i)) {
          return []
        }
        throw new Error(err.message);
      });
  }

  async rewrite(users, filename) {
    return fs
      .writeFile(filename, JSON.stringify(users))
      .then(() => { return { message: "success" } })
      .catch(error => error );
  }
}
module.exports = UserRepository;
