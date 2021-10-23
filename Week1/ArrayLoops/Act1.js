// ACTIVITY 1

// Make an array of your favourite songs 3 of them
// log them to the console

// Stretch:
// Can you add another two songs to the list using a method and then remove the last one added?

let MyFavSongs = [
                    "In The Shadows",
                    "Rule The World",
                    "Angels"
                ];
                console.log(MyFavSongs)

// The push method add an element to the end of the array
MyFavSongs.push("Walk On Water")
                console.log(MyFavSongs)
MyFavSongs.push("What hurts the most")
                console.log(MyFavSongs)
//The pop method removes the last element in the array
MyFavSongs.pop();

//console.log slice method (2) removes the first two elements in the array
console.log(MyFavSongs.slice(2));

//console.log slice method (2, 4)
console.log(MyFavSongs.slice(2, 4));

//console.log slice method (1, 5)
console.log(MyFavSongs.slice(1, 5));

//console.log slice method (-2) removes all apart from the last two elements in the array
console.log(MyFavSongs.slice (-2));