const express = require('express');
const {  createUser, getUser,updateUser,deleteUser, patchUser } = require('../controllers/sample.controller');
const userRouter = express.Router();

// Define routes
userRouter.post('/', createUser);
userRouter.get('/', getUser);
userRouter.put('/:id',updateUser);
userRouter.delete('/:id',deleteUser);
userRouter.patch('/:id',patchUser);

module.exports = userRouter
