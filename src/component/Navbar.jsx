import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About Us", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Process", href: "#process" },
    { name: "Certification", href: "#certification" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <div className={`sticky top-0 z-50 bg-[#0C0C0D] ${scrolled ? "opacity-90" : "opacity-100"} transition-opacity duration-300 pt-4`}>
      <div className="max-w-7xl mx-auto px-4 py-2">
        <div className="rounded-xl shadow-md p-3 border" style={{ backgroundColor: '#1545C21A', border: '1px solid #1545C2' }}>
          <div className="flex justify-between items-center h-10">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center ml-10">
              <img
                src="/nav.png"
                alt="EduBraining Logo"
                className="h-18 w-20 mr-3"
              />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white text-[18px] font-normal leading-[27px] transition-colors duration-200 pr-20 font-roboto align-middle"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={onLoginClick}
                className="ml-2 bg-[#91B5FE] hover:bg-blue-700 text-white px-4 py-1.5 rounded-md text-sm transition-colors duration-200 mr-10"
              >
                Login/Signup
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white p-2 rounded-md"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-2">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-slate-700 rounded-lg">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-300 hover:text-white block px-3 py-2 text-base font-medium transition-colors duration-200"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <div className="pt-2">
                  <button
                    onClick={onLoginClick}
                    className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                  >
                    Login / Sign Up
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
