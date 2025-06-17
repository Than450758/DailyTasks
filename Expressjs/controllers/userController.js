// controllers/UserController.js
const User = require('../model/user');

exports.getUsers = (req, res) => {
  const users = User.getAllUsers();
  res.json(users);
};

exports.createUser = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: 'Name is required' });

  const newUser = User.createUser({ name });
  res.status(201).json(newUser);
};
exports.insertUser=(req,res) =>{
    const {name,age} = req.body;
    if (!name,age) return res.status(400).json({ error: 'Name is required' });

  const newUser = User.insertUser({ name,age });
  res.status(201).json(newUser);

}