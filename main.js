// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Constructor, operator new
/*
    Summary taken off the lecture:

    Constructor functions or, briefly, constructors, are regular functions, but there’s a common agreement to name them with capital letter first.

    Constructor functions should only be called using new. Such a call implies a creation of empty this at the start and returning the populated one at the end.

    - new.Target allows us to determine whether the functions is called as a constructor or as a regular function

    - When returning from a constructor function:
        - if constructor returns an object, it returns that object
        - if constructor returns primitive, it is ignored
        - else, constructore returns this

*/

// Accumulator challenge

function Accumulator(initialValue){
    this.value = initialValue;
    this.read = function(){
        while(true){
            let input = +prompt("Enter a user value: ");
            if(!isNaN(input)){
                this.value += input;
                break;
            }
            else{
                alert("Wrong typing!");
            }
        }
    }
}

let accumulator = new Accumulator(1); // initial value 1

accumulator.read(); // adds the user-entered value
accumulator.read(); // adds the user-entered value

alert(accumulator.value); // shows the sum of these values

