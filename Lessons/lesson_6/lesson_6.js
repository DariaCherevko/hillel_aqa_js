for (let i = 1; i <= 5; i++) {
    console.log(i);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
};



// function

const price = 6;
let procent = price * 0.2;
let finalPrice = price + procent;
console.log(`Price: ${finalPrice} usd`);

// function declaration
// !!!!! can be called before declaration !!!!
function calculateFinalPrice(price) {
    let procent = price * 0.2;
    let finalPrice = price + procent;
    return finalPrice;
}
console.log(calculateFinalPrice(88)); // return -> allows us to reuse this valuen in other parts of code


function greet() {
    console.log('Hello!');
}
greet(); // function return value but you can use it without return value

const price2 = calculateFinalPrice(100);
console.log(price2);

// call before declaration
greet()
function greet() {
    console.log('Hello!');
}


// function expression, can be called only after declaration
const hello = function () {
    console.log('Hello!');
}
hello(); // function return value but you can use it without return value

const price3 = function (a, b) {
    return a - b;
}
console.log(price3(100, 20));

// arrow function
const price4 = (a, b) => {
    return a - b;
}

console.log(price4(100, 10));


// call function without parameters
const greet2 = () => {
    console.log('Hello!');
}

function Hello(name = "guest") {
    console.log(`Hello ${name}`);
}
Hello();
Hello("John", "Doe"); // only first parameter will be used



//rest parameters
function sum(a, b, ...numbers) {
    console.log(numbers)
}
sum(1, 2, 3, 4, 5);

//
function sum2(a, b) {
    console.log(a + b);
}
let result = sum2(1, 2);
console.log(result);// undefined because function doesn't return any value

function sum3(a, b) {
    console.log("a + b");
    return a + b;
    console.log("this line will not be executed because return stops function execution");
}
let result2 = sum3(1, 2);
console.log(`Result: ${result2}`);// 3, `return` return the value and we can use it in other parts of code
// after `return` function stops executing


// Types of Scope

let globalVar = "_I am a global variable";

function myFunction() {
    console.log(globalVar); // Accessible here
}
myFunction();
console.log(globalVar); // Accessible here as well

//function scope
function outerFunction() {
    let outerVar = "I am an outer variable";
    console.log(outerVar); // Accessible here
}
outerFunction();
console.log(outerFunction); // 



//block scope
if (true) {
    let blockVar = "I am a block variable";
    console.log(blockVar); // Accessible here
}
console.log(blockVar); // ReferenceError: blockVar is not defined


function outer() {
    const msg = "text";
    function inner() {
        console.log(msg); // Accessible here
        const innerVar = "I am an inner variable";
    }
    inner();
}
outer();


function accessDenied(age) {
    if (age < 18) {
        console.log("Access denied");
    } else {
        console.log("Access granted");
    }
}
accessDenied(16); // "Access denied"
accessDenied(20); // "Access granted"

// in case we have a lot of conditions we can use early return to avoid nested if statements, 
// to ckeck firstly negative conditions and return early
function biletAc(age, ticket) {
    if (!ticket) {
        console.log("No ticket");
        return
    }
    if (age < 18) {
        console.log("Access denied age <18");
        return
    }
    console.log("Access granted; age>18 + ticket");
}

biletAc(16, true); // "Access denied age <18"
biletAc(20, false);  // "No ticket"
biletAc(20, true);  // "Access granted; age>18 + ticket" 



//call stack
function firstFunction() {
    console.log("First function");
    secondFunction()
    console.log("end of first function");
}


function secondFunction() {
    console.log("Second function");
    thirdFunction();
    console.log("end of second function");
}

function thirdFunction() {
    console.log("Third function");

}

firstFunction(); // "First function" -> "Second function" -> 
// "Third function" -> "end of second function" -> "end of first function"


// infinite recursion
function repeat() {
    repeat();
}
repeat(); // "Maximum call stack size exceeded" because function calls itself infinitely

//always need to have a base case to stop recursion

function countdown(n) {
    if (n <= 0) {
        console.log("Countdown finished!");
        return;
    }
    console.log(n);
    countdown(n - 1);
}

countdown(5); // 5 -> 4 -> 3 -> 2 -> 1 -> "Countdown finished!"

function countdown(n) {
    if (n === 6) {
        console.log("Countdown finished!");
        return;
    }
    console.log(n);
    countdown(n + 1);
}
countdown(0); // 0 -> 1 -> 2 -> 3 -> 4 -> 5 -> "Countdown finished!"


//домашку 3 задание сделать через раний возврат