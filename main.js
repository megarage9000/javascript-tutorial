// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/


"use strict"

// Methods of primitives

/*
    Summary from website: 

    - There are 3 types of quotes. Backticks allow a string to span multiple lines and embed expressions ${…}.
    
    - Strings in JavaScript are encoded using UTF-16.
    
    - We can use special characters like \n and insert letters by their unicode using \u....
    
    - To get a character, use: [].
    
    - To get a substring, use: slice or substring.
    
    - To lowercase/uppercase a string, use: toLowerCase/toUpperCase.
    
    - To look for a substring, use: indexOf, or includes/startsWith/endsWith for simple checks.
    
    - To compare strings according to the language, use: localeCompare, otherwise they are compared by character codes.

    There are several other helpful methods in strings:

        str.trim() – removes (“trims”) spaces from the beginning and end of the string.
        str.repeat(n) – repeats the string n times.
        …and more to be found in the manual.

    Strings also have methods for doing search/replace with regular expressions. But that’s big topic, 
    so it’s explained in a separate tutorial section Regular expressions.

    - IN SUMMARY... view the manual.
*/

// - Uppercase First Letter
// function ucFirst(word){
//     if(!word) return word;
//     let result = 
//         word[0].toUpperCase()
//          + word.slice(0, word.length - 1);
//     return result;
// }

// let word = prompt("Enter a word");
// alert(ucFirst(word));

// - Check for Spam
// - use the newer .includes()
// function checkSpam(sourceString){

//     let newSource = sourceString.toLowerCase();
//     let isSpam = newSource.includes('xxx') || newSource.includes('viagra');

//     return isSpam;
// }

// alert(checkSpam('buy ViAgRA now') == true);
// alert(checkSpam('free xxxxx') == true);
// alert(checkSpam('Cool guys don\'t have sex') == false);

