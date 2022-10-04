//Q42:
//Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.


const magicians = ["maiva", "ziyad", "rafay", "hamza"];


const show_magicians = (arr) => {
    if (arr.lenght === 0 || arr === null || arr === null) {
        return "Magician Not Found"
    }
    else {
        for (let i in arr) {
            console.log(`${i}. ${arr[i]}`)
        }
    }
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

// modify
make_great(magicians);

show_magicians(magicians);