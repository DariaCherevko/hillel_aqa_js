// 2.1

function getToDo() {
	return fetch('https://jsonplaceholder.typicode.com/todos/1').then((response) => {
		if (!response.ok) {
			throw new Error('Something went wrong');
		}
		return response.json();
	});
}

// 2.2
function getUser() {
	return fetch('https://jsonplaceholder.typicode.com/users/1').then((response) => {
		if (!response.ok) {
			throw new Error('Something went wrong');
		}
		return response.json();
	});
}

//2.3

const allResult = Promise.all([getToDo(), getUser()]);
allResult
	.then((result) => console.log('Result for Promise.all:', result))
	.catch((error) => console.error('Error message for Promise.all:', error));

const raceResult = Promise.race([getToDo(), getUser()]);
raceResult
	.then((result) => console.log('Result for Promise.race:', result))
	.catch((error) => console.error('Error message for Promise.race:', error));
