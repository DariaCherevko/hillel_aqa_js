import axios from 'axios';

export const BASE_URL = 'https://dummyjson.com';

export const apiClient = axios.create({
	baseURL: BASE_URL,
	headers: { 'Content-Type': 'application/json' },
});

export const getUsers = (params) => apiClient.get('/users', { params });

export const getUserById = (id) => apiClient.get(`/users/${id}`);

export const addUser = (body) => apiClient.post('/users/add', body);
