//if ...else

let age = 123;

if (age >= 18) {
	console.log('Old');
}

if (age >= 18) {
	console.log('Old');
} else if (age < 18 && age > 0) {
	console.log('child');
} else if (age > 100) {
	console.log('You have a greate age');
}

let age1 = 14;
let hasTicket = true;

if (age1 >= 18) {
	if (hasTicket) {
		console.log('Welcome');
	} else {
		console.log('Buy ticket');
	}
} else {
	console.log('Not allowed');
}

if (age1 >= 18 && hasTicket) {
	console.log('Welcome');
} else {
	console.log('Not allow/ Buy ticket');
}

//switch

let day = 'Friday';

switch (day) {
	case 'Monday' && 'Friday':
		console.log('Monday');
		break;
	case 'Tuesday':
		console.log('Tuesday');
		break;
	case 'Wednesday':
		console.log('Wednesday');
		break;
	default:
		console.log('ETC');
}

let ageUser = 13;

switch (true) {
	case ageUser < 15:
		console.log('young');
		break;
	case ageUser >= 15:
		console.log('teenager');
		break;
	default:
		console.log('smth');
}

//loop
for (let i = 0; i < 5; i++) {
	console.log(i);
} //for use when the interation is clear and known

let number = 0;
while (number < 5) {
	console.log(number);
	number++;
} // while use when the interation is not clear and known

do {
	console.log(number);
	number++;
} while (number < 5); // do while use when the interation is not clear and known but we want to run the code at least once

let number1 = 0;
do {
	number1++;
	if (number1 === 3) {
		continue;
	}
	console.log(number1);
} while (number1 < 5);

////

for (let i = 0; i < 5; i++) {
	if (i === 3) {
		break;
	}
	console.log(i);
}

//exeption handling
let age2 = -1;
if (age2 < 0) {
	throw new Error('Age cannot be negative');
}
console.log(age2);

let age2 = -1;
try {
	if (age2 < 0) {
		throw new Error('Age cannot be negative');
	}
	console.log(age2);
} catch (error) {
	console.error('Happens smth bad', error.message); //error.message will show only the message of the error;
	// error will show the whole error object; error.type will show the type of the error;
	// error.stack will show the stack trace of the error
} finally {
	console.log('This block will always execute');
}
console.log('COntinue with the rest of the code');
