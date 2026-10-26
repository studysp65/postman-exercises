const express = require("express");

const router = express.Router();

const {
    addUser,
    getAllUsers,
    getUserById
} = require("../controllers/userController");

router.post("/", addUser);

router.get("/", getAllUsers);

router.get("/:id", getUserById);

module.exports = router;