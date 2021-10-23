// Activity 3

// Create a variable called password. Check how many letters are in the password.
// If there are less than 8, log to console that the password is to short.
// Otherwise log the password to the console.

const password = "HelloWorld1234";
let len = password.length;
if(len < 8 ) {
   console.log("password tooo short");
} else {
   console.log("Password length is acceptable")
}


// Stretch:
// Create a variable called num
// check if the variable is divisible by 3 or 5.
// If it is, log "This name is divisible by 3 or 5".
// Otherwise log something else
    
let number = 15
    
if(number % 3 == 0 &&  number % 5 == 0) {
   console.log("this number is divisable by 3 or 5") 
}   else {
   console.log("not divisable by 3 or 5")
}