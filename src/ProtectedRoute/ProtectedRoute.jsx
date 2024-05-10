import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    const location = useLocation()
    
    if(user){
        return children;
    }
    return <Navigate to="/registration/login" state={location.pathname}></Navigate>
};

export default ProtectedRoute;