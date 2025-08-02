import React from 'react';

const LearningExperienceSection = () => {
  const stats = [
    {
      image: "Homew.png",
      number: "42+",
      label: "Courses"
    },
    {
      image: "graduate.png",
      number: "90k+",
      label: "Learners"
    },
    {
      image: "Paper.png",
      number: "100k+",
      label: "Doubts solved"
    },
    {
      image: "Pen.png",
      number: "10k+",
      label: "Student Projects"
    }
  ];

  const StatCard = ({ image, number, label }) => (
    <div
      className="flex items-center gap-4 transition-transform duration-300 hover:scale-105"
      style={{
        width: '186px',
        height: '100px',
        border: '1px solid #0554F7',
        borderRadius: '20px',
        backgroundColor: '#121721',
        padding: '20px'
      }}
    >
      <img
        src={image}
        alt={label}
        className="w-[50.94px] h-[50.94px]"
        style={{ objectFit: 'contain' }}
      />
      <div>
        <div className="text-white text-2xl font-bold">{number}</div>
        <div className="text-sm text-gray-400">{label}</div>
      </div>
    </div>
  );

  return (
    <div className="w-full py-16 px-6" style={{ backgroundColor: '#0C0C0D' }}>
      <div
        className="mx-auto px-6"
        style={{
          maxWidth: '1100px',
          borderTop: '1px solid #1545C2',
          paddingTop: '2rem',
          paddingBottom: '2rem',
        }}
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-semibold font-Inter text-white">
            Learning Experience at a Glance
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center mb-20">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              image={stat.image}
              number={stat.number}
              label={stat.label}
            />
          ))}
        </div>

        {/* Horizontal Border Line Before Women Entrepreneurs Section */}
        <div
          style={{
            borderTop: '1px solid #1545C2',
            marginBottom: '2rem'
          }}
        />

      </div>
    </div>
  );
};

export default LearningExperienceSection;
