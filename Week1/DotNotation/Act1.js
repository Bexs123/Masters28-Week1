// Activity 1

// Have a go at logging a noughts and crosses grid in the console.

// Stretch
// try researching arrays and loops and see if you can do it that way. 


vert = "   |   |  "
horz = "-----------"

for (let i = 0; i <11; i++) {
    if (i == 3) {
        console.log(horz)

    } else if(i == 7) {
        console.log(horz)
    } else {
        console.log(vert)
    }
    }



const grid = ["   |   |   ", "-----------"] 

    for (let i = 0; i <11; i++){
        if (i == 3){
            console.log(grid[1])
        }
        else if(i ==7){
            console.log(grid[1])
        }
        else {
            console.log(grid[0])
        }
    }