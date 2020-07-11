// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Object to primitive 
/*
    Summary taken off the lecture:

    The object-to-primitive conversion is called automatically by many built-in functions and operators that 
    expect a primitive as a value.

    There are 3 types (hints) of it:

        "string" (for alert and other operations that need a string)
        "number" (for maths)
        "default" (few operators)

    The specification describes explicitly which operator uses which hint. There are very few operators 
    that “don’t know what to expect” and use the "default" hint. Usually for built-in objects "default" 
    hint is handled the same way as "number", so in practice the last two are often merged together.

    The conversion algorithm is:

        Call obj[Symbol.toPrimitive](hint) if the method exists,
        Otherwise if hint is "string"
            try obj.toString() and obj.valueOf(), whatever exists.
        Otherwise if hint is "number" or "default"
            try obj.valueOf() and obj.toString(), whatever exists.

    In practice, it’s often enough to implement only obj.toString() as a “catch-all” method for all 
    conversions that return a “human-readable” representation of an object, for logging or debugging purposes.

*/

function newPerson(name, age){
    this.name = name;
    this.age = age;

    this[Symbol.toPrimitive] = function(hint){
        alert("Symbol.toPrimitive is called");
        return hint == 'string' ? `Name: ${this.name}` : this.age;
    }

    this.toString = function(){
        alert("toString has been called!");
        return this[Symbol.toPrimitive]('string');
    }

    this.valueOf = function(){
        alert("valueOf has been called!");
        return this[Symbol.toPrimitive]('number');
    }
    
}

let person = new newPerson("John", 19);
alert(+person);
alert(person);
alert(person.toString());
alert(person.valueOf());
