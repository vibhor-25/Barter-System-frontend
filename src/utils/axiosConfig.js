import axios from 'axios';
import { useNavigate } from 'react-router-dom';

// Configure axios defaults
axios.defaults.baseURL = 'http://localhost:8000/api';
axios.defaults.withCredentials = true;

// Add request interceptor to log requests
axios.interceptors.request.use(
  (config) => {
    console.log(`[API] ${config.method.toUpperCase()} ${config.url}`);
    return config;
  },
  (error) => {
    console.error('[API] Request error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor to handle errors
axios.interceptors.response.use(
  (response) => {
    console.log(`[API] Success: ${response.status}`, response.data);
    return response;
  },
  (error) => {
    const status = error.response?.status;
    const message = error.response?.data?.message || error.message;

    console.error(`[API] Error ${status}: ${message}`);

    if (status === 403) {
      console.error('❌ Forbidden (403): User is not authenticated or lacks permissions');
      console.error('⚠️  Possible causes:');
      console.error('   - Authentication token is invalid or expired');
      console.error('   - User is not logged in');
      console.error('   - Backend CORS settings may be blocking the request');
      console.error('   - Check if credentials are being sent properly');
    } else if (status === 401) {
      console.error('❌ Unauthorized (401): Please log in');
      // Could redirect to login here
    } else if (status === 404) {
      console.error('❌ Not Found (404): API endpoint does not exist');
    } else if (status === 500) {
      console.error('❌ Server Error (500): Backend issue');
    }

    return Promise.reject(error);
  }
);

export default axios;
