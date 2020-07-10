// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// This is a single line comment.
/*
    This is a multi line comment.
    you can enter mutliple lines
*/

// "use strict" enables us to use old functionality
"use strict"

// Nullish coalescing operator '??'

/*
    Operates similarly to || (OR), and && (AND), excepts
    it finds the first non undefined/null value
        - If there isn't any, return the last value

    -  Good for assigning defaults when necessary
    -  It shall not be used with || or && for safety reasons
 */

 let value = null;
 let value2 = undefined;
 let value3 = prompt("Enter a non null or undefined value: ");
 alert(value ?? value2 ?? value3) // will alert value3 if not undefined or null
