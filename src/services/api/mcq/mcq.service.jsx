import axios from "axios";

// Create an instance of axios with default configuration
const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
  return null;
};

// Example: Set the `Authorization` header for a request using a stored cookie token
const token = getCookie("access_token"); // Assuming you have stored it in a cookie

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000",
  withCredentials: true, // Send cookies with every request
  headers: {
    Authorization: token ? `Bearer ${token}` : "",
  },
});

/**
 * Fetch a specific MCQ by ID.
 * @param {number} id - The ID of the MCQ to fetch.
 * @returns {Promise} - Axios response promise with the MCQ data.
 */
export const GetMCQ = async (id) => {
  console.log("id", id);
  return await axiosInstance.get(`/mcqs/${id}/`);
};

/**
 * Fetch all MCQs.
 * @returns {Promise} - Axios response promise with the list of all MCQs.
 */
export const GetMCQs = async () => {
  return await axiosInstance.get(`/mcqs/`);
};

/**
 * Create a new MCQ.
 * @param {Object} data - The data of the new MCQ to create.
 * @returns {Promise} - Axios response promise with the created MCQ data.
 */
export const CreateMcq = async (data) => {
  console.log(data);
  console.log(`${axiosInstance.defaults.baseURL}/mcqs`);
  return await axiosInstance.post(`/mcqs/`, data);
};

/**
 * Update an existing MCQ by ID.
 * @param {number} id - The ID of the MCQ to update.
 * @param {Object} data - The updated data of the MCQ.
 * @returns {Promise} - Axios response promise with the updated MCQ data.
 */
export const UpdateMcq = async (id, data) => {
  return await axiosInstance.put(`/mcqs/${id}/`, data);
};

/**
 * Delete an MCQ by ID.
 * @param {number} id - The ID of the MCQ to delete.
 * @returns {Promise} - Axios response promise indicating the success of the operation.
 */
export const DeleteMcq = async (id) => {
  return await axiosInstance.delete(`/mcqs/${id}/`);
};
