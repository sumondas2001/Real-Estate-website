import axios from 'axios';


const axiosSecure = axios.create({
     baseURL: '',

})
const UseAxiosSecure = () => {
     return axiosSecure;
};

export default UseAxiosSecure;