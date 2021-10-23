let favouriteDrink = "coffee";
console.log(favouriteDrink);
// when you console.log a variable it don't need the "" like you do if it is a string

let favouriteDrink = "coffee";
console.log("My favourite drink is " + favouriteDrink);
// putting strings together with variables is concatenation. It allows us to produce sensible outputs.

//example of concatenation
let name = "chris";
let age = 27;
let favDrink = "coffee"

console.log("hi, my name is " + name + ". I am " + age + " and my favourite drink is " + favDrink+ ".") 

//example of Template Literals we can inject variables into strings a lot easier
let name = "chris";
let age = 27;
let favDrink = "coffee"

console.log(`Hi my name is ${name}. I am ${age} and my favourite drink is ${favDrink}.`)

//Remember you can update the variables if you use the keyword let.
let name = "chris";
let age = 27;
let favDrink = "coffee"

console.log(`Hi my name is ${name}. I am ${age} and my favourite drink is ${favDrink}.`)

age = 28;
favDrink = "Tea"

console.log(`Hi my name is ${name}. I am ${age} and my favourite drink is ${favDrink}.`)