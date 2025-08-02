import React, { useState } from 'react';
import { ShoppingCart, Check } from 'lucide-react';

const EdubrainingHero = () => {
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const addToCart = () => {
    setCartCount(prev => prev + 1);
    setCartTotal(prev => prev + 299); // Example course price
  };

  return (
    <div className="min-h-screen bg-[#0C0C0D] text-white relative overflow-hidden">

      <div className="relative z-10 container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          {/* Left Content */}
          <div className="space-y-8 lg:pr-8 ml-8">
            <div className="space-y-1">
              <h1 className="text-2xl lg:text-5xl font-bold leading-tight">
                Discover the future
                <br />
                of <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1545C2] to-[#859EE1] to-white ">learning</span>
              </h1>

              <p className="text-2xl text-[#6C98FF] leading-relaxed">
                <span className="text-[#6C98FF] font-semibold font-roboto ">AI Enhance courses for high paying job</span>
              </p>

              <div className="text-white leading-relaxed font-roboto ">
                <p className="mb-2 mt-7">
                  <span className="text-white font-bold font-roboto">Edubraining</span> is your gateway to a high-growth tech career. Founded by
                </p>
                <p className="mb-2">
                <span className="text-[#1763FF]  cursor-pointer">Vidit Agarwal</span> and <span className="text-[#1763FF]  cursor-pointer">Ishan Ghihar</span>, we're on a mission to make top-
                </p>
                <p className="">
                  tier technical education accessible, affordable, and truly career-
                </p>
                <p>focused for everyone.</p>
                <p className="mt-5 mb-0 font-roboto size-17px text-white">
                  Explore courses today and take the first step toward your <span className="text-[#57B6FF] font-semibold">dream tech job</span>.
                </p>
              </div>
            </div>

            <button
  onClick={addToCart}
  className="mt-0 bg-white text-black w-[193px] h-[40px] rounded-full font-semibold text-lg px-6 py-6 whitespace-nowrap cursor-pointer flex justify-center items-center"
>
  Explore Courses
</button>



            {/* Features Grid */}
<div className="grid md:grid-cols-2 gap-8 pt-8">
  {/* Why EduBraining */}
  <div className="space-y-4">
    <h3 className="text-blue-400 font-semibold text-lg border-b border-blue-400 pb-2">
      Why EduBraining
    </h3>
    <div className="space-y-3">
      {[
        'Industry-Expert Courses',
        'Live Mentorship',
        'Flexible Learning',
        'Career Support'
      ].map((item, index) => (
        <div key={index} className="flex items-center space-x-3 group">
          <Check className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="text-white group-hover:text-blue-200 transition-colors">{item}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Skills You'll Master */}
  <div className="space-y-4">
    <h3 className="text-blue-400 font-semibold text-lg border-b border-blue-400 pb-2">
      Skills You'll Master
    </h3>
    <div className="space-y-3">
      {[
        'Power BI',
        'Data Analytics',
        'Machine Learning',
        'Full Stack Development',
        'Web Technologies',
        'Programming Languages',
        'UI/UX'
      ].map((item, index) => (
        <div key={index} className="flex items-center space-x-3 group">
          <Check className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
          <span className="text-white group-hover:text-blue-200 transition-colors">{item}</span>
        </div>
      ))}
    </div>
  </div>
</div>

          </div>

          {/* Right Content - Visual Elements */}
          <div className="w-full px-4 sm:px-8 lg:px-16 py-6">
  {/* Background Image Section */}
  <div className="relative w-full h-60 sm:h-80 lg:h-96 rounded-3xl ">
    <img
      src="header.png"
      alt="Background Visual"
      className="w-full h-full "
    />
  </div>

  {/* Cart Widget - Below the Image */}
  <div className="mt-60 flex justify-end">
    <div className="bg-[#1545C20D] backdrop-blur-sm border border-[#1750BF] rounded-xl p-3 sm:p-4 shadow-2xl w-fit">
      <div className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-8 min-w-36 sm:min-w-48">
        <div className="flex flex-col items-center">
          <div className="text-lg sm:text-2xl font-bold text-white">0</div>
          <div className="text-xs sm:text-sm text-gray-400">Courses</div>
        </div>
      <div className="flex flex-col items-center bg-[#1545C20D]">
          <div className="text-lg sm:text-2xl font-bold text-white">₹0</div>
          <div className="text-xs sm:text-sm text-gray-400">Total</div>
        </div>
        <button className="bg-gradient-to-r from-[#72A0FF] via-[#246CFF] to-[#0054FF] text-white px-3 py-2 sm:px-4 sm:py-2 rounded-lg flex items-center gap-1 sm:gap-2 transition-colors duration-200">
          <ShoppingCart className="w-3 h-3 sm:w-4 sm:h-4" />
          <span className="text-xs sm:text-sm">Go to Cart</span>
        </button>
      </div>
    </div>
  </div>
</div>


        </div>
      </div>
    </div>
  );
};

export default EdubrainingHero;