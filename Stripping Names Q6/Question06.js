//Q6
//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.

const person_name = `Muhammad Hamza Farooq`;
let personArr = person_name.split();
console.log("person name => ", person_name);

for (let i = 0; i < person_name.length + 1; i++) {
    if (i == 0) {
        personArr.push(" ");
    }
    if (person_name.lastIndexOf()) {
        personArr.push(" ");
    }
}

