//Example
let coffeeOrder = [
    "Alex - Cortado",
    "Ben - COrtado",
    "Charlie - Whatever's New"
];
console.log(coffeeOrder);


//Try this:
console.log(coffeeOrder[2]);
//Did it do what you expected?
//Yes it return Charlie - Whatever's New because it is the index position 2. The index starts at 0


//Example
let coffeeOrder = [
    "Alex - Cortado",
    "Ben - COrtado",
    "Charlie - Whatever's New"
];
coffeeOrder[1] = "Ann - vanilla latte";


//Try This:
let coffeeOrder = [
    "Alex - Cortado",
    "Ben - COrtado",
    "Charlie - Whatever's New"
];
console.log(coffeeOrder.length);
//..What happens?
// It finds how many iteams are in the array, the answer is 3.


//Example
// .push method adds to the end of the array
let coffeeOrder = [
    "Alex - Cortado",
    "Ben - COrtado",
    "Charlie - Whatever's New"
];
coffeeOrder.push("Donna - espresso");


//Example
//.pop method removes the last item from the array
let coffeeOrder = [
    "Alex - Cortado",
    "Ben - COrtado",
    "Charlie - Whatever's New"
];
coffeeOrder.pop();


//Try this... Make an array of your 3 favourite drinks and log each one to the console.
let favouriteDrinks = ["Cherry Coke", "Pineapple Juice", "Stawberry And Appple Juice"];

console.log(favouriteDrinks[0]);
console.log(favouriteDrinks[1]);
console.log(favouriteDrinks[2]);


//For Loop
let favDrinks = [
    "coke",
    "Fanta",
    "Tonic",
    "Red Bull"
];
for (let i = 0; i < favDrinks.length; i++) {
    console.log(favDrinks[i]);
}


//Using for loops with an if statement
let multiplesTwo = [];

for(let i =0; i < 20; i++) {
    if (i % 2 == 0) {
        multiplesTwo.push(i);
    }
}
console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);


//Try this
let age = 15;

while(age < 18 ) {
    console.log("You're a child!");
    age ++;
}
console.log("You're an adult!");


//Try this 
let cards = ["Diamond", "Spade", "Heart", "Club"];
let currentCard = "Club";

while(currentCard != "Spade") {
    console.log(currentCard);
    currentCard = cards[Math.floor(Math.random()*4)];
}
console.log(currentCard);