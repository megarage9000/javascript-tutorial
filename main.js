// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Property flags and descriptors

/*
    Summary:

    - Object properties have several attributes other than value:
        1. writable: if true, the value can be changed, else not
        2. enumerable: if true, can be seen in for...in loops, else not
        3. configurable: if true, can be deleted and modify other attributes,
        else not

    - Descriptors are objects that store these attributes, you can access them
    by using Object.getOwnPropertyDescriptor(obj, propertyName)

    - You can modify these descriptors by using Object.defineProperty(obj, propertyName,
        descriptor)

    - You can define mutliple using Object.defineProperties(obj{
        prop1: descriptor,
        prop2: descriptor,
        ...
    })

    - Other methods worth mentioning:

        Property descriptors work at the level of individual properties.

        There are also methods that limit access to the whole object:

            Object.preventExtensions(obj)
                Forbids the addition of new properties to the object.
            Object.seal(obj)
                Forbids adding/removing of properties. Sets configurable: f
                alse for all existing properties.
            Object.freeze(obj)
                Forbids adding/removing/changing of properties. Sets configurable: 
                false, writable: false for all existing properties.

            And also there are tests for them:

            Object.isExtensible(obj)
                Returns false if adding properties is forbidden, otherwise true.
            Object.isSealed(obj)
                Returns true if adding/removing properties is forbidden, and all 
                existing properties have configurable: false.
            Object.isFrozen(obj)
                Returns true if adding/removing/changing properties is forbidden, and 
                all current properties are configurable: false, writable: false. 
*/