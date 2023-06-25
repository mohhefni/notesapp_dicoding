const saltRounds = 10;
const { nanoid } = require('nanoid');
const bcrypt = require('bcrypt');
const InvariantError = require('../../exceptions/InvariantError');

class userService {
  constructor() {
    this._users = [];
  }

  addUser({ name, email, passwordUser }) {
    const id = nanoid(16);
    const createdAt = new Date().toISOString();
    const updatedAt = createdAt;
    const password = bcrypt.hashSync(`${passwordUser}`, saltRounds);

    const newUser = {
      name,
      email,
      password,
      id,
      createdAt,
      updatedAt,
    };

    console.log(newUser);

    this._users.push(newUser);

    const isSuccess = this._users.filter((user) => user.id === id).length > 0;

    if (!isSuccess) throw new InvariantError('Catatan gagal ditambahkan');

    return id;
  }

  getUsers() {
    return this._users;
  }
}

module.exports = userService;
