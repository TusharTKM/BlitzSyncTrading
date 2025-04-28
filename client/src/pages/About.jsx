import { Link } from "react-router-dom";

export const About = () => {

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-blue-700 text-white py-10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-4xl font-bold mb-6">Revolutionizing Trading Through Copy Technology</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto">
                        Empowering traders of all levels to achieve market success by connecting them with proven trading strategies
                    </p>
                </div>
            </div>

            {/* Our Story */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Our Story</h2>
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <p className="text-gray-600 mb-6">
                            At BlitzSync Trading, our journey started from a trader's frustration with inconsistent manual executions and delayed reactions to market moves. Built by a trader for traders, BlitzSync bridges the gap between strategy and execution through automated sync trading.
                        </p>
                        <p className="text-gray-600 mb-6">
                            With years of real-market experience, we designed a system that empowers everyday traders to automate their journey, one secure token at a time.
                        </p>
                        <div className="bg-blue-50 border-l-4 border-blue-600 p-4">
                            <p className="text-blue-800 italic">
                                "Our mission is to democratize trading success by making professional strategies accessible to everyone, regardless of experience or account size."
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Why Choose Us */}
            <div className="bg-gray-100 py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Why Choose Blitz Sync Trading?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-blue-600 text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-semibold mb-3">Proven Performance</h3>
                            <p className="text-gray-600">
                                We rigorously vet all strategy providers, ensuring you only copy traders with verifiable track records of success.
                            </p>
                        </div>

                        {/* Feature 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-blue-600 text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-semibold mb-3">Secure & Transparent</h3>
                            <p className="text-gray-600">
                                Bank-level security protects your data, while complete transparency shows you exactly who you're copying and why.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-blue-600 text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold mb-3">Lightning Fast Execution</h3>
                            <p className="text-gray-600">
                                Our technology ensures trades are copied instantly, so you never miss an opportunity when markets move.
                            </p>
                        </div>
                    </div>
                    <br />
                    <div className="grid md:grid-cols-3 gap-8">
                        {/* Feature 1 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-blue-600 text-4xl mb-4">📊</div>
                            <h3 className="text-xl font-semibold mb-3">Proven Performance</h3>
                            <p className="text-gray-600">
                                We rigorously vet all strategy providers, ensuring you only copy traders with verifiable track records of success.
                            </p>
                        </div>
                        {/* Feature 2 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-blue-600 text-4xl mb-4">🔒</div>
                            <h3 className="text-xl font-semibold mb-3">Secure & Transparent</h3>
                            <p className="text-gray-600">
                                Bank-level security protects your data, while complete transparency shows you exactly who you're copying and why.
                            </p>
                        </div>

                        {/* Feature 3 */}
                        <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                            <div className="text-blue-600 text-4xl mb-4">⚡</div>
                            <h3 className="text-xl font-semibold mb-3">Lightning Fast Execution</h3>
                            <p className="text-gray-600">
                                Our technology ensures trades are copied instantly, so you never miss an opportunity when markets move.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="container mx-auto px-4 py-16">
                <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">Meet Our Leadership</h2>
                <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {/* Team Member 1 */}
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl">
                            👨‍💼
                        </div>
                        <h3 className="text-xl font-semibold">Raj Patel</h3>
                        <p className="text-blue-600 mb-2">Founder & CEO</p>
                        <p className="text-gray-600 text-sm">
                            Former hedge fund manager with 15+ years market experience
                        </p>
                    </div>

                    {/* Team Member 2 */}
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl">
                            👩‍💻
                        </div>
                        <h3 className="text-xl font-semibold">Priya Sharma</h3>
                        <p className="text-blue-600 mb-2">CTO</p>
                        <p className="text-gray-600 text-sm">
                            Fintech architect with expertise in trading systems
                        </p>
                    </div>

                    {/* Team Member 3 */}
                    <div className="text-center">
                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-4xl">
                            👨‍🎓
                        </div>
                        <h3 className="text-xl font-semibold">Amit Kumar</h3>
                        <p className="text-blue-600 mb-2">Head of Strategy</p>
                        <p className="text-gray-600 text-sm">
                            Quantitative analyst and trading strategy expert
                        </p>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Transform Your Trading?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Join thousands of traders who are already benefiting from our copy trading platform
                    </p>
                    <Link to="/register"
                        className="bg-yellow-400 hover:bg-yellow-300 text-blue-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-all transform hover:scale-105">
                        Register Now
                    </Link>
                </div>
            </div>
        </div>
    );
};

