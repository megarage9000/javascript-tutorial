// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Object this, methods

/*
    Summary taken off the lecture:

    
    Functions that are stored in object properties are called “methods”.
    Methods allow objects to “act” like object.doSomething().
    Methods can reference the object as this.

    The value of this is defined at run-time.

    When a function is declared, it may use this, but that this has no value until the function is called.
    A function can be copied between objects.
    When a function is called in the “method” syntax: object.method(), the value of this during the call is object.

    Please note that arrow functions are special: they have no this. When this is accessed inside an arrow function, it is taken from outside.
*/

let calculator = {
    operand1: 0,
    operand2: 0,
    read(){
        this.operand1 = +prompt("Enter a value for operand 1: ");
        this.operand2 = +prompt("Enter a value for operand 2: ");
    },
    sum(){
        return this.operand1 + this.operand2;
    },
    mul(){
        return this.operand1 * this.operand2;
    },
};

// adding "return this" in a method of an object returns
// the reference of that object. This allows for chaining
let ladder = {
    step: 0,
    up() {
      this.step++;
      return this;
    },
    down() {
      this.step--;
      return this;
    },
    showStep: function() { // shows the current step
      alert( this.step );
      return this;
    }
  };

calculator.read();
alert(calculator.sum());
alert(calculator.mul());

ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1