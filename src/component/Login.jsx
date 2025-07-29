import React, { useState } from "react";
import { X, Phone } from "lucide-react";

export default function Login({ onClose, onSignupClick, onForgotPassword }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50 z-50 p-4">
      <div className="flex flex-col md:flex-row rounded-[37px] md:rounded-[37px] overflow-hidden shadow-2xl border border-[#1545C2] border-1 bg-opacity-100 w-full max-w-[1108px] max-h-[90vh] md:h-[625px]">
        
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
        <div className="w-full md:w-1/2 bg-[#020817] text-white p-6 md:p-8 relative overflow-y-auto flex-1">
          {/* Close button - Only visible on desktop */}
          <button
            onClick={onClose}
            className="absolute cursor-pointer top-6 right-6 text-gray-400 hover:text-white hidden md:block"
          >
            <X size={24} />
          </button>

          <div className="mt-8 md:mt-12 mb-4 md:mb-6">
            <p className="text-gray-400 text-sm mb-2">Welcome back</p>
            <h2 className="text-xl md:text-2xl font-semibold">Log In to Your Account</h2>
          </div>
          <br/>

          <div className="space-y-4">
            <div className="relative w-full">
              {/* Label positioned over the border */}
              <label className="absolute -top-3 left-4 bg-[#020817] px-1 text-sm text-white">
                Email address
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-center bg-transparent border border-blue-600 rounded-full text-white placeholder-blue-400 focus:outline-none focus:border-blue-400"
              />
            </div>
            <br/>

            <div className="relative w-full">
              <label className="absolute -top-3 left-4 bg-[#020817] px-1 text-sm text-white">
                Password
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-center bg-transparent border border-blue-600 rounded-full text-white placeholder-blue-400 focus:outline-none focus:border-blue-400"
              />
            </div>
            
            <div
              onClick={() => {
                onForgotPassword();   // Open forgot password modal
              }}
              className="text-gray-400 text-sm text-right cursor-pointer hover:text-blue-300"
            >
              Forget password?
            </div>

            <button className="w-full py-2 bg-white text-black cursor-pointer font-medium rounded-full hover:bg-gray-100 transition">
              Continue
            </button>
          </div>

          <div className="text-center mt-4 md:mt-6">
            <span className="text-white">Don't have an account? </span>
            <button
              onClick={() => {
                onClose();
                onSignupClick();
              }}
              className="text-blue-400 cursor-pointer hover:text-blue-300 underline"
            >
              Sign up
            </button>
          </div>

          


        </div>
      </div>
    </div>
  );
}