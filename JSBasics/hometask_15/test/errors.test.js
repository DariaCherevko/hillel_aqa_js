import { getInvalidUrl } from '../api/apiClient';

describe('Error handling', () => {
	test('Invalid URL returns error message', async () => {
		await expect(getInvalidUrl()).rejects.toThrow('404');
	});
});
