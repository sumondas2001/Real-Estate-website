import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthProvider";
import axiosInstance from "../../Axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
const Login = () => {
     const { login, setLoading, logout } = useContext(AuthContext);
     const navigate = useNavigate()
     const handelAdminLogin = (event) => {
          event.preventDefault();
          const from = event.target;
          const email = from.email.value;
          const password = from.password.value;
          axiosInstance.post('/auth/login', {
               email: email,
               password: password
          })
               .then(res => {
                    login(res?.data?.data?.user, res?.data?.data?.token);
                    navigate('/admin-dashBoard');
               })
               .catch(error => {
                    console.log(error);
                    toast.error('Bad Request')
                    logout();
                    setLoading(false)

               })
     };
     return (
          <div className="flex lg:flex-row flex-col   lg:items-center lg:gap-20 gap-10">
               <div className="lg:w-1/2">
                    <img className="lg:h-screen h-80 w-full object-cover" src="https://rancondevelopments.com/static/img/login.a6b1b2e5.jpg" alt="" />
               </div>
               <div className="mx-16 lg:w-1/2">
                    <h1 className="text-4xl text-primaryColor font-medium">Please Login</h1>

                    <form className="space-y-8 mt-14 w-full lg:mb-0 mb-20" onSubmit={handelAdminLogin} >

                         <div className="space-y-3">
                              <label className=" font-light text-sm text-white"> Your Email:</label>
                              <input className="w-full py-2 px-4" placeholder="Your Email" type="email" name="email" id="" />
                         </div>
                         <div className="space-y-3">
                              <label className=" font-light text-sm text-white">Password:</label>
                              <input className="py-2 px-4 w-full " type="password" placeholder="Password" name="password" id="" />
                         </div>

                         <button className=" hover:bg-primaryColor font-medium text-white border hover:border-none px-8 py-2  w-full hover:text-black">
                              Login
                         </button>
                    </form>

                    <div className="text-white text-lg mt-10 ml-10">
                         <h1>Email: user1@example.com</h1>
                         <p>Password: 12345678</p>
                    </div>
               </div>

          </div>
     );
};

export default Login;