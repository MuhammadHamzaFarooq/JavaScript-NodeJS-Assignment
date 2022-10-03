// Web3 Assignment 01

//Question 01
// Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”

let Name = "Hello Eric, would you like to learn some Python today?";
console.log(Name);

//Question 02
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

// ToLowerCase
Name.toLowerCase();
console.log("Name is converted into LowerCase ", Name);

// ToUpperCase
Name.toUpperCase();
console.log("Name is converted into LowerCase ", Name);

//Question 03
//Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:

console.log(`Albert Einstein once said, “A person who never made a mistake never tried anything new.” `);

//Question 04
//Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
let famous_person = "“A person who never made a mistake never tried anything new.”";
let message = "Albert Einstein";

console.log(`${famous_person} once said, ${message} `);

//Question 05
// Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

//Question 06
// Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results.

// You should create four lines that look like this:

//===================================================================================================================================
console.log(5 + 3)
//===================================================================================================================================
//===================================================================================================================================
console.log(12 - 5)
//===================================================================================================================================
//===================================================================================================================================
console.log(2 * 4)
//===================================================================================================================================
//===================================================================================================================================
console.log(64 / 8)
//===================================================================================================================================


//Question 07
// Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
let favoriteNumber = 10;
console.log(`My favorite number is ${favoriteNumber}`);

//Question 08
// Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.

let name = "Muhammad Hamza Farooq"  //In this line, I have decleare variable name is datatype is string. I have store my name in this valriable

let currentDate = new Date() //In this line, I have created new variable for currentDate, I can use Date object. this variable store current date. 

//Question 09
// Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.

let names = ["Mirza Ziyad Ahmed baig", "Sufyan Khan", "Waqas", "Mavia Ali", "Muhammad Hammad"];
console.log("My first friend name is ", names[0]);
console.log("My second friend name is ", names[1]);
console.log("My third friend name is ", names[2]);
console.log("My fourth friend name is ", names[3]);
console.log("My fifth friend name is ", names[4]);


//Question 10
//Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

console.log(`${names[0]} is my best friend`);
console.log(`${names[1]} is my best friend`);
console.log(`${names[2]} is my best friend`);
console.log(`${names[3]} is my best friend`);
console.log(`${names[4]} is my best friend`);

//Question 11
// Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”

let favoriteTransport = ["Honda Car", "Civic Car", "Honda Motorcycle", "Super Power Motercycle"];
for (let i = 0; i <= favoriteTransport.length; i++) {
    console.log(`I would like to own a ${favoriteTransport[i]}`);
}

//Question 12
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.

let GuestList = ["Muhammad Hamza Farooq", "Mavia Ali", "Ziyad Baig", "Salamn", "Muhammd Hamza Farooq"];
for (let i = 0; i <= GuestList.length; i++) {
    console.log(`${GuestList[i]} inviting them to dinner`);
}

//Question 13
// Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
for (let i = 0; i <= GuestList.length; i++) {
    if (i <= 3) {
        console.log(`${GuestList[i]} inviting them to dinner`);
    }
    if (i > 3) {
        console.log(`${GuestList[i]} especially inviting them to dinner`);
    }
}

//Question 14
// Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.


//Qusetion 15
// Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

// • Print a message to each of the two people still on your list, letting them know they’re still invited.

// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.


//Quetion 16
// Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.

// • Print your array in its original order.

// • Print your array in alphabetical order without modifying the actual list.

// • Show that your array is still in its original order by printing it.

// • Print your array in reverse alphabetical order without changing the order of the original list.

// • Show that your array is still in its original order by printing it again.

// • Reverse the order of your list. Print the array to show that its order has changed.

// • Reverse the order of your list again. Print the list to show it’s back to its original order.

// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.

// • Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.

let places = ["London", "france", "Dubai", "Canada", "Qatar", "Australia", "Newzeland"];

for (i in places) {
    console.log(places[i]);
}


for (i in places.sort()) {
    console.log(places[i]);
}

for (i in places.reverse()) {
    console.log(places[i]);
}

for (i in places) {
    console.log(places[i]);
}

for (i in places.reverse()) {
    console.log(places[i]);
}

for (i in places.sort()) {
    console.log(places[i]);
}


//Question 17
// Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner. 



//Question18
//Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.

const countriesList = ["India", "Pakistan", "Srilanka", "Iran", "Australia"];
const mountainsList = ["k2", "Mount Everest", "Nanga Parbat", "Kangchenjunga", "Denali", "Mount Kilimanjaro", "Lhotse"];
const Language = ["English", "Urdu", "Hindhi", "Garman", "French"];
const cities = ["Karachi", "Lahore", "Multan", "Islamabad"];

//Question 19 
// They think of something you could store in a JavaScript Object. Write a program that creates Objects containing these items.

let user = {
    name: "Muhammad Hamza Farooq",
    email: "mhamza2021999@gamil.com",
    city: "karachi",
    phone_number: 03240243207,
    gender: "male",
    designation: "Backend And AI Chatbot Developer"
}

//Question 20
// Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.

let dummyArray = ["Karachi", "Lahore", "Islamabad"];
console.log("Error => ".dummyArray[3]);


//Question 21
// Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

// let car = 'subaru';

// console.log("Is car == 'subaru'? I predict True.")

// console.log(car == 'subaru')

// • Look closely at your results, and make sure you understand why each line evaluates to True or False.

// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.


// let car = "subaru";
// if(car === 'subaru'){
//     console.log("Is car == 'subaru'? I predict True.")
// }


//Question 22
