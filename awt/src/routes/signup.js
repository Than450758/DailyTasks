const express =require('express');
const signupController =require("../controller/signup");
  

const router = express.Router();

router.post("/signup",signupController.createUser);
module.exports = router;