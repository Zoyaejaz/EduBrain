import React, { useState, useEffect } from 'react';

const TestimonialsSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);

  const testimonials = [
    {
      title: "Unlocking the Power of Data",
      role: "Power BI & Data Analytics Learner",
      testimonial: "The Power BI and Data Analytics courses at Edubraining made business intelligence clear and actionable. Interactive lessons and real-world dashboards prepped me to confidently analyze any dataset.",
      image: "/test1.png"
    },
    {
      title: "Real-World Tech Skills that Matter",
      role: "Full Stack Development Student",
      testimonial: "Edubraining's Machine Learning and Full Stack courses gave me practical projects and up-to-date tech knowledge. The focused mentorship helped me build complete apps from scratch.",
      image: "/test1.png"
    },
    {
      title: "Transformative Design Thinking",
      role: "UI/UX & Angular Enthusiast",
      testimonial: "Their UI/UX and Angular programs taught me to combine creativity with coding skills. The hands-on assignments transformed how I approach building user-centered digital products.",
      image: "/test1.png"
    },
    {
      title: "Cloud Computing Excellence",
      role: "AWS & DevOps Specialist",
      testimonial: "The cloud computing curriculum at Edubraining opened doors to enterprise-level opportunities. From AWS fundamentals to advanced DevOps practices, every module was industry-relevant.",
      image: "/test1.png"
    },
    {
      title: "Mobile Development Mastery",
      role: "React Native Developer",
      testimonial: "Edubraining's mobile development track gave me the confidence to build cross-platform apps. The mentors provided personalized feedback that accelerated my learning curve significantly.",
      image: "/test1.png"
    },
    {
      title: "AI & Machine Learning Journey",
      role: "AI/ML Engineering Student",
      testimonial: "The artificial intelligence courses here are cutting-edge. From neural networks to computer vision, I gained practical skills that landed me a role at a top tech company.",
      image: "/test1.png"
    },
    {
      title: "Cybersecurity Professional Path",
      role: "Information Security Analyst",
      testimonial: "Edubraining's cybersecurity program equipped me with both theoretical knowledge and hands-on experience. The real-world scenarios prepared me for actual security challenges.",
      image: "/test1.png"
    },
    {
      title: "Digital Marketing Success",
      role: "Growth Marketing Specialist",
      testimonial: "The digital marketing courses combined strategy with practical tools. I learned SEO, social media marketing, and analytics that directly contributed to my career advancement.",
      image: "/test1.png"
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setCardsPerView(1);
      } else if (window.innerWidth < 1024) {
        setCardsPerView(2);
      } else {
        setCardsPerView(3);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => {
      const nextIndex = prev + cardsPerView;
      return nextIndex >= testimonials.length ? 0 : nextIndex;
    });
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => {
      const prevIndex = prev - cardsPerView;
      return prevIndex < 0 ? Math.floor((testimonials.length - 1) / cardsPerView) * cardsPerView : prevIndex;
    });
  };

  const goToSlide = (slideIndex) => {
    setCurrentSlide(slideIndex * cardsPerView);
  };

  const totalSlides = Math.ceil(testimonials.length / cardsPerView);

  return (
    <section className="bg-[#0C0C0D] text-white min-h-screen py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <span
              className="text-[#91B5FE] text-[24px] leading-[32px] font-normal align-middle font-roboto"
            >
              Testimonials
            </span>
          </div>

          <h1 className="text-[49.7px] leading-[57.6px] font-semibold text-[#F5F8FF] text-center align-middle font-montserrat mb-6">
            How Edubraining Boosts Your Career
          </h1>

          <p className="text-[#7A7C80] text-[16px] leading-[24px] font-normal text-center align-middle font-roboto max-w-4xl mx-auto">
            Edubraining internships and courses provide real skills and industry exposure that pave the way for your
            professional success. Experience learning that drives your career forward.
          </p>

        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 lg:flex hidden"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 z-10 w-12 h-12 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300 lg:flex hidden"
          >
            <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${(currentSlide / testimonials.length) * 100}%)`,
                width: `${testimonials.length * (100 / cardsPerView)}%`
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="px-3"
                  style={{ width: `${100 / cardsPerView}%` }}
                >
                  <div className="bg-opacity-50 border border-blue-500 border-opacity-50 rounded-2xl p-4 h-full flex flex-col">
                    {/* Image */}
                    <div className="mb-6 rounded-xl overflow-hidden bg-gray-700 h-78">
                      <img
                        src={testimonial.image}
                        alt="Student testimonial"
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Content */}
                    <div className="flex-1 flex flex-col">
                      <h3 className="text-[18px] leading-[20.99px] font-bold text-[#91B5FE] text-center font-montserrat mb-2">
                        {testimonial.title}
                      </h3>

                      <p className="text-[11.89px] leading-[20.99px] font-medium text-[#1545C2] text-center font-montserrat mb-4">
                        {testimonial.role}
                      </p>

                      <p className="text-[13.03px] leading-[15.53px] font-normal text-[#ABAEB2] text-center font-montserrat flex-1">
                        "{testimonial.testimonial}"
                      </p>

                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Mobile Navigation Buttons */}
          <div className="flex justify-center space-x-4 mt-8 lg:hidden">
            <button
              onClick={prevSlide}
              className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 bg-gray-800 hover:bg-gray-700 rounded-full flex items-center justify-center transition-colors duration-300"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center space-x-2 mt-8">
          {Array.from({ length: totalSlides }, (_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${Math.floor(currentSlide / cardsPerView) === index ? 'bg-blue-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;