const name1 = 'Alice';
const name2 = 'Bob';

const name = ['name1', 'name2'];

console.log(name);

//array usually contains values with similar data types, but it can also contain different data types.
//  For example, an array can contain numbers, strings, and even other arrays.

//index
console.log(name[0]); // Output: "name1"
console.log(name[1]); // Output: "name2"
console.log(name[2]); // Output: undefined (index out of bounds)

//lenght
console.log(name.length); // Output: 2

console.log(name[name.length - 1]); // Output: "name2" (last element of the array)

//change one value of the array
name[0] = 'Charlie';
console.log(name[0]); // Output: "Charlie"

// aray methods
// push() method adds one or more elements to !the end of an array! and returns the new length of the array.
const fruits = ['apple', 'banana'];
fruits.push('orange', 'grape');
console.log(fruits); // Output: ["apple", "banana", "orange", "grape"]

// pop() method removes the last element from an array and returns that element. This method changes the length of the array.
const lastFruit = fruits.pop();
console.log(lastFruit); // Output: "grape"
console.log(fruits); // Output: ["apple", "banana", "orange"]

// unshift() method adds one or more elements to the !beginning of an array! and returns the new length of the array.
fruits.unshift('kiwi', 'mango');
console.log(fruits); // Output: ["kiwi", "mango", "apple", "banana", "orange"]

// shift() method removes the first element from an array and returns that removed element. This method changes the length of the array.
const firstFruit = fruits.shift();
console.log(firstFruit); // Output: "kiwi"
console.log(fruits); // Output: ["mango", "apple", "banana", "orange"]

//go through the array using a for loop
const fruits2 = ['apple', 'banana'];

for (let i = 0; i < fruits2.length; i++) {
	console.log(fruits2[i]); // Output: "apple", "banana" // i is the index of the array
}

//go through the array using a for...of loop

for (let fruit of fruits2) {
	console.log(fruit); // Output: "apple", "banana" // fruit is the value of the array
}

const numbers = [1, 2, 3, 4, 5];
let sum = 0;
for (let number of numbers) {
	sum += number; // sum = sum + number or sum += number
}
console.log(sum); // Output: 15

//for ...in loop is used to iterate over the properties of an object.
// It can also be used to iterate over the indices of an array, but it is not recommended for arrays because
// it can lead to unexpected results if the array has non-numeric properties or methods.
const fruits2 = ['apple', 'banana'];

for (let fruit in fruits2) {
	console.log(fruits2[fruit]); // Output: "apple", "banana" // fruit is the index of the array
}

//forEach() method executes a provided function once for each array element.
const fruits3 = ['apple', 'banana'];
fruits3.forEach(function (fruit) {
	console.log(fruit); // Output: "apple", "banana" // fruit is the value of the array
});

fruits3.forEach((fruit, index) => {
	console.log(`Index ${index} = ${fruit}`);
});

// includes => to check if the data is in array
console.log(fruits3.includes('banana'));

// .indexOf
console.log(fruits3.indexOf[1]);

// method .find
const number = [1, 2, 3, 4, 50, 70, 90];
const result = number.find((num) => num > 50);
console.log(result);

//
const number1 = [1, 2, 3, 4, 50, 70, 90, 100, 130, 200];
console.log(number1);
const bigNumbers = number1; // it's not two different arrays, the changes alway will be inthe parent array
console.log(bigNumbers);

number1.unshift(1000);
console.log(number1);
console.log('---');
console.log(bigNumbers);

//method .map help to reuse existing array as new array

const value = [1, 2, 3, 4, 6];

const newValue = value.map((num) => num); // or e.g. devide on 2 or any other operation
console.log(newValue);

const newValue2 = value.map((num) => num / 2);
console.log(newValue2);

// .slice
const sliceValue = [1, 2, 3, 4, 6];

const slice2Value = sliceValue.slice(0, 3); // the last index isn't copied
console.log(slice2Value); // [1,2,3]

// вкладенний массив

let matrix = [
	[1, 2],
	[3, 4],
	[5, 6],
];
console.log([0][0]);
console.log([1][0]);

for (let m = 0; m < matrix.length; m++) {
	for (let j = 0; j < matrix[m].length; j++) {
		console.log(matrix[m][j]);
	}
}

console.log(typeof matrix); // return object
console.log(Array.isArray(matrix)); // return true

//practice

const grades = [1, 2, 3, 4];
console.log(grades[grades.length - 1]);

// пузырьковый метод

const numberList = [1, 10, 14, 2, 4, 5, 43, 34];

const newNumberList = [...numberList];
for (let i = 0; i < newNumberList.length - 1; i++) {
	for (let j = 0; j < newNumberList.length - 1 - i; j++) {
		if (newNumberList[j] > newNumberList[j + 1]) {
			let temp = newNumberList[j];
			newNumberList[j] = newNumberList[j + 1];
			newNumberList[j + 1] = temp;
		}
	}
}
console.log(newNumberList);

//можно зробити через метод .sort
