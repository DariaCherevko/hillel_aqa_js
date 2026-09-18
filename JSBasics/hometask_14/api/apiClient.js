import axios from 'axios';

export const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const apiClient = axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json; charset=UTF-8' },
});

export const getPosts = (params) => apiClient.get('/posts', { params });

export const getPostById = (id) => apiClient.get(`/posts/${id}`);

export const createPost = (body) => apiClient.post('/posts', body);

export const createComment = (body) => apiClient.post('/comments', body);
