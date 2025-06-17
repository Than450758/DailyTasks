const express=require('express'); 
const { createUser, updateUser , deleteUser, readUser}=require('/Condtroller,control.js');
const { use } = require('react');
const userRouter=express.Router();
userRouter.post('/',createUser);
userRouter.put('/:id',updateUser);
userRouter.delete('/:id',deleteUser);
userRouter.get('/',readUser);
module.exports=userRouter







