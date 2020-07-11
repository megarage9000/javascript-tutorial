// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Objects
/*
    Almost quite similar to structs in C/C++, but with many twists:

    - You can add and delete properties [Also applies to const Objects, you just can 
    change their values]

    - Properties can be multi-worded, and to access them you use [] with their 
    string literal or a variable storing that literal. Even single worded 
    properties can be turned into a string and be accessed via [], essentially 
    strings can be property names

    - When initializing an Object, if both property and property value share the
    same name, you can simply enter the property and will read as property : property value

    - Property names can be named anything! Except __proto__

    - "in" is an operator that allows us to check if a property exists within
    the Object. Can be used in for loops

    - When looping over an object, it orders as follows:
        - Begins with sorting integer properties, than others sorted on
        creation
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

alert("Your created person: ");
for(key in person){
    alert(key + ":" + person[key]);
}