// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Prototypal Inheritence

/*

    Summary on website:

    
    - In JavaScript, all objects have a hidden [[Prototype]] property that’s 
    either another object or null.
    
    - We can use obj.__proto__ to access it (a historical getter/setter, there
    are other ways, to be covered soon).
    
    - The object referenced by [[Prototype]] is called a “prototype”.
    
    - If we want to read a property of obj or call a method, and it doesn’t exist, 
    then JavaScript tries to find it in the prototype.
    
    - Write/delete operations act directly on the object, they don’t use the prototype 
    (assuming it’s a data property, not a setter).
    
    - If we call obj.method(), and the method is taken from the prototype, this still 
    references obj. So methods always work with the current object even if they are inherited.
    
    - The for..in loop iterates over both its own and its inherited properties. 
    All other key/value-getting methods only operate on the object itself.

*/

// - Working with prototypes
let animal = {
    jumps: null
};
let rabbit = {
    __proto__: animal,
    jumps: true
};
  
alert( rabbit.jumps ); // ? (1)
// answer: true

delete rabbit.jumps;

alert( rabbit.jumps ); // ? (2)
// answer: null

delete animal.jumps;

alert( rabbit.jumps ); // ? (3)
// answer: undefined


// Searching algorithm

let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

alert(pockets.pen);
alert(bed.glasses);

// Where does it write?
// - The rabbit recieves the 
// this.full property
let animal = {
    eat() {
        this.full = true;
    }
};

let rabbit = {
    __proto__: animal
};
  
rabbit.eat();