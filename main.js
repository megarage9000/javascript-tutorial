// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Classes

/**
 * The basic class syntax looks like this:

    class MyClass {
        prop = value; // property
        // - Note, not in MyClass.prototype!

        constructor(...) { // constructor
            // ...
        }

        method(...) {} // method

        get something(...) {} // getter method
        set something(...) {} // setter method

        [Symbol.iterator]() {} // method with computed name (symbol here)
        // ...
    }

    MyClass is technically a function (the one that we provide as constructor), 
    while methods, getters and setters are written to MyClass.prototype.

    In the next chapters we’ll learn more about classes, including inheritance and other features.
 */

// Rewrite Clock to class
// function Clock({ template }) {
  
//     let timer;

//     function render() {
//         let date = new Date();

//         let hours = date.getHours();
//         if (hours < 10) hours = '0' + hours;

//         let mins = date.getMinutes();
//         if (mins < 10) mins = '0' + mins;

//         let secs = date.getSeconds();
//         if (secs < 10) secs = '0' + secs;

//         let output = template
//         .replace('h', hours)
//         .replace('m', mins)
//         .replace('s', secs);

//         console.log(output);
//     }

//     this.stop = function() {
//         clearInterval(timer);
//     };

//     this.start = function() {
//         render();
//         timer = setInterval(render, 1000);
//     };
  
//   }

class Clock {

    constructor({template}){
        this.template = template;
    }

    get template(){
        return this._template;
    }

    set template(newTemplate){
        this._template = newTemplate;
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
    
    stop(){
        clearInterval(this.timer);
    }

    start(){
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

}

let clock = new Clock({template: 'h:m:s'});
clock.start();

// class version

