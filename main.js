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

 let randomNumber = prompt("Enter a number");

 switch(+randomNumber){

    case 1:
    case 2:
    case 3:
        alert("You must have entered either 1, 2, or 3!");
        break;

    case '4':
        alert("I will never be shown");
        break;
    
    case 5:
        alert("I have no break, but the following case will be checked if I am false");

    default:
        alert("Hello world!");
        break;
}