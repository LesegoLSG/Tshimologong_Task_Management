// axios-interceptor.js
import axios from 'axios';
import { Refresh, getRefreshTokenLocalStorage, getAccessTokenLocalStorage } from './AuthService';
import { useNavigate } from 'react-router-dom';



const api = axios.create({
    baseURL: 'http://localhost:8080/api/v1',
});

api.interceptors.request.use(
    (config) => {
        const token = getAccessTokenLocalStorage();
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        console.log("config:", config);
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
    async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true;

            try {
                const token = getRefreshTokenLocalStorage();
                console.log("error refresh:", token);
                const response = await Refresh(token);
                localStorage.setItem("user", JSON.stringify(response));
                console.log("Refresh reached:", response);
                // const newAccessToken = response.data.token;
                const newAccessToken = getAccessTokenLocalStorage();
                console.log("newAccessToken:", newAccessToken);

                // Update the original request with the new access token
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                // Retry the original request
                return api(originalRequest);
            } catch (refreshError) {
                // Handle refresh token error (e.g., log out the user)
                console.error('Error refreshing token:', refreshError);
                // Redirect to the login page
                //navigate("/auth");

            }
        }

        return Promise.reject(error);
    }
);

export default api;
