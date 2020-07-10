// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// This is a single line comment.
/*
    This is a multi line comment.
    you can enter mutliple lines
*/

// "use strict" enables us to use old functionality
"use strict"

// Operators in Javascript

// Pretty much the same in most languages except for the following:

// - Exponentiation
// a ** b, multiplies a, b times
let num = 2 ** 5; // = 32
alert("exponentiation example: "+ num);

// - String concatenation with +
/*
    All primitives (incuding numbers), when used a binary + with
    a string is converted into a string.
*/
let randomString = 1 + 3 + 2 + "Heyo"; // = 6Heyo
alert("binary + on strings and other primitives example: " + randomString);

// - Arithmetic operators (excluding +)
/*
    All primitives, when performed with a natural math operator
    (excluding +), is converted into a number
*/
let randomNum = "6" / "2"; // = 3
alert("math arithmetic on other primitives example: " +randomNum);
// - The other purpose of unary +
/*
    When the unary + is used on a primitive other than a number,
    it converts it into a number
*/
let undefinedToNum = +undefined; // = NaN
alert("secondary unary + function example: "+ undefinedToNum);

// - Precedence
/*
    There are several operators that perform prior to others,
    see this link for more info:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
*/

// - Equals as an operator and chaining assignments
/*
    = returns a value, and thus we can also retrieve its result
    and use it for other values or for chaining
*/
let userName = "John";
let momName = "Joji";
let dadName = "Herbert";
let chainExample = userName = momName + dadName; // = JojiHerbert
                                                 // userName = JojiHerbert
alert("equals as an operator example: " + chainExample);

// Prefix and Postfix incrementing/decrementing
/*
    Prefix: ++[variable], increments variable and returns new value
    Postfix: [variable]++, increments variable and returns old value
*/

// Commas
/*
    Allows us to evaluate mutiple expressions divided up by commas, only 
    returning the very last result
    - (Note, use brackets on these! They have extremely low precedence)
*/
let a = 1;
let b = 2;
let c = 3;
let commaExample = (a *= b, c *= a, b *= c ** a ); // = 72
alert("comma example: " + commaExample)
