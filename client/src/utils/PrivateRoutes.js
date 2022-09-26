import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const PrivateRoutes = () => {
    const user = useSelector((state) => state.user?.currentUser?.isAdmin)
    return (
        user? <Outlet/> : <Navigate to="/Login"/>
    )
}

export const RedirectRoute = () => {
    const user = useSelector((state) => state.user?.currentUser)
    return (
        !user? <Outlet/> : <Navigate to="/"/>
    )
}
