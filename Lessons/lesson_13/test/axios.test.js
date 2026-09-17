import axios from 'axios';

test('First test axios', async () => {
	const response = await axios.get('https://dummyjson.com/users/1');

	console.log(response.status);

	expect(response.status).toBe(200);
	expect(response.data.id).toBe(1);
});
