// javascript functions are first class objects

/*
Any function that is passed as an argument to another function is called callback function in Javascript
*/

const greet = (arg) => {
    console.log(`Hellow, ${arg}`)
}
const greetsai = (greetFn) => {
    const name = "sai"
    greetFn(name)
}
greetsai(greet);

/*
why callbacks --> synchronous, and asynchronous callbacks
A callback which is executed immediately is called a synchronous callback
An asynchronous callback is a callback that is often used to continue or resume code execution after 
an asynchronous operation has completed
callback hell is with mutiple callbacks, and to get the overcome of this promises are used
*/