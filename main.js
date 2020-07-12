// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// The old "var"
/*
    Summary on website
    
    [The old "var"]: 

    There are two main differences of var compared to let/const:

        1. var variables have no block scope, they are visible minimum at the function level.
    
        2. var declarations are processed at function start (script start for globals).

    There’s one more very minor difference related to the global object, that we’ll cover in the next chapter.

    These differences make var worse than let most of the time. Block-level variables is such a great thing. 
    That’s why let was introduced in the standard long ago, and is now a major way (along with const) to declare a variable.

    [Global Object]:

    The global object holds variables that should be available everywhere.

    That includes JavaScript built-ins, such as Array and environment-specific values, 
    such as window.innerHeight – the window height in the browser.

    The global object has a universal name globalThis.
    …But more often is referred by “old-school” environment-specific 
    names, such as window (browser) and global (Node.js). As globalThis is a recent 
    proposal, it’s not supported in non-Chromium Edge (but can be polyfilled).

    We should store values in the global object only if they’re truly global for our project.
    And keep their number at minimum.

    In-browser, unless we’re using modules, global functions and variables declared with var 
    become a property of the global object.

    To make our code future-proof and easier to understand, we should access properties of the 
    global object directly, as window.x.

*/