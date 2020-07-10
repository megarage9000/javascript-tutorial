// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// This is a single line comment.
/*
    This is a multi line comment.
    you can enter mutliple lines
*/

// "use strict" enables us to use old functionality
"use strict"

// alert("Hello World again!");

// Datatypes:

// - Number (Similar to integer)
let regularInt = 23;
alert("Regular int" + regularInt);

// - BigInt (Similar to floats)
const largeInt = 21312421412n;
alert("Big int" + largeInt);
// - Strings
let singleQuoteString = 'Hello world';
let doubleQuoteString = "It's me again";

// This type of string allows us to embed variables or expressions in the braces
let backQuoteString = `${singleQuoteString}. ${doubleQuoteString}, and I am learning javascript today!`;
alert(backQuoteString);

// - Boolean
let randomBooleanExpresion = 2 < 5;
let randomBoolean = true && randomBooleanExpresion;
alert("Boolean expression example: " + randomBoolean);

// - Undefined
// not recommended for use, but its there
let anUndefinedVar;
alert("Undefined value: " + anUndefinedVar);

// - Null
let nullValue = null;
alert("Null value: " + nullValue);

// - New Operator: typeof
// allows us to get the type of the object, in a string
// - note null returns object lol

function randomFunction(){
    alert("I will not run");
}

alert(typeof(randomFunction));
