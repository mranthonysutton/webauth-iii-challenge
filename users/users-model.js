const db = require('../data/db-config');

module.exports = {
  allUsers,
  addUser,
  findUserBy,
};

function allUsers() {
  return db('users').select('username', 'department');
}

function addUser(userData) {
  return db('users')
    .insert(userData, 'id')
    .then(ids => {
      const [id] = ids;

      return returnUserAfterLogin({id});
    });
}

function findUserBy(filter) {
  return db('users')
    .where(filter)
    .first();
}

function returnUserAfterLogin(filter) {
  return db('users')
    .select('id', 'username', 'department')
    .where(filter)
    .first();
}
