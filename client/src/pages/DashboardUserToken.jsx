/*******************************
 * Page Name : DashboardUserToken.jsx
 * Author : Tushar
 * Date : 26 Apr 2025
 * Purpose : component for user token
 ***********************************/

import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import { toast } from "react-toastify";

export const DashboardUserToken = () => {

    const { user } = useContext(AuthContext);
    const [tokenData, setTokenData] = useState({
        password: "",
        totp: ""
    });
    const [consentGiven, setConsentGiven] = useState(false);
    const [userProfile, setUserProfile] = useState({
        userId: "",
        name: "",
        brokerName: "",
        apiKey: "",
        apiSecret: "",
        clientId: "",
        vendorCode: "",
        imei: ""
    })

    // Set the user details on page load
    useEffect(() => {
        if (user) {
            setUserProfile({
                userId: user._id.toString(),
                name: user.name,
                brokerName: user.brokerName,
                clientId: user.clientId,
                apiKey: user.apiKey,
                apiSecret: user.apiSecret,
                vendorCode: user.vendorCode,
                imei: user.imei
            })
        }
    }, [user]);

    // Function to handle token generation fields
    const handleTokenInputs = (e) => {
        const { name, value } = e.target;
        setTokenData({
            ...tokenData,
            [name]: value
        });
    }

    /**************************************************/
    // Function to generate user token on button click
    /*************************************************** */

    const generateToken = async (e) => {
        e.preventDefault();


        // generate accessToken as per the brokers
        if (user && user.brokerName == "Finvasia") {
            await generateShoonyaToken();

        } else if (user && userProfile.brokerName == "Zerodha") {
            await generateZerodhaToken();
        }
    };

    /*******************************************************/
    // Function to generate accessToken for Shoonya Users
    /*********************************************************/
    const generateShoonyaToken = async () => {
        const shoonyaTokenUrl = "http://localhost:5000/api/user/generateShoonyaToken"
        const reqBody = {
            userId: userProfile.userId,
            brokerName: userProfile.brokerName,
            clientId: userProfile.clientId,
            password: tokenData.password,
            totp: tokenData.totp,
            apiKey: userProfile.apiKey,
            vendorCode: userProfile.vendorCode,
            imei: userProfile.imei
        }

        try {
            // API call to generate Token
            const respToken = await fetch(shoonyaTokenUrl, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(reqBody)
            });

            const respTokenData = await respToken.json()
            if (respToken.ok) {
                toast.success(respTokenData.message);
            } else {
                toast.error(respTokenData.message)
            }
        } catch (error) {
            toast.error("Sorry! something went wrong while generating user token");
        }
    }

    /*******************************************************/
    // Function to generate accessToken for Zerodha Users
    /*********************************************************/
    const generateZerodhaToken = async () => {
        console.log("zerodha token");        
    }


    return (
        <div className="w-full">
            <div className="bg-white rounded-xl shadow-md p-6">
                {/* Top tagline */}
                <div className="text-left mb-10">
                    <p className="text-lg text-blue-700 font-medium">
                        We're committed to transparent, secure trading—your trust is our priority.
                    </p>
                </div>

                {/* Two column sections */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Left section - Risk disclosure */}
                    <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
                        <h3 className="text-2xl font-bold text-gray-800 mb-6">Disclosure</h3>
                        <div className="space-y-4 text-gray-600">
                            <p>
                                As per SEBI guidelines, we require your explicit consent each day to place trades
                                on your behalf. This ensures you remain in full control of your account.
                            </p>
                            <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400">
                                <h4 className="font-medium text-green-800 mb-2">✅ What Granting Access Allows:</h4>
                                <ul className="list-disc pl-5 space-y-1 text-green-700">
                                    <li>Blitz Sync Trading can execute trades in your linked account today.</li>
                                    <li>We cannot withdraw funds or modify personal details.</li>
                                </ul>
                            </div>
                            <div className="mb-6 p-4 bg-yellow-50 border-l-4 border-yellow-400">
                                <p className="text-orange-700 pb-4">
                                    Trading in securities involves risk, including the potential loss of capital.
                                    Markets are volatile and past performance doesn't guarantee future results.
                                    By authorizing access, you acknowledge that:
                                </p>
                                <ul className="list-disc pl-5 space-y-1 text-orange-700">
                                    <li>You understand the risks of algorithmic/copy trading.</li>
                                    <li>Blitz Sync Trading doesn't guarantee profits or immunity from losses.</li>
                                    <li>You've read our full <a href="#" className="text-indigo-600 hover:underline">Risk Disclosure Document</a>.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Right section - Token Generation */}
                    <div className="max-w-md mx-auto bg-white p-8 rounded-xl shadow-md border border-gray-200">
                        <h2 className="text-2xl font-bold text-left text-gray-800 mb-6">Generate Access Token</h2>

                        {user && user.brokerName == "Finvasia" ?
                            <form onSubmit={generateToken} className="space-y-6">
                                <div>
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                                        Shoonya Password
                                    </label>
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Enter shoonya password."
                                        autoComplete="off"
                                        id="txtShoonyaPassword"
                                        value={tokenData.password}
                                        onChange={handleTokenInputs}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <label htmlFor="totp" className="block text-sm font-medium text-gray-700 mb-1">
                                        TOTP
                                    </label>
                                    <input
                                        type="text"
                                        name="totp"
                                        placeholder="Enter TOTP"
                                        autoComplete="off"
                                        id="txtTotp"
                                        value={tokenData.totp}
                                        onChange={handleTokenInputs}
                                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
                                        required
                                    />
                                </div>
                                <div>
                                    <input
                                        id="consent"
                                        name="consent"
                                        type="checkbox"
                                        checked={consentGiven}
                                        onChange={(e) => setConsentGiven(e.target.checked)}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    /> &nbsp;&nbsp;
                                    <label htmlFor="consent" className="font-medium text-gray-700">
                                        I authorize Blitz Sync Trading to execute trades on my behalf
                                    </label>
                                    <p className="text-sm text-gray-500 pt-2">
                                        By checking this box, you agree to our Terms of Service and acknowledge the Risk Disclosure.
                                    </p>
                                </div>
                                <div>
                                    <button
                                        disabled={!consentGiven}
                                        className={`w-full py-3 px-4 rounded-lg font-bold ${consentGiven ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                                    >
                                        Generate Trading Token
                                    </button>
                                </div>
                            </form>
                            :
                            <form onSubmit={generateToken} className="space-y-6">
                                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400">
                                    <p className="font-medium text-green-700 mb-2 pb-3">
                                        Please make sure you are alreay logged in to Kite Web or Mobile
                                    </p>
                                </div>
                                <div>
                                    <input
                                        id="consent"
                                        name="consent"
                                        type="checkbox"
                                        checked={consentGiven}
                                        onChange={(e) => setConsentGiven(e.target.checked)}
                                        className="focus:ring-blue-500 h-4 w-4 text-blue-600 border-gray-300 rounded"
                                    /> &nbsp;&nbsp;
                                    <label htmlFor="consent" className="font-medium text-gray-700">
                                        I authorize Blitz Sync Trading to execute trades on my behalf
                                    </label>
                                    <p className="text-sm text-gray-500 pt-2 pb-3">
                                        By checking this box, you agree to our Terms of Service and acknowledge the Risk Disclosure.
                                    </p>
                                </div>
                                <div>
                                    <button
                                        disabled={!consentGiven}
                                        className={`w-full py-3 px-4 rounded-lg font-bold ${consentGiven ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-300 text-gray-500 cursor-not-allowed'}`}
                                    >
                                        Generate Trading Token
                                    </button>
                                </div>
                            </form>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}