// Example
let weather = "sunny";

if (weather == "sunny") {
    console.log("well, I better wear some suncream")
} else if (weather == "rainy") {
    console.log("Better take an umbrella")
} else {
    console.log("Hmmm, it could go either way!")
}


// ...What happens?
if (1 === "1") {
    console.log(true);
} else {
    console.log(false)
}
// Returns false


//...What happens?
if (1 != "1") {
    console.log(true)
} else {
    console.log(false);
}
//Returns false


//...What happens?
let place = "Manc";
let weather = "Cloudy";

if (place == "Manc" && weather == "Sunny") {
    console.log("Check Again");
} else if (place == "Manc" && weather == "Rain") {
    console.log("Obvs");
} else {
    console.log("What it isn't raining?");
}
//Returns What it isn't raining?


//Example
let day = "Saturday";

if (day == "Saturday" || day == "Sunday") {
    console.log("It's weekend!");
} else {
    console.log("When's weekend?")
}


//If / Else If / Else Method
let car = "Peugeot";

if (car == "Ford" || car == "GM") {
    console.log("You've got an American car!");
} else if (car == "Peugeot" || car == "Citroen") {
    console.log("You've got a French boy!");
} else if (car == "Honda" || car == "Toyota" || car == "Suzuki") {
    console.log("Japanese cars are dead quiet");
} else if (car == "Mercedes") {
    console.log("You are proper posh German!");
} else if (car == "Volkswagen") {
    console.log("German aren't that bad at all!")
} else if (car == "Hyndai" || car == "Kia") {
    console.log("South Korean cars are getting popular");
} else {
    console.log("Your car is not in the top ten companies in the world!");
}


//Switch Method
let car = "peugeot";

switch (car) {
    case "Ford":
    case "GM":
        console.log("You've got an American car!");
        break;
    case "Peugeot":
    case "Citeroen":
        console.log("You've got a French boy!");
        break;
    case "Honda":
    case "Toyota":
        console.log("Japanese cars are dead quiet");
        break;
    case "Mercedes":
        console.log("You are proper posh German!");
        break;
    case "Volkswagen":
        console.log("German aren't that bad at all!")
        break;
    case "Hyndai":
    case "Kia":
        console.log("South Korean cars are getting popular");
        break;
    default:
        console.log("Your car is not in the top ten companies in the world!");
}


// Example
const grade = 87;
switch (true) {
    case grade >= 70:
        console.log("Distinction");
        break;
    case grade >= 60:
        console.log("Merit");
        break;
    case grade >= 50:
        console.log("Pass");
        break;
    default:
        console.log("Failed");
}