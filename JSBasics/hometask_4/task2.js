//Завдання 2: Конкатенація радків та шаблонний рядок

let personName1 = "Daria";
let personName2 = "Dmytro";
let greeting1 = "Hi " + personName1 + " and " + personName2 + "!";

console.log(greeting1);

let greeting2 = `Hi ${personName1} and ${personName2}!`;

console.log(greeting2);