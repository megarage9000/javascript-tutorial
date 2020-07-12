// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/


"use strict"

// Destructuring

/*
    
Summary: 

    Destructuring assignment allows for instantly 
    mapping an object or array onto many variables.

    The full object syntax:
        - let {prop : varName = default, ...rest} = object

    This means that property prop should go into the variable varName and, if no 
    such property exists, then the default value should be used.
    Object properties that have no mapping are copied to the rest object.

    The full array syntax:
        - let [item1 = default, item2, ...rest] = array

    The first item goes to item1; the second goes into item2, all the rest makes the array rest.
    It’s possible to extract data from nested arrays/objects, for that the 
    left side must have the same structure as the right one.

*/


// - Destructuring assignment
let user = { name: "John", years: 30 };
// your code to the left side:
// ... = user
// puts all proper values to corresponding variables
let {name, years : age, isAdmin = false} = user;
// technically name -> name : name
// isAdmin is non existent in user so we need the false default value
// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

// - The Maximal Assignment
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalaries(salaries){

    let maxName = null;
    let maxSalary = 0;

    for(const [name, salary] of Object.entries(salaries)){
        if(salary > maxSalary){
            maxSalary = salary;
            maxName = name;
        }
    }

    return {
        maxName,
        maxSalary
    };

}

console.log(topSalaries(salaries));