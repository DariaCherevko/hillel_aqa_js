// objects

const person = {
	name: 'Alice',
	age: 12,
	city: 'Wroclaw',
	addres: {
		street: 'test',
	},
};
console.log(person); // { name: 'Alice', age: 12, city: 'Wroclaw' }
console.log(person.age); // 12
console.log(person.addres.street); //test

console.log(person.name.age);

function person2(name, age) {
	this.name = name;
	this.age = age;
}

const sara = new person2('Sara', 30);
console.log(sara);
console.log(sara.name);
console.log(sara.age);

//
const personInfo = {
	name: 'Jordan',
	age: 30,
};
console.log(personInfo); //full object
console.log(personInfo.name); // jordan
console.log(personInfo.age); //30

//object can be placed inside object
const user = {
	name: 'Jordan',
	age: 30,
	addres: {
		city: 'London',
		'street add': 'street 23/5',
	},
};
console.log(user.addres.city);
console.log(user['name']);
console.log(user['age']);
//console/log(personInfo1.addres["street add"])

//rewrite the value of the property
user.age = 18;
console.log(user.age);

user.lastName = 'Doe';
console.log(user); // add new property last name

delete user.lastName;
console.log(user); // deleted  property last name

// object can have function inside itself
const greetingUser = {
	user: 'ALice',
	sayHello() {
		console.log(`Hello, ${user}`);
	},
};
console.log(greetingUser);
greetingUser.sayHello(); // error

//using .this , єто объект который стоит слевой стороны нашей проперти,которая будет браться, на которую будет ссылаться
// this.age === person.age

const greetingUser1 = {
	user: 'ALice',
	sayHello() {
		console.log(`Hello, ${this.user}`);
	},
};
greetingUser1.sayHello();

//universal function
function sayHelloUser(user) {
	console.log(`Hello, ${this.user}`);
}

const person1 = {
	user: 'admin',
	sayHelloUser: sayHelloUser, //добавить функцию в объект
};

const person2 = {
	user: 'guest',
	sayHelloUser: sayHelloUser,
};

person1.sayHelloUser();

//

const counter = {
	value: 0,
	increment() {
		this.value++;
	},
};
counter.increment(); //1 т.к. метод(функция) делает икремент value
counter.increment(); //2
console.log(counter.value);

const counter2 = {
	value: 0,
	increment: counter.increment,
};
counter2.increment();
console.log(counter2.value);

//
const user = {
	name: 'Alice',
	age: 20,
	balance: 1000,
	deposit(amount) {
		this.balance = this.balance + amount;
	},
	showBalance() {
		console.log(this.balance);
	},
};
user.deposit(200);
user.showBalance();

const user2 = {
	name: 'Bob',
	age: 22,
	balance: 1300,
	deposit: user.deposit,
	showBalance: user.showBalance,
};

// или отделить функцию отдельно чтобі можно біло ее юзать везде

function deposit(amount) {
	this.balance = this.balance + amount;
}

function showBalance() {
	console.log(this.balance);
}
const user3 = {
	name: 'Mara',
	age: 20,
	balance: 1000,
	deposit: deposit,
	showBalance: showBalance,
};
user3.deposit(700);
user3.showBalance();

//вкладенний обїект
const user4 = {
	name: 'Mara',
	age: 20,
	work: {
		name: 'Asus',

		showWork() {
			console.log(this.name);
		},
	},
};
user4.work.showWork(); // this === user.work

//check if the property exist in object
console.log('age' in user4);

//methods
const person = {
	name: 'Dasha',
	age: 28,
};
//for ..in
for (const key in person) {
	console.log(`This ${key} is ${person[key]}`); // person[key] = person.name or person.age
}
//for ..of
for (const [key, value] of Object.entries(person)) {
	console.log(`${key} : ${value}`);
}

//
const person = {
	name: 'Jane',
	age: 28,
	city: {
		city: 'Lviv',
	},
};
console.log(person);
const user = person;

user.name = 'Kolin';
console.log(user);
console.log(person);

const newUser = { ...person }; // поверхневе копіювання
newUser.city.city = 'Kharkiv';
console.log(newUser);

//объеднати
const user = {
	name: 'Dasha',
};

const work = {
	name: 'qa',
};

const userInfo = {
	...user,
	...work,
};
console.log(userInfo); //{ name: 'qa' } если одинаковое имя пропетри, то будет брать значени из последнего

// how to seperate property /dдестерктурізація
const user = {
	name: 'Kim',
	age: 80,
};
const { name: userName, age } = user;
console.log(userName);
console.log(age);

//default value
console.log(user.city);
const { city = 'No city' } = user;
console.log(user?.city); // or use ? to avoid crash error
