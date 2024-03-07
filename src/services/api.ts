import axios from "axios";
import { getToken } from "./storage";

const api = axios.create({
    baseURL: process.env.VITE_API_URL || 'http://localhost:3000'
  })
  
  api.interceptors.request.use(async (config) => {
    const token = getToken()
    console.log(token)
  
    if (token !== null) {
      config.headers.Authorization = `Bearer ${token}`
    }
  
    return config
  })
  
  export default api