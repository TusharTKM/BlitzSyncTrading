/************************************************************************
 * Page : auth.jsx
 * Author : Tushar
 * Date Created : 22 Apr 2025
 * Purpose : Context for frontend. Holds function to authenticate user
 ***************************************************************************/

import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchUserData();
    }, [isAuthenticated]);

    /*****************************************/
    // Function to set Authentication status
    /*****************************************/
    const setUserAuthentication = () => {
        setIsAuthenticated(true);
    };

    /**********************************************/
    // Function to reset Authentication status
    /**********************************************/
    const resetUserAuthentication = () => {
        localStorage.removeItem('jwtoken');
        setIsAuthenticated(false);
        setUser(null);
    };

    /**********************************************/
    // Function to fetch user Details using jwToken
    /**********************************************/
    const fetchUserData = async () => {

        try {

            // get the token from localstorage and set Authentication status
            const token = localStorage.getItem("jwtoken");

            if (token) {
                setIsAuthenticated(true);

                const respUser = await fetch("http://localhost:5000/api/user/getUser", {
                    method: "GET",
                    headers: {
                        Authorization: `Bearer ${token}`,
                    }
                });
                if (respUser.ok) {
                    const userDetails = await respUser.json();
                    setUser(userDetails.data)
                }
            } else {
                setIsAuthenticated(false);
                setUser(null);
            }

        } catch (error) {
            setIsAuthenticated(false);
            setUser(null);
            console.log("error while fetching user details");
        } finally {
            setLoading(false);
        }
    }

    return (
        <AuthContext.Provider value={{
            user,
            isAuthenticated,
            loading,
            setUserAuthentication,
            resetUserAuthentication
        }}>
            {children}
        </AuthContext.Provider>
    )


}

