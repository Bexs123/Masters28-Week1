// ACTIVITY 3

// Cash machine time!
// Let’s create one that

// > Dispenses cash if your pin number is correct and your 
// balance is equal to, or more than, the amount you’re 
// trying to withdraw

const checkBal = (toCheck) => {
    let bal = 850;
    if (toCheck > bal){
        console.log("insufficient funds.");
        return;
    } else {
        console.log("Sucessful Withdrawel");
    }
}
const checkPin = (userPin, amount) => {
    let pin = 9040;
    if (userPin !== pin){
        console.log("Pin is incorrect.");
        return;
    } else {
        checkBal(amount)
    }
}
checkPin(9040, 100);