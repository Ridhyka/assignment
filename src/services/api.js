import axios from 'axios';

const BASE_URL = 'https://reqres.in/api';

// Create axios instance
const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to requests if available
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Authentication
export const login = (email, password) => {
  return api.post('/login', { email, password });
};

// Users
export const getUsers = (page = 1) => {
  return api.get(`/users?page=${page}`);
};

export const getUserById = (id) => {
  return api.get(`/users/${id}`);
};

export const updateUser = (id, userData) => {
  return api.put(`/users/${id}`, userData);
};

export const deleteUser = (id) => {
  return api.delete(`/users/${id}`);
};

export default api;