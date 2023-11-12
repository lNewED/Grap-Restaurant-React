
import { Navigate } from "react-router-dom";
import { useAuthContext } from "../context/auth.context";

const ProtectedRoute = (children) =>{
    const {user} = useAuthContext();
    if (!user) {
        return <Navigate to="/signin"/>
    }
    return children
}
export default ProtectedRoute;