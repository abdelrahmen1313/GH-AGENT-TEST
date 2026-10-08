console.log("Hello via Bun!");
const users = [
    {
        id: 1,
        name: "John Doe",
        email: "john.doe@example.com",
        age: 25
    },
    {
        id: 2,
        name: "Jane Doe",
        email: "jane.doe@example.com",
        age: 26
    }
];

function getUsers() {
    return users;
};
function getUserById(id: number) {
    return users.find(user => user.id === id);
};
function createUser(user: typeof users[number]) {
    const newUser = {
        id: users.length + 1,
        ...user
    };
    users.push(newUser);
    return newUser;
};
function updateUser(id: number, user: typeof users[number]) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return {
            ...users[index],
            ...user
        };
    } else {
        return null;
    }
};
function deleteUser(id: number) {
    users.find(user => user.id === id);
};
function main() {
    console.log(getUsers());
    console.log(getUserById(1));
    console.log(createUser({ name: "John Doe", email: "john.doe@example.com", age: 25 }));
    console.log(updateUser(1, { name: "John Doe", email: "john.doe@example.com", age: 25 }));
    console.log(deleteUser(1));
}