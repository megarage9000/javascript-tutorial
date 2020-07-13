// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Prototype methods, objects without _proto_

/*

    Summary on website:
    
        Modern methods to set up and directly access the prototype are:

            1. Object.create(proto[, descriptors]) – creates an empty object with a given proto as [[Prototype]] 
            (can be null) and optional property descriptors.
            
            2. Object.getPrototypeOf(obj) – returns the [[Prototype]] of obj (same as __proto__ getter).
            
            3. Object.setPrototypeOf(obj, proto) – sets the [[Prototype]] of obj to proto (same as __proto__ setter).

        The built-in __proto__ getter/setter is unsafe if we’d want to put user-generated 
        keys into an object. Just because a user may enter "__proto__" as the key, and 
        there’ll be an error, with hopefully light, but generally unpredictable consequences.

        So we can either use Object.create(null) to create a “very plain” object without 
        __proto__, or stick to Map objects for that.

        Also, Object.create provides an easy way to shallow-copy an object with all descriptors:

        let clone = Object.create(Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj));

        We also made it clear that __proto__ is a getter/setter for [[Prototype]] and resides in 
        Object.prototype, just like other methods.

        We can create an object without a prototype by Object.create(null). Such objects are used as 
        “pure dictionaries”, they have no issues with "__proto__" as the key.

        Other methods:

            - Object.keys(obj) / Object.values(obj) / Object.entries(obj) – returns an array of 
            enumerable own string property names/values/key-value pairs.
            
            - Object.getOwnPropertySymbols(obj) – returns an array of all own symbolic keys.
            
            - Object.getOwnPropertyNames(obj) – returns an array of all own string keys.
            
            - Reflect.ownKeys(obj) – returns an array of all own keys.
            
            - obj.hasOwnProperty(key): returns true if obj has its own (not inherited) key named key.

        All methods that return object properties (like Object.keys and others) – return “own” properties. If we want inherited ones, we can use for..in.
*/

// The difference between calls

function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function() {
    alert( this.name );
}

let rabbit = new Rabbit("Rabbit");

rabbit.sayHi();                        // Rabbit
Rabbit.prototype.sayHi();              // undefined
Object.getPrototypeOf(rabbit).sayHi(); // undefined
rabbit.__proto__.sayHi();              // undefined

/**
 *  The reason why this occurs for the last 3 calls
 *  is that "this" is referencing to the object before
 *  the dot, which in this case doesn't include
 *  the rabbit object [For the last 3 calls]. sayHi()
 *  relies on this.name, which only exists in the
 *  rabbit object / new Rabbit creation
 */