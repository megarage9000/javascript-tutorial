// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// This is a single line comment.
/*
    This is a multi line comment.
    you can enter mutliple lines
*/

// "use strict" enables us to use old functionality
"use strict"

// More on functions
let randomGlobal = 20;
// Functions can be assigned to variables
let newFunc = function(){
    alert(randomGlobal);
}
// Functions can also be passed as arguments
function ageTester(ifTooOld, ifTooYoung, ageThreshold){
    while(true){  
        let ageInput = prompt("How old are you?");
        if(!isNaN(ageInput)){
            if(ageInput > ageThreshold) ifTooOld();
            else if(ageInput < ageThreshold) ifTooYoung();
            else alert("Right age!");
            return;
        }
        alert("wrong typing!");
    }
}

// you can declare functions anonymously
ageTester(
    function(){ alert("You are too old!")},
    function(){ alert("You are too young!")},
    18
)

// you can also declare functions and assign them later
let evaluateSpeedLimit;
while (true){
    let speedLimit = prompt("Enter a speed limit");
    let currentSpeedLimit = prompt("Enter your current speed limit");

    if ( (!isNaN(speedLimit)) && (!isNaN(currentSpeedLimit))) {
        if(speedLimit > currentSpeedLimit){
            evaluateSpeedLimit = function(){
                alert("You are going pretty slow man");
            }
        }
        else{
            evaluateSpeedLimit = function(){
                alert("You are on speed limit or greater, what??");
            }
        }
        break;
    }
}
evaluateSpeedLimit();
