import { useAuthContext } from "../context/AuthContext"
import { useLocation, Outlet, Navigate } from 'react-router-dom'

export const ProtectedRoutes = () => {
    const { auth } = useAuthContext();
    const location = useLocation()

    return (
        auth?.user
        ? <Outlet />
        : <Navigate to="/login" state={{ from: location }} replace />
    )
}