// ACTIVITY 4

// create a variable called num
// If num is divisible by 3 log "fizz"
// If it's divisible by 5 log "buzz"
// If it is divisible by both 3  and 5 log "fizzbuzz"
// other wise log num to the console


let num = 15;

switch(true) {
    case num % 5 == 0 && num % 3 == 0:
        console.log("Fizz Buzz")
        break;
    case num % 3== 0:
        console.log("Fizz")
        break;
    case num % 5 == 0:
        console.log("Buzz")
        break;
    default:
        console.log("This number is not divisble by 3 or 5")
}