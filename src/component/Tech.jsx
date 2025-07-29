import React from 'react';

const TechCoursesSection = () => {
  const courses = [
    {
      id: 1,
      title: "Power BI",
      description: "Comprehensive course on Power BI for data analysis and visualization",
      lectures: "76 Lectures",
      duration: "10h 30m",
      originalPrice: "₹2598",
      currentPrice: "₹1299",
      discount: "50% OFF",
      iconBg: "/l1.png",
      image: "/t1.png"
    },
    {
      id: 2,
      title: "Data Analytics",
      description: "Comprehensive course covering Excel fundamentals to advanced data visualization techniques. Learn data management, analysis...",
      lectures: "67 Lectures",
      duration: "15h 43m",
      originalPrice: "₹2598",
      currentPrice: "₹1299",
      discount: "50% OFF",
      iconBg: "/l3.png",
      image: "/t2.png"
    },
    {
      id: 3,
      title: "Machine Learning",
      description: "Comprehensive course covering fundamentals of Machine Learning including supervised, unsupervised, semi-supervised learning, and reinforcement...",
      lectures: "80 Lectures",
      duration: "13h 36m",
      originalPrice: "₹2598",
      currentPrice: "₹1299",
      discount: "50% OFF",
      iconBg: "/l2.png",
      image: "/t3.png"
    },
    {
      id: 4,
      title: "Full Stack Development",
      description: "Learn to build complete web applications by mastering both front-end and back-end technologies like...",
      lectures: "84 Lectures",
      duration: "15h 36m",
      originalPrice: "₹2598",
      currentPrice: "₹1299",
      discount: "50% OFF",
      iconBg: "/l3.png",
      image: "/t4.png"
    },
    {
      id: 5,
      title: "Full Stack Development",
      description: "Learn to build complete web applications by mastering both front-end and back-end technologies like...",
      lectures: "84 Lectures",
      duration: "15h 36m",
      originalPrice: "₹2598",
      currentPrice: "₹1299",
      discount: "50% OFF",
      iconBg: "/l3.png",
      image: "/t4.png"
    },
    {
      id: 6,
      title: "Full Stack Development",
      description: "Learn to build complete web applications by mastering both front-end and back-end technologies like...",
      lectures: "84 Lectures",
      duration: "15h 36m",
      originalPrice: "₹2598",
      currentPrice: "₹1299",
      discount: "50% OFF",
      iconBg: "/l3.png",
      image: "/t4.png"
    },
    {
      id: 7,
      title: "Full Stack Development",
      description: "Learn to build complete web applications by mastering both front-end and back-end technologies like...",
      lectures: "84 Lectures",
      duration: "15h 36m",
      originalPrice: "₹2598",
      currentPrice: "₹1299",
      discount: "50% OFF",
      iconBg: "/l3.png",
      image: "/t4.png"
    },
    {
      id: 8,
      title: "Full Stack Development",
      description: "Learn to build complete web applications by mastering both front-end and back-end technologies like...",
      lectures: "84 Lectures",
      duration: "15h 36m",
      originalPrice: "₹2598",
      currentPrice: "₹1299",
      discount: "50% OFF",
      iconBg: "/l3.png",
      image: "/t4.png"
    }
  ];

  const CourseCard = ({ course }) => (
    <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-105">
      {/* Header Image Section */}
      <div className="h-48  flex items-center justify-center relative">
        
          <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
    
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Icon */}
        <div className={`${course.iconBg} w-12 h-12 rounded-lg flex items-center justify-center mb-4 shadow-md`}>
          <div className="w-6 h-6  rounded items-center justify-center">
            <img src={course.iconBg} alt={course.title} className="w-full h-full object-cover item-center" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-Inter font-bold text-[#000000] mb-3 text-center">
          {course.title}
        </h3>

        {/* Description */}
        <p className="text-[#000000] font-Roboto weight-400 text-md leading-relaxed mb-6 h-12 overflow-hidden text-center ">
          {course.description}
        </p>

        {/* Course Details */}
        <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
          <div className="flex items-center space-x-1 text-[#000000]">
            <div className="w-2 h-2 bg-[#000000] font-Roboto  weight-400 size-14px rounded-full">
                <img
                className="w-full h-full" 
                src="/v1.png" />
            </div>
            <span>{course.lectures}</span>
          </div>
          <div className="flex items-center space-x-1 text-[#000000]">
            
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Pricing */}
        <div className="flex items-center justify-between mb-6 text-center">
          <div className="flex items-center space-x-2 text-center">
            <span className="text-[#000000] line-through text-sm text-center">{course.originalPrice}</span>
            <span className="text-2xl font-bold text-gray-800 text-center">{course.currentPrice}</span>
            <span className="bg-white text-[#000000] text-xs px-2 py-1 rounded-full font-medium text-center">
              {course.discount}
            </span>
          </div>
        </div>

        {/* CTA Button */}
        <button className="w-full bg-[#161C29] hover:bg-gray-900 text-[#91B5FE] py-3 px-6 rounded-lg font-medium transition-colors duration-200">
        Let's Explore It
        </button>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#0C0C0D] py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <p className="text-[#91B5FE] text-sm font-Roboto font-medium mb-4 tracking-wider uppercase">
            Our Courses
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Unlock Your Potential by our<br />
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Tech Courses
            </span>
          </h1>
          <p className="text-[#7A7C80] text-lg max-w-2xl mx-auto leading-relaxed">
            Explore tech excellence with Edulearning courses. Transformative learning for a future of possibilities.
          </p>
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechCoursesSection;
