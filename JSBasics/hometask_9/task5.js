const users = [
	{
		name: 'Alice',
		email: 'email@gmail.com',
		age: 30,
	},
	{
		name: 'Maria',
		email: 'maria@gmail.com',
		age: 45,
	},
];

for (const { name, email, age } of users) {
	console.log(`Name: ${name}; email: ${email} age: ${age}`);
}
