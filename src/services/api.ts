import axios from "axios";
import { getToken } from "./storage";

const api = axios.create({
    baseURL: "https://car-rental-frontend-ten.vercel.app"
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