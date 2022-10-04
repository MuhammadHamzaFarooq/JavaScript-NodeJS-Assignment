//Q43:
//Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.


const magicians = ["maiva", "ziyad", "rafay", "hamza"];


const show_magicians = (arr) => {
    let newArray = []
    if (arr.lenght === 0 || arr === null || arr === null) {
        return "Magician Not Found"
    }
    else {
        newArray = arr; //cloing
        for (let i in newArray) {
            newArray[i] = `${newArray[i]} is the great magician`
        }
    }
    return newArray;
}


const make_great = (arr) => {
    if (arr.lenght === 0 || arr === null || arr === null) {
        return "Magician Not Found"
    }
    else {
        for (let i in arr) {
            arr[i] = `${arr[i]} is the great magician`
        }
    }
}


show_magicians(magicians);

make_great(magicians);

show_magicians(magicians);