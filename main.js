// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// This is a single line comment.
/*
    This is a multi line comment.
    you can enter mutliple lines
*/

// "use strict" enables us to use old functionality
"use strict"


// Simple interaction

// - alert (Shows message)
alert("Hello World!");

// - prompt (Asks for user for input)
// (note you can add a default initial value, which is important for IE)
// you can get the result as a string
let randomPrompt = prompt("Who are you", "I don't know, an alien?");
alert(`You are a ${randomPrompt}?`);

// - confirm (Like prompt, but user either clicks cancel or OK)
// returns a boolean
let randomConfirm = confirm("Can you breath?");
if(randomConfirm){
    alert("Ok you are a living thing.");
} else {
    alert("Ok you are not a living thing.");
}