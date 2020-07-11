// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Object copying, references

/*
    Objects in javascript are stored as reference, multiple varaibles can 
    access the same object

    - When a variable is assigned an object, it is assigned its reference, as
    so for subsequent variable assignments on that object

    - When two variables are compared that contain same object references, it
    will return true

    - Shallow cloning can be done via Object.assign[dest, src1, src2, ... srcN]
    where:
        - dest: Where the new object can be stored, or an existing one
        exist there too, with added properties
        - src1 ... srcN: The sources, there can be more than one
            - If any of the sources share same properties, they
            will be overwritten
    
    - Note that shallow cloning can't copy property references to an object
    within an object, you can use a library called: https://lodash.com/ for nested
    cloning
*/

function makePerson(name, age, optionalThirdProperty, thirdValue){
    let thirdProperty = optionalThirdProperty;
    return {
        name,
        age, 
        thirdProperty : thirdValue
    };
}

const DEFAULT_THIRD_PROPERTY = "Fastest 100m";
const DEFAULT_THIRD_VALUE = 20;

let thirdProperty = prompt("Enter a third property");
let thirdValue = prompt("Enter a value");
if(!(thirdProperty && thirdValue)){
    thirdProperty = DEFAULT_THIRD_PROPERTY;
    thirdValue = DEFAULT_THIRD_VALUE;
}
let person = makePerson(prompt("Your name?"), prompt("Your age?"), thirdProperty, thirdValue);

// alert("Your created person: ");
// for(key in person){
//     alert(key + ":" + person[key]);
// }

let weightLifter = {
    benchPR : 225,
    squatPR : 350,
    deadliftPR: 400,
};

let sameLifter = weightLifter;
console.log("Before benchPR change: " + weightLifter["benchPR"]);
sameLifter["benchPR"] = 300;
console.log("After benchPR change: " + weightLifter["benchPR"]);

let cloneLifter = Object.assign({}, weightLifter, person);
console.log("Is cloneLifter == weightLifter? " + (cloneLifter == weightLifter));
for(key in cloneLifter){
    console.log("-" + key + ": " + cloneLifter[key]);
}
