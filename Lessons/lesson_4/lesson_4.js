///Variables

let a;
var b;
const color = "green";

// name of variables is sensitive
let NAME;
let name; //two different variables

//can't use the reserved name for variable => if, for, class, return, import

//let "a" can't be initiated twicely, var can; 
let A =1;
let A = 3;
console.log(A);

//Variable declaration and initialization
//let - блоковa видимість
if (true){
    let message="Hi";
}
console.log(message);

//var - функціональнa область видимості (вони видимі в межах усієї функції, а не тільки блоку коду)
if (true){
    var message="Hi";
}
console.log(message);


//Numbers in JS
let result = 0.2 + 0.6;
console.log(result.toFixed(1)); //0.8 , but .toFixed returned string

let result1 = (0.2 + 0.6).toFixed(1);
console.log(typeof result1);

let result2 = Number((0.2 + 0.6).toFixed(1));
console.log(typeof result2);

let result3 = ((0.2 * 100)  + (0.6 * 100)) /100
console.log(result3);
let value2 = "0.8";
console.log( result3 === value2)

// Math. method
let number = -4.56;
let absoluteValue = Math.abs(number); // Поверне 4.56
let squaredValue = Math.pow(3, 2); // Поверне 9 (3 в квадраті)
let roundedNumber = Math.round(5.7); // Поверне 6 (округлене до найближчого цілого)
let randomNum = Math.random(); // Поверне випадкове число між 0 та 1

let num = 12.9879;
console.log(Math.round(num)) //13

let num1 = 12.9879;
console.log(Math.round(num1*100)/100); //12.99


//string in JS
//String concatenation
let userName = "Daria";
let userSurname = "Cherevko";

let userFullName = `${userName} + ${userSurname}`;
console.log(userFullName);

let randomNumber = 1;
let randomString= "2"; // is changed to number
let result5 = randomNumber + randomString
console.log(result5);

//index
let greeting = "Hello Daria"
console.log(greeting.length);
console.log(greeting[4]);
console.log(greeting[greeting.length -1]);
console.log(greeting.toUpperCase());
console.log(greeting.includes("Hello"));


//typeof

let phoneNumber = Number("12343241");
console.log(typeof phoneNumber);
console.log(typeof NaN); //number
console.log(typeof null); // object

//string; boolean; null, numbers, undefined can be transform to string
console.log(String(12)); 

//string ;boolean, null, undefined can be transformed to number
console.log(Number("1"))//1
console.log(Number("true")) //1
console.log(Number("hello"))// nan
console.log(Number("20px"))//nan
console.log(Number(undefined))//nan
console.log(Number(null))// 0

let value = "Hi";

console.log(Number.isNaN(value))// check the value is number or not
console.log("10"+2); //concotanation => 102
console.log("10"-2); // string is transformed to numbers => 8


// operators
console.log(1<2);
console.log(1==2);
console.log(1==1);
console.log(1==="A");

//logic operator
|| // or
&& // and
! // not
?? // zero-merge operator

