// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Scheduling: Decorator
/*
    Summary on website
    
    - Decorator is a wrapper around a function that alters its behavior. The main 
    job is still carried out by the function.

    - Decorators can be seen as “features” or “aspects” that can be added to a function. 
    We can add one or add many. And all this without changing its code!

    - To implement cachingDecorator, we studied methods:

        1. func.call(context, arg1, arg2…) – calls func with given context and arguments.
        
        2. func.apply(context, args) – calls func passing context as this and array-like
        args into a list of arguments.

    - The generic call forwarding is usually done with apply:

        let wrapper = function() {
        return original.apply(this, arguments);
        };

        We also saw an example of method borrowing when we take a method from an object and call 
        it in the context of another object. It is quite common to take array methods and apply them 
        to arguments. The alternative is to use rest parameters object that is a real array. 
    
    There are many decorators there in the wild. Check how well you got them by solving the tasks of this chapter.

*/

// - Spy Decorator
function work(a, b) {
    alert( a + b ); // work is an arbitrary function or method
}

function spy(func){

    // Create a wrapper that takes in variable
    // arguments
    function spyWrapper(...arguments){
        spyWrapper.calls.push(arguments);
        return func.apply(this, arguments);
    };

    // initialize calls to empty array
    spyWrapper.calls = []
    return spyWrapper;
    
}

// work = spy(work);

// (work(1, 2)); // 3
// (work(4, 5)); // 9

// for (let args of work.calls) {
//     alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

// - Delaying Decorator
function f(x) {
    alert(x);
}

function delay(func, delay){

    // Create a function,
    // - use func.call to refer to
    // x of function()
    return function(x){
        setTimeout(() => func.call(this, x), delay);
    };

}
// create wrappers
let f1000 = delay(f, 4000);
let f1500 = delay(f, 8000);

f1000("test"); // shows "test" after 1000ms
f1500("test"); // shows "test" after 1500ms

// - Debounce decorator / Throttle decorator
function exampleFunction(something){
    alert("I have awoken " + something + "!");
}

function debounce(func, delay){
    let id;
    
    // Call func.apply(this, arguments)
    // since we can access arguments regardless
    // if the provided function has provided them 
    // or not.
    return function(){
        clearTimeout(id);
        // reset timer and start again
        id = setTimeout(() => func.apply(this, arguments), delay);
    };
}

function throttle(func, ms) {

    // A determiner if method
    // was throttled or not
    let isThrottled = false,
        savedArgs,
        savedThis;

    function wrapper() {

        // If throttled, save recent arguments
        // and this
        if (isThrottled) { // (2)
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        // immediately call this if no throttle
        func.apply(this, arguments); // (1)

        // apply throttle timer
        isThrottled = true;
          setTimeout(function() {
            isThrottled = false; // (3)
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
                }
        }, ms);
    }

    return wrapper;
}

// let newFunc = debounce(exampleFunction, 1000);
// setTimeout(newFunc("John"), 500);
// setTimeout(newFunc("Josh"), 700);