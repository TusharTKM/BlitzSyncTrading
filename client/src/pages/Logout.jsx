/****************************************
 * Page : Logout.jsx
 * Author : Tushar
 * Date Created : 22 Apr 2025
 * Purpose : Component for Logout
 ******************************************/

import { useContext, useEffect } from "react"
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/auth";

export const Logout = () => {

    const { resetUserAuthentication } = useContext(AuthContext);

    useEffect(() => {
        resetUserAuthentication();
    }, [resetUserAuthentication]);

    return <Navigate to="/login"></Navigate>
}