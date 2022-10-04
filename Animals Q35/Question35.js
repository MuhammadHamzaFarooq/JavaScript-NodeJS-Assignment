//Q35:
//Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!

const animals = ["cat", "dog", "donkey"];

// Print Animal Names;
for (let i in animals) {
    console.log(animals[i]);
}


// Modify Print Statement
for (let i in animals) {
    if (animals[i] === "cat" || animals === "dog") {
        console.log(`A ${animals[i]}  would make a great pet`)
    }
    if (animals[i] == "donkey") {
        console.log(`${animals[i]} is good animal`);
    }
}
console.log("cat,dog,donkey have 4 lags. this is a common characteristic")

