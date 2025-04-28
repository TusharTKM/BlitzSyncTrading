/*******************************
 * Page Name : Register.jsx
 * Author : Tushar
 * Date : 18 Apr 2025
 * Purpose : Registration component
 ***********************************/

import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { toast } from "react-toastify";

const registerURL = "http://localhost:5000/api/auth/register";

export const Register = () => {

    const navigate = useNavigate();

    // State for user Details
    const [userDetails, setUserDetails] = useState({
        name: "",
        email: "",
        phone: "",
        pancard: "",
        password: "",
        isAdmin: false,
        brokerName: "",
        clientId: "",
        apiKey: "",
        apiSecret: "",
        vendorCode: "",
        imei: ""
    });

    // On change function to handle user input
    const handleUserDetailsChange = (e) => {
        const { name, value } = e.target;
        setUserDetails({
            ...userDetails,
            [name]: value
        });
    }

    /******************************************* */
    // Function to handle Register Button click
    /********************************************** */
    const handleUserRegistration = async (e) => {
        e.preventDefault();

        const body = {
            name: userDetails.name,
            email: userDetails.email,
            phone: userDetails.phone,
            pancard: userDetails.pancard,
            password: userDetails.password,
            isAdmin: userDetails.isAdmin,
            brokerName: userDetails.brokerName,
            clientId: userDetails.clientId,
            apiKey: userDetails.apiKey,
            apiSecret: userDetails.apiSecret,
            vendorCode: userDetails.vendorCode,
            imei: userDetails.imei
        };

        try {
            const respRegister = await fetch(registerURL, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(body)
            });

            // get the json data from response
            const resData = await respRegister.json();
            if (respRegister.ok) {
                toast.success("Registration is successful")
                navigate("/login")
            } else {
                toast.error(resData.message)
            }
        } catch (error) {
            toast.error("Sorry! something went wrong during registration");
        }
    };

    // List of brokers
    const brokers = ['-- Select --', 'Zerodha', 'Finvasia'];

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-blue-700 text-white py-10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-4xl font-bold mb-4">Unlock the Power of Smart Trading</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        Join "Blitz Sync Trading" today and gain access to expert strategies, <br />
                        real-time trade replication, and a community of top-tier traders.
                    </p>
                </div>
            </div>

            {/* Registration Content */}
            <div className="container mx-auto px-2 py-8">
                <div className="flex flex-col lg:flex-row gap-12">

                    {/* Left Section - Registration Vector & Benefits */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-xl shadow-lg h-full">
                            <div className="flex justify-center mb-8">

                                {/* Vector illustration - image for registration */}
                                <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center">
                                    <img src="/images/register.png" alt="Registration Image"
                                        width="200" height="250" />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <h2 className="text-2xl font-bold text-gray-800">Why Register With Us?</h2>

                                <div className="space-y-4">
                                    <div className="flex items-start space-x-3">
                                        <div className="mt-1 text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Access Top Traders</h3>
                                            <p className="text-gray-600 text-sm">Copy strategies from our verified trading strategies with proven track records</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="mt-1 text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Automated Trading</h3>
                                            <p className="text-gray-600 text-sm">Trades execute automatically in your account without manual intervention</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="mt-1 text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">Risk Management</h3>
                                            <p className="text-gray-600 text-sm">Minimize risk, maximize returns. Set your own investment amounts & let experience guide your portfolio</p>
                                        </div>
                                    </div>

                                    <div className="flex items-start space-x-3">
                                        <div className="mt-1 text-blue-600">
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-800">24/7 Support</h3>
                                            <p className="text-gray-600 text-sm">Our team is always available to help you with any questions</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Registration Form */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Create Your Account</h2>

                            <form onSubmit={handleUserRegistration}>
                                {/* Personal Information Section */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                                        Personal Information
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name *</label>
                                            <input
                                                type="text"
                                                id="txtUserName"
                                                name="name"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Enter your name"
                                                value={userDetails.name}
                                                onChange={handleUserDetailsChange}
                                                autoComplete="off"
                                                required
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
                                            <input
                                                type="email"
                                                id="txtEmail"
                                                name="email"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="your@email.com"
                                                value={userDetails.email}
                                                onChange={handleUserDetailsChange}
                                                required
                                                autoComplete="off"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
                                            <input
                                                type="number"
                                                id="txtPhone"
                                                name="phone"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="+91 9876543210"
                                                value={userDetails.phone}
                                                onChange={handleUserDetailsChange}
                                                required
                                                autoComplete="off"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="pancard" className="block text-sm font-medium text-gray-700 mb-1">PAN Card Number *</label>
                                            <input
                                                type="text"
                                                id="txtPancard"
                                                name="pancard"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="ABCDE1234F"
                                                value={userDetails.pancard}
                                                onChange={handleUserDetailsChange}
                                                required
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
                                                placeholder="Create a strong password"
                                                required
                                                value={userDetails.password}
                                                onChange={handleUserDetailsChange}
                                            />
                                            <p className="text-xs text-gray-500 mt-1">Minimum 6 characters with at least 1 number and special character</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Broker Details Section */}
                                <div className="mb-8">
                                    <h3 className="text-lg font-semibold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                                        Broker Details
                                    </h3>

                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="brokerName" className="block text-sm font-medium text-gray-700 mb-1">Broker's Name *</label>
                                            <select id="selBrokerName" name="brokerName"
                                                className="w-full border border-gray-300 rounded-lg px-4 py-2"
                                                value={userDetails.brokerName}
                                                onChange={handleUserDetailsChange}>
                                                {brokers.map((broker) => (
                                                    <option key={broker} value={broker}>
                                                        {broker}
                                                    </option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label htmlFor="clientId" className="block text-sm font-medium text-gray-700 mb-1">Client Id *</label>
                                            <input
                                                type="text"
                                                id="txtBrokerId"
                                                name="clientId"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Your broker client Id"
                                                required
                                                value={userDetails.clientId}
                                                onChange={handleUserDetailsChange}
                                                autoComplete="off"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="apiKey" className="block text-sm font-medium text-gray-700 mb-1">API Key *</label>
                                            <input
                                                type="text"
                                                id="txtApiKey"
                                                name="apiKey"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Your broker API key"
                                                required
                                                value={userDetails.apiKey}
                                                onChange={handleUserDetailsChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="apiSecret" className="block text-sm font-medium text-gray-700 mb-1">API Secret</label>
                                            <input
                                                type="text"
                                                id="txtApiSecret"
                                                name="apiSecret"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Your broker API Secret key (if applicable)"
                                                value={userDetails.apiSecret}
                                                onChange={handleUserDetailsChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="vendorCode" className="block text-sm font-medium text-gray-700 mb-1">Vendor Code</label>
                                            <input
                                                type="text"
                                                id="txtVendorCode"
                                                name="vendorCode"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Provided by your broker (if applicable)"
                                                value={userDetails.vendorCode}
                                                onChange={handleUserDetailsChange}
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="imei" className="block text-sm font-medium text-gray-700 mb-1">IMEI Number</label>
                                            <input
                                                type="text"
                                                id="txtImei"
                                                name="imei"
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                                placeholder="Device IMEI (if applicable)"
                                                value={userDetails.imei}
                                                onChange={handleUserDetailsChange}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Create My Account
                                </button>

                                <p className="text-sm text-gray-600 mt-4 text-center">
                                    Already have an account?
                                    <Link to="/login" className="text-blue-600 hover:underline"> Sign in here</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};