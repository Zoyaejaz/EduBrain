import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar = ({ onLoginClick }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 0);
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
    <div className={`sticky top-0 z-50 bg-[#0C0C0D] ${scrolled ? "opacity-95" : "opacity-100"} transition-opacity duration-300`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl shadow-md p-3 border border-[#1545C2] bg-[#1545C21A]">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center flex-shrink-0 ml-2 sm:ml-4">
              <img src="/nav.png" alt="Logo" className="h-12 w-auto" />
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center flex-wrap space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white text-base font-medium tracking-wide transition"
                >
                  {item.name}
                </a>
              ))}
              <button
                onClick={onLoginClick}
                className="ml-4 bg-[#91B5FE] hover:bg-blue-700 text-white px-5 py-2 rounded-md text-sm transition"
              >
                Login / Sign Up
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden mr-2">
              <button
                onClick={toggleMenu}
                className="text-gray-300 hover:text-white focus:outline-none"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-3">
              <div className="bg-[#0C0C0D] rounded-lg px-4 py-3 space-y-2 shadow-md">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="block text-gray-300 hover:text-white text-base font-medium transition"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <button
                  onClick={() => {
                    onLoginClick();
                    setIsMenuOpen(false);
                  }}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 mt-3 rounded-md text-sm font-medium transition"
                >
                  Login / Sign Up
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
