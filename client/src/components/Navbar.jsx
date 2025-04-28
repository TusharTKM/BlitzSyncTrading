/************************************************************************
 * Page : Navbar.jsx
 * Author : Tushar
 * Date Created : 18 Apr 2025
 * Purpose : Component for Nav bars
 ***************************************************************************/

import { AuthContext } from "../context/auth";
import { useContext } from 'react';
import { NavLink } from "react-router-dom";

export const Navbar = () => {

    const { isAuthenticated } = useContext(AuthContext);

    return (
        <header className="bg-gradient-to-r from-blue-900 to-blue-800 text-white shadow-lg">
            
            {/* Top Part - Logo and Business Name */}
            <div className="flex justify-start items-center py-4 px-8 border-b border-white/10">
                <div className="flex items-center gap-4">
                    <img src="/images/logo.png" alt="logo" width="65" height="60" />
                    <h1 className="text-3xl font-bold bg-gradient-to-r from-cyan-300 to-white bg-clip-text text-transparent tracking-wide">
                        Blitz Sync Trading
                    </h1>
                </div>
            </div>

            {/* Bottom Part - Tagline and Navigation */}
            <div className="sticky  flex justify-between items-center py-1 px-8 md:flex-row flex-col md:gap-0 gap-3">
                <div className="italic text-lg opacity-90 md:text-left text-center">
                    <p>Empowering Traders with Smart Syncing</p>
                </div>

                <nav className="flex">
                    <ul className="flex flex-wrap justify-center gap-6 m-0 p-0 list-none">
                        <li className="relative py-2 cursor-pointer transition-all duration-300 text-cyan-300
                            hover:bg-cyan-300/20 hover:text-cyan-300">
                            <NavLink to="/"
                                className=" px-3 py-2 rounded-md font-medium text-lg tracking-wide transition-all duration-300">
                                Home
                            </NavLink>
                        </li>
                        <li className="relative py-2 cursor-pointer transition-all duration-300 text-cyan-300
                            hover:bg-cyan-300/20 hover:text-cyan-300">
                            <NavLink to="/about"
                                className="px-3 py-2 rounded-md font-medium text-lg tracking-wide transition-all duration-300">
                                About Us
                            </NavLink>
                        </li>
                        <li className="relative py-2 cursor-pointer transition-all duration-300 text-cyan-300
                            hover:bg-cyan-300/20 hover:text-cyan-300">
                            <NavLink to="/contact"
                                className="px-3 py-2 rounded-md font-medium text-lg tracking-wide transition-all duration-300">
                                Contact
                            </NavLink>
                        </li>
                        {
                            isAuthenticated == true ?
                                <>
                                    <li className="relative py-2 cursor-pointer transition-all duration-300 text-cyan-300
                                        hover:bg-cyan-300/20 hover:text-cyan-300">
                                        <NavLink to="/dashboard"
                                            className="px-3 py-2 rounded-md font-medium text-lg tracking-wide transition-all duration-300">
                                            Dashboard
                                        </NavLink>
                                    </li>
                                    <li className="relative py-2 cursor-pointer transition-all duration-300 text-cyan-300
                                        hover:bg-cyan-300/20 hover:text-cyan-300">
                                        <NavLink to="/logout"
                                            className="px-3 py-2 rounded-md font-medium text-lg tracking-wide transition-all duration-300">
                                            Logout
                                        </NavLink>
                                    </li>
                                </>
                                :
                                <>
                                    <li className="relative py-2 cursor-pointer transition-all duration-300 text-cyan-300
                                        hover:bg-cyan-300/20 hover:text-cyan-300">
                                        <NavLink to="/register"
                                            className="px-3 py-2 rounded-md font-medium text-lg tracking-wide transition-all duration-300">
                                            Register
                                        </NavLink>
                                    </li>
                                    <li className="relative py-2 cursor-pointer transition-all duration-300 text-cyan-300
                                        hover:bg-cyan-300/20 hover:text-cyan-300">
                                        <NavLink to="/login"
                                            className="px-3 py-2 rounded-md font-medium text-lg tracking-wide transition-all duration-300">
                                            Login
                                        </NavLink>
                                    </li>
                                </>
                        }
                    </ul>
                </nav>
            </div>
        </header>
    );
};

