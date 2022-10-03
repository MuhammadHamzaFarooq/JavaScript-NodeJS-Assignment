//Q33:
//Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.


const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i in numbers) {
    if (numbers[i] === 1) {
        console.log("first => 1st");
    }
    else if (numbers[i] === 2) {
        console.log("second => 2st");
    }
    else if (numbers[i] === 3) {
        console.log("thrid => 3rd");
    }
    else if (numbers[i] === 4) {
        console.log("four => 4th");
    }
    else if (numbers[i] === 5) {
        console.log("five => 5th");
    }
    else if (numbers[i] === 6) {
        console.log("six => 6th");
    }
    else if (numbers[i] === 7) {
        console.log("seven => 8th");
    }
    else if (numbers[i] === 8) {
        console.log("eight => 8th");
    }
    else if (numbers[i] === 9) {
        console.log("nine => 9th");
    }
}