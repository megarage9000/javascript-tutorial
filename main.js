// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Class Inheritence

/**
 * Summary
 *
 *  - classes can inherit from other classes via extend
 *      - syntax = class [child] extends [parent]
 * 
 *  - you can use super to overide methods of a class
 *      - for constructors, super must be the first line of a class
 *      if it inherits from another class     
 *  
 *  - class methods remember their object (their 'this') via internal [[HomeObject]] property
 *      - used to help resolve plenty of 'super' issues
 *      - for objects, the only way for methods to gain this property is by the
 *      normal syntax func(), not func : function()
 *      - not safe to copy method from one object to another if it contains super
 **/


 // Error: creating an instance
 class Animal {

    constructor(name) {
        this.name = name;
    }

}

class Rabbit extends Animal {
    constructor(name) {
        super(name); // solution, call super() first
        this.name = name;
        this.created = Date.now();
    }
}
  
let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
// alert(rabbit.name);

// Extended Clock

class Clock {
    constructor({ template }) {
      this.template = template;
    }
  
    render() {
        let date = new Date();
    
        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;
    
        let mins = date.getMinutes();
        if (mins < 10) mins = '0' + mins;
    
        let secs = date.getSeconds();
        if (secs < 10) secs = '0' + secs;
    
        let output = this.template
            .replace('h', hours)
            .replace('m', mins)
            .replace('s', secs);
    
        console.log(output);
    }
  
    stop() {
        clearInterval(this.timer);
    }
  
    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}
// solution from site, doesn't work though?
class ExtendedClock extends Clock {
    constructor(clockProperties){
        super(clockProperties);
        // Destructuring the passed in object
        let {newPrecision = 1000} = clockProperties;
        this.precision = newPrecision;
    }

    get precision(){
        return this._precision;
    }

    set precision(newPrecision){
        this._precision = newPrecision;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), this.precision);
    }
};

// clock = new ExtendedClock('h:m:s', 2000);
// clock.start()