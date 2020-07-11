// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Symbols 
/*
    Summary taken off the lecture:

    Symbol is a primitive type for unique identifiers.

    Symbols are created with Symbol() call with an optional description (name).

    Symbols are always different values, even if they have the same name. If we want same-named 
    symbols to be equal, then we should use the global registry: Symbol.for(key) returns (creates if needed) 
    a global symbol with key as the name. Multiple calls of Symbol.for with the same key return exactly the same symbol.

    Symbols have two main use cases:

        “Hidden” object properties. If we want to add a property into an object that “belongs” to another script or a library, 
        we can create a symbol and use it as a property key. A symbolic property does not appear in for..in, so it won’t be 
        accidentally processed together with other properties. Also it won’t be accessed directly, because another script does 
        not have our symbol. So the property will be protected from accidental use or overwrite.

        So we can “covertly” hide something into objects that we need, but others should not see, using symbolic properties.

        There are many system symbols used by JavaScript which are accessible as Symbol.*. We can use them to alter some built-in 
        behaviors. For instance, later in the tutorial we’ll use Symbol.iterator for iterables, Symbol.toPrimitive to setup object-to-primitive conversion and so on.

    Technically, symbols are not 100% hidden. There is a built-in method Object.getOwnPropertySymbols(obj) that allows us 
    to get all symbols. Also there is a method named Reflect.ownKeys(obj) that returns all keys of an object including symbolic ones. So they 
    are not really hidden. But most libraries, built-in functions and syntax constructs don’t use these methods.

    - Symbols are essentially unique identifiers that allow us to assign unique properties within Object, especially if they are hidden.
    They are not strings and shouldn't be used as such, but as a unique identifier

    - Syntax:
        - let variable = Symbol("[description of symbol]");
        - global symbol: let variable = Symbol.for("[description for symbol]");

*/

