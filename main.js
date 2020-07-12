// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/


"use strict"

// Iterable

/*
 
Summary from website: 

Map – is a collection of keyed values.

    Methods and properties:

        - new Map([iterable]) – creates the map, with optional iterable (e.g. array) of 
        [key,value] pairs for initialization.
        
        - map.set(key, value) – stores the value by the key.
        
        - map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
        
        - map.has(key) – returns true if the key exists, false otherwise.
        
        - map.delete(key) – removes the value by the key.
        
        - map.clear() – removes everything from the map.
        
        - map.size – returns the current element count.

    The differences from a regular Object:

        Any keys, objects can be keys.
        Additional convenient methods, the size property.

    Set – is a collection of unique values.

    Methods and properties:

        - new Set([iterable]) – creates the set, with optional iterable (e.g. array) of values for initialization.
        
        - set.add(value) – adds a value (does nothing if value exists), returns the set itself.
        
        - set.delete(value) – removes the value, returns true if value existed at the moment of the call, otherwise false.
        
        - set.has(value) – returns true if the value exists in the set, otherwise false.
        
        - set.clear() – removes everything from the set.
        
        - set.size – is the elements count.

    Iteration over Map and Set is always in the insertion order, so we can’t say that 
    these collections are unordered, but we can’t reorder elements or directly get an element by its number.
*/

// - Filter Unique array members

// function unique(arr) {
//     // Creates a new array, from a new set from the arr parameter
//     // array -> set -> array
//     return Array.from(new Set(arr));
//   }
  
//   let values = ["Hare", "Krishna", "Hare", "Krishna",
//     "Krishna", "Krishna", "Hare", "Hare", ":-O"
//   ];
  
//   alert( unique(values) ); // Hare, Krishna, :-O

// - Filter Unique Anagrams

// function aclean(arr){
    // - solution from website
//     let newSet = new Set();

//     for(let word of arr){
//         let newWord = word
//             .toLowerCase()
//             .split('')
//             .sort()
//             .join('');
//         newSet.add(newWord);
//     }
//     return Array.from(newSet);
// }

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"