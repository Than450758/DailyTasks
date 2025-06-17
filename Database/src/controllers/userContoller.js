const UserModel = require('../models/userModel');


// Get all users
const getUsers = async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.json({ data: users });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch users" });
  }
};

// Create new user
const createUser = async (req, res) => {
  try {
    const { name, username, password } = req.body;
    const newUser = await UserModel.create({ name, username, password });
    console.log(newUser);
    res.status(201).json({ data: newUser });
  } catch (error) {
    res.status(500).json({ error: "Failed to create user" });
  }
};
module.exports = {
    createUser,
    getUsers
}