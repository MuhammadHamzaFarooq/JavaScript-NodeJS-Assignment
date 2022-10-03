//Q16:
//More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

// • Add one new guest to the beginning of your array.

// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.


const guestList = ["Mavia", "Ali", "Rafay", "Irfan", "Saqib"];

for (let i in guestList) {
    console.log(`${guestList[i]} is inviting to them dinner`);
}

console.log("I am informing all people that found a bigger dinner table");


// Add one new guest to the beginning of your array.
guestList.unshift("Talha");


//Add new guest in middle of the array
guestList.splice(3, 0, "Abdullah");


//Add Last guest in the end of the array
guestList.push("Usman bhai");



//Send New Invitation for all Guests

for (let i in guestList) {
    console.log(`${guestList[i]} is inviting to them dinner `)
}


