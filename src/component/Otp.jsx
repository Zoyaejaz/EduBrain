import React, { useState } from "react";
import { ChevronLeft, X } from "lucide-react";

export default function OTP({ onClose, onGoBack, onLoginClick }) {
  const [otpCode, setOtpCode] = useState("");
  
  const handleGoBack = () => {
    if (onGoBack) {
      onGoBack();
    } else {
      onClose();
    }
  };
  
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4">
      <div className="flex flex-col md:flex-row rounded-[37px] md:rounded-[37px] overflow-hidden shadow-2xl border border-[#1545C2] border-2 bg-opacity-100 w-full max-w-[1108px] max-h-[90vh] md:h-[625px]">
        
        {/* Left Side - Mobile: Top section, Desktop: Left side */}
        <div className="w-full md:w-1/2 bg-[#1545C2] flex flex-col justify-center items-start text-white p-6 md:p-8 text-start relative">
          {/* Close button - Only visible on mobile */}
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 text-white hover:text-gray-200 block md:hidden"
          >
            <X size={20} />
          </button>
          
          {/* Heading Text */}
          <h2 className="font-inter font-bold uppercase text-xl md:text-[26px] leading-[30px] md:leading-[40px] tracking-normal mb-2">
            <span className="block md:hidden">Build future ready skills</span>
            <span className="hidden md:block">Master the Skills <br />
            for Tomorrow's Top Tech Jobs.</span>
          </h2>

          <p className="font-inter font-medium text-sm md:text-[15px] leading-[20px] md:leading-[29.16px] text-[#CEDAEE] mb-4 md:mb-6 tracking-normal">
            Elevate Your Skills, secure Your Future
          </p>

          {/* Image - Hidden on mobile */}
          <img
            src="/signup.png"
            alt="Person working"
            className="hidden md:block object-contain w-full max-w-[577px] h-auto max-h-[390px]"
          />
        </div>

        {/* Right Side - Mobile: Bottom section, Desktop: Right side */}
        <div className="w-full md:w-1/2 bg-[#020817] text-white relative overflow-y-auto flex flex-col items-center justify-center p-6 md:p-8 flex-1">
          {/* Close button - Only visible on desktop */}
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-3 md:top-6 right-6 text-gray-400 hover:text-white hidden md:block"
          >
            <X size={24} />
          </button>

          <div className="w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-semibold text-center mb-4">
              Check Your Inbox
            </h2>
            <div className="text-center text-gray-400 text-sm mb-4 md:mb-6">
              <p>Enter the verification code we just sent to</p>
              <p>xyz@gmail.com</p>
            </div>

            <div className="space-y-4">
              <div className="relative w-full">
                <label className="absolute -top-3 left-4 bg-[#020817] px-1 text-sm text-white">
                  Enter code
                </label>
                <input
                  type="text"
                  value={otpCode}
                  onChange={(e) => setOtpCode(e.target.value)}
                  placeholder="Enter code"
                  className="w-full px-4 py-2 text-center bg-transparent border border-blue-600 rounded-full text-white placeholder-blue-400 focus:outline-none focus:border-blue-400"
                />
              </div>
              <br/>
              
              <button className="w-full py-2 bg-white text-black font-medium rounded-full hover:bg-gray-100 transition">
                Create Account
              </button>
              
              <div className="text-right">
                <button
                  onClick={() => {
                    onClose();
                    onLoginClick();
                  }}
                  className="text-blue-400 text-sm cursor-pointer hover:text-blue-300"
                >
                  Resend Email
                </button>
              </div>

              <div className="flex justify-start mt-6 md:mt-12">
                <button
                  onClick={handleGoBack}
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors px-3 py-2 rounded-full border border-blue-600 hover:border-gray-500"
                >
                  <ChevronLeft className="w-4 h-4 mr-2" />
                  Go back
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}