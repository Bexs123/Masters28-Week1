// ACTIVITY 8

// Imagine you're a programmer for a social media platform! You have been tasked with building a prototype for a mutual followers program.

// create 2 arrays of followers else.g bobsfollowers & hannahsFollowers.
// In these arrays place 4 names as StringConstructor. Make sure there are 2 names that are in BOTH arrays
// Using a nested loop iterate over both arrays and console.log out the matching followers.


let bobsFollowers = ["John", "Sarah", "Jack", "Suzi"]
let hannahsFollowers = ["Jack", "Dawn", "Joe", "Sarah"]

for(i = 0; i < bobsFollowers.length; i++){
    for(x = 0; x < hannahsFollowers.length; x++)
    if(bobsFollowers[i] == hannahsFollowers[x]){
        console.log(bobsFollowers[i])
    }
}