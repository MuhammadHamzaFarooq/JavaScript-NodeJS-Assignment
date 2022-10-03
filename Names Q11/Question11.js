//Q:11
//Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

const friendsList = ["Mirza Ziayd Ahmed Baig", "Mavia Ali", "Salman Zakir", "Muhamamd Hammmad"];

for (let i in friendsList) {
    console.log(`${friendsList[i]} is my best friend`);
}
