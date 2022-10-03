//Q3:
//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

//Custom Function
function capitalize(s) {
    // returns the first letter capitalized + the string from index 1 and out aka. the rest of the string
    return s[0].toUpperCase() + s.substr(1);
}

const Name = "muhammad hamza farooq";
console.log("Uppercase => ", Name.toLowerCase());
console.log("Lowercase =>", Name.toLowerCase());
console.log("TitleCase => ", capitalize(Name))
