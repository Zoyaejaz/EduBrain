import React, { useState } from 'react';

const FAQSection = () => {
    const [openItem, setOpenItem] = useState(null);

    const toggleItem = (index) => {
        setOpenItem(openItem === index ? null : index);
    };

    const faqData = [
        {
            question: "What is Edubraining?",
            answer: "Edubraining is an online learning platform that provides industry-ready education through accessible and modern courses. We empower learners with practical skills and knowledge needed for today's tech industry."
        },
        {
            question: "What types of courses do you offer?",
            answer: "We offer a wide range of courses including web development, mobile app development, data science, artificial intelligence, machine learning, cybersecurity, cloud computing, and digital marketing. All courses are designed with industry standards in mind."
        },
        {
            question: "How are the courses structured?",
            answer: "Our courses are structured with a blend of theoretical concepts and hands-on practical projects. Each course includes video lectures, interactive coding exercises, real-world projects, quizzes, and live mentorship sessions to ensure comprehensive learning."
        },
        {
            question: "What is included in the live mentorship sessions?",
            answer: "Live mentorship sessions include one-on-one guidance from industry experts, code reviews, career counseling, doubt clearing sessions, project feedback, and personalized learning path recommendations based on your goals and progress."
        },
        {
            question: "Do I receive a certificate after completing a course?",
            answer: "Yes, upon successful completion of a course, you will receive an industry-recognized certificate that you can add to your LinkedIn profile and resume. The certificate validates your skills and knowledge in the respective domain."
        },
        {
            question: "How long do I have access to the course materials?",
            answer: "You get lifetime access to all course materials including videos, notes, projects, and resources. This means you can revisit the content anytime, even after course completion, and access any future updates to the curriculum."
        },
        {
            question: "Do you offer internships?",
            answer: "Yes, we provide internship opportunities to our top-performing students. These internships are with our partner companies and startups, giving you real-world experience and a chance to apply your learned skills in professional environments."
        },
        {
            question: "What kind of placement assistance do you provide?",
            answer: "We offer comprehensive placement assistance including resume building, interview preparation, mock interviews, job referrals to our partner companies, career counseling, and continuous support until you land your dream job."
        },
        {
            question: "How do I contact Edubraining?",
            answer: "You can contact us through multiple channels: email us at support@edubraining.com, call our helpline, use the live chat feature on our website, or reach out through our social media channels. Our support team is available 24/7 to assist you."
        },
        {
            question: "Refund Policy.",
            answer: "We offer a 30-day money-back guarantee. If you're not satisfied with the course within the first 30 days, you can request a full refund. The refund process typically takes 5-7 business days after approval."
        },
        {
            question: "Exchange Policy.",
            answer: "You can exchange your current course for another course of equal or lesser value within 15 days of enrollment. If the new course costs more, you'll need to pay the difference. Exchange is subject to availability and terms."
        },
        {
            question: "Point to be noted while Refunding.",
            answer: "Please note that refunds are only applicable within 30 days of enrollment. Courses with more than 50% completion are not eligible for refunds. Special promotional prices and bundled courses have different refund terms. Contact support for specific cases."
        }
    ];

    return (
        <section className="bg-[#0C0C0D] text-white min-h-screen relative overflow-hidden ">

            {/* Left Corner Image */}
            <img
                src="/left.png"
                alt="Left Decoration"
                className="absolute top-16 left-0 z-0 w-100 h-45 hidden md:block"
            />
            {/* Right Corner Image */}
            <img
                src="/right.png"
                alt="Right Decoration"
                className="absolute top-54 right-0 z-0 w-95 h-40 hidden md:block"
            />

            <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
                {/* Header */}
                <div className="text-center mb-16">
                    <div className="inline-block mb-6">
                        <span className="text-[#91B5FE] text-[24px] font-bold leading-[32px] align-middle font-roboto">
                            FAQ
                        </span>
                    </div>

                    <h1 className="text-[49.7px] leading-[57.6px] font-semibold text-[#F5F8FF] text-center align-middle font-montserrat mb-6">
                        Frequently Asked Questions
                    </h1>

                    <p className="text-[16px] leading-[24px] font-normal text-[#7A7C80] text-center align-middle font-roboto max-w-3xl mx-auto">
                        Uncover quick insights about Edubraining. Get ready for your tech journey by exploring our FAQs. Dive in now!
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqData.map((item, index) => (
                        <div
                            key={index}
                            className="bg-opacity-50 border border-gray-800 rounded-lg hover:border-gray-700 transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleItem(index)}
                                className="w-full px-6 py-5 text-left flex items-center cursor-pointer justify-between focus:outline-none"
                            >
                                <span className="text-[#F5F8FF] font-normal text-[18.7px] leading-[28px] align-middle font-inter pr-4">
                                    {item.question}
                                </span>

                                <div className="flex-shrink-0">
                                    <div className="w-8 h-8 border border-[white] rounded-lg flex items-center justify-center transition-all duration-300 hover:border-gray-500">
                                        <svg
                                            className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${openItem === index ? 'transform rotate-45' : ''
                                                }`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </button>

                            <div
                                className={`overflow-hidden transition-all duration-300 ${openItem === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <div className="px-6 pb-5">
                                    <div className="border-t border-gray-800 pt-4">
                                        <p className="text-gray-300 leading-relaxed">
                                            {item.answer}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );

};

export default FAQSection;