/*******************************
 * Page Name : Contact.jsx
 * Author : Tushar
 * Date : 18 Apr 2025
 * Purpose : Contact component
 ***********************************/
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/auth";
import { toast } from "react-toastify";

const contactUrl = "http://localhost:5000/api/form/contact";

export const Contact = () => {

    const { user } = useContext(AuthContext);

    // State for Contact Details
    const [contactDetails, setContactDetails] = useState({
        name: "",
        email: "",
        message: ""
    });

    useEffect(() => {
        if (user) {
            setContactDetails({
                name: user.name,
                email: user.email,
                message: ""
            })
        } else {
            setContactDetails({
                name: "",
                email: "",
                message: ""
            })
        }
    }, [user]);

    // On change function to handle user input
    const handleContactInput = (e) => {
        const { name, value } = e.target;
        setContactDetails({
            ...contactDetails,
            [name]: value
        })
    }

    /******************************* */
    // On Submit of contact message
    /******************************* */
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const msgResp = await fetch(contactUrl, {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: contactDetails.name,
                    email: contactDetails.email,
                    message: contactDetails.message
                })
            });

            const respData = await msgResp.json();
            if (msgResp.ok) {

                // Reset the fields after message submission
                if (user == null) {
                    setContactDetails({ message: "" });
                } else {
                    setContactDetails({ name: user.name, email: user.email, message: "" });
                }

                let successMessage = "Thank you for reaching out!"
                successMessage += "We’ve received your message and will respond within 24 hours."
                successMessage += "For urgent issues, call us at +91 9876543210"
                toast.success(successMessage)
            } else {
                toast.error(respData.message);
            }
        } catch (error) {
            toast.error("Sorry! something went wrong while sending your message")
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="bg-blue-700 text-white py-10">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-4xl font-bold mb-4">We’re Here to Help – Reach Out Anytime</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        At Blitz Sync Trading, your success is our priority.
                        Whether you have questions, feedback, or need technical support,
                        our team is ready to assist you promptly and personally.
                    </p>
                </div>
            </div>

            {/* Contact Content */}
            <div className="container mx-auto px-2 py-8">
                <div className="flex flex-col lg:flex-row gap-12">
                    {/* Left Section - Contact Info with Vector */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <div className="flex justify-center mb-8">
                                {/* Vector illustration - replace with your actual image */}
                                <div className="w-64 h-64 bg-blue-100 rounded-full flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-40 w-40 text-blue-600"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth={1.5}
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                        />
                                    </svg>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="flex items-start space-x-4">
                                    <div className="mt-1 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Call Us</h3>
                                        <p className="text-gray-600">+91 9876543210</p>
                                        <p className="text-gray-600">Mon-Fri: 9am-6pm</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="mt-1 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Email Us</h3>
                                        <p className="text-gray-600">support@blitzsynctrading.com</p>
                                        <p className="text-gray-600">sales@blitzsynctrading.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start space-x-4">
                                    <div className="mt-1 text-blue-600">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-gray-800">Visit Us</h3>
                                        <p className="text-gray-600">123 Trading Street</p>
                                        <p className="text-gray-600">Financial District, IN 10005</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Section - Contact Form */}
                    <div className="lg:w-1/2">
                        <div className="bg-white p-8 rounded-xl shadow-lg">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h2>
                            <form onSubmit={handleSubmit}>
                                <div className="mb-6">
                                    <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Your Name</label>
                                    <input
                                        type="text"
                                        id="txtUserName"
                                        name="name"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                        autoComplete="off"
                                        value={contactDetails.name}
                                        onChange={handleContactInput}
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email Address</label>
                                    <input
                                        type="email"
                                        id="txtEmail"
                                        name="email"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        required
                                        value={contactDetails.email}
                                        onChange={handleContactInput}
                                        autoComplete="off"
                                    />
                                </div>

                                <div className="mb-6">
                                    <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Your Message</label>
                                    <textarea
                                        id="txtMessage"
                                        name="message"
                                        rows="5"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                        placeholder="How can we help you?"
                                        required
                                        autoComplete="off"
                                        value={contactDetails.message}
                                        onChange={handleContactInput}
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                                >
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>

            {/* Google Map Section */}
            <div className="container mx-auto px-4 pb-16">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Our Location</h2>
                <div className="rounded-xl overflow-hidden shadow-lg">
                    {/* Google Map Embed - Replace with your actual embed code */}
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d239487.16523009713!2d85.65563799575625!3d20.3008070139223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1909d2d5170aa5%3A0xfc580e2b68b33fa8!2sBhubaneswar%2C%20Odisha!5e0!3m2!1sen!2sin!4v1745457349260!5m2!1sen!2sin"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        title="Google Map"
                        className="rounded-xl"
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

