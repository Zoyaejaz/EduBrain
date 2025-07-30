import React from 'react';
import { ShoppingCart } from 'lucide-react';

const EduBrainingHero = () => {
  return (
    <div className="min-h-screen bg-[#0C0C0D] relative overflow-hidden">
      {/* Hero Section */}
      <div className="relative flex items-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-white space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                  Discover the future
                  <br />
                  of learning
                </h1>
                <p className="text-xl sm:text-2xl text-blue-400 font-medium">
                  AI Enhance courses for high paying job
                </p>
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl">
                  Edubraining, founded by Vidhi Aggarwal and Lakhan Chahar,
                  aims to make high-quality technical education accessible and
                  affordable. The platform offers industry-expert-designed
                  recorded courses, live mentorship for personalized guidance,
                  and valid certifications. It also provides internship
                  opportunities and placement assistance to help students
                  build successful tech careers. Edubraining fosters a learning
                  community, empowering individuals to achieve their career
                  goals in the tech industry.
                </p>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 transform hover:scale-105">
                Explore Courses
              </button>
            </div>

            {/* Right Content - Animated Elements */}
            <div className="relative lg:block">
              <div className="relative w-full h-64 sm:h-80 lg:h-96">
                {/* Connecting Lines */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.6" />
                      <stop offset="100%" stopColor="#06b6d4" stopOpacity="0.6" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M100 80 Q200 120 300 200 Q350 250 320 320"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                  />
                  <path
                    d="M80 200 Q150 180 220 220 Q280 260 320 200"
                    stroke="url(#lineGradient)"
                    strokeWidth="2"
                    fill="none"
                    className="animate-pulse"
                    style={{ animationDelay: '1s' }}
                  />
                </svg>

                {/* Profile Circle 1 - Top */}
                <div className="absolute top-0 right-4 sm:right-12 lg:right-20 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 p-1 animate-float">
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 bg-blue-300 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Profile Circle 2 - Middle Left */}
                <div className="absolute top-16 sm:top-24 lg:top-32 left-2 sm:left-4 lg:left-8 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 p-1 animate-float" style={{ animationDelay: '0.5s' }}>
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-600 to-cyan-400 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-10 lg:h-10 bg-cyan-300 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Profile Circle 3 - Bottom Right */}
                <div className="absolute bottom-2 sm:bottom-4 lg:bottom-8 right-2 sm:right-4 lg:right-8 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 p-1 animate-float" style={{ animationDelay: '1s' }}>
                  <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center overflow-hidden">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 lg:w-12 lg:h-12 bg-gradient-to-br from-purple-600 to-purple-400 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-8 lg:h-8 bg-purple-300 rounded-full"></div>
                    </div>
                  </div>
                </div>

                {/* Glowing Dots */}
                <div className="absolute top-8 sm:top-12 lg:top-16 left-16 sm:left-24 lg:left-32 w-2 h-2 lg:w-3 lg:h-3 bg-cyan-400 rounded-full animate-ping"></div>
                <div className="absolute bottom-16 sm:bottom-24 lg:bottom-32 left-8 sm:left-12 lg:left-20 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute top-20 sm:top-32 lg:top-40 right-6 sm:right-8 lg:right-12 w-1.5 h-1.5 lg:w-2 lg:h-2 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
              </div>
              {/* Cart Widget - Bottom Right */}
              <div className="absolute bottom-5 sm:-bottom-24 right-4 sm:right-6 z-50">
                <div className="bg-slate-800/90 backdrop-blur-sm border border-slate-600 rounded-xl p-3 sm:p-4 shadow-2xl">
                  <div className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-8 min-w-36 sm:min-w-48">
                    <div className="flex flex-col items-center">
                      <div className="text-lg sm:text-2xl font-bold text-white">0</div>
                      <div className="text-xs sm:text-sm text-gray-400">Courses</div>
                    </div>
                    <div className="flex flex-col items-center">
                      <div className="text-lg sm:text-2xl font-bold text-white">₹0</div>
                      <div className="text-xs sm:text-sm text-gray-400">Total</div>
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center gap-1 sm:gap-2 transition-colors duration-200">
                      <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="text-xs sm:text-sm">Go to Cart</span>
                    </button>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Background Elements */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-cyan-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-500/5 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default EduBrainingHero;