//Q24:
//More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array

console.log("5" === 5)//false
console.log(5 === 5 || 4 == '4')//true
console.log(5 === 5 && 4 == '4')//false
console.log(5 !== 5 && 3 == 3)//false
console.log(5 !== 5 || 3 == 3)//true
console.log(3 * 4 === 2 * 7 && 3 * 4 === 12)//false
console.log(3 * 4 === 2 * 7 || 3 * 4 === 12)//true
console.log(true !== false)//true
console.log(true === false)//false
console.log(!ture)//false
console.log(!false)//true
let arr = [1, 30, 49];

console.log(arr.length < 0)//false  // is not arry
console.log(arr.length >= 0)//ture

