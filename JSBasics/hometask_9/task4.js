const person = {
	firstName: 'Maria',
	lastName: 'Pure',
	age: 20,
};

person.email = 'email@gmail.com';
delete person.age;

console.log(person);
