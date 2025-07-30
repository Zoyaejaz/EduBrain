import React from 'react';

const SuccessPathInfographic = () => {
  const steps = [
    {
      number: "01",
      title: "Find Your Interested Field",
      description: "Use your passion to know your interested field explore courses related to your dreams and career",
      position: "left",
      image: "/p1.png"
    },
    {
      number: "02",
      title: "Explore Courses",
      description: "Discover the online courses from Programming, Business, Design, Marketing and so forth",
      position: "right",
      image: "/p2.png"
    },
    {
      number: "03",
      title: "Enroll and Learn",
      description: "Enroll in your dream course and find exceptional content in the course and live mentorship opportunities to get in-depth knowledge in particular subjects",
      position: "left",
      image: "/p3.png"
    },
    {
      number: "04",
      title: "Personalized Roadmap",
      description: "Follow our personalized roadmap, created to guide you through a structured learning journey. Track your progress and stay motivated",
      position: "right",
      image: "/p4.png"
    },
    {
      number: "05",
      title: "Project Creation",
      description: "Apply your knowledge by working on hands-on projects that enhance your skills and create a portfolio that showcases your skills",
      position: "left",
      image: "/p5.png"
    },
    {
      number: "06",
      title: "Certification and Internship",
      description: "Earn your certificate to showcase your skills and get job-oriented internship opportunities and grow your career in the industry",
      position: "right",
      image: "/p6.png"
    },
    {
      number: "07",
      title: "Now You Are Ready ",
      description: "Congratulations! You've navigated your learning journey. Now, armed with knowledge and skills, you are ready to shape your future in the world of technology.",
      position: "left",
      image: "/p7.png"
    }
  ];

  const CharacterIllustration = ({ isLeft, image }) => (
    <div className={`flex ${isLeft ? 'justify-start' : 'justify-end'} mb-6 md:mb-8`}>
      <div className="relative w-full max-w-md mx-auto md:mx-0">
        <div className="w-full h-auto aspect-[450/329] flex items-center justify-center overflow-hidden rounded-xl shadow-lg">
          <img src={image} alt="step visual" className="w-full h-full object-cover" />
        </div>
        <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-orange-500 rounded-full opacity-60"></div>
        <div className="absolute -top-2 -left-2 w-4 h-4 bg-orange-300 rounded-full opacity-40"></div>
      </div>
    </div>
  );

  return (
    <section className="bg-[#0C0C0D] text-white min-h-screen relative overflow-hidden">
      {/* Blurred Background Image */}
      <div className="absolute inset-0 z-0 opacity-10 blur-2xl">
        <img src="/blur-bg.png" alt="Blurred Background" className="w-full h-full object-cover" />
      </div>

      {/* Decorative Corners */}
      <img src="/left.png" alt="Left Decoration" className="absolute top-0 left-0 z-10 w-32 md:w-48 h-auto hidden md:block" />
      <img src="/right.png" alt="Right Decoration" className="absolute top-0 right-0 z-10 w-32 md:w-48 h-auto hidden md:block" />

      <div className="relative z-20 max-w-6xl mx-auto px-4 md:px-6 py-16">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <p className="text-[#91B5FE] text-sm md:text-md font-roboto mb-3 tracking-wider uppercase">Process</p>
          <h1 className="text-4xl md:text-6xl font-montserrat font-bold bg-[#F5F8FF] bg-clip-text text-transparent">
            Your path to success
          </h1>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-white hidden md:block" />

          {steps.map((step, index) => (
            <div key={index} className="relative mb-16 md:mb-24 last:mb-0">
              {/* Timeline Number Circle */}
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 -translate-y-2 z-20">
                <div className="w-14 h-14 bg-[#121721] flex items-center justify-center shadow-2xl border-4 border-slate-900 rounded-full">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
              </div>

              {/* Timeline Row */}
              <div className={`flex flex-col md:flex-row ${step.position === 'left' ? '' : 'md:flex-row-reverse'} items-center`}>
                {/* Image */}
                <div className="w-full md:w-1/2 px-2 md:px-8">
                  <CharacterIllustration isLeft={step.position === 'left'} image={step.image} />
                </div>

                {/* Text */}
                <div className="w-full md:w-1/2 px-2 md:px-8 mt-4 md:mt-0">
                  <div className={`border border-[#91B5FE] p-4 md:p-6 rounded-xl bg-[#0F1113]/40 backdrop-blur-sm shadow-xl ${step.position === 'left' ? 'text-left' : 'text-right'}`}>
                    <h3 className="text-xl md:text-3xl font-bold mb-2 md:mb-4 text-white">
                      {step.title}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Connector Line */}
              <div className={`hidden md:block absolute top-8 ${step.position === 'left' ? 'right-1/2 mr-8' : 'left-1/2 ml-8'} w-8 h-0.5 bg-gradient-to-r ${step.position === 'left' ? 'from-orange-400 to-transparent' : 'from-transparent to-orange-400'}`}></div>
            </div>
          ))}
        </div>

        {/* Bottom Dots */}
        <div className="mt-12 md:mt-20 text-center">
          <div className="inline-flex items-center space-x-2 text-orange-400">
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-100"></div>
            <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse delay-200"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessPathInfographic;
