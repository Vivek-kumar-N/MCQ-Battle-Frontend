import axiosInstance from "../../lib/axiosInstance";

// Registers a new user by sending their details to the `/register` endpoint
export const Signup = async (data) => {
  return await axiosInstance.post(`/register/`, data);
};

// Authenticates an existing user by sending their credentials to the `/login` endpoint
export const Login = async (data) => {

  const temp = await axiosInstance.post(`/login/`, data);
  console.log(temp);
  return temp;
};

// Accesses a protected resource by  a GET request to the `/protected` endpoint
export const Protected = async () => {
  return await axiosInstance.get(`/protected/`);
};
