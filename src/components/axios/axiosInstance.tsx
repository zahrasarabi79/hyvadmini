import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "  http://localhost:3001/",
  headers: {
    "Content-Type": "application/json",
    Authorization: localStorage.myToken
      ? `Bearer ${localStorage.myToken}`
      : undefined,
  },
  timeout: 5000,
});

export default axiosInstance;
