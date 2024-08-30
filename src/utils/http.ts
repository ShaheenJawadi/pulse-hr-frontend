import axios, { AxiosRequestHeaders } from 'axios';
import { getTokenCookie } from './authCookies';


const http = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 30000,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',

    },
});

 

http.interceptors.request.use(
    (config) => {
        const token = getTokenCookie();
        if (token) {
            config.headers.set('Authorization', `Bearer ${token}`);
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);


export default http;
