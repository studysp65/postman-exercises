
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

module.exports = { addUser, getAllUsers };

