import axios from "axios";

const BASE_URL = "https://maa-foundation-backend-wref.onrender.com/api";

const axiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

export default axiosInstance;
