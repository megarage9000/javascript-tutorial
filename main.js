// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// This is a single line comment.
/*
    This is a multi line comment.
    you can enter mutliple lines
*/

// "use strict" enables us to use old functionality
"use strict"

// Switches
/*
    Like every language but...

    - you can group cases as well!
    - uses strict equality (same type)
    - If there is no break, the following case will be executed without checking
    case after
 */

let randomGlobal = "Hello World";
function testFunction(arg1 = "No arg2 was provided", arg2 = "No arg2 was provided"){
    let randomLocal = "My name is main.js";
    let isWantToAlert = prompt("Want to see me alert?");
    if(isWantToAlert){
        alert(randomGlobal + ". " + randomLocal + ". " + arg1 + ". " + arg2);
    }
}
let arg1 = prompt("Enter arg1");
let arg2 = prompt("Enter arg2");
testFunction(arg1, arg2);
testFunction();