import React from 'react';
import { ShieldCheckIcon, ArrowTrendingUpIcon, ChartBarIcon, ArrowRightCircleIcon } from '@heroicons/react/24/solid'
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-transparent mix-blend-overlay"></div>
        </div>

        <div className="container mx-auto px-4 py-22 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight max-w-4xl mx-auto">
            <span className="block">The </span>
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-300 bg-clip-text text-transparent">Trend Titan System</span>
          </h1>

          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            A disciplined trend-following strategy leveraging 200MA direction, 50MA pullbacks, and MACD momentum confirmation
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105">
              Join The Titan Traders
            </Link>
          </div>
        </div>
      </div>

      {/* Strategy Overview */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">The Titan Edge</h2>
          <p className="text-xl text-gray-600">
            Three layers of confirmation for high-probability trend trading
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-blue-600">
            <div className="text-blue-600 mb-4">
              <ArrowTrendingUpIcon className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">200MA - Trend Foundation</h3>
            <p className="text-gray-600">
              Determines the dominant market direction. We only trade in the direction of the 200-period moving average.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-yellow-500">
            <div className="text-yellow-500 mb-4">
              <ChartBarIcon className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">50MA - Precision Pullbacks</h3>
            <p className="text-gray-600">
              Identifies optimal trade locations as retracements to the 50MA within the 200MA trend.
            </p>
          </div>

          <div className="bg-white p-8 rounded-xl shadow-lg border-t-4 border-green-500">
            <div className="text-green-500 mb-4">
              <ArrowRightCircleIcon className="h-10 w-10" />
            </div>
            <h3 className="text-xl font-semibold mb-3">MACD - Momentum Trigger</h3>
            <p className="text-gray-600">
              Confirms entry timing with MACD histogram expansion in the trend direction.
            </p>
          </div>
        </div>
      </div>

      {/* Performance Metrics */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Verified Performance</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Consistent results across market conditions (Jan-Mar 2025)
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Monthly Performance */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-800 text-white px-6 py-4">
                <h3 className="text-lg font-semibold">Monthly Performance Metrics</h3>
              </div>
              <div className="p-6">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Month</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Win Rate</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Net P/L</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Profit Factor</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium">Jan 2025</td>
                        <td className="px-4 py-3 whitespace-nowrap text-green-600">80.65%</td>
                        <td className="px-4 py-3 whitespace-nowrap">+1,831.28</td>
                        <td className="px-4 py-3 whitespace-nowrap">16.83</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium">Feb 2025</td>
                        <td className="px-4 py-3 whitespace-nowrap text-green-600">71.43%</td>
                        <td className="px-4 py-3 whitespace-nowrap">+1,626.10</td>
                        <td className="px-4 py-3 whitespace-nowrap">7.22</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium">Mar 2025</td>
                        <td className="px-4 py-3 whitespace-nowrap text-green-600">72.73%</td>
                        <td className="px-4 py-3 whitespace-nowrap">+1,056.00</td>
                        <td className="px-4 py-3 whitespace-nowrap">7.95</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mt-6 h-64">
                  {/* Placeholder for chart - use Chart.js or similar */}
                  <div className="bg-gray-50 rounded-lg h-full flex items-center justify-center text-gray-400">
                    Monthly Performance Chart Visualization
                  </div>
                </div>
              </div>
            </div>

            {/* Setup Performance */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="bg-blue-800 text-white px-6 py-4">
                <h3 className="text-lg font-semibold">Setup Performance Breakdown</h3>
              </div>
              <div className="p-6">
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h4 className="font-medium text-blue-800 mb-2">Best Performing</h4>
                    <p className="text-2xl font-bold">Downtrends</p>
                    <p className="text-green-600">81.03% Win Rate</p>
                    <p className="text-sm text-gray-600">PF: 13.04</p>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg">
                    <h4 className="font-medium text-yellow-800 mb-2">Highest Profit</h4>
                    <p className="text-2xl font-bold">Uptrends</p>
                    <p className="text-green-600">+25,381.5 Gross</p>
                    <p className="text-sm text-gray-600">2.13 PF</p>
                  </div>
                </div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Setup</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Win Rate</th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">Net P/L</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium">Uptrend</td>
                        <td className="px-4 py-3 whitespace-nowrap">68.35%</td>
                        <td className="px-4 py-3 whitespace-nowrap text-green-600">+13,437.45</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium">Downtrend</td>
                        <td className="px-4 py-3 whitespace-nowrap">81.03%</td>
                        <td className="px-4 py-3 whitespace-nowrap text-green-600">+1,757.13</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 whitespace-nowrap font-medium">Range Breakout</td>
                        <td className="px-4 py-3 whitespace-nowrap">70.59%</td>
                        <td className="px-4 py-3 whitespace-nowrap text-green-600">+392.25</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Security & Profit Sharing */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Secure Profit Sharing Model</h2>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <ShieldCheckIcon className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Token-Based Trade Execution</h3>
                  <p className="text-gray-600">
                    Daily generated tokens authorize trade placement without exposing your broker credentials.
                    Tokens expire after 24 hours and only permit trade execution, not withdrawals.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Military-Grade Encryption</h3>
                  <p className="text-gray-600">
                    All sensitive data is encrypted with AES-256 both in transit and at rest.
                    We never store your broker passwords - only hashed tokens.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-100 p-2 rounded-lg mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-2">Transparent Profit Sharing</h3>
                  <p className="text-gray-600">
                    20% of net profits shared with strategy provider.
                    Detailed trade reports show exact calculations.
                    No hidden fees or subscription charges.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-xl p-8 border border-blue-100">
            <h3 className="text-xl font-semibold text-blue-800 mb-4">Risk Disclosure</h3>
            <div className="prose prose-blue">
              <ul className="list-disc pl-5 space-y-2">
                <li>Trading involves substantial risk of loss</li>
                <li>Past performance ≠ future results</li>
                <li>Maximum historical drawdown: 24.8%</li>
                <li>Average risk per trade: 1.5-2.5% of capital</li>
                <li>Profit sharing calculated on net gains after losses</li>
                <li>Not suitable for all investors</li>
              </ul>
            </div>
            <div className="mt-6 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
              <p className="text-sm text-yellow-700">
                <strong>Note:</strong> This is not investment advice. Conduct your own due diligence before participating.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials */}
      <div className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Traders Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Join hundreds of traders leveraging the Trend Titan System
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                  AS
                </div>
                <div>
                  <h4 className="font-semibold">Amit S.</h4>
                  <p className="text-sm text-gray-500">Trader since Jan 2025</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The 200MA filter keeps me on the right side of trends. My win rate improved from 58% to 72% in three months."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                  PK
                </div>
                <div>
                  <h4 className="font-semibold">Priya K.</h4>
                  <p className="text-sm text-gray-500">Trader since Feb 2025</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The 50MA pullback entries are game-changers. I'm net positive even in ranging markets now."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold mr-4">
                  RS
                </div>
                <div>
                  <h4 className="font-semibold">Rahul S.</h4>
                  <p className="text-sm text-gray-500">Trader since Dec 2024</p>
                </div>
              </div>
              <p className="text-gray-600 italic mb-4">
                "The token security system gives me peace of mind. I know my account is protected while still getting trades executed."
              </p>
              <div className="flex text-yellow-400">
                {[...Array(4)].map((_, i) => (
                  <svg key={i} xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-300" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-blue-900 to-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Trade Like a Titan?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Join our community of disciplined trend traders today
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register"
              className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105">
              Register Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

