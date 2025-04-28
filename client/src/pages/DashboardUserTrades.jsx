/*******************************
 * Page Name : DashboardUserTrades.jsx
 * Author : Tushar
 * Date : 26 Apr 2025
 * Purpose : component for user tardes
 ***********************************/

import { ChartBarIcon, BellIcon, LightBulbIcon, ArrowPathIcon, EnvelopeIcon } from "@heroicons/react/24/solid";

export const DashboardUserTrades = () => {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <div className="mx-auto flex items-center justify-center h-20 w-20 rounded-full bg-blue-100 mb-6">
                    <ChartBarIcon className="h-10 w-10 text-blue-600" />
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-4">Trade Analytics Coming Soon</h1>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                    We're building powerful tools to help you analyze and optimize your trading performance.
                </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-50 mb-5">
                        <LightBulbIcon className="h-6 w-6 text-purple-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Real-time Tracking</h3>
                    <p className="text-gray-600">
                        Monitor all your trades with live updates, including entry/exit points and P&L calculations.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-50 mb-5">
                        <BellIcon className="h-6 w-6 text-green-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance Alerts</h3>
                    <p className="text-gray-600">
                        Get notified about important patterns and opportunities in your trading activity.
                    </p>
                </div>

                <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-50 mb-5">
                        <ArrowPathIcon className="h-6 w-6 text-orange-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Historical Analysis</h3>
                    <p className="text-gray-600">
                        Review your complete trade history with advanced filtering and export capabilities.
                    </p>
                </div>
            </div>

            {/* Timeline Section */}
            <div className="bg-blue-50 rounded-2xl p-8 mb-16">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-2xl font-bold text-center text-gray-900 mb-6">Development Roadmap</h2>
                    <div className="space-y-8">
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                                <div className="h-6 w-6 text-blue-600 font-bold text-center">1</div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Basic Trade History</h3>
                                <p className="mt-1 text-gray-600">
                                    View your complete trade log with essential details (Completed)
                                </p>
                            </div>
                        </div>
                        <div className="flex items-start">
                            <div className="flex-shrink-0 bg-blue-100 rounded-full p-2">
                                <div className="h-6 w-6 text-blue-600 font-bold text-center">2</div>
                            </div>
                            <div className="ml-4">
                                <h3 className="text-lg font-medium text-gray-900">Advanced Analytics</h3>
                                <p className="mt-1 text-gray-600">
                                    Performance metrics, win rate analysis, and risk assessment (In Progress - ETA May 2025)
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

