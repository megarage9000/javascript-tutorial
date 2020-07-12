// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Scheduling: Decorator
/*
    Summary on website
    
    Method func.bind(context, ...args) returns a “bound variant” of function func that fixes the context this and first arguments if given.

    Usually we apply bind to fix this for an object method, so that we can pass it somewhere. For example, to setTimeout.

    When we fix some arguments of an existing function, the resulting (less universal) function is called partially applied or partial.

    Partials are convenient when we don’t want to repeat the same argument over and over again. Like if we have a send(from, to) function, and from should always be the same for our task, we can get a partial and go on with it.
*/

// What will this output?
// - null, since it is set in user g: f.bind(null)
// function f() {
//     alert( this ); // ?
// }

// let user = {
//     g: f.bind(null)
// };
  
// user.g();


// Second bind
// - ouputs only John
/*
    bind is an exotic function that only remembers context
    and arguments at creation time, thus it can't be 
    rebinded.
*/
// function f() {
//     alert(this.name);
// }
  
// f = f.bind( {name: "John"} ).bind( {name: "Ann" } );

// f();



// Function property after bind
// - outputs undefined
/*
    bound is a new function object of sayHi with binded
    object with name : "John". Since the original
    sayHi didn't include a .test property, bound doesn't
    have it
*/
// function sayHi() {
//     alert( this.name );
// }

// sayHi.test = 5;

// let bound = sayHi.bind({
//     name: "John"
// });

// alert( bound.test ); // what will be the output? why?


// Fix a function that loses "this"
// function askPassword(ok, fail) {
//     let password = prompt("Password?", '');
//     if (password == "rockstar") ok();
//     else fail();
// }

// let user = {
//     name: 'John',

//     loginOk() {
//         alert(`${this.name} logged in`);
//     },

//     loginFail() {
//         alert(`${this.name} failed to log in`);
//     },
// };

// // trying to pass in the loginOk/loginFail as methods.
// // When called in askPassword they lose their "this", thus
// // pre binding is needed on these functions
// askPassword(user.loginOk.bind(user), user.loginFail.bind(user));

function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}
  
let user = {
    name: 'John',
  
    login(result) {
        alert( this.name + (result ? ' logged in' : ' failed to log in') );
    }
};

/*
    Given that the login function requires a boolean argument means we also
    have to bind it as well, thus we bind the user context with the corresponding
    truth value.
*/
askPassword(user.login.bind(user, true), user.login.bind(user, false));