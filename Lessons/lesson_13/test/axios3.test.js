import axios from 'axios';

describe('Testing api POST', () => {
	test('Add new User', async () => {
		const body = {
			firstName: 'Daria',
		};

		const response = await axios.post('https://dummyjson.com/users/add', body);

		console.log(response.data);

		expect(response.status).toBe(201);
		expect(response.data).toHaveProperty('id');
		expect(response.data.firstName).toBe(body.firstName);
	});
});
