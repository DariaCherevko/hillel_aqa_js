/// Завдання 3: Генерація таблиці множення

// using for loop
const number1 = 6;

for (let i = 1; i <= 10; i++) {
    let result = number1 * i;
    console.log(`${number1} * ${i} = ${result}`);
};

console.log('-------------------');

// using while loop
const number2 = 6;
let i = 1;

while (i <= 10) {
    let result = number2 * i;
    console.log(`${number2} * ${i} = ${result}`);
    i++;
}