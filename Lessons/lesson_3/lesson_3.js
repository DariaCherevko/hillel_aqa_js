console.log("Hello"); //to run the code-> use terminal with request `node [path]`e.g. Lessons/lesson_3/lesson_3.js or use run code

import chalk from 'chalk';
console.log(chalk.blue('Hello World!'));

//-------//
//JS data type

//string
let userName = "Daria";
let userSurname = 'Cherevko';
console.log(`hello ${userName} ${userSurname}!`);

//number
let age = 28;
let decimal = 2.5;
let negativeNumber = -1;

//NaN
let result = 'test' * 1;
console.log(result)

//infity
console.log(10/0);

//boolean
let isAdmin = true;
let isMarried = false;

console.log(0===1);

//undefined

let phoneNumber
console.log(phoneNumber); 

phoneNumber = 56789;
console.log(phoneNumber); 


//null

let adress = null;
console.log(adress);

adress = "test local";
console.log(adress);


//symbol
let id = Symbol("id_1");
let id1 = Symbol("id_1");

console.log(id==id1) //false, as each symbol is unique identificator 

