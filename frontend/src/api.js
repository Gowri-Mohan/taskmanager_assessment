import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:5050/api"
});

api.interceptors.request.use((config) => {
  console.log("API CALL →", config.baseURL + config.url);

  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
