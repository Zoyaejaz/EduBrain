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
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl shadow-md p-3 border border-[#1545C2] bg-[#1545C21A] mt-4 w-full">
          <div className="flex items-center w-full">
            {/* Left: Logo */}
            <div className="flex-shrink-0 ml-2 sm:ml-7">
              <img src="/nav.png" alt="Logo" className="h-12 w-auto" />
            </div>

            {/* Center: Navigation */}
            <div className="hidden md:flex flex-1 justify-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-white text-base font-medium tracking-wide transition"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Right: Login Button */}
            <div className="hidden md:flex justify-end flex-shrink-0 mr-4 sm:mr-7">
              <button
                onClick={onLoginClick}
                className="bg-gradient-to-r from-[#72A0FF] via-[#246CFF] to-[#0054FF] text-white px-5 py-3 rounded-full text-sm transition"
              >
                Login / Sign Up
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <div className="md:hidden ml-auto mr-2">
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
  className="bg-gradient-to-[#246CFF] from-[#72A0FF] to-[#0054FF] hover:from-blue-500 hover:to-blue-600 text-white font-medium px-12 py-5 rounded-full transition-all duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 whitespace-nowrap min-w-fit"
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
