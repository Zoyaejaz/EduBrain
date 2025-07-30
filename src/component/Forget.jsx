import React, { useState } from "react";
import { ChevronLeft, X } from "lucide-react";

export default function Forget({ onClose, onContinue, onLoginClick }) {
  const [email, setEmail] = useState("");

  const handleGoBack = () => {
    onClose();
    onLoginClick();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 overflow-auto">
      <div className="flex flex-col md:flex-row w-full max-w-[1108px] bg-opacity-100 rounded-[30px] overflow-hidden shadow-2xl border border-[#1545C2] max-h-[90vh]">
        {/* Left Side */}
        <div className="w-full md:w-1/2 bg-[#1545C2] flex flex-col justify-between p-6 md:p-8 text-white relative">
          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-200 md:hidden"
          >
            <X size={20} />
          </button>

          <div>
            <h2 className="font-inter font-bold uppercase text-xl sm:text-2xl md:text-[26px] leading-snug md:leading-[40px] mb-3">
              <span className="block md:hidden">Build future ready skills</span>
              <span className="hidden md:block">
                Master the Skills <br />
                for Tomorrow's Top Tech Jobs.
              </span>
            </h2>
            <p className="text-[#CEDAEE] text-sm sm:text-base leading-relaxed mb-6">
              Elevate Your Skills, Secure Your Future
            </p>
          </div>

          <img
            src="/signup.png"
            alt="Person working"
            className="hidden md:block object-contain w-full max-w-[577px] max-h-[390px]"
          />
        </div>

        {/* Right Side */}
        <div className="w-full md:w-1/2 bg-[#020817] flex flex-col justify-center items-center p-6 md:p-8 relative overflow-y-auto">
          {/* Desktop Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white hidden md:block"
          >
            <X size={24} />
          </button>

          <div className="w-full max-w-md">
            <h2 className="text-xl sm:text-2xl font-semibold text-center mb-4 text-white">
              Forget Password
            </h2>
            <p className="text-center text-gray-400 text-sm sm:text-base mb-6 leading-relaxed">
              No worries! Just enter your email and we'll help you reset your password.
            </p>
            <br/>

            {/* Email Input */}
            <div className="relative w-full mb-6">
              <label className="absolute -top-3 left-4 bg-[#020817] px-1 text-sm text-white">
                Email address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email address"
                className="w-full px-4 py-2 text-center bg-transparent border border-blue-600 rounded-full text-white placeholder-blue-400 focus:outline-none focus:border-blue-400"
              />
            </div>
            <br/>

            {/* Continue Button */}
            <button
              onClick={() => onContinue(email)}
              className="w-full py-2 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition"
            >
              Continue
            </button>
            <br/>
            <br/>

            {/* Go Back Button */}
            <div className="mt-8 flex justify-start">
              <button
                onClick={handleGoBack}
                className="inline-flex items-center text-white hover:text-white transition-colors px-4 py-2 rounded-full border border-blue-600 hover:border-gray-500"
              >
                <ChevronLeft className="w-4 h-4 mr-2" />
                Go back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
