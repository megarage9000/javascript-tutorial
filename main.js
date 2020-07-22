// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Extending Built-in Classes

/**
 * Summary
 *
 * - We can extend built-in classes(Array, Date, etc.) in Javascript
 * 
 * - You can return the inherited built-in class via:
 *      static get [Symbol.species()] { return [inherited built-in class]} 
 *      - Allows usage of built-in class methods and return the inherited 
 *      object
 *      
 * - Built-in classes however, do not inherit static methods and properties.
 *      - (From Website) Ex. Array and Date inherit from Object.prototype,
 *      but Array.[[Prototype]] does not reference Object, so it can't have
 *      Array.keys().
 * 
 **/





