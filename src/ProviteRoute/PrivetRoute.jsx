import { useContext } from "react";
import { AuthContext } from "../AuthContext/AuthProvider";
import { Navigate } from "react-router-dom";
import LoadingState from "../LoadingState/LoadingState";

const PrivetRoute = ({ children }) => {
     const { user, loading } = useContext(AuthContext);

     if (loading) {
          return <LoadingState />;
     }

     if (!user) {
          return <Navigate to="/login" />;
     }

     return children;
};

export default PrivetRoute;
