// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// This is a single line comment.
/*
    This is a multi line comment.
    you can enter mutliple lines
*/

// "use strict" enables us to use old functionality
"use strict"

// Loops
// - Again like similar to all languages but
/*
    Labels:

    allows us to break out of loops to a certain location
        Rules:
            1. Location must be above the call to the label,
            not a random arbitrary location
 */

 outerExample:
 for(let i = 0; i < 20; i++){
    innerExample:
    for(let j = 0; j < 10; ++j){
        if(2 % j === 0){
            alert("Breakout at i = " + i + " and j = " + j);
            continue outerExample;
        }
        else{
            alert("Inner example");
            break innerExample;
        }
    }
 }