// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.get('/', UserController.getUsers);
router.post('/', UserController.createUser);
router.put('/',UserController.insertUser)
module.exports = router;
