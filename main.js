// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/


"use strict"

// WeakMap & WeakSet

/*
    Summary from website:

    - WeakMap is Map-like collection that allows only objects as keys and 
    removes them together with associated value once they become 
    inaccessible by other means.

    - WeakSet is Set-like collection that stores only objects and removes 
    them once they become inaccessible by other means.

    - Both of them do not support methods and properties that refer to 
    all keys or their count. Only individual operations are allowed.

    - WeakMap and WeakSet are used as “secondary” data structures in 
    addition to the “main” object storage. Once the object is removed 
    from the main storage, if it is only found as the key of WeakMap or 
    in a WeakSet, it will be cleaned up automatically.
*/

// - Store unread messages:
let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
];

let readMessages = new WeakSet();
function readMessage(message){
    readMessages.add(message);
}

// - Store date of read messages: 
let dateOfReadMessages = new WeakMap();
function getDateOfReadMessage(message){
    dateOfReadMessages.set(message, "2020 baby");
}