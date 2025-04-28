/************************************************************************
 * Page : ProtectedRoutes.jsx
 * Author : Tushar
 * Date Created : 26 Apr 2025
 * Purpose : Holds logic to validate user and directed to proteted routes
 ***************************************************************************/
import { useContext, useEffect } from "react"
import { AuthContext } from "../context/auth"
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedRoutes = () => {
    const { isAuthenticated, loading  } = useContext(AuthContext);

    if (loading) {
        return <div></div>; // add a nice spinner component
      }
    
      return isAuthenticated ? <Outlet /> : <Navigate to="/login" replace />;
}