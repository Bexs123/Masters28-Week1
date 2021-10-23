// ACTIVITY 5

// Create a variable called num check if thr number is a palindrome.
// (looks the same forward as it does backwards eg 1001 or 20202)

let num = 123454321
let numString = num.toString();
let reverseNumString = numString.split('').reverse().join('');

if(num == reverseNumString) {
    console.log(`Yes ${num} is a palindrome`) 
} else {
    console.log(`No ${num} is not a palindrome`)
}