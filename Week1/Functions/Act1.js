// ACTIVITY 1
//Create a ticket machine for a cinema.
//Write an if statement that checks the ages of cinema goers and display the ticket prices.

let child = 8;
let adult = 10.95;
let senior = 7.50;
let age = "71"

if (age < 18) {
    console.log(`The price for a child ticket is £${child}`)
}
else if (age > 60) {
    console.log(`The price for a senior is £${senior}0`)
}
else {
    console.log(`The price for an adult is £${adult}`)
}


// Take this code and turn it into arrow function syntax:
const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1;
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial (33));