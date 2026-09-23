import axios from 'axios';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiClient = axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json; charset=UTF-8' },
});

export const getPostById = (id) => apiClient.get(`/posts/${id}`);

export const getInvalidUrl = async () => {
	try {
		return await apiClient.get('/postsTEST');
	} catch (error) {
		throw new Error(`Request failed with status ${error.response.status}`, { cause: error });
	}
};

export const getPostsWithHeaders = (params, headers) =>
	apiClient.get('/posts', { params, headers });
