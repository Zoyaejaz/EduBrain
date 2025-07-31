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
    <div className="fixed inset-0 flex justify-center items-center bg-black/50 z-50 p-4">
      <div className="flex flex-col md:flex-row rounded-[37px] md:rounded-[37px] overflow-hidden shadow-2xl border border-[#1545C2] border-1 bg-opacity-100 w-full max-w-[1108px] max-h-[90vh] md:h-[625px]">
        
        {/* Left Section */}
        <div className="relative w-full md:w-1/2 bg-[#1545C2] flex flex-col justify-center items-start text-white p-6 md:p-8 text-start">
          <div
            className="absolute top-0 left-0 w-38 h-38 z-0 blur-[70px]"
            style={{
              background:
                "linear-gradient(224.6deg, rgba(154, 196, 254, 0.72) -3.85%, rgba(21, 69, 194, 0.72) 121.24%)",
              borderBottomRightRadius: "50%",
            }}
          />
          <div
            className="absolute top-0 left-0 w-38 h-38 z-0 blur-[50px]"
            style={{
              background:
                "linear-gradient(224.6deg, rgba(154, 196, 254, 0.72) -3.85%, rgba(21, 69, 194, 0.72) 121.24%)",
              borderBottomRightRadius: "50%",
            }}
          />
          {/* Mobile Close Button */}
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-4 right-4 text-white hover:text-gray-200 block md:hidden "
          >
            <X size={22} />
          </button>

          <h2 className="font-inter font-bold uppercase text-xl md:text-[26px] leading-[30px] md:leading-[40px] tracking-normal mb-2">
            <span className="block md:hidden">Build future ready skills</span>
            <span className="hidden md:block">Master the Skills <br /> for Tomorrow's Top Tech Jobs.</span>
          </h2>
          <p className="font-inter font-medium text-sm md:text-[15px] leading-[20px] md:leading-[29.16px] text-[#CEDAEE] mb-4 md:mb-6 tracking-normal">
            Elevate Your Skills, Secure Your Future
          </p>

          <img
            src="/signup.png"
            alt="Person working"
            className="hidden md:block object-contain w-full max-w-[577px] h-auto max-h-[390px]"
          />
        </div>

        {/* Right Section */}
        <div className="relative w-full md:w-1/2 bg-[#020817] text-white p-6 md:p-12 flex items-center justify-center overflow-y-auto">
          <div
            className="absolute bottom-0 right-0 w-38 h-38 z-0 blur-[50px]"
            style={{
              background:
                "linear-gradient(224.6deg, rgba(154, 196, 254, 0.72) -3.85%, rgba(21, 69, 194, 0.72) 121.24%)",
              borderTopLeftRadius: "50%",
            }}
          />
          {/* Desktop Close Button */}
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-6 right-6 text-gray-400 hover:text-white hidden md:block z-10"
          >
            <X size={24} />
          </button>
          <br/>
<br/>
          <div className="w-full max-w-md mx-auto">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-center">Create Password</h2>

            <div className="space-y-6">
              <div className="relative">
                <label className="absolute -top-3 left-4 bg-[#020817] px-1 text-sm text-white">Enter password</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter password"
                  className="w-full px-4 py-3 bg-transparent border border-blue-600 rounded-full text-white placeholder-blue-400 focus:outline-none focus:border-blue-400 text-center"
                />
              </div>

              <div className="relative">
                <label className="absolute -top-3 left-4 bg-[#020817] px-1 text-sm text-white">Confirm password</label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm password"
                  className="w-full px-4 py-3 bg-transparent border border-blue-600 rounded-full text-white placeholder-blue-400 focus:outline-none focus:border-blue-400 text-center"
                />
              </div>
<br/>
<br/>
              <button
                onClick={handleContinue}
                className="w-full py-3 bg-white text-black cursor-pointer font-medium rounded-full hover:bg-gray-100 transition"
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
