// index.js
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Fake user "database"
let users = [
  { id: 1, name: 'Alice' },
  { id: 2, name: 'Bob' }
];

// GET all users
app.get('/users', (req, res) => {
  res.json(users);
});

// POST new user
app.post('/users', (req, res) => {
  const { name } = req.body;
  const newUser = {
    id: users.length + 1,
    name
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

// PUT update user
app.put('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  const { name } = req.body;

  const user = users.find(u => u.id === userId);
  if (!user) return res.status(404).send('User not found');

  user.name = name || user.name;
  res.json(user);
});

// DELETE user
app.delete('/users/:id', (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(u => u.id !== userId);
  res.send(`User ${userId} deleted`);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
