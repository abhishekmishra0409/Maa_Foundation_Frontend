import axios from "axios";

const BASE_URL = "https://maa-foundation-backend-6.onrender.com/api";

const axiosInstance = axios.create({
    baseURL:BASE_URL,
});


export default axiosInstance;