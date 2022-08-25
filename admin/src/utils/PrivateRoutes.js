import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
    const user = useSelector((state) => state.user?.currentUser?.isAdmin)
    return (
        user? <Outlet/> : <Navigate to="/Login"/>
    )
}

export default PrivateRoutes;