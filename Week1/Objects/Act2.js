// Activity 2
// Create an object called pet with the key values of:
// name, typeOfPet, age, colour
// And methods called eat and drink. They should return a 
// string saying [Your Pet Name] is eating/drinking.


let isEating = true;
let isDrinking = false;
const pet = {
    name: "Lincolin",
    typeOfPet: "Cat",
    age: 5,
    colour: "black",
    eating(){
        if (isEating){
            return `${this.name} is eating.`;
        } else {
            return `${this.name} is not eating.`
        }
    },
    drinking(){
        if (isDrinking){
        return `${this.name} is drinking.`;
        } else {
            return `${this.name} is not drinking.`;
        }
    } 
}
console.log(pet.eating())
console.log(pet.drinking())
