// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/


"use strict"

// Methods of primitives

/*
    Summary from website: 

    
    - Primitives except null and undefined provide many helpful methods. We will study those in the upcoming chapters.

    - Formally, these methods work via temporary objects, but JavaScript engines are well tuned to optimize that 
    internally, so they are not expensive to call.

*/

const NAME = "John";
let upperCaseName = NAME.toUpperCase();
alert(upperCaseName);