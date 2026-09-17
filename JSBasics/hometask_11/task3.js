async function getToDo() {
	const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');

	if (!response.ok) {
		throw new Error('Something went wrong');
	}
	const data = await response.json();
	return data;
}

async function getUser() {
	const response = await fetch('https://jsonplaceholder.typicode.com/users/1');

	if (!response.ok) {
		throw new Error('Something went wrong');
	}
	const data = await response.json();
	return data;
}

// solution 1
const allResult = Promise.all([getToDo(), getUser()]);
allResult
	.then((result) => console.log('Result for Promise.all:', result))
	.catch((error) => console.error('Error message for Promise.all:', error));

const raceResult = Promise.race([getToDo(), getUser()]);
raceResult
	.then((result) => console.log('Result for Promise.race:', result))
	.catch((error) => console.error('Error message for Promise.race:', error));

// solution 2
try {
	const allResult2 = await Promise.all([getToDo(), getUser()]);
	console.log('Result for Promise.all (2):', allResult2);
} catch (error) {
	console.error('Error message for Promise.all (2):', error);
}

try {
	const raceResult2 = await Promise.race([getToDo(), getUser()]);
	console.log('Result for Promise.race (2):', raceResult2);
} catch (error) {
	console.error('Error message for Promise.race (2):', error);
}
