// ACTIVITY 7

// Create a variable, generate a random number between 1 and 30 six times
// each random number generated, check if this number of divisible by 7 or not

let nums = [];
let i = 0;
while (i < 6){
    nums.push(Math.floor(Math.random()*30));
    i++
}
console.log(nums)
for (let x = 0; x < nums.length; x++){
    if ((nums[x] % 7) == 0){
        console.log(nums[x]);
    }
}