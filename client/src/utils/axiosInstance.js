import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 
    'http://103.191.51.232:5001',

});

export default axiosInstance;
