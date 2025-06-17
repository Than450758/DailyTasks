const express = require ("express");
const cors = require("cors");
const userController =require("../controller/user");
const authMiddleware = require("../utils/authMiddleware");

const router =express.Router();

router.use(cors());

router.get("/users", authMiddleware.authenticateToken,userController.getUsers);
router.post("/users", authMiddleware.authenticateToken,userController.createUser);

module.exports =router;
