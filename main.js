// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// F.Prototype

/*

    Summary on website:
    
    In this chapter we briefly described the way of setting a [[Prototype]] for 
    objects created via a constructor function. Later we’ll see more advanced 
    programming patterns that rely on it.

    Everything is quite simple, just a few notes to make things clear:

        - The F.prototype property (don’t mistake it for [[Prototype]]) sets 
        [[Prototype]] of new objects when new F() is called.
        
        - The value of F.prototype should be either an object or null: other 
        values won’t work.

        - The "prototype" property only has such a special effect when set on a
        constructor function, and invoked with new.

    On regular objects the prototype is nothing special:

*/

// See tasks on website for better understanding!

// example
function User(name) {
    this.name = name;
  }
User.prototype = {}; // (*)

let user = new User('John');
let user2 = new user.constructor('Pete');

alert( user2.name ); // undefined
/*
  user2.name does the following:
  - checks user.constructor, nothing there
  - checks the prototype chain, only finding
  empty javscript object in prototype :(
*/