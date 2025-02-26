import { createContext, useEffect, useState } from "react";
import axiosInstance from "../Axios";
import LoadingState from "../LoadingState/LoadingState";
import toast from "react-hot-toast";
import PropTypes from 'prop-types';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [token, setToken] = useState(null);
     const [loading, setLoading] = useState(true);
     //  user login function
     const login = (userData, userToken) => {
          setUser(userData);
          setToken(userToken);
          localStorage.setItem("token", userToken);
          localStorage.setItem("user", JSON.stringify(userData));
     };

     //  user logout function
     const logout = () => {
          setUser(null);
          setToken(null);
          localStorage.removeItem("token");
          localStorage.removeItem("user");

     };


     useEffect(() => {
          const userToken = localStorage.getItem('token');
          if (userToken) {
               axiosInstance.get('/auth/me')
                    .then(res => {
                         login(res?.data?.data?.user, userToken)
                         // console.log(res?.data?.data?.user);
                    })
                    .catch(error => {
                         logout();
                         toast.error(error)
                    })
                    .finally(() => {

                         setLoading(false);

                    })
          }
          else {
               setLoading(false)
          }
     }, [])

     if (loading) {
          return <LoadingState />;
     }

     const authInfo = {
          login,
          user,
          logout,
          loading,
     };

     return (
          <AuthContext.Provider value={authInfo}>
               {children}
          </AuthContext.Provider>
     );
};

export default AuthProvider;


AuthProvider.propTypes = {

     children: PropTypes.node,
}
