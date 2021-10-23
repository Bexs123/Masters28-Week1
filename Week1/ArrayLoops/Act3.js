// ACTIVITY 3

// create an array that lists your favourite films, upto 5 elements.
// Add 2 more using a method
// Use a loop to cycle through the array


//A array of my favourite films
let favFilms = [
                        "Dante's Peak",
                        "Day After Tomorrow",
                        "Die Hard",
                        "Braveheart",
                        "Suicide Squad",
                        "City of Angels"
                    ];
console.log(favFilms)

// Added two more films to my list of favourites
favFilms.push("Lake Placid") 
favFilms.push("Deep Blue Sea")
                    console.log(favFilms)


// I where trying to push the film to index 2 in the list, the result was not what I where expeciting.
// In the terminal it added just "K" because that where the index 2 within Lake Placid
favFilms.push("Lake Placid"[2])
console.log(favFilms)

//I used a for loop to cycle through the array
let favFilms = [
    "Dante's Peak",
    "Day After Tomorrow",
    "Die Hard",
    "Braveheart",
    "Suicide Squad",
    "City of Angels"
];
// console.log(favFilms)

for(let i = 0; i <favFilms.length; i++) {
    console.log(favFilms[i]);
}