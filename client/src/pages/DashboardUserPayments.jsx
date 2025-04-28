/*******************************
 * Page Name : DashboardUserPayments.jsx
 * Author : Tushar
 * Date : 26 Apr 2025
 * Purpose : component for user payment
 ***********************************/

import { LightBulbIcon, CreditCardIcon, CalendarDaysIcon } from "@heroicons/react/24/solid";


export const DashboardUserPayments = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-indigo-100 mb-4">
          <CreditCardIcon className="h-6 w-6 text-indigo-600" aria-hidden="true" />
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl mb-3">
          Payments Module Coming Soon
        </h2>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto">
          We're working hard to bring you a secure and seamless payment experience.
        </p>
      </div>

      <div className="bg-white overflow-hidden shadow rounded-lg divide-y divide-gray-200">
        <div className="px-4 py-5 sm:p-6">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
              <LightBulbIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                What to Expect
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Secure and quick payment processing and transaction history.
              </p>
            </div>
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6 bg-gray-50">
          <div className="flex items-center">
            <div className="flex-shrink-0 bg-indigo-500 rounded-md p-3">
              <CalendarDaysIcon className="h-6 w-6 text-white" />
            </div>
            <div className="ml-4">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                Estimated Availability
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                We plan to launch this feature in Q2 2025.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-indigo-50 border-l-4 border-indigo-400 p-4 rounded-md">
        <div className="flex">
          <div className="flex-shrink-0">
            <svg className="h-5 w-5 text-indigo-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2h-1V9z" clipRule="evenodd" />
            </svg>
          </div>
          <div className="ml-3">
            <p className="text-sm text-indigo-700">
              In the meantime, all payments are being processed manually by our support team. 
              Please contact <a href="mailto:support@blitzsync.com" className="font-medium underline">support@blitzsync.com</a> for any payment-related queries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};



