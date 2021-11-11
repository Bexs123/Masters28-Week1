// ACTIVITY 1

// Let’s edit our person object to include…
// A function called sayHi and when it’s called, it 
// should return “Hello my name is ${this.name}"

const person = {
    name: "Becky",
    age: "39",

   songs: [
        "Ramsus - In the shadows",
        "Linkin Park - In the End",
        "Robbie Williams - Angels",
        "Take That - Rule The World",
        "Cascada - What Hurts the Most",
        "Avril Lavigne - When You Gone",
        "Linkin Park - Numb",
        "Avicii - Wake Me Up"
    ]

    ,films: [
        "The Day After Tomorrow",
        "Lake Placid",
        "Olympus Has Fallen",
        "London Has Fallen",
        "Angel Has Fallen",
        "Braveheart",
        "Deep Blue Sea"
    ]

    ,tvShows: [
        "The Big Bang Theory",
        "8 out of 10 cats",
        "Tipping Point",
        "Cold Case",
        "Cold Justice",
        "The Case",
        "The Ghost Whisperer"
    ]
};

sayHi = () => {
    return `Hello my name is ${this.name}`;
}
console.log(person.sayHi());



//console.log using dot notation
console.log(person.songs)

// console.log using dot notation with an index in the array.
console.log(person.films[2])

//console.log using brackets notation
console.log(person["tvShows"])

console.log();