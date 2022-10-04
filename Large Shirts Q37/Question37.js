//Q37:
// Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love JavaScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.

const make_shirt = (size, massage) => {
    return `The size of T-shirt is ${size}. ${massage}`
}

console.log(make_shirt("large", "Techno"))