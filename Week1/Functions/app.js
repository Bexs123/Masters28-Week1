//Example
const pressGrindBeans = () => {
    console.log("Grinding for 20 seconds");
}
pressGrindBeans ();


//Functions with IF statements included
let coffeeISGrinding = false;

const pressGrindBeans = () => {
    if(coffeeISGrinding) {
        console.log("Stopping the grind");
        coffeeISGrinding = false;
    } else {
        console.log("Grinding is about to begain");
        coffeeISGrinding = true;
    }
}
pressGrindBeans();


//Example
const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account ${accnum}`);
}
cashWithdrawal(300, 50449921);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50447921);


//We can use global variables in functions!
let accnumber = 50449921;

const cashWithdrawal = (amount, accnum) => {
    console.log(`Withdrawing ${amount} from account`);
}
cashWithdrawal(300, accnumber);
cashWithdrawal(30, 50449921);
cashWithdrawal(200, 50447921);


//Example
const addUp = (num1, num2) => {
    return num1 + num2;
}
addUp(7, 3);
console.log(addUp(2, 5));


//Example
const multiplyByNineFifths = (celsius) => {
    return celsius * (9/5);
};
const getFahrenheit = (celsius) => {
    return multiplyByNineFifths(celsius) + 32;
}
console.log("The temperature is " + getFahrenheit(15) + "F")


// Declaration(1):
function square(number) {
    return number * number;
};
square(5);


// Expression/anonymous function
const square = function(number) {
    return number * number;
};
square(5);
// Notice how we have the keyword Function but no name> That's why it's anonymous


//Arow Function syntax
const square = (number) => {
    return number * number;
};
square(5);