import axios from './axiosConfig';

export const checkAuthStatus = async () => {
    try {
        const response = await axios.get('/auth/user/me/');
        return { isAuthenticated: true, user: response.data };
    } catch (error) {
        console.log('User not authenticated:', error.response?.status);
        return { isAuthenticated: false, user: null };
    }
};

export const isUserLoggedIn = () => {
    const token = localStorage.getItem('authToken') || sessionStorage.getItem('authToken');
    return !!token;
};
