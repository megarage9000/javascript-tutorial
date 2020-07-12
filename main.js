// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Rest parameters
/*
    When we see "..." in the code, it is either rest parameters or the spread syntax.

    There’s an easy way to distinguish between them:

        1. When ... is at the end of function parameters, it’s 
        “rest parameters” and gathers the rest of the list of arguments into an array.
        
        2. When ... occurs in a function call or alike, it’s 
        called a “spread syntax” and expands an array into a list.

    Use patterns:

        1. Rest parameters are used to create functions that accept 
        any number of arguments.
        
        2. The spread syntax is used to pass an array to functions that 
        normally require a list of many arguments.

    Together they help to travel between a list and an array of parameters with ease.

    All arguments of a function call are also available in “old-style” arguments: array-like iterable object.
*/

function sum (...numbers){
    let sum = 0;
    for (number of numbers){
        sum += number;
    }
    return sum;
}

let randomNumbers = [1, 2, 3, 4, 5, 6];
alert(sum(...randomNumbers));

// you can also use .. to copy objects/arrays
let arrayCopy = [...randomNumbers];
alert(arrayCopy);
alert(arrayCopy === randomNumbers);