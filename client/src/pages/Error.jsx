/*******************************
 * Page Name : Error.jsx
 * Author : Tushar
 * Date : 18 Apr 2025
 * Purpose : Error Page component
 ***********************************/

import React from 'react';
import { Link } from 'react-router-dom'; // or your routing solution

export const Error = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100 flex flex-col items-center justify-center p-6">
      <div className="max-w-md w-full bg-white rounded-xl shadow-2xl overflow-hidden">
        {/* Illustration Section */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 p-8 text-center">
          <div className="text-9xl font-bold text-white opacity-20 mb-2">404</div>
          <h1 className="text-2xl font-bold text-white">Page Not Found</h1>
        </div>
        
        {/* Content Section */}
        <div className="p-8 text-center">
          <svg
            className="w-24 h-24 mx-auto text-blue-500 mb-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Oops! Lost in Space?</h2>
          <p className="text-gray-600 mb-8">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/"
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Return Home
            </Link>
            
            <Link
              to="/contact"
              className="px-6 py-3 border border-blue-600 text-blue-600 hover:bg-blue-50 font-medium rounded-lg transition duration-300 shadow-sm hover:shadow-md"
            >
              Report Problem
            </Link>
          </div>
        </div>
        
        {/* Footer Note */}
        <div className="bg-gray-50 px-8 py-4 text-center text-sm text-gray-500">
          Still need help? Contact our <a href="mailto:support@elitetrade.com" className="text-blue-600 hover:underline">support team</a>.
        </div>
      </div>
    </div>
  );
};

