// This is important
/* Manual and Specifications: https://javascript.info/manuals-specifications*/

// Scheduling: setTimeout / setInterval
/*
    Summary on website
    
    1. Methods setTimeout(func, delay, ...args) and setInterval(func, delay, ...args) 
    allow us to run the func once/regularly after delay milliseconds.
    
    2. To cancel the execution, we should call clearTimeout/clearInterval with 
    the value returned by setTimeout/setInterval.
    
    3. Nested setTimeout calls are a more flexible alternative to setInterval, a
    llowing us to set the time between executions more precisely.
    
    4. Zero delay scheduling with setTimeout(func, 0) (the same as setTimeout(func)) is
    used to schedule the call “as soon as possible, but after the current script is complete”.
    
    5. The browser limits the minimal delay for five or more nested call of 
    setTimeout or for setInterval (after 5th call) to 4ms. That’s for historical reasons.

    Please note that all scheduling methods do not guarantee the exact delay.

    For example, the in-browser timer may slow down for a lot of reasons:

        - The CPU is overloaded.
        - The browser tab is in the background mode.
        - The laptop is on battery.

    All that may increase the minimal timer resolution (the minimal delay) 
    to 300ms or even 1000ms depending on the browser and OS-level performance settings.

*/

function printNumbersInterval(from, to){
    currentIndex = from;
    let intervalId = setInterval(function(){
        console.log(currentIndex);
        if(currentIndex < to) currentIndex++;
        else clearInterval(intervalId);
    }, 1000);
}

function printNumbersTimeout(from, to){
    currentIndex = from;
    setTimeout(function printNumbers(){
        console.log(currentIndex);
        if(currentIndex < to) {
            currentIndex++;
            setTimeout(printNumbers, 1000)
        }
    }, 1000);
}

// console.log("Interval: ");
// printNumbersInterval(1, 3);
console.log("Timeout: ");
printNumbersTimeout(1, 3);
