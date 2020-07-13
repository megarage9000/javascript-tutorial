// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Native Prototypes

/*

    Summary on website:
    
    
    All built-in objects follow the same pattern:
        - The methods are stored in the prototype (Array.prototype, Object.prototype, Date.prototype, etc.)
        - The object itself stores only the data (array items, object properties, the date)

    Primitives also store methods in prototypes of wrapper objects: Number.prototype, 
    String.prototype and Boolean.prototype. Only undefined and null do not have wrapper objects

    Built-in prototypes can be modified or populated with new methods. But it’s not recommended to 
    change them. The only allowable case is probably when we add-in a new standard, but it’s not yet 
    supported by the JavaScript engine

 */

// Add method "f.defer(ms)" to Functions

// function f() {
//     alert("Hello!");
// }

// // using function() to allow 'this' usage
// Function.prototype.defer = function(ms){
//     setTimeout(this, ms)
// }
  
// f.defer(1000); // shows "Hello!" after 1 second

// Add a decorating function to Functions

function f(a, b) {
    alert( a + b );
}

// Website solution
Function.prototype.defer = function(ms){
    let f = this;
    return function(...args) {
        // using f.apply for object methods as well
        setTimeout(() => f.apply(this, args), ms);
    };

};
f.defer(1000)(1, 2); // shows 3 after 1 second