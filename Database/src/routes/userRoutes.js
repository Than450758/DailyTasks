const express = require('express');
const userRouter = express.Router();
const {getUsers,createUser} = require('../controllers/userContoller');

userRouter.get('/getUser',getUsers);
userRouter.post('/createUser', createUser);

module.exports= userRouter;
