// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Static Methods / Static Properties

/**
 * Summary
 *
 * - Static methods are used for methods that belong to the class as a "whole",
 * not per instance of the class
 * 
 * - creating a static method goes by the following:
 *  static [method name]() { } / (equivalent to [class].[methodName] = function(){})
 * 
 * - [Only for new Chrome browsers] creating a static field goes as follows:
 * static [fieldName] = value / (equivalent to [class].[fieldName] = value)
 * 
 * - static methods/fields are inherited
 * 
 * - useful for class wide operations, such as storage, comparisons, etc.
 **/

 // Class extends Object?

// - needs super()
/**
 *
 *  rabbit.__proto__ is different for both:
 *      - for extend Object:
 *      rabbit.__proto__ = Object
 *     - for just rabbit:
 *      rabbit.__proto__ = Function.prototype 
 **/
class Rabbit extends Object {
    constructor(name) {
        // needs this
        super();
        this.name = name;
    }
}

let rabbit = new Rabbit("Rab");

alert( rabbit.hasOwnProperty('name') ); // Error


