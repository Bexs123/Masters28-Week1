// ACTIVITY 6


// create a variable called time, placeOfWork, townOfHome.
// create an if statement that logs to the console where someone is at times of day
// Example If time is 7am Im at home, at 8 Im communiting to work at 9 im at work

let time = 7;
let placeOfWork = "Rochdale"
let townOfHome = "Oldham"

if(time == 8) {
    console.log(`I'm communiting to work ${placeOfWork}`);
} else if (time == 7) {
    console.log(`I'm at home in ${townOfHome}`);
} else if (time == 9) {
    console.log(`I'm at work in ${placeOfWork}`)
} else {
    console.log(`If it is between 9 and 5 I'm at work in ${placeOfWork}. Otherwise, I'm at home in ${townOfHome}`);
}