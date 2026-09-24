import { afterEach, jest } from '@jest/globals';
import { apiClient, getPostById } from '../api/apiClient';

describe('Mocked axios', () => {
	afterEach(() => {
		jest.restoreAllMocks();
	});

	test('Successful request', async () => {
		jest.spyOn(apiClient, 'get').mockResolvedValue({
			status: 200,
			data: { id: 1, title: 'mocked' },
		});

		const response = await getPostById(1);

		expect(response.status).toBe(200);
		expect(response.data.title).toBe('mocked');
		expect(apiClient.get).toHaveBeenCalledWith('/posts/1');
	});

	test('Unsuccessful request', async () => {
		jest.spyOn(apiClient, 'get').mockRejectedValue({
			response: { status: 404 },
		});

		await expect(getPostById(1000)).rejects.toMatchObject({
			response: { status: 404 },
		});
	});
});
