//Q31:
// No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • If the list is empty, print the message We need to find some users!

// • Remove all of the usernames from your array, and make sure the correct message is printed.

const users = ["Admin", "Ali", "Sufyan", "Irfan", "Ziyad"];

if (users.length === 0) {
    return console.log(" We need to find some users")
}

for (let i in users) {
    if (users[i] === "Admin") {
        console.log(`Hello ${users[i]}, would you like to see a status report?`)
    }
    else {
        console.log(`Hello ${users[i]}, thank you for logging in again`)
    }
}

// remove all users 
for (let i in users) {
    users.pop()
}

