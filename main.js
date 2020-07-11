// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// This is a single line comment.
/*
    This is a multi line comment.
    you can enter mutliple lines
*/

// "use strict" enables us to use old functionality
"use strict"

// Debugging using Firefox:
// see link: https://javascript.info/debugging-chrome
const SPEED_LIMIT = 60;
let multiArrowFunction = (currentSpeed, speedLimit) => {
    let areNum = !isNaN(currentSpeed) && !isNaN(speedLimit);
    if(areNum){
        let message = 
        (currentSpeed == speedLimit) ? alert("You are at speed limit!") :
        (currentSpeed < speedLimit) ? alert("You are below speed limit") :
        alert("You are above speed limit, slow down!");
        return true;
    }
    return false;
}

let success = false;
do{
    success = multiArrowFunction(
        prompt("Enter your speed: "),
        SPEED_LIMIT
    );
    if(success == false){
        alert("Wrong typing!");
    }
} while(!success)