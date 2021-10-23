// Activity 3:
// Create an object called coffeeShop with key values of: 
// branch, drinks with prices, food with prices
// And methods called drinksOrdered and foodOrdered.
// They should return a string saying [Your order] is … with all 
// items chosen with costs and total costs.

let foodOrder = "Cheese Burger";
let drinkOrder = "Latte";
let drinkOrder2 = "Hot Chocolate";
let drinkOrder3 = ""

const coffeeShop = {
    branch: "Foxy's Coffee Shop",
    drinks: {Latte: 2.54,
    choclate: 1.49,
    "Filter coffee": 2,
    Tea: 1.95,
    "Mocha": 2.99
    },
    food: {
        sandwich: 3.55,
        pizza: 6.55,
        burger: 4.55,
        hotdog: 3.55
    },
    drinksOrdered(){
        let dTotal = this.drinks[drinkOrder];
        return `Your drinks total is £${dTotal}`;
    },
    foodOrdered(){
        let fTotal = this.food[foodOrder];
        return `Your food total is £${fTotal}`;
    },
    totalOrder(){
        let fTotal = this.food[foodOrder];
        let dTotal = this.drinks[drinkOrder];
        let tTotal = this.food[foodOrder] + this.drinks[drinkOrder];
        return `Your order is ${drinkOrder} for £${dTotal}, ${foodOrder} for £${fTotal}. Your order comes to £${tTotal} in total.`;
    }

}
console.log(coffeeShop.drinksOrdered());
console.log(coffeeShop.foodOrdered());
console.log(coffeeShop.totalOrder());