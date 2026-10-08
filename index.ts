type t_user = {
    id: number;
    name: string;
    email: string;
    age: number;
}
const users: t_user[] = [
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
function createUser(user: t_user) {
    const newUser = {
        ...user,
        id: users.length + 1
    };
    users.push(newUser);
    return newUser as t_user;
};
function updateUser(id: number, user: t_user) {
    const index = users.findIndex(user => user.id === id);
    if (index !== -1) {
        return {
            ...users[index],
            ...user
        } as t_user;
    } else {
        return null as t_user | null;
    }
};
function deleteUser(id: number) {
    users.find(user => user.id === id);
    return null as t_user | null;
};
function main() {
    console.log(getUsers());
    console.log(getUserById(1));
    console.log(createUser({ id: 3, name: "John Doe", email: "john.doe@example.com", age: 25 }));
    console.log(updateUser(1, { id: 1, name: "John Doe", email: "john.doe@example.com", age: 25 }));
    console.log(deleteUser(1));
};
main();