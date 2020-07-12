// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Variable Scopes
/*
    Lexical Environments!  
        - Each of these store the following: 
            1. Environment Record [All local variables are stored as properties, and also 'this']
            2. Reference to its outer Lexical Environment, and 
        
        - A variable is essentially a 'property' of the Environment Record object
            - The variable is uninitialized -> undefined when let declaration is seen 
            -> then initialized
            - When a variable is updated, it is updated in its lexical environment
            - For garbage collection, when these variables aren't used, they may
            not be available in the debugger!

        - Function Declarations are instantly initialized, unlike variables
            - An inner lexical environment is created for local variables and 
            arguments
            - An outer lexical environment is referenced for outer variables
            - On variable search, it searches the inner environment, then
            to the outer environment


*/

// - Apprently you can do this?
function sum(num1){
    return function(num2){
        return num1 + num2;
    }
}

// alert(sum(1)(2));

// - Filter through function
/*
    inBetween and inArray return Lexical environments
    to their respective inner functions, allowing usage
    for the fn() in filter for (item, index ...)
*/
function inBetween(min, max){
    return function(item){
        return item >= min && item <= max;
    }
}

function inArray(arr){
    return function(item){
        return arr.includes(item);
    }
}

let arr = [1, 2, 3, 4, 5, 6, 7];

// alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6

// alert( arr.filter(inArray([1, 2, 10])) ); // 1,2

// - Sort by field
function byField(fieldName){
    return function(userA, userB){
        return userA[fieldName] > userB[fieldName] ? 1 : -1;
    }
}

let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

let sortedByName = [...users.sort(byField('name'))];
let sortedByAge = [...users.sort(byField('age'))];

// - Army of Functions
function makeArmy() {
    let shooters = [];

    let i = 0;
    while (i < 10) {
        // add a different variable to reference, which is created
        // every new iteration of loop as a new lexical environment
        // is created
        let j = i;
        let shooter = function() { // shooter function
            alert( j ); // should show its number
        };
        shooters.push(shooter);
        i++;
    }

    return shooters;
}
  
let army = makeArmy();

army[0](); // the shooter number 0 shows 10
army[5](); // and number 5 also outputs 10...
// ... all shooters show 10 instead of their 0, 1, 2, 3...


// Is this variable visible?
// - no, because it is only intialized, 
// once it passes let declaration, it then
// can be used.
let x = 1;

function func() {
  console.log(x); // ?

  let x = 2;
}

func();