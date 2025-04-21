// src/services/api/axios-instance.js
import axios from "axios";
import { GetAccessToken } from "../services/cookie/AuthCookies";
const BASE_URL = import.meta.env.VITE_BASE_API_URL;

// Create an instance of axios with default configuration
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

// Example: Set the `Authorization` header for a request using a stored cookie token
const token = getCookie("access_token"); // Assuming you have stored it in a cookie

// Create an Axios instance
const axiosInstance = axios.create({
  withCredentials: true, // Send cookies with every request
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

// Set up a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    config.url = BASE_URL + config.url;

    const token = GetAccessToken();
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    // Handle request error here
    return Promise.reject(error);
  }
);

export default axiosInstance;
