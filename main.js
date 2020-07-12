// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Function Objects, NFE -> New Function()
/*
    Summary on website
    [Function Objects, NFE]:

        Functions are objects.

        Here we covered their properties:

            1. name – the function name. Usually taken from the function definition, 
            but if there’s none, JavaScript tries to guess it from the context (e.g. an assignment).

            2. length – the number of arguments in the function definition. Rest parameters are not counted.

        If the function is declared as a Function Expression (not in the main code flow), and it carries the name, 
        then it is called a Named Function Expression. The name can be used inside to reference itself, for recursive calls or such.
        
        Also, functions may carry additional properties. Many well-known JavaScript libraries make great use of this feature.
        They create a “main” function and attach many other “helper” functions to it. For instance, the
        jQuery library creates a function named $. The lodash library creates a function _, and then adds _.clone,
        _.keyBy and other properties to it (see the docs when you want learn more about them). Actually, they do it to 
        lessen their pollution of the global space, so that a single library gives only one global variable. That reduces 
        the possibility of naming conflicts.

        So, a function can do a useful job by itself and also carry a bunch of other functionality in properties.

    [New Function]:

        The syntax:

            let func = new Function ([arg1, arg2, ...argN], functionBody);

        For historical reasons, arguments can also be given as a comma-separated list.

        These three declarations mean the same:

        new Function('a', 'b', 'return a + b'); // basic syntax
        new Function('a,b', 'return a + b'); // comma-separated
        new Function('a , b', 'return a + b'); // comma-separated with spaces

        Functions created with new Function, have [[Environment]] referencing the global 
        Lexical Environment, not the outer one. Hence, they cannot use outer variables. 
        But that’s actually good, because it insures us from errors. Passing parameters 
        explicitly is a much better method architecturally and causes no problems with minifiers.

*/

// - Set and Decrease Counter 
// Solution on website!
function makeCounter() {
    
    let count = 0;

    function counter(){
        return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
    // ... your code ...
}
  
let counter = makeCounter();

alert( counter() ); // 0
alert( counter() ); // 1

counter.set(10); // set the new count

alert( counter() ); // 10

counter.decrease(); // decrease the count by 1

alert( counter() ); // 10 (instead of 11)