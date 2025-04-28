/************************************************************************
 * Page : DashboardLayout.jsx
 * Author : Tushar
 * Date Created : 26 Apr 2025
 * Purpose : Component for Dashboard Nav bars
 ***************************************************************************/

import { ChartBarIcon, CreditCardIcon, KeyIcon, UserIcon } from "@heroicons/react/24/solid";
import { NavLink, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/auth";
import { useContext, useEffect, useState } from "react";


export const DashboardLayout = () => {

    // Get the user information from Authcontext
    const { user } = useContext(AuthContext);
    const [userData, setUserData] = useState({
        userId: "",
        name: ""
    });

    // Load the user Details on page load
    useEffect(() => {
        if (user) {
            setUserData({
                userId: user._id,
                name: user.name
            })
        }
    }, []);


    // UI rendering
    return (
        <div className="flex h-screen bg-gray-50">

            {/* Sidebar Navigation */}
            <div className="w-64 bg-white border-r border-gray-200 p-4">
                <div className="mb-8 p-4">
                    <h1 className="text-xl font-bold text-blue-600">Welcome, {user && user.name} </h1>
                    <p className="text-sm text-gray-500">Blitz Sync Dashboard</p>
                </div>

                <nav>
                    <ul className="space-y-2">
                        <li>
                            <NavLink
                                to="/dashboard"
                                className={({ isActive }) =>
                                    `flex items-center p-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-600 font-medium'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`
                                }
                            >
                                <UserIcon className="w-5 h-5 mr-3" />
                                Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/token"
                                className={({ isActive }) =>
                                    `flex items-center p-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-600 font-medium'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`
                                }
                            >
                                <KeyIcon className="w-5 h-5 mr-3" />
                                API Token
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/trades"
                                className={({ isActive }) =>
                                    `flex items-center p-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-600 font-medium'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`
                                }
                            >
                                <ChartBarIcon className="w-5 h-5 mr-3" />
                                Trade History
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/dashboard/payments"
                                className={({ isActive }) =>
                                    `flex items-center p-3 rounded-lg transition-colors ${isActive
                                        ? 'bg-blue-50 text-blue-600 font-medium'
                                        : 'text-gray-600 hover:bg-gray-100'
                                    }`
                                }
                            >
                                <CreditCardIcon className="w-5 h-5 mr-3" />
                                Payments
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 pl-8 pr-8">
                <Outlet />
            </div>
        </div>
    );
}