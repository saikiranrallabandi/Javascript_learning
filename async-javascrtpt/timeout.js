/*
Timeouts and intervals --> The setTimeout() function executes a particular block of code once after a specified time has elapsed
Callbacks
Promises
async await
Event loop
*/

//setTimeout
const greet = setTimeout(() => {
    console.log(`Hello`)
}, 2000);
clearTimeout(greet);

//set interval ---> function repeatedly runs the same code over and over again at regular intervals

const repeat = setInterval(() => {
    console.log(`Hello`)
}, 2000);
clearInterval(repeat);