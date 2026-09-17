import { addUser, getUserById, getUsers } from '../api/apiClient.js';
import { buildNewUser, DEFAULT_LIMIT, EXISTING_USER_ID } from '../testData.js';

describe('Users API', () => {
	test('GET /users returns a list of users', async () => {
		const response = await getUsers({ limit: DEFAULT_LIMIT });

		expect(response.status).toBe(200);
		expect(Array.isArray(response.data.users)).toBe(true);
		expect(response.data.users).toHaveLength(DEFAULT_LIMIT);
		expect(response.data.total).toBeGreaterThan(0);
	});

	test('GET /users/:id returns the requested user', async () => {
		const response = await getUserById(EXISTING_USER_ID);

		expect(response.status).toBe(200);
		expect(response.data.id).toBe(EXISTING_USER_ID);
		expect(response.data).toHaveProperty('firstName');
		expect(response.data).toHaveProperty('email');
	});

	test('GET /users/:id returns 404 for a non-existing user', async () => {
		await expect(getUserById(0)).rejects.toMatchObject({
			response: { status: 404 },
		});
	});

	test('POST /users/add creates a new user', async () => {
		const newUser = buildNewUser();

		const response = await addUser(newUser);

		expect(response.status).toBe(201);
		expect(response.data).toHaveProperty('id');
		expect(response.data.firstName).toBe(newUser.firstName);
		expect(response.data.lastName).toBe(newUser.lastName);
	});
});
