import axios from 'axios';

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
  headers: {
    'Content-Type': 'application/json',
  },
});


api.interceptors.request.use(
  (config) => {
  
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);


api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    
    if (error.response) {
    
      console.error('API Error:', error.response.data);
    } else if (error.request) {
    
      console.error('Network Error:', error.request);
    } else {
    
      console.error('Error:', error.message);
    }
    return Promise.reject(error);
  }
);

export const sendContactMessage = async (data) => {
  try {
    const response = await api.post('/contact', data);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export default api;