// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/


"use strict"

// Arrays

/*
    Summary from website: 

    A cheat sheet of array methods:

    1. To add/remove elements:
        a. push(...items) – adds items to the end,

        b. pop() – extracts an item from the end,

        c. shift() – extracts an item from the beginning,

        d. unshift(...items) – adds items to the beginning.

        e. splice(pos, deleteCount, ...items) – at index pos 
        delete deleteCount elements and insert items.

        f. silce(start, end) – creates a new array, copies 
        elements from position start till end (not inclusive) into it.

        g. concat(...items) – returns a new array: copies all members 
        of the current one and adds items to it. If any of items is an 
        array, then its elements are taken.

    2. To search among elements:
        a. indexOf/lastIndexOf(item, pos) – look for item starting from 
        position pos, return the index or -1 if not found.
        
        b. includes(value) – returns true if the array has value, 
        otherwise false.
        
        c. find/filter(func) – filter elements through the function, return 
        first/all values that make it return true.
        
        d. findIndex is like find, but returns the index instead of a value.

    3. To iterate over elements:
        a. forEach(func) – calls func for every element, does not return 
        anything.

    4. To transform the array:
        a. map(func) – creates a new array from results of calling func for 
        every element.
        
        b. sort(func) – sorts the array in-place, then returns it.
        
        c. reverse() – reverses the array in-place, then returns it.
        
        d. split/join – convert a string to array and back.
        
        e. reduce(func, initial) – calculate a single value over the array by 
        calling func for each element and passing an intermediate result 
        between the calls.

    Additionally:
        Array.isArray(arr) checks arr for being an array.

    Please note that methods sort, reverse and splice modify the array itself.

    These methods are the most used ones, they cover 99% of use cases. 
    But there are few others:

        arr.some(fn)/arr.every(fn) checks the array.

        The function fn is called on each element of the array similar to map. 
        If any/all results are true, returns true, otherwise false.

        arr.fill(value, start, end) – fills the array with repeating value from index start to end.

        arr.copyWithin(target, start, end) – copies its elements from position start 
        till position end into itself, at position target (overwrites existing).

    For the full list, see the manual. From the first sight it may seem that there are so many methods, 
    quite difficult to remember. But actually that’s much easier. Look through the cheat sheet just to be 
    aware of them. Then solve the tasks of this chapter to practice, so that you have experience with array methods.
    Afterwards whenever you need to do something with an array, and you don’t know how – come here, look at 
    the cheat sheet and find the right method. Examples will help you to write it correctly. Soon you’ll automatically
    remember the methods, without specific efforts from your side

*/  

// - Camelize
// - string slice only needs the beginning index, assumes empty is until last position
// function camelize(stringSource){
//     let strArray = stringSource.split("-");
//     let result = strArray.map(
//         (word, index) => index === 0 ? word : word[0].toUpperCase() + word.slice(1));
//     return result.join("");
        
// }

// alert(camelize("background-color") == 'backgroundColor');
// alert(camelize("list-style-image") == 'listStyleImage');
// alert(camelize("-webkit-transition") == 'WebkitTransition');

// - Filter Range && Filter Range In Place
// function filterRange(arr, min, max){
//     return arr.filter(
//         item => (item >= min && item <= max)
//     );
// }

// function filterRangeInPlace(arr, min, max){
    
//     for(let i = 0; i < arr.length; i ++){
//         let value = arr[i];
//         if(value < min || value > max){
//             arr.splice(i, 1);
//             i--;
//         }
//     }
// }
// let arr = [5, 3, 8, 1];
// let filtered = filterRange(arr, 1, 4);
// alert( filtered ); // 3,1 (matching values)
// alert( arr ); // 5,3,8,1 (not modified)
// filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
// alert( arr ); // [3, 1]

// - Map to names

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [ john, pete, mary ];

// let names = users.map(
//     value => value.name
// );

// alert( names ); // John, Pete, Mary

// - Map to Objects

// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };

// let users = [ john, pete, mary ];


// let usersMapped = users.map(
//     user => ({ // wrap around additional () to treat as an object, not a function
//         fullName: user.name + " " + user.surname,
//         id: user.id,
//     })
// );

// /*
// usersMapped = [
//   { fullName: "John Smith", id: 1 },
//   { fullName: "Pete Hunt", id: 2 },
//   { fullName: "Mary Key", id: 3 }
// ]
// */

// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullName ) // John Smith

// // - Unique Array
// function unique(arr) {
    
//     return arr.filter( // checks the first occurence of the item, if it doesn't
//                        // match the current index, don't take it in
//                        // - from a comment!
//         (item, index) => arr.indexOf(item) === index
//     );
    
// }
  
// let strings = ["Hare", "Krishna", "Hare", "Krishna",
// "Krishna", "Krishna", "Hare", "Hare", ":-O"
// ];

// alert( unique(strings) ); // Hare, Krishna, :-O

// - Keyed object from array
// function groupById(array){
//     let result = array.reduce(
//         (object, value) =>
//         { 
//             // from website solution!
//             object[value.id] = value
//             return object
//         }, {}
//     )
//     return result;
// }
// let users = [
//     {id: 'john', name: "John Smith", age: 20},
//     {id: 'ann', name: "Ann Smith", age: 24},
//     {id: 'pete', name: "Pete Peterson", age: 31},
//   ];
  
//   let usersById = groupById(users);
//   alert(usersById);
//   /*
//   // after the call we should have:
  
//   usersById = {
//     john: {id: 'john', name: "John Smith", age: 20},
//     ann: {id: 'ann', name: "Ann Smith", age: 24},
//     pete: {id: 'pete', name: "Pete Peterson", age: 31},
//   }
//   */