// ACTIVITY 9

// Research on do...while loops
// find out about the difference between for loop, while loop and do while loop
// give an example of each
// what are the pros and cons?

// Iterate with JavaScript While Loop.
// A while loop runs while a specified condition is true and stops once that condition is no longer true.
// The condition is evaluated before executing the statement.

// Example of an while loop
let i = 0;
while (i < 5) {
    i ++;
}
console.log(i);
// Expected rescult is 5


// Iterate with JavaScript For Loop
// The most commom loop is the for loop because it runs for a specific number of times.

// For loops are declared with three optional expression separated by semicolons;
// for(a; b; c) a is the intialization statement, b is the condition statement, and c is the final expression.

// The initialization statement is executed one time only before the loop starts. It is typically used to define and setup your loop variable.

// The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true. 
// When the condition is false at the start of the iteration, the loop will stop executing. 
// This means if the condition starts as false, your loop will never execute.

// The final expression is executed at the end of each loop iteration, prior to the next condition check and is usually used to 
// increment or decrement your loop counter.
 
// In the following example we initialize with i = 0 and iterate while our condition i < 5 is true. 
// We'll increment i by 1 in each loop iteration with i++ as our final expression.

// Example:
let myArray = [];
for(let i = 0; i < 5; i++) {
  myArray.push(i);
}
// myArray will now have the value [0,1,2,3,4].
 

// Iterate with JavaScript do...while loop

// It is called a do...while loop because it will first do one pass of the code inside the loop no matter what, 
// and then continue to run the loop while the specified condition evaluates to true.
 
let myArray = [];
let i = 0;
do {
  myArray.push(i);
  i++;
} while (i < 5);
console.log(myArray)
// The example above behaves similar to other types of loops, and the resulting array will look like [0, 1, 2, 3, 4]. 
// However, what makes the do...while different from other loops is how it behaves when the condition fails on the first check. 
// Let's see this in action: Here is a regular while loop that will run the code in the loop as long as i < 5:
 
let myArray = []; 
let i = 5;
while (i < 5) {
  myArray.push(i);
  i++;
}
console.log(myArry)
// In this example, we initialize the value of myArray to an empty array and the value of i to 5. When we execute the while loop, 
// the condition evaluates to false because i is not less than 5, so we do not execute the code inside the loop. 
// The result is that myArray will end up with no values added to it, and it will still look like [] when all of the code
//  in the example above has completed running. Now, take a look at a do...while loop:
 
let myArray = []; 
let i = 5;
do {
  myArray.push(i);
  i++;
} while (i < 5);
console.log(myArray)
// In this case, we initialize the value of i to 5, just like we did with the while loop. 
// When we get to the next line, there is no condition to evaluate, 
// so we go to the code inside the curly braces and execute it. 
// We will add a single element to the array and then increment i before we get to the condition check. 
// When we finally evaluate the condition i < 5 on the last line, 
// we see that i is now 6, which fails the conditional check, so we exit the loop and are done. 
// At the end of the above example, the value of myArray is [5]. Essentially, a do...while loop ensures that the code inside the loop
//  will run at least once.