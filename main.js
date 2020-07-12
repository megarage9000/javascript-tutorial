// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/


"use strict"

// Object, keys, values

/*
    For plain objects, the following methods are available:

    Object.keys(obj) – returns an array of keys.
    Object.values(obj) – returns an array of values.
    Object.entries(obj) – returns an array of [key, value] pairs.

    - Also, Object has Object.fromEntries(array), to convert Object.entries -> Object again
*/

// - Sum the properties:

function sumSalaries(salaries){

    return Object.values(salaries).reduce(
       (sum, current) => sum += current,
       0 
    ); 

}

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
  };
  
// alert( sumSalaries(salaries) );

// - Count the properties:
function count(user){
// solution from website
    return Object.keys(user).length;
}

let user = {
    name: 'John',
    age: 30
  };
  
// alert( count(user) ); // 2