import { getPostsWithHeaders } from '../api/apiClient';

describe('Request headers and params', () => {
	test('Header includes into request', async () => {
		const response = await getPostsWithHeaders({ userId: 1 }, { 'X-Custom-Header': 'hometask-15' });

		expect(response.status).toBe(200);
		expect(response.config.params).toEqual({ userId: 1 });
		expect(response.config.headers['X-Custom-Header']).toBe('hometask-15');
	});
});
