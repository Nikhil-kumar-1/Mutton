import React from "react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  const termsSections = [
    {
      icon: "📝",
      title: "Acceptance of Terms",
      description: "By accessing and using Hamara Pattal services, you agree to be bound by these Terms of Service and our Privacy Policy."
    },
    {
      icon: "🛒",
      title: "Ordering & Payments",
      description: "All orders are subject to availability. Payments are processed securely through our trusted payment partners."
    },
    {
      icon: "🚚",
      title: "Delivery Policy",
      description: "We deliver within our service areas. Delivery times may vary based on location and order volume."
    },
    {
      icon: "↩️",
      title: "Cancellations & Refunds",
      description: "Orders can be cancelled within 30 minutes of placement. Refunds processed as per our refund policy."
    }
  ];

  const userResponsibilities = [
    {
      icon: "✅",
      title: "Accurate Information",
      description: "Provide correct delivery address and contact information"
    },
    {
      icon: "📞",
      title: "Availability",
      description: "Be available at delivery time to receive your order"
    },
    {
      icon: "💳",
      title: "Secure Payments",
      description: "Ensure payment information is accurate and secure"
    },
    {
      icon: "📱",
      title: "Account Security",
      description: "Keep your login credentials confidential and secure"
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen bg-gradient-to-br from-[#F5F5DC] via-white to-[#6B8E23]/20 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-[#6B8E23] rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-[#964B00] rounded-full animate-pulse animation-delay-2000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            {/* Text Content */}
            <div className="space-y-8 order-2 lg:order-1">
              {/* Header Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#006400] to-[#6B8E23] px-4 py-2 rounded-full shadow-lg">
                <div className="w-1.5 h-1.5 bg-[#F5F5DC] rounded-full animate-pulse"></div>
                <span className="text-xs font-semibold text-white uppercase tracking-wider">
                  Terms & Conditions
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#452B1F] leading-tight">
                Terms of
                <span className="block bg-gradient-to-r from-[#006400] to-[#964B00] bg-clip-text text-transparent mt-2">
                  Service
                </span>
              </h1>

              <div className="w-20 h-1 bg-gradient-to-r from-[#6B8E23] to-[#964B00] rounded-full"></div>

              {/* Main Description */}
              <div className="space-y-4">
                <p className="text-lg text-[#452B1F] leading-relaxed">
                  Welcome to <strong className="text-[#006400]">Hamara Pattal</strong>. These Terms of Service govern your use of our website, mobile application, and services. Please read them carefully.
                </p>

                <p className="text-[#452B1F] leading-relaxed">
                  By accessing or using our services, you agree to be bound by these terms. We've designed these terms to be clear and fair, reflecting our commitment to transparency and excellent service.
                </p>

                <ul className="list-disc list-inside text-[#452B1F] space-y-1 ml-4">
                  <li>Clear ordering and delivery guidelines</li>
                  <li>Fair cancellation and refund policies</li>
                  <li>Transparent pricing and service terms</li>
                  <li>Your rights and responsibilities as a customer</li>
                </ul>

                <p className="text-[#452B1F] leading-relaxed">
                  Our goal is to ensure every interaction with Hamara Pattal is smooth, transparent, and satisfying. These terms help us maintain the quality and reliability you expect from us.
                </p>

                <div className="bg-gradient-to-r from-[#F5F5DC] to-[#D2B48C] p-4 rounded-xl border-l-4 border-[#006400]">
                  <p className="text-[#006400] font-semibold italic text-sm">
                    "Clear terms, trusted service. We believe in making every meal experience as transparent as our cooking process."
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#D2B48C] bg-white/50 rounded-xl">
                {[
                  { number: "30 min", label: "Cancellation Window" },
                  { number: "100%", label: "Transparent Pricing" },
                  { number: "24/7", label: "Support" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-2xl font-black text-[#006400] mb-1">
                      {stat.number}
                    </div>
                    <div className="text-xs text-[#452B1F] uppercase tracking-wider">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="bg-gradient-to-r from-[#006400] to-[#6B8E23] text-white font-semibold py-3 px-6 rounded-lg hover:from-[#006400] hover:to-[#964B00] transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                  <span>Read Full Terms</span>
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                <a href="mailto:support@hamarapattal.com" className="flex-1">
                  <button className="w-full bg-transparent text-[#006400] font-semibold py-3 px-6 rounded-lg border-2 border-[#006400] hover:bg-[#006400] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Ask Questions</span>
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </button>
                </a>
              </div>
            </div>

            {/* Image Content */}
            <div className="relative order-1 lg:order-2">
              <div className="relative bg-white rounded-2xl border border-[#D2B48C] p-4 shadow-xl">
                <div className="w-full h-80 sm:h-96 lg:h-[500px] rounded-xl overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80"
                    alt="Terms of Service - Hamara Pattal"
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    loading="eager"
                  />
                </div>

                {/* Terms Badges */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#006400] to-[#6B8E23] text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-semibold">Clear</div>
                    <div className="text-lg font-black">Terms</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 rounded-lg border border-[#D2B48C] shadow-lg">
                  <div className="text-center">
                    <div className="text-xs text-[#006400] font-semibold">
                      Fair Service
                    </div>
                    <div className="text-sm font-bold flex items-center gap-1">
                      Guaranteed <span className="text-[#964B00]">⚖️</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Terms Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#452B1F] mb-4">
              Key Service Terms
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#006400] to-[#964B00] mx-auto rounded-full"></div>
            <p className="text-lg text-[#452B1F] max-w-2xl mx-auto mt-4">
              Important terms that ensure smooth and reliable service for everyone
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {termsSections.map((section, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-[#F5F5DC] to-[#D2B48C] rounded-2xl p-6 border border-[#D2B48C] hover:border-[#006400] transition-all duration-300 group hover:shadow-xl"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-xl flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-black text-[#452B1F] group-hover:text-[#006400] transition-colors">
                    {section.title}
                  </h3>
                </div>
                <p className="text-[#452B1F] leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* User Responsibilities Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F5F5DC]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#452B1F] mb-4">
              Your Responsibilities
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#006400] to-[#964B00] mx-auto rounded-full"></div>
            <p className="text-lg text-[#452B1F] max-w-2xl mx-auto mt-4">
              To ensure the best experience for everyone, here's what we need from you:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {userResponsibilities.map((responsibility, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-[#D2B48C] hover:border-[#006400] transition-all duration-300 hover:shadow-lg group text-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {responsibility.icon}
                </div>
                <h3 className="text-lg font-black text-[#452B1F] mb-3 group-hover:text-[#006400] transition-colors">
                  {responsibility.title}
                </h3>
                <p className="text-[#452B1F] leading-relaxed text-sm">
                  {responsibility.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Details Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Service Areas */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-[#452B1F] mb-4">
                Service Areas & Timing
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-[#F5F5DC] rounded-xl border border-[#D2B48C]">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-lg flex items-center justify-center text-white">
                    🕒
                  </div>
                  <div>
                    <h4 className="font-bold text-[#452B1F]">Service Hours</h4>
                    <p className="text-[#006400]">11:00 AM - 11:00 PM Daily</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#F5F5DC] rounded-xl border border-[#D2B48C]">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-lg flex items-center justify-center text-white">
                    📍
                  </div>
                  <div>
                    <h4 className="font-bold text-[#452B1F]">Delivery Areas</h4>
                    <p className="text-[#006400]">Noida, Noida Extension, Delhi NCR</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Important Notes */}
            <div className="bg-gradient-to-br from-[#F5F5DC] to-[#D2B48C] rounded-2xl p-6 border border-[#D2B48C]">
              <h3 className="text-2xl font-black text-[#452B1F] mb-4">
                Important Notes
              </h3>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <span className="text-[#006400] font-bold">•</span>
                  <p className="text-[#452B1F] text-sm">Minimum order value may apply for delivery</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#006400] font-bold">•</span>
                  <p className="text-[#452B1F] text-sm">Delivery charges may vary by location</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#006400] font-bold">•</span>
                  <p className="text-[#452B1F] text-sm">Prices are subject to change without prior notice</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#006400] font-bold">•</span>
                  <p className="text-[#452B1F] text-sm">We reserve the right to refuse service</p>
                </div>
              </div>

              <div className="mt-6 bg-white/80 rounded-xl p-4 border border-[#D2B48C]">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[#006400] font-semibold">Current Version</p>
                    <p className="text-[#452B1F] text-sm">Version 2.0 • January 2025</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-full flex items-center justify-center text-white font-bold">
                    v2.0
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F5F5DC]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-[#452B1F] mb-4">
            Clear Terms, Great Service
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#006400] to-[#964B00] mx-auto mb-6 rounded-full"></div>

          <p className="text-lg text-[#452B1F] max-w-2xl mx-auto mb-8">
            We believe in transparent terms that protect both you and us, ensuring everyone has a great experience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/" className="flex-1 max-w-xs">
              <button className="w-full bg-gradient-to-r from-[#006400] to-[#6B8E23] text-white font-semibold py-3 px-8 rounded-lg hover:from-[#006400] hover:to-[#964B00] transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                <span>Back to Home</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                  />
                </svg>
              </button>
            </Link>

            <Link to="/privacy-policy" className="flex-1 max-w-xs">
              <button className="w-full bg-white text-[#006400] font-semibold py-3 px-8 rounded-lg border-2 border-[#006400] hover:bg-[#006400] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <span>Privacy Policy</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </button>
            </Link>
          </div>

          {/* Contact Support */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {[
              { text: "Email Support", icon: "📧", value: "hamarapattal@gmail.com" },
              { text: "Phone Support", icon: "📞", value: "+91  93190 71784" },
              { text: "Response Time", icon: "⏱️", value: "Within 2 hours" }
            ].map((contact, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-white px-4 py-3 rounded-full border border-[#D2B48C] shadow-sm"
              >
                <span className="text-sm">{contact.icon}</span>
                <div className="text-left">
                  <div className="text-xs font-semibold text-[#006400]">
                    {contact.text}
                  </div>
                  <div className="text-xs text-[#452B1F]">
                    {contact.value}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;