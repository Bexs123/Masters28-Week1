// ACTIVITY 4

// Generate 6 random numbers between 1 50

let arr = [];
while(arr.length < 6){
    let r = Math.floor(Math.random() * 50) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);