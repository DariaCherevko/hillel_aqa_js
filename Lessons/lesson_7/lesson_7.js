// call back
function sayHello() {
    console.log("Hello");
}

function executeCallback(callback) {
    callback();
}
executeCallback(sayHello); // This will print "Hello" to the console


// call back with parameters
function sayHello(name) {
    console.log("Hello, " + name);
}

function executeCallback(callback, name) {
    callback(name);
}

executeCallback(sayHello, "Alice"); // This will print "Hello, Alice" to the console

// calback is the name of parameter. then we can pass any function as a parameter to another function. 
// This is called a callback function


function add(a, b) {
    return a + b;
}
function sub(a, b) {
    return a - b;
}

function executeOperation(operation, a, b) {
    return operation(a, b);
}

console.log(executeOperation(add, 5, 3)); // This will return 8
console.log(executeOperation(sub, 5, 3)); // This will return 2

//call back with arrow function
function calculate(a, b, operation) {
    return operation(a, b);
}
const result1 = calculate(5, 3, (a, b) => {
    return a + b;
});

const result2 = calculate(2, 4, (a, b) => a + b); // Using an arrow function as a callback
console.log(result1); // This will return 8
console.log(result2); // This will return 6



/// HOF (function that takes another function as an argument or returns a function as a result)
function calculate(a, b, operation) {
    return operation(a, b);
}
function add(a, b) {
    return a + b;
}
console.log(calculate(5, 3, add)); // This will return 8

//почитать разниці хоф и колбєка

// Anonymous function often used as a callback function

function sayHello() {
    console.log("Hello"); // function declaration
}
sayHello(); // This will print "Hello" to the console

///
function () {
    console.log("Hello"); // This is an anonymous function
}

///
const sayHello1 = function () {
    console.log("Hello"); // function expression where we call anonymous function and assign it to a variable
};
console.log(sayHello1); // This will print the function definition to the console

// example of using an anonymous function as a callback
setTimeout(function () {
    console.log("Hello after 2 seconds");
}, 2000); // This will print "Hello after 2 seconds" to the console after 2 seconds



// Immediately Invoked Function Expression (IIFE)
(function () {
    console.log("Hello from an IIFE"); // This is an Immediately Invoked Function Expression (IIFE)
})(); // This will print "Hello from an IIFE" to the console immediately

//iife with arrow function
(() => {
    console.log("Hello from an IIFE using arrow function"); // This is an Immediately Invoked Function Expression (IIFE) using arrow function
})(); // This will print "Hello from an IIFE using arrow function" to the console immediately

// IIFE with parameters
(function (name) {
    console.log("Hello, " + name); // This is an Immediately Invoked Function Expression (IIFE) with a parameter
})("Alice"); // This will print "Hello, Alice" to the console immediately


// IIFE that returns a value
const result = (function (a, b) {
    return a + b; // This is an Immediately Invoked Function Expression (IIFE) that returns a value
})(5, 10); // This will return 15
console.log(result); // This will print 15 to the console


// Closure
function outer() {
    const message = "Hello from the outer function";

    function inner() {
        console.log(message); // This is a closure that has access to the outer function's variables
    }
    return inner;
}
const showMessage = outer(); // This will return the inner function
showMessage(); // This will print "Hello from the outer function" to the console    


// Closure with parameters
function createGreeting(name) {
    return function () {
        console.log("Hello, " + name); // This is a closure that has access to the outer function's variables
    };
}
const greetAlice = createGreeting("Alice"); // This will return the inner function
greetAlice(); // This will print "Hello, Alice" to the console  

// !!read more about closure and how it works in javascript.


// Closure with private variables
function createCounter() {
    let count = 0; // This variable is private to the createCounter function    

    return function () {
        count++; // This is a closure that has access to the outer function's variables
        console.log(count); // This will print the current count to the console
    };
}
const counter = createCounter(); // This will return the inner function
counter();
counter();
counter(); // This will print 1, 2, 3 to the console respectively

const counter2 = createCounter(); // This will return a new inner function with its own private variable
counter2();
counter2(); // This will print 1, 2 to the console respectively



// Fabric function that returns a function
function multiply(a, b) {
    return function () {
        return a * b; // This is a closure that has access to the outer function's variables
    };
}

const multiplyBy2 = multiply(2, 3); // This will return the inner function
console.log(multiplyBy2()); // This will print 6 to the console

const multiplyBy3 = multiply(3, 4); // This will return a new inner function with its own private variable
console.log(multiplyBy3()); // This will print 12 to the console


// керування 
function add(a, b) {
    return function (b) {
        return a + b; // This is a closure that has access to the outer function's variables
    };
}
console.log(add(5)(10)); // This will print 15 to the console

// !!!!!compose function
const addOne = (Number) => Number + 1;
const multiplyByTwo = (Number) => Number * 2;
const firstresult = addOne(5); // This will return 6

console.log(firstresult); // This will print 6 to the console

const finalresult = multiplyByTwo(firstresult);
console.log(finalresult); // This will print 12 to the console


// try catch, to handle errors in javascript

function showUser() {
    try {
        console.log(UserName); // This will throw an error because UserName is not defined
    } catch (error) {
        console.log("An error occurred: " + error.message); // This will print the error message to the console
    }
}

showUser(); // This will print "An error occurred: UserName is not defined" to the console
console.log("The program continues to run..."); // This will print "The program continues to run..." to the console


// throw error
function divide(a, b) {
    if (b === 0) {
        throw new Error("Division by zero is not allowed"); // This will throw an error if b is 0
    }
    return a / b;
}
try {
    const result = divide(10, 0); // This will throw an error
    console.log(result);
} catch (error) {
    console.log(error.message);
}
console.log(divide(10, 2)); // This will return 5


// finally block
function devide(a, b) {
    try {
        if (b === 0) {
            throw new Error("Division by zero is not allowed"); // This will throw an error if b is 0
            console.log("This line will not be executed because an error was thrown."); // This line will not be executed
        }
        return a / b;
    } catch (error) {
        console.log(error.message);
    } finally {
        console.log("The divide function has completed execution."); // This will always be executed
    }
}
devide(10, 0); // This will throw an error and print the error message to the console
devide(10, 2); // This will return 5 and print "The divide function has completed execution." to the console


//recursion. call a function from itself.
function add(number){
    console.log(number);
    return add();
}
add(5) // This will print 5 to the console and then call the add function again, resulting in an infinite loop.

//recursion should have a base case to stop the recursion. For example:
function add(number){
    if(number <= 0){   
        return 0; // This is the base case that stops the recursion
    }
    console.log(number);
    return add(number - 1); // This will call the add function again with a decremented value of number
}
add(5) // This will print 5 to the console and then call the add function again, resulting in an infinite loop.