//Q29:
//Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.

// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!

const favoriteFruit = ["Mango", "Banana", "Orange"];

for (let i in favoriteFruit) {
    if (favoriteFruit[i] === "Mango") {
        console.log(` You really like ${favoriteFruit[i]}!`);
    }
    if (favoriteFruit[i] === "Banana") {
        console.log(` You really like ${favoriteFruit[i]}!`);
    }
    if (favoriteFruit[i] === "Orange") {
        console.log(` You really like ${favoriteFruit[i]}!`);
    }

}