import React from 'react';

const TechJourneyCTA = () => {
  return (
    <section className="bg-[#0C0C0D] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl w-full mx-auto">
        <div className="bg-[#91B5FE] rounded-2xl p-6 sm:p-10 lg:p-16 relative overflow-hidden">
          {/* Decorative Left Image */}
          <img
            src="/left.png"
            alt="Left Decoration"
            className="absolute top-10 left-0 z-0 w-32 sm:w-44 md:w-60 hidden md:block"
          />

          <div className="relative z-10 flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-6">
            {/* Left Content Section */}
            <div className="text-left w-full lg:w-1/2">
              <h1 className="text-3xl sm:text-4xl lg:text-[49.7px] leading-snug font-bold text-[#141414] font-montserrat">
                Take the Next Step in <br className="hidden sm:block" />
                Your Tech Journey.
              </h1>

              <p className="text-lg sm:text-xl lg:text-[23px] leading-relaxed text-[#494A4D] font-roboto mt-4 mb-8 max-w-xl">
                Revolutionize Your Learning Journey with AI-Enhanced Courses!
              </p>

              <button className="bg-black text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold text-base sm:text-lg hover:bg-gray-800 transition duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                Explore Now!
              </button>
            </div>

            {/* Right Image Section */}
            <div className="w-full lg:w-1/2 flex justify-center relative">
              <div className="relative w-[250px] sm:w-[300px] md:w-[350px]">
                <img
                  src="/girl.png"
                  alt="Smiling woman pointing"
                  className="w-full h-auto object-cover object-center"
                />

                {/* Decorative Right Image */}
                <img
                  src="/right.png"
                  alt="Right Decoration"
                  className="absolute top-0 right-[-30px] sm:right-[-40px] w-28 sm:w-36 hidden md:block z-0"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechJourneyCTA;
