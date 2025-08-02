import React from 'react';

const WhatMakesUsDifferent = () => {
  const features = [
    {
      id: 1,
      title: "AI-Based Learning",
      description: "Transformative education with AI-driven courses tailored to you.",
      image: "c1.png"
    },
    {
      id: 2,
      title: "Personalized Roadmap",
      description: "Your unique path to success with a personalized learning roadmap.",
      image: "c2.png"
    },
    {
      id: 3,
      title: "Mentorship",
      description: "Guidance and mentorship from 6 to 10 pm — your key to success.",
      image: "c3.png"
    },
    {
      id: 4,
      title: "Project-Based Learning",
      description: "Hands-on projects for real-world skills and a standout portfolio.",
      image: "c4.png"
    },
    {
      id: 5,
      title: "Recorded Lectures",
      description: "Learn on your schedule with access to recorded lectures.",
      image: "c5.png"
    }
  ];

  return (
    <div className="bg-[#0C0C0D] min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="text-blue-400 underline decoration-blue-400">What Makes Us Different</span>
        </h1>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
          {/* First 4 features in 2x2 grid */}
          {features.slice(0, 4).map((feature) => (
            <div
              key={feature.id}
              className="bg-[#121721] rounded-lg p-6 text-center hover:bg-gray-750 transition-colors duration-200"
            >
              <img 
                src={feature.image} 
                alt={feature.title}
                className="w-12 h-12 mx-auto mb-4"
              />
              <h3 className="text-white text-xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-[#ABAEB2] text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Last feature centered */}
        <div className="flex justify-center">
          <div className="bg-[#121721] rounded-lg p-6 text-center w-full md:w-1/2 hover:bg-gray-750 transition-colors duration-200">
            <img 
              src={features[4].image} 
              alt={features[4].title}
              className="w-12 h-12 mx-auto mb-4"
            />
            <h3 className="text-white text-xl font-semibold mb-3">
              {features[4].title}
            </h3>
            <p className="text-[#ABAEB2] text-sm">
              {features[4].description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatMakesUsDifferent;