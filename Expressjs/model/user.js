const { insertUser } = require("../controllers/userController");

// models/User.js
let users = [];

module.exports = {
  getAllUsers: () => users,
  createUser: (user) => {
    users.push(user);
    return user;},

    insertUserUser: (user) => {
    users.put(user);
    return user;

  }
};
