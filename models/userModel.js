
const users = [];

let nextId = 1;

function createUser(name, email) {
    const user = {
        id: nextId++,
        name: name,
        email: email
    };

    users.push(user);

    return user;
}

module.exports = { users, createUser };
