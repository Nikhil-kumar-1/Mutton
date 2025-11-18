import React from "react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
  const policySections = [
    {
      icon: "📋",
      title: "Information We Collect",
      description: "We collect information that helps us serve you better, including your name, contact details, and preferences to personalize your experience."
    },
    {
      icon: "🔍",
      title: "How We Use Your Data",
      description: "Your information helps us process orders, improve our services, and communicate important updates about your meals and offers."
    },
    {
      icon: "🤝",
      title: "Data Sharing",
      description: "We respect your privacy and only share necessary information with trusted partners for order delivery and payment processing."
    },
    {
      icon: "🛡️",
      title: "Data Security",
      description: "We implement industry-standard security measures to protect your personal information from unauthorized access."
    }
  ];

  const yourRights = [
    {
      icon: "👁️",
      title: "Right to Access",
      description: "You can request details of the personal information we hold about you."
    },
    {
      icon: "✏️",
      title: "Right to Correction",
      description: "You can update or correct your personal information at any time."
    },
    {
      icon: "🗑️",
      title: "Right to Deletion",
      description: "You can request deletion of your personal data, subject to legal requirements."
    },
    {
      icon: "🚫",
      title: "Right to Object",
      description: "You can object to certain types of data processing activities."
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
                  Privacy & Security
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#452B1F] leading-tight">
                Your Privacy
                <span className="block bg-gradient-to-r from-[#006400] to-[#964B00] bg-clip-text text-transparent mt-2">
                  Our Promise
                </span>
              </h1>

              <div className="w-20 h-1 bg-gradient-to-r from-[#6B8E23] to-[#964B00] rounded-full"></div>

              {/* Main Description */}
              <div className="space-y-4">
                <p className="text-lg text-[#452B1F] leading-relaxed">
                  At <strong className="text-[#006400]">Hamara Pattal</strong>, we believe that trust is the main ingredient in every relationship. Your privacy is not just a policy for us—it's our commitment to you.
                </p>

                <p className="text-[#452B1F] leading-relaxed">
                  We handle your personal information with the same care and respect we put into preparing our food. This Privacy Policy explains how we collect, use, and protect your data when you use our services.
                </p>

                <ul className="list-disc list-inside text-[#452B1F] space-y-1 ml-4">
                  <li>Transparent data collection practices</li>
                  <li>Secure storage and processing</li>
                  <li>Your rights and choices clearly explained</li>
                  <li>No hidden tracking or data sharing</li>
                </ul>

                <p className="text-[#452B1F] leading-relaxed">
                  We're committed to being clear about what data we collect and why. Your trust means everything to us, and we work hard to earn and keep it every day.
                </p>

                <div className="bg-gradient-to-r from-[#F5F5DC] to-[#D2B48C] p-4 rounded-xl border-l-4 border-[#006400]">
                  <p className="text-[#006400] font-semibold italic text-sm">
                    "Your privacy is our priority. We treat your data with the same authenticity we put into our recipes."
                  </p>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#D2B48C] bg-white/50 rounded-xl">
                {[
                  { number: "100%", label: "Transparent" },
                  { number: "256-bit", label: "Encryption" },
                  { number: "0%", label: "Data Selling" },
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
                  <span>Read Full Policy</span>
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
                <a href="mailto:privacy@hamarapattal.com" className="flex-1">
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
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
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
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1000&q=80"
                    alt="Privacy Protection - Hamara Pattal"
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    loading="eager"
                  />
                </div>

                {/* Security Badges */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#006400] to-[#6B8E23] text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-semibold">Data</div>
                    <div className="text-lg font-black">Protected</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 rounded-lg border border-[#D2B48C] shadow-lg">
                  <div className="text-center">
                    <div className="text-xs text-[#006400] font-semibold">
                      Your Privacy
                    </div>
                    <div className="text-sm font-bold flex items-center gap-1">
                      Guaranteed <span className="text-[#964B00]">🔒</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Policy Sections */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#452B1F] mb-4">
              Our Privacy Commitment
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#006400] to-[#964B00] mx-auto rounded-full"></div>
            <p className="text-lg text-[#452B1F] max-w-2xl mx-auto mt-4">
              Clear, transparent, and respectful data practices you can trust
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {policySections.map((section, index) => (
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

      {/* Your Rights Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F5F5DC]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#452B1F] mb-4">
              Your Data Rights
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#006400] to-[#964B00] mx-auto rounded-full"></div>
            <p className="text-lg text-[#452B1F] max-w-2xl mx-auto mt-4">
              You have control over your personal information. Here are your rights:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {yourRights.map((right, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-[#D2B48C] hover:border-[#006400] transition-all duration-300 hover:shadow-lg group text-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {right.icon}
                </div>
                <h3 className="text-lg font-black text-[#452B1F] mb-3 group-hover:text-[#006400] transition-colors">
                  {right.title}
                </h3>
                <p className="text-[#452B1F] leading-relaxed text-sm">
                  {right.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Updates Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-[#452B1F] mb-4">
                Privacy Questions?
              </h3>
              <p className="text-[#452B1F] leading-relaxed">
                We're here to help you understand our privacy practices and address any concerns you might have about your personal data.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-[#F5F5DC] rounded-xl border border-[#D2B48C]">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-lg flex items-center justify-center text-white">
                    📧
                  </div>
                  <div>
                    <h4 className="font-bold text-[#452B1F]">Email Us</h4>
                    <p className="text-[#006400]">hamarapattal@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-[#F5F5DC] rounded-xl border border-[#D2B48C]">
                  <div className="w-10 h-10 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-lg flex items-center justify-center text-white">
                    📞
                  </div>
                  <div>
                    <h4 className="font-bold text-[#452B1F]">Call Us</h4>
                    <p className="text-[#006400]">+91 93190 71784</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Policy Updates */}
            <div className="bg-gradient-to-br from-[#F5F5DC] to-[#D2B48C] rounded-2xl p-6 border border-[#D2B48C]">
              <h3 className="text-2xl font-black text-[#452B1F] mb-4">
                Policy Updates
              </h3>
              <p className="text-[#452B1F] leading-relaxed mb-4">
                We may update this privacy policy from time to time to reflect changes in our practices or legal requirements. We'll notify you of any significant changes.
              </p>
              
              <div className="bg-white/80 rounded-xl p-4 border border-[#D2B48C]">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-[#006400] font-semibold">Current Version</p>
                    <p className="text-[#452B1F] text-sm">Version 2.1 • January 2025</p>
                  </div>
                  <div className="w-12 h-12 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-full flex items-center justify-center text-white font-bold">
                    v2.1
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
            Trust You Can Taste
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#006400] to-[#964B00] mx-auto mb-6 rounded-full"></div>

          <p className="text-lg text-[#452B1F] max-w-2xl mx-auto mb-8">
            Just like our food, our privacy practices are transparent, authentic, and built on trust.
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

            <Link to="/terms" className="flex-1 max-w-xs">
              <button className="w-full bg-white text-[#006400] font-semibold py-3 px-8 rounded-lg border-2 border-[#006400] hover:bg-[#006400] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <span>Terms of Service</span>
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
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;