//Q14:
//Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.


const guestList = ["Mavia", "Sufyan", "Saqib", "Ziyad", "Hammad"];

//Invite To dinner
for (let i in guestList) {
    console.log(`${guestList[i]} is inviting them to dinner`);
}