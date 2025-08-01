import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./component/Navbar";
import Login from "./component/Login";
import Signup from "./component/Signup";
import Password from "./component/Password";
import OTP from "./component/Otp";
import Forget from "./component/Forget";
import Footer from "./component/Footer";
import FAQSection from "./component/Faq";
import TestimonialsSection from "./component/Testimonial";
import EduBrainingHero from "./component/Hero";
import TechJourneyCTA from "./component/Next";
import InternshipOpportunities from "./component/Internship";
import CertificationAchievement from "./component/Helps";
import SuccessPathInfographic from "./component/process";
import TechCoursesSection from "./component/Tech";
import EdubrainingWelcomeSection from "./component/Welcome";
import ForgetOTP from "./component/Forgetotp";
import Reset from "./component/Resetpass";
import LearningExperienceSection from "./component/Learning";
import EduBrainingWebsite from "./component/About";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showOTP, setShowOTP] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [showForgetotp, setShowForgetotp] = useState(false); // ✅ Added
  const [showResetPassword, setShowResetPassword] = useState(false); // ✅ Added

  const handleLoginClick = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleSignupClick = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onLoginClick={handleLoginClick} />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<EduBrainingHero />} />
          </Routes>

          {showLogin && (
            <Login
              onClose={() => setShowLogin(false)}
              onSignupClick={handleSignupClick}
              onForgotPassword={() => {
                setShowLogin(false);
                setShowForgotPassword(true);
              }}
            />
          )}

          {showSignup && (
            <Signup
              onClose={() => setShowSignup(false)}
              onLoginClick={handleLoginClick}
              onContinue={() => {
                setShowSignup(false);
                setShowOTP(true);
              }}
            />
          )}

          {showPassword && (
            <Password
              onClose={() => setShowPassword(false)}
              onGoBack={() => {
                setShowPassword(false);
                setShowOTP(true);
              }}
              onContinue={() => {
                setShowPassword(false);
                // Possibly navigate to dashboard or show login
              }}
            />
          )}

          {showOTP && (
            <OTP
              onClose={() => setShowOTP(false)}
              onGoBack={() => {
                setShowOTP(false);
                setShowSignup(true);
              }}
              onSubmit={() => {
                setShowOTP(false);
                setShowPassword(true); // after signup flow OTP
              }}
            />
          )}

          {showForgetotp && (
            <ForgetOTP
              onClose={() => setShowForgetotp(false)}
              onLoginClick={() => {
                setShowForgetotp(false);
                setShowLogin(true);
              }}
              onGoBack={() => {
                setShowForgetotp(false);         // hide OTP
                setShowForgotPassword(true);     // show password reset
              }}
              onContinue={(otpCode) => {
                // optional: validate OTP
                setShowForgetotp(false);
                setShowResetPassword(true);     // or move forward after OTP submit
              }}
            />
          )}


          {showResetPassword && (
            <Reset
              onClose={() => setShowResetPassword(false)}
              onLoginClick={() => {
                setShowResetPassword(false);
                setShowLogin(true);
              }}
              onGoBack={() => {
                setShowResetPassword(false);
                setShowForgetotp(true);
              }}
            />
          )}

          {showForgotPassword && (
            <Forget
              onClose={() => setShowForgotPassword(false)}
              onLoginClick={() => {
                setShowForgotPassword(false);
                setShowLogin(true);
              }}
              onContinue={() => {
                setShowForgotPassword(false);
                setShowForgetotp(true); // go to OTP for forgot password flow
              }}
            />
          )}
        </main>

        {/* Static Page Components */}
        <LearningExperienceSection />
        <EduBrainingWebsite />
        <EdubrainingWelcomeSection />
        <TechCoursesSection />
        <SuccessPathInfographic />
        <CertificationAchievement />
        <InternshipOpportunities />
        <TestimonialsSection />
        <TechJourneyCTA />
        <FAQSection />
        <Footer />
      </div>
    </Router>
  );
}
