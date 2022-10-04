//Q41:
// Magicians: Make a array of magician’s names. Pass the array to a function called show_magicians(), which prints the name of each magician in the array.


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

show_magicians(magicians);