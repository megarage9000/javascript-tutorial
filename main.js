// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/


"use strict"

// Methods of primitives

/*
    Summary from website: 

    
    To write numbers with many zeroes:

        - Append "e" with the zeroes count to the number. 
        Like: 123e6 is the same as 123 with 6 zeroes 123000000.
    
        - A negative number after "e" causes the number to be 
        divided by 1 with given zeroes. E.g. 123e-6 means 0.000123 (123 millionths).

    For different numeral systems:

        - Can write numbers directly in hex (0x), octal (0o) and binary (0b) systems.
        
        - parseInt(str, base) parses the string str into an integer in numeral system 
        with given base, 2 ≤ base ≤ 36.
        
        - num.toString(base) converts a number to a string in the numeral system with 
        the given base.

    For converting values like 12pt and 100px to a number:

        - Use parseInt/parseFloat for the “soft” conversion, which reads a number from a 
        string and then returns the value they could read before the error.

    For fractions:

        - Round using Math.floor, Math.ceil, Math.trunc, Math.round or num.toFixed(precision).
        
        - Make sure to remember there’s a loss of precision when working with fractions.

    More mathematical functions:

        - See the Math object when you need them. The library is very small, but can cover basic needs.


    Additonals:
        
        - To call Number methods on an actual number, use double dots:
            - ex. 12345..toString()

        - You can use Object.is(value1, value2) that does === more reliably
            - handles NaN === NaN and +0 === -0
*/

// Sum Visitors challenge

// function sum(num1, num2){
//     return num1 + num2;
// }
// let num1 = parseInt(prompt("Enter value 1: ")); // you can also do + operator
// let num2 = parseInt(prompt("Enter value 2: "));
// alert(sum(num1, num2));

// Why 6.35..toFixed(1) -> 6.3? How to fix?

// let num = Math.round(6.35 * 10) / 10;
// alert("Original Num: " + 6.35.toFixed(1));
// alert("With rounding: " + num);

// randomInteger challenge
// - Allow interval expansion for:
//      - min = min - 0.5
//      - max = max + 0.5
//      and round afterwards
function randomInteger(min, max){
    let newMin = min - 0.5;
    let newMax = max + 0.5;
    let result = newMin + Math.random() * (newMax - newMin);
    return Math.round(result);
}

alert(randomInteger(1, 5));