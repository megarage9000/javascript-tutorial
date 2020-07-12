// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/


"use strict"

// Iterable

/*
    Summary from website: 

    Objects that can be used in for..of are called iterable.

    Technically, iterables must implement the method named Symbol.iterator.
        The result of obj[Symbol.iterator] is called an iterator. It handles the further iteration process.
        An iterator must have the method named next() that returns an object {done: Boolean, value: any}, 
        here done:true denotes the end of the iteration process, otherwise the value is the next value.

    The Symbol.iterator method is called automatically by for..of, but we also can do it directly.
    Built-in iterables like strings or arrays, also implement Symbol.iterator.
    String iterator knows about surrogate pairs.

    Objects that have indexed properties and length are called array-like. Such objects may also have 
    other properties and methods, but lack the built-in methods of arrays.

    If we look inside the specification – we’ll see that most built-in methods assume that they work with 
    iterables or array-likes instead of “real” arrays, because that’s more abstract.

    Array.from(obj[, mapFn, thisArg]) makes a real Array of an iterable or array-like obj, and we can then 
    use array methods on it. The optional arguments mapFn and thisArg allow us to apply a function to each item.
*/

// An example on the website:
let range = {
    from: 1,
    to: 5,
    
    // Create a symbol iterator, and have it return itself, since
    // contains the next() function
    [Symbol.iterator]() {
      this.current = this.from;
      return this;
    },
    
    // next relies on this.current, and is determined by the
    // returning values of done and value
    next() {
      if (this.current <= this.to) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    }
  };
  
  for (let num of range) {
    alert(num); // 1, then 2, 3, 4, 5
  }