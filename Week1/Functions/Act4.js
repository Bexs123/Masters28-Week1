// Supplementary Challenges

// - write a function that returns the string "something" along with a given argument. For example "Something is better than nothing"
let str = "nothing"

const somethingCon = (con) => {
    return "Something " + con; 
}
console.log(somethingCon(str))


// - write a function that takes length & width as Parameters and returns the perimater of a rectangle. 
// console.log this with a template string. for example "The perimater of your rectangle is 50sm"

const perim = (length, width) => {
    perimeter = length * 2 + width * 2;
    console.log(`The perimeter of your Rectangle is ${perimeter}cm`);
}

perim(5,10)
perim(6,7)


// - write a function that takes 2 Parameters (num1, num2) and returns the larger number in a template string
// for example "72 is larger than 33"

const compare = (num1, num2) => {
    if (num1 > num2){
        console.log(`${num1} is larger than ${num2}`);
    } else if (num2 > num1) {
        console.log(`${num2} is larger than ${num1}`);
    } else {
        console.log("This is the same number.")
    }
}

compare(9,20)
compare(4,30)
compare(6,6)
compare(-1,3)