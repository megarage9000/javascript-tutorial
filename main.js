// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// This is a single line comment.
/*
    This is a multi line comment.
    you can enter mutliple lines
*/

// "use strict" enables us to use old functionality
"use strict"

// Logical Operators
/*

    - Similar to other programs except:

        1. '||' (OR) finds the first truth value out of the operands
            - ex. result = value1 || value2 || value3, will return the 
            first value that is true from left to right to result
                - If none are true, return the last value

        2. '&&' (AND) finds the first false value out of the operands
            - ex. result = value1 && value2 && value3, will return the 
            first false value from left to right to 
                - If none are false, return last value

        3. !! Is a shorthand for Boolean(value)
 
*/

// Check login challenge

const adminName = "Admin";
const password = "123";
let userName = prompt("Who's there? ");

if(userName == "" || userName == null){
    alert("Cancelled.");
}
else if(userName !== adminName){
    alert("I don't know you.");
}
else{
    let userGuess = prompt("Password?");
    if(userGuess == "" || userGuess == null){
        alert("Cancelled");
    }
    else if(userGuess !== password){
        alert("Wrong password.");
    }
    else{
        alert("Welcome!");
    }
}