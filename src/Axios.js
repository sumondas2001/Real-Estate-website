import axios from "axios";
import toast from "react-hot-toast";
const token = localStorage.getItem('token')
const axiosInstance = axios.create({
     baseURL: 'http://team-sync.driosoft.com/api',
     headers: {
          Authorization: token ? `Bearer ${token}` : {}
     }
});

axiosInstance.interceptors.response.use(
     response => {
          return response;
     },
     error => {
          if (error.response.status === 401) {
               localStorage.removeItem('token');
               window.location.href = "/login";
          }
          else if (error.response.status === 403) {
               toast.error('Unauthorized Access');
               window.location.href = "/login"
          }
          return Promise.reject(error);
     }
);


export default axiosInstance;
