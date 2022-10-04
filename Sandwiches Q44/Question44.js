//Q44:
//Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.

const sandwiches = (...items) => {
    for (let i in items) {
        console.log(`${items[i]} is very yammy sandwiche`);
    }
}

const sandwichesList = ["roast beef", "cheddar cheese", "lettuce", "peanut butter"];


sandwiches(sandwichesList);