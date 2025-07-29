import React, { useState } from 'react';

const Footer = () => {
    const [email, setEmail] = useState('');

    const handleSubscribe = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        setEmail('');
    };

    return (
        <footer className="bg-[#0C0C0D] text-white border-t border-[#FFFFFF]">
            <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 lg:gap-12">
                    {/* Brand Section */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <div className="w-[80px] h-[80px] flex items-center justify-center mr-3">
                                <img src="/icon.png" alt="icon" className="w-[80px] h-[80px]" />
                            </div>
                        </div>
                        <p className="text-white text-[16px] leading-[22.75px] font-roboto font-normal align-middle tracking-[0px]">
                            Empowering learners through accessible, modern, and industry-ready education. Join thousands of students shaping their future.
                        </p>

                    </div>

                    {/* Explore Section */}
                    <div className="lg:col-span-1">
                        <h4 className="text-[20.5px] leading-[28px] font-inter font-semibold align-middle tracking-[0px] mb-6">Explore</h4>

                        <ul className="space-y-2 font-Roboto ">
                            <li>
                                <a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-[20px] font-normal font-roboto align-middle tracking-[0px]">
                                    About Us
                                </a>

                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-[20px] font-normal font-roboto align-middle tracking-[0px]">
                                    Courses
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-[20px] font-normal font-roboto align-middle tracking-[0px]">
                                    Process
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-[20px] font-normal font-roboto align-middle tracking-[0px]">
                                    Certification
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-[20px] font-normal font-roboto align-middle tracking-[0px]">
                                    Refund Policy
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Support Section */}
                    <div className="lg:col-span-1">
                        <h4 className="text-[20.5px] leading-[28px] font-inter font-semibold align-middle tracking-[0px] mb-6">Support</h4>
                        <ul className="space-y-2 font-Roboto">
                            <li>
                                <a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-[20px] font-normal font-roboto align-middle tracking-[0px]">
                                    FAQs
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-[20px] font-normal font-roboto align-middle tracking-[0px]">
                                    Privacy Policy
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-[20px] font-normal font-roboto align-middle tracking-[0px]">
                                    Contact Us
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-[20px] font-normal font-roboto align-middle tracking-[0px]">
                                    Terms of Service
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-white hover:text-white transition-colors text-[14px] leading-[20px] font-normal font-roboto align-middle tracking-[0px]">
                                    Careers
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="lg:col-span-1">
                        <h4 className="text-xl font-semibold mb-6">Join our Newsletter</h4>
                        <div className="space-y-2">
                            <div>
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Your email address"
                                    className="w-[284px] h-[40px] bg-white text-black border border-gray-700 rounded-[6px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400 text-sm opacity-100 text-center"
                                />
                            </div>
                            <button
                                onClick={handleSubscribe}
                                className="w-[284px] h-[40px] bg-[#0D5DFF] hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-lg transition-colors text-sm"
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="text-gray-400 text-xs mt-4 leading-relaxed">
                            No spam. Only helpful updates and learning resources.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 pt-8 border-t border-[#FFFFFF]">
                    <div className="flex flex-col sm:flex-row items-end justify-end space-y-4 sm:space-y-0">
                        {/* Copyright */}
                        <div className="text-white text-sm">
                            © 2025 EduBraining. All rights reserved.
                        </div>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;