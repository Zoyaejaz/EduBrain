import React from 'react';

const TechJourneyCTA = () => {
    return (
        <section className="bg-[#0C0C0D] min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            <div className="max-w-7xl mx-auto ">
                <div className="bg-[#91B5FE] rounded-2xl lg:rounded-2xl h-100 w-320 pr-9 pl-16 relative overflow-hidden">
                    <div className="relative z-10 grid lg:grid-cols-2 gap-4 lg:gap-4 items-center">
                        {/* Content Section */}
                        <div className="text-left">
                            <img
                src="/left.png"
                alt="Left Decoration"
                className="absolute top-16 left-0 z-0 w-100 h-45 hidden md:block"
            />
                            <h1 className="text-[49.7px] leading-[57.6px] font-bold text-[#141414] align-middle font-montserrat pt-1">
                                Take the Next Step in
                                <br />
                                Your Tech Journey.
                            </h1>


                            <p className="text-[23px] leading-[31.2px] font-normal text-[#494A4D] align-middle font-roboto mb-8 max-w-xl">
                                Revolutionize Your Learning Journey with AI-Enhanced Courses!
                            </p>

                            <button className="bg-black text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform">
                                Explore Now!
                            </button>
                        </div>

                        {/* Image Section */}
                        <div className="flex justify-center lg:justify-end relative">
                            <div className="relative w-80 h-86 flex items-center justify-center overflow-visible">
                                <img
                                    src="/girl.png"
                                    alt="Smiling woman pointing to content"
                                    className="w-full h-full object-cover object-center relative right-[80px]"
                                />
            {/* Right Corner Image */}
            <img
                src="/right.png"
                alt="Right Decoration"
                className="absolute top-54 right-0 z-0 w-95 h-40 hidden md:block"
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