// CertificationAchievement.jsx
import React from 'react';

const CertificationAchievement = () => {
  const benefits = [
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Credential Recognition",
      description: "Boost your resume with a recognized certification, showcasing your expertise in sought-after tech domains."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      title: "Career Advancement",
      description: "Open doors to new career opportunities and promotions by demonstrating your commitment to continuous learning and skill development."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      ),
      title: "Industry Validation",
      description: "Gain recognition from industry professionals, employers, and peers, adding credibility to your skills and knowledge."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Competitive Edge",
      description: "Stand out in a competitive job market with a certification that sets you apart as a qualified and skilled professional."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      title: "Skill Mastery",
      description: "Validate your proficiency in specific technologies or methodologies, proving your capability to employers and project collaborators."
    },
    {
      icon: (
        <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: "Network Growth",
      description: "Join a community of certified professionals, expanding your network and connecting with like-minded individuals in your field."
    }
  ];

  return (
    <div className="relative bg-[#0C0C0D] text-white min-h-screen py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Left Decoration */}
      <img
        src="/left.png"
        alt="Left Decoration"
        className="absolute top-0 left-0 z-0 w-[408.37px] h-[111.5px] hidden md:block"
      />

      {/* Blur Decoration (Top Right) */}
      <img
        src="/blur.png"
        alt="Blur Decoration"
        className="absolute top-0 right-0 z-0 w-[550px] h-[749px] hidden md:block"
      />

      {/* Right Decoration (Bottom Right) */}
      <img
        src="/right.png"
        alt="Right Decoration"
        className="absolute bottom-0 right-0 z-0 w-[335.69px] h-[189px] hidden md:block"
      />

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[#91B5FE] text-sm sm:text-base lg:text-lg mb-4 sm:mb-6 font-medium tracking-wide">
            Certification and Achievement
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 sm:mb-8 leading-tight">
            How It Helps you?
          </h1>
          <p className="text-[#7A7C80] text-sm sm:text-base lg:text-lg leading-relaxed max-w-4xl mx-auto px-4">
            Boost your career with Edubraining certifications. Validate your skills, stand out in the tech industry, and 
            unlock new opportunities.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-[#121721] backdrop-blur-sm border border-gray-700/50 rounded-xl sm:rounded-2xl p-6 sm:p-8 text-center hover:bg-gray-800/70 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl group"
            >
              {/* Icon */}
              <div className="flex justify-center mb-4 sm:mb-6">
                <div className="p-3 sm:p-4 bg-blue-500/20 rounded-xl sm:rounded-2xl group-hover:bg-blue-500/30 transition-colors duration-300">
                  {benefit.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-white group-hover:text-blue-300 transition-colors duration-300">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-[#ABAEB2] text-sm sm:text-base leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationAchievement;
