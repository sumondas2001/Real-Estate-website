import { createContext, useEffect, useState } from "react";
import axiosInstance from "../Axios";
import LoadingState from "../LoadingState/LoadingState";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
     const [user, setUser] = useState(null);
     const [token, setToken] = useState(null);
     const [loading, setLoading] = useState(true);

     const login = (userData, userToken) => {
          console.log("Logged in user:", userData);
          setUser(userData);
          setToken(userToken);
          localStorage.setItem("token", userToken);
          localStorage.setItem("user", JSON.stringify(userData));
     };


     const logout = () => {
          setUser(null);
          setToken(null);
          localStorage.removeItem("token");
          localStorage.removeItem("user");
     };

     useEffect(() => {
          const storedToken = localStorage.getItem("token");
          if (storedToken) {
               axiosInstance.get("/auth/me")
                    .then(res => {
                         console.log("User Data:", res.data.data.user);
                         login(res.data.data.user, storedToken);
                    })
                    .catch(error => {
                         console.error("Auth Error:", error);
                         logout();
                    })
                    .finally(() => {
                         setLoading(false);
                    });
          } else {
               setLoading(false);
          }
     }, []);

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
