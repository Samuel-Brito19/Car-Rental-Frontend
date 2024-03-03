import axios from "axios";
import { getToken } from "./storage";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL
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