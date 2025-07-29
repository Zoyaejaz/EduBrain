import React from 'react';

const EdubrainingWelcomeSection = () => {
  const features = [
    {
      id: 1,
      title: "AI-Based Learning",
      description: "Transformative education with AI-driven courses tailored to you.",
      position: "top-left",
      icon: "/c1.png"
    },
    {
      id: 2,
      title: "AI-Based Learning", 
      description: "Transformative education with AI-driven courses tailored to you.",
      position: "top-right",
      icon: "/c2.png"
    },
    {
      id: 3,
      title: "Mentorship",
      description: "Guidance and mentorship from 6 to 10 pm – your key to success.",
      position: "middle-left",
      icon: "/c3.png"
    },
    {
      id: 4,
      title: "Project-Based Learning",
      description: "Hands-on projects for real-world skills and a standout portfolio.",
      position: "middle-right",
      icon: "/c4.png"
    },
    {
      id: 5,
      title: "Personalized Roadmap",
      description: "Your unique path to success with a personalized learning roadmap.",
      position: "bottom-center",
      icon: "/c5.png"
    }
  ];

  const FeatureCard = ({ feature }) => {
    const getPositionClasses = () => {
      switch (feature.position) {
        case 'top-left':
          return 'absolute top-8 left-8';
        case 'top-right':
          return 'absolute top-8 right-8';
        case 'middle-left':
          return 'absolute top-1/2 left-8 transform -translate-y-1/2';
        case 'middle-right':
          return 'absolute top-1/2 right-8 transform -translate-y-1/2';
        case 'bottom-center':
          return 'absolute bottom-8 left-1/2 transform -translate-x-1/2';
        default:
          return '';
      }
    };

    return (
      <div className={`${getPositionClasses()} w-72 bg-[#121721] backdrop-blur-sm border border-slate-600/50 rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 `}>
        {/* Icon */}
        <div className="flex items-center justify-center">
          <div className="w-[37px] h-[35px] flex items-center justify-center rounded ">
            <img src={feature.icon} alt={feature.title} />
        </div>
        </div>
       <br/>
        {/* Title */}
        <h3 className="text-xl font-semibold font-inter text-white mb-3 text-center">
          {feature.title}
        </h3>

        {/* Description */}
        <p className="text-[#ABAEB2] text-sm leading-relaxed text-center">
          {feature.description}
        </p>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#0C0C0D] py-16 px-6 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <img
        src="/blur.png"
        alt="Blur Decoration"
        className="absolute top-0 right-0 z-0 w-[550px] h-[749px] hidden md:block"
      />
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="text-center mb-20">
          <p className="text-[#91B5FE] text-md font-roboto font-medium mb-4 tracking-wider uppercase">
            About us
          </p>
          <h1 className="text-4xl md:text-5xl font-montserrat font-semibold text-white mb-6 leading-tight">
            Welcome to Edubraining
          </h1>
          <p className="text-[#7A7C80] text-lg max-w-2xl mx-auto leading-relaxed">
            Welcome to Edubraining, your Gateway to Future Tech Excellence! At Edubraining, we believe in empowering aspiring minds to become the tech leaders of tomorrow.
          </p>
        </div>

        {/* Features Layout */}
        <div className="relative w-full h-[700px] flex items-center justify-center">
          {/* Center Image Placeholder */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <span className="text-gray-400 text-xs text-center">
                <img 
                className="w-[494px] h-[370px]"
                src="cir.png"/>
              </span>
          </div>

          {/* Connecting Lines */}
          {/* Top Left Line */}
          <div className="absolute top-40 left-72 w-24 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
          
          {/* Top Right Line */}
          <div className="absolute top-40 right-72 w-24 h-px bg-gradient-to-l from-blue-400/60 to-transparent"></div>
          
          {/* Middle Left Line */}
          <div className="absolute top-80 left-72 w-24 h-px bg-gradient-to-r from-blue-400/60 to-transparent"></div>
          
          {/* Middle Right Line */}
          <div className="absolute top-80 right-72 w-24 h-px bg-gradient-to-l from-blue-400/60 to-transparent"></div>
          
          {/* Bottom Line */}
          <div className="absolute bottom-40 left-1/2 w-px h-12 bg-gradient-to-t from-blue-400/60 to-transparent transform -translate-x-1/2"></div>

          {/* Feature Cards */}
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-10 w-3 h-3 bg-purple-400 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1 h-1 bg-cyan-400 rounded-full animate-pulse delay-500"></div>
      </div>
    </div>
  );
};

export default EdubrainingWelcomeSection;