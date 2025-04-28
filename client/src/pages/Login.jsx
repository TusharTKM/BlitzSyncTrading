/*******************************
 * Page Name : Login.jsx
 * Author : Tushar
 * Date : 18 Apr 2025
 * Purpose : Login component
 ***********************************/

import { useContext, useState } from "react";
import { useNavigate, Link } from 'react-router-dom';
import { AuthContext } from "../context/auth";
import { toast } from "react-toastify";

const loginURL = "http://localhost:5000/api/auth/login";

export const Login = () => {

    const navigate = useNavigate();
    const { setUserAuthentication } = useContext(AuthContext);

    // State for Login Details
    const [loginDetails, setLoginDetails] = useState({
        email: "",
        password: ""
    });

    // On change function to handle user input
    const handleLoginDetailsChange = (e) => {
        const { name, value } = e.target;
        setLoginDetails({
            ...loginDetails,
            [name]: value
        });
    }

    /******************************************/
    // Function to handle Login Button click
    /****************************************** */
    const handleUserLogin = async (e) => {
        e.preventDefault();

        try {
            const loginResp = await fetch(loginURL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: loginDetails.email,
                    password: loginDetails.password
                })
            });

            // get the json data from response
            const loginRespData = await loginResp.json();
            if (loginResp.ok) {

                // Store JWToken in local storage and navigate to dashboard
                localStorage.setItem('jwtoken', loginRespData.jwToken);
                setUserAuthentication(true);
                setLoginDetails({ email: "", password: "" });
                toast.success("Login is successful")
                navigate("/dashboard");
            } else {
                toast.error(loginRespData.message)
                setUserAuthentication(false);
            }
        } catch (error) {
            //console.log(error)
            toast.error("Sorry! Something went wrong while loging in");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-blue-700 text-white py-10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-4xl font-bold mb-4">Welcome Back to Blitz Sync Trading!</h1>

                    <p className="text-xl max-w-2xl mx-auto">
                        Log in to access your dashboard and continue your journey <br />
                        towards smarter, effortless trading
                    </p>
                </div>
            </div>

            {/* Login Content */}
            <div className="container mx-auto px-2 py-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Section - Vector & Benefits */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                            <div className="flex justify-center mb-8">
                                {/* Vector illustration - replace with your actual image */}
                                <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center">
                                    <img src="/images/login.png" alt="Registration Image"
                                        width="200" height="250" />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-gray-800">Why Traders Love Us</h2>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="mt-1 text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Real-time Trade Copying</h3>
                                            <p className="text-gray-600 text-sm">Instant execution of expert trades in your account</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="mt-1 text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Performance Analytics</h3>
                                            <p className="text-gray-600 text-sm">Detailed reports on your copied trades and portfolio</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="mt-1 text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Risk Controls</h3>
                                            <p className="text-gray-600 text-sm">Customize your risk parameters for each strategy</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Login Form */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Sign In to Your Account</h2>

                            <form onSubmit={handleUserLogin}>
                                <div className="space-y-6">
                                    <div>
                                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
                                        <input
                                            type="text"
                                            id="txtEmail"
                                            name="email"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your email"
                                            required
                                            value={loginDetails.email}
                                            onChange={handleLoginDetailsChange}
                                            autoComplete="off"
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password *</label>
                                        <input
                                            type="password"
                                            id="txtPassword"
                                            name="password"
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                            placeholder="Enter your password"
                                            required
                                            value={loginDetails.password}
                                            onChange={handleLoginDetailsChange}
                                            autoComplete="off"
                                        />
                                        {/*
                                        <div className="flex justify-end mt-1">
                                            <a href="/forgot-password" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                                        </div> */}
                                    </div>

                                    {/*
                                    <div className="flex items-center">
                                        <input
                                            type="checkbox"
                                            id="remember"
                                            name="remember"
                                            className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                        />
                                        <label htmlFor="remember" className="ml-2 block text-sm text-gray-700">
                                            Remember me
                                        </label>
                                    </div> */}

                                    <button
                                        type="submit"
                                        className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                                    >
                                        Sign In
                                    </button>

                                    <div className="relative mt-6">
                                        <div className="absolute inset-0 flex items-center">
                                            <div className="w-full border-t border-gray-300"></div>
                                        </div>
                                        <div className="relative flex justify-center text-sm">
                                            <span className="px-2 bg-white text-gray-500">
                                                New to Blitz Sync Trading?
                                            </span>
                                        </div>
                                    </div>

                                    <Link to="/register" className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                                        Create New Account
                                    </Link>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

