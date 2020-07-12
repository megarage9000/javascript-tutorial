// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/


"use strict"

// Arrays

/*
    Summary from website: 

    Array is a special kind of object, suited to storing and managing ordered data items.

    The declaration:

    // square brackets (usual)
    let arr = [item1, item2...];

    // new Array (exceptionally rare)
    let arr = new Array(item1, item2...);

    The call to new Array(number) creates an array with the given length, but without elements.

    The length property is the array length or, to be precise, its last numeric index plus one. It is auto-adjusted by array methods.

    If we shorten length manually, the array is truncated.

    We can use an array as a deque with the following operations:

        push(...items) adds items to the end.
        pop() removes the element from the end and returns it.
        shift() removes the element from the beginning and returns it.
        unshift(...items) adds items to the beginning.

    To loop over the elements of the array:

        for (let i=0; i<arr.length; i++) – works fastest, old-browser-compatible.
        for (let item of arr) – the modern syntax for items only,
        for (let i in arr) – never use.

    - Arrays only have toString() converting method

    - Arrays can be multidimensional

    We will return to arrays and study more methods to add, remove, extract elements and sort arrays in the chapter 

    - DON'T TREAT ARRAYS AS OBJECTS, use the common queue and stack operations.
*/

// Array insertion challenge
// - Literally copy pasta since I didn't
// read the question correctly
// let styles = ["Jazz", "Blues"];
// styles.push("Rock-n-Roll");
// styles[Math.floor((styles.length - 1) / 2)] = "Classics";
// alert( styles.shift() );
// styles.unshift("Rap", "Reggae");

// Maximal Array
//-again copied solution because I didn't read properly
function getMaxSubSum(array){
    let max = 0;
    let partial = 0;

    for(let element of array){
        partial += element;
        if(partial > max){
            max = partial;
        }
        if(partial < 0) partial = 0;
    }
    return max;
}

alert( getMaxSubSum([-1, 2, 3, -9]) ); // 5
alert( getMaxSubSum([-1, 2, 3, -9, 11]) ); // 11
alert( getMaxSubSum([-2, -1, 1, 2]) ); // 3
alert( getMaxSubSum([100, -9, 2, -3, 5]) ); // 100
alert( getMaxSubSum([1, 2, 3]) ); // 6
alert( getMaxSubSum([-1, -2, -3]) ); // 0