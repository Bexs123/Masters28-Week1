//Activity 2

// Using MDN choose one of the following methods:
// map(), shift(), unshift(), splice (), unsplice().

// Create a program to demonstrate the use of the method.

// Note: Not all methods would permanently update/make changes to the arrays themselves)


//Map()
//The map() method creates a new array populated with the results of calling a provided function on every element in the calling arra
const array1 = [6, 10, 35, 50];

const map1 = array1.map(x => x * 2);
console.log(map1);


//Shift()
// The shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
const array1 = [4, 5, 6];

const firstElement = array1.shift();
console.log(array1);
console.log(firstElement);


//Unshift
// The unshift() method adds one or more elements to the beginning of an array and returns the new length of the array.
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
console.log(array1);


//Splice()
const animals = ['rat', 'rabbit', 'camel', 'fox', 'elephant'];
console.log(animals.slice(2));
console.log(animals.slice(2, 4));
console.log(animals.slice(1, 5));
console.log(animals.slice(-2));


//Unsplice()
const array1 = [1, 2, 3];
console.log(array1.unshift(4, 5));
console.log(array1);