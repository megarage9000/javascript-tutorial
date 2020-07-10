// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// This is a single line comment.
/*
    This is a multi line comment.
    you can enter mutliple lines
*/

// "use strict" enables us to use old functionality
"use strict"


// Type Converions

// String conversion
// - Works with all primitives
let numToString = String(123);

// Numeric conversion
// Rules:
// - Undefined -> NaN
// - null -> 0
// - true / false -> 1 / 0
// - string -> (removes whitespaces. If empty string, -> 0, else if a num is detected, than that num, otherwise NaN)
let stringToNum = Number("1234z"); // will yield a NaN

// Boolean conversion
// Rules:
// - 0, null, undefined, "" (anything empty) -> false
// - else -> true
let randomToBoolean = Boolean(null); // will yield false

alert(numToString);
alert(stringToNum);
alert(randomToBoolean);
