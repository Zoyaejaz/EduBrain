import React, { useState } from "react";
import { ChevronLeft, X } from "lucide-react";

export default function Password({ onClose, onGoBack, onContinue }) {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleGoBack = () => {
    if (onGoBack) onGoBack();
    else onClose();
  };

  const handleContinue = () => {
    if (!password.trim() || !confirmPassword.trim()) {
      alert("Please fill in all fields before continuing.");
      return;
    }
    onContinue();
  };

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4">
      <div className="flex flex-col md:flex-row rounded-[20px] overflow-hidden shadow-2xl border border-[#1545C2] bg-white/5 backdrop-blur w-full max-w-[1108px] max-h-[95vh] md:h-[625px]">
        
        {/* Left Section */}
        <div className="w-full md:w-1/2 bg-[#1545C2] text-white flex flex-col justify-center items-start p-6 md:p-10 relative">
          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white hover:text-gray-300 "
          >
            <X size={22} />
          </button>

          <h2 className="font-inter font-bold uppercase text-xl md:text-2xl leading-snug tracking-wide mb-2">
            <span className="block md:hidden">Build future ready skills</span>
            <span className="hidden md:block">Master the Skills <br /> for Tomorrow's Top Tech Jobs.</span>
          </h2>
          <p className="font-inter text-sm md:text-base text-[#CEDAEE] mb-4">
            Elevate Your Skills, Secure Your Future
          </p>

          <img
            src="/signup.png"
            alt="Person working"
            className="hidden md:block w-full max-w-[577px] h-auto max-h-[390px] object-contain"
          />
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-[#020817] text-white relative overflow-y-auto flex flex-col items-center justify-center p-6 md:p-10">
          {/* Desktop Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 md:top-6 right-4 md:right-6 text-gray-400 hover:text-white hidden md:block"
          >
            <X size={24} />
          </button>
          <br/>
<br/>
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">Create Password</h2>

            <div className="space-y-6">
              <div className="relative">
                <label className="absolute -top-3 left-4 bg-[#020817] px-1 text-sm">Enter password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-2 bg-transparent border border-blue-600 rounded-full text-center text-white placeholder-blue-400 focus:outline-none focus:border-blue-400"
                />
              </div>

              <div className="relative">
                <label className="absolute -top-3 left-4 bg-[#020817] px-1 text-sm">Confirm password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  className="w-full px-4 py-2 text-center bg-transparent border border-blue-600 rounded-full text-white placeholder-blue-400 focus:outline-none focus:border-blue-400"
                />
              </div>
<br/>
<br/>
              <button
                onClick={handleContinue}
                className="w-full py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-100 transition"
              >
                Continue
              </button>
<br/>
<br/>

              <div className="flex justify-start mt-6 md:mt-12">
                <button
                  onClick={handleGoBack}
                  className="inline-flex items-center text-white px-4 py-2 border border-blue-600 rounded-full hover:border-gray-400"
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
