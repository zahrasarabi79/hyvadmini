import axios, { AxiosInstance } from "axios";
const axiosInstance: AxiosInstance = axios.create({
  baseURL: "  http://localhost:3001/",
  headers: {
    Authorization: localStorage.myToken ? `Bearer ${localStorage.myToken}` : undefined,
  },
  timeout: 5000,
});

export default axiosInstance;
