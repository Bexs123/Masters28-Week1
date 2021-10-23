// ACTIVITY 2

// Edit the below snippet to include two parameters
// and a running order count updated when the function is called:

let orderCount = 0;

const takeOrder = (topping1, topping2) => {
    console.log(`Pizza with ${topping1} and ${topping2}`);
    orderCount++;
    console.log(`Order count: ${orderCount}`);
    return orderCount;
}

takeOrder("pineapple", "ham");
takeOrder("tomato", "cheese");