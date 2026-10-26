
const { users, createUser } = require("../models/userModel");

function addUser(req, res) {
    const { name, email } = req.body || {};

    if (
        typeof name !== "string" ||
        typeof email !== "string" ||
        name.trim() === "" ||
        email.trim() === ""
    ) {
        return res.status(400).json({
            message: "Valid name and email are required"
        });
    }

    const user = createUser(
        name.trim(),
        email.trim()
    );

    return res.status(201).json(user);
}



function getAllUsers(req, res) {
    res.status(200).json(users);
}


function getUserById(req, res) {

    const id = Number(req.params.id);

    // Check if the ID is valid
    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            message: "Invalid user ID"
        });
    }

    // Search for the user using a for loop
    for (let i = 0; i < users.length; i++) {

        if (users[i].id === id) {
            return res.status(200).json(users[i]);
        }

    }

    // User not found
    return res.status(404).json({
        message: "User not found"
    });
}

module.exports = { addUser, getAllUsers, getUserById };
