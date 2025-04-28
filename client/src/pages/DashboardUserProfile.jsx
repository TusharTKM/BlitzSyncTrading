/*******************************
 * Page Name : DashboardUserProfile.jsx
 * Author : Tushar
 * Date : 26 Apr 2025
 * Purpose : component for user profile
 ***********************************/

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";

export const DashboardUserProfile = () => {

    const { user } = useContext(AuthContext);
    const [isEditing, setIsEditing] = useState(false);

    const [userProfile, setUserProfile] = useState({
        userId: "",
        name: "",
        email: "",
        pancard: "",
        phone: "",
        brokerName: "",
        apiKey: "",
        apiSecret: "",
        clientId: "",
        vendorCode: "",
        imei: ""
    });

    // Load the user Details on page load
    useEffect(() => {
        if (user) {
            setUserProfile({
                userId: user._id.toString(),
                name: user.name,
                email: user.email,
                pancard: user.pancard,
                phone: user.phone,
                brokerName: user.brokerName,
                clientId: user.clientId,
                apiKey: user.apiKey,
                apiSecret: user.apiSecret,
                vendorCode: user.vendorCode,
                imei: user.imei
            })
        }
    }, [user]);

    // Save button click on dashboard data Update
    const handleSave = async () => {
        setDashboardUser(dashboardUser);
        setIsEditing(false);
    };

    // Function to handle dashboard inputs
    const handleDashboardInput = (e) => {
        const { name, value } = e.target;
        setUserProfile({
            ...userProfile,
            [name]: value
        });
    }

    return (

        <div className="w-full">
            <div className="bg-white rounded-xl shadow-md p-6">
                {/* Top tagline */}
                <div className="text-left mb-10">
                    <p className="text-lg text-blue-700 font-medium">
                        Your trading journey is unique, and we’re here to make every step rewarding.
                    </p>
                </div>

                {/* Two column sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                            Personal Details
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-500 mb-1">Username</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="name"
                                        value={userProfile.name}
                                        onChange={handleDashboardInput}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-800">{userProfile.name}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-500 mb-1">Email Address</label>
                                {isEditing ? (
                                    <input
                                        type="email"
                                        name="email"
                                        value={userProfile.email}
                                        onChange={handleDashboardInput}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-800">{userProfile.email}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-500 mb-1">Phone Number</label>
                                {isEditing ? (
                                    <input
                                        type="number"
                                        name="phone"
                                        value={userProfile.phone}
                                        onChange={handleDashboardInput}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-800">{userProfile.phone}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-500 mb-1">PAN Card Number</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="pancard"
                                        value={userProfile.pancard}
                                        onChange={handleDashboardInput}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-800">{userProfile.pancard}</p>
                                )}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">
                            Broker Details
                        </h3>
                        <div className="space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-500 mb-1">Broker Name</label>
                                {isEditing ? (
                                    <select
                                        name="brokerName"
                                        value={userProfile.brokerName}
                                        onChange={handleDashboardInput}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    >
                                        <option value="Zerodha">Zerodha</option>
                                        <option value="Finvasia">Finvasia</option>
                                    </select>
                                ) : (
                                    <p className="text-gray-800">{userProfile.brokerName}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-500 mb-1">Broker ID</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="clientId"
                                        value={userProfile.clientId}
                                        onChange={handleDashboardInput}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-800">{userProfile.clientId}</p>
                                )}
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-gray-500 mb-1">App Key</label>
                                {isEditing ? (
                                    <input
                                        type="text"
                                        name="apiKey"
                                        value={userProfile.apiKey}
                                        onChange={handleDashboardInput}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                    />
                                ) : (
                                    <p className="text-gray-800">{userProfile.apiKey}</p>
                                )}
                            </div>

                            {/* Show API secret key to only Zerodha users */}
                            {userProfile.brokerName == "Zerodha" && (
                                <div>
                                    <label className="block text-sm font-medium text-gray-500 mb-1">App Secret</label>
                                    {isEditing ? (
                                        <input
                                            type="text"
                                            name="apiSecret"
                                            value={userProfile.apiSecret}
                                            onChange={handleDashboardInput}
                                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                        />
                                    ) : (
                                        <p className="text-gray-800">{userProfile.apiSecret == "" ? "Not Set" : userProfile.apiSecret}</p>
                                    )}
                                </div>
                            )}

                            {/* Show vendor code and imei to only Shoonya users */}
                            {userProfile.brokerName == "Finvasia" && (
                                <>
                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 mb-1">Vendor Code</label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="vendorCode"
                                                value={userProfile.vendorCode}
                                                onChange={handleDashboardInput}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        ) : (
                                            <p className="text-gray-800">{userProfile.vendorCode}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-500 mb-1">IMEI Number</label>
                                        {isEditing ? (
                                            <input
                                                type="text"
                                                name="imei"
                                                value={userProfile.imei}
                                                onChange={handleDashboardInput}
                                                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                                            />
                                        ) : (
                                            <p className="text-gray-800">{userProfile.imei}</p>
                                        )}
                                    </div>
                                </>
                            )}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}