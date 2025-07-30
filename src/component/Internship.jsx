import React from 'react';

const InternshipOpportunities = () => {
  const benefits = [
    {
      title: "Practical Application",
      description:
        "An internship with Edubraining transforms your resume into a powerhouse, showcasing your ability to thrive professionally. This distinguished experience highlights your practical skills, industry knowledge, and adaptability, setting you apart from other candidates. Potential employers value hands-on experience, and your internship with Edubraining demonstrates your commitment to personal and professional growth. It's not just a line on your resume; it's a testament to your readiness to excel in the workforce.",
      isExpanded: true,
    },
    {
      title: "Industry Networking",
      description:
        "Build valuable connections with industry professionals and expand your network for future career opportunities.",
      isExpanded: false,
    },
    {
      title: "Resume Powerhouse",
      description:
        "Transform your resume with hands-on experience that employers value and recognize.",
      isExpanded: false,
    },
    {
      title: "Skill Refinement",
      description:
        "Develop and polish your professional skills through real-world application and mentorship.",
      isExpanded: false,
    },
    {
      title: "Exclusive Opportunities",
      description:
        "Access unique career paths and opportunities available only through our internship program.",
      isExpanded: false,
    },
  ];

  return (
    <div className="bg-[#0C0C0D] text-white min-h-screen py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-10 text-center lg:text-left">
          <p className="text-blue-400 text-sm sm:text-base lg:text-lg mb-2 font-medium">
            Internship Opportunities
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            How It Propels Your Career?
          </h1>
          <p className="text-[#7A7C80] text-sm sm:text-base lg:text-lg leading-relaxed max-w-3xl mx-auto lg:mx-0">
            Internships aren't just about gaining work experience; they are your pathway to professional triumph. 
            Discover how internships with Edubraining propel your career.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="w-full max-w-xl mx-auto lg:mx-0 aspect-video overflow-hidden rounded-xl shadow-lg">
              <img
                src="interv.png"
                alt="Teacher"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Benefits List */}
          <div className="order-1 lg:order-2 space-y-4">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className={`border-b border-gray-700 transition-all duration-300 ${
                  benefit.isExpanded
                    ? "pb-4 sm:pb-6 lg:pb-8"
                    : "pb-2 sm:pb-3 lg:pb-4"
                }`}
              >
                <div className="flex items-center justify-between py-3 sm:py-4 cursor-pointer group">
                  <h3
                    className={`text-base sm:text-lg md:text-xl font-semibold pr-4 transition-colors duration-300 ${
                      benefit.isExpanded
                        ? "text-blue-400"
                        : "text-gray-300 group-hover:text-white"
                    }`}
                  >
                    {benefit.title}
                  </h3>
                  <div
                    className={`w-5 h-5 sm:w-6 sm:h-6 relative flex items-center justify-center transition-transform duration-300 flex-shrink-0 ${
                      benefit.isExpanded ? "rotate-45" : ""
                    }`}
                  >
                    <div
                      className={`w-3 sm:w-4 h-0.5 bg-current absolute transition-colors duration-300 ${
                        benefit.isExpanded
                          ? "bg-blue-400"
                          : "bg-gray-400 group-hover:bg-white"
                      }`}
                    ></div>
                    <div
                      className={`w-0.5 h-3 sm:h-4 bg-current absolute transition-all duration-300 ${
                        benefit.isExpanded
                          ? "bg-blue-400 rotate-90"
                          : "bg-gray-400 group-hover:bg-white"
                      }`}
                    ></div>
                  </div>
                </div>

                {benefit.isExpanded && (
                  <div className="animate-fadeIn">
                    <p className="text-gray-300 leading-relaxed text-sm sm:text-base pr-4">
                      {benefit.description}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Animation */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
      `}</style>
    </div>
  );
};

export default InternshipOpportunities;
