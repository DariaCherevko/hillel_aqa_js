import axios from 'axios';

describe('Testing api', () => {
	test('First test axios', async () => {
		const response = await axios.get('https://dummyjson.com/users/1');

		console.log(response.status);

		expect(response.status).toBe(200);
		expect(response.data.id).toBe(1);
	});

	test('Second test axios', async () => {
		const response = await axios.get('https://dummyjson.com/users/2');

		console.log(response.status);

		expect(response.status).toBe(200);
		expect(response.data.id).toBe(2);
	});
});
