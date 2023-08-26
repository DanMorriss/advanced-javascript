/**
 * To run this file in Gitpod, use the 
 * command node arrow-functions.js in the terminal
 */

// Vanilla JavaScript Function
 
function addTwoNumbers1(a, b) {
    return a + b;
};

let sum1 = addTwoNumbers1(3, 5);
console.log(sum1);

// Arrow Function With Parameters

const addTwoNumbers2 = (a, b) => {
    return a + b;
};

let sum2 = addTwoNumbers2(4, 2);
console.log(sum2);

// Single Line Arrow Function With Parameters

const addTwoNumbers3 = (a, b) => a + b;

let sum3 = addTwoNumbers3(6, 7);
console.log(sum3);

// Can also wrap in ()
const addTwoNumbers4 = (a, b) => (a + b);

let sum4 = addTwoNumbers4(7, 9);
console.log(sum4);

// Implicit Returns - can remove () in only one parameter

const saySomething = message => console.log(message);
saySomething('Hello, World!');

// No parameter needs empty ()
const sayHello = () => console.log('Hello');

// Returning Multiple Lines of code must be wrapped in ()

const returnMultipleLines = () => (
    `<p>
    This is a multiline string!
    </p>`
)
console.log(returnMultipleLines());