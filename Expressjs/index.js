// index.js
const express = require('express');

const userRouter=require('/Controller/control.js');
const app = express();
app.use(express.json());
const port=3000;
app.use('/user',userRouter);
app.listen(port, () =>{
  console.log(`sever is running on port {port}`);
})


