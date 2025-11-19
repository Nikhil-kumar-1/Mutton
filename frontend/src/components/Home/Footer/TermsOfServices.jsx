import React from "react";
import { Link } from "react-router-dom";

const RefundPolicy = () => {
  const eligibilitySections = [
    {
      icon: "✅",
      title: "Eligible for Refund/Replacement",
      items: [
        "Food is spoiled, damaged, or has quality issues",
        "Incorrect order delivered",
        "Packing quality issues affecting food",
        "Freshness concerns"
      ],
      color: "from-green-500 to-green-700"
    },
    {
      icon: "❌",
      title: "Not Eligible for Refund",
      items: [
        "Personal taste preference issues",
        "Food consumed more than halfway",
        "Orders cancelled after preparation starts",
        "Delayed delivery due to external factors"
      ],
      color: "from-red-500 to-red-700"
    }
  ];

  const processSteps = [
    {
      step: "1",
      title: "Contact Within 2 Hours",
      description: "Reach out to us immediately after delivery with your concern",
      icon: "⏰"
    },
    {
      step: "2",
      title: "Provide Evidence",
      description: "Share clear photos/videos and order ID",
      icon: "📸"
    },
    {
      step: "3",
      title: "Issue Verification",
      description: "Our team verifies the complaint",
      icon: "🔍"
    },
    {
      step: "4",
      title: "Resolution",
      description: "Refund processed within 7 working days",
      icon: "✅"
    }
  ];

  const contactMethods = [
    {
      icon: "📧",
      title: "Email Us",
      details: "hamarapattal@gmail.com",
      description: "Send order details and photos"
    },
    {
      icon: "📞",
      title: "Call Us",
      details: "+91 93190 71784",
      description: "Speak directly with our team"
    },
    {
      icon: "📍",
      title: "Visit Us",
      details: "Noida, Uttar Pradesh",
      description: "Hamara Pattal Kitchen"
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
                  Refund & Replacement
                </span>
              </div>

              {/* Main Heading */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#452B1F] leading-tight">
                Fair & Transparent
                <span className="block bg-gradient-to-r from-[#006400] to-[#964B00] bg-clip-text text-transparent mt-2">
                  Refund Policy
                </span>
              </h1>

              <div className="w-20 h-1 bg-gradient-to-r from-[#6B8E23] to-[#964B00] rounded-full"></div>

              {/* Main Description */}
              <div className="space-y-4">
                <p className="text-lg text-[#452B1F] leading-relaxed">
                  At <strong className="text-[#006400]">Hamara Pattal</strong>, we take great care to prepare and deliver fresh, high-quality food. If you ever face an issue with your order, we're here to help.
                </p>

                <p className="text-[#452B1F] leading-relaxed">
                  Our refund policy is designed to be fair and transparent, ensuring that genuine concerns are addressed promptly while maintaining the quality standards we're known for.
                </p>

                <ul className="list-disc list-inside text-[#452B1F] space-y-1 ml-4">
                  <li>Quick resolution for genuine issues</li>
                  <li>Transparent eligibility criteria</li>
                  <li>7-working day refund processing</li>
                  <li>Multiple contact channels</li>
                </ul>

                <div className="bg-gradient-to-r from-[#F5F5DC] to-[#D2B48C] p-4 rounded-xl border-l-4 border-[#006400]">
                  <p className="text-[#006400] font-semibold italic text-sm">
                    "Your satisfaction is our priority. We believe in fair resolutions and quality service."
                  </p>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#D2B48C] bg-white/50 rounded-xl">
                {[
                  { number: "2 Hours", label: "To Report Issue" },
                  { number: "7 Days", label: "Refund Processing" },
                  { number: "100%", label: "Fair Resolution" },
                ].map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-xl font-black text-[#006400] mb-1">
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
                  <span>View Full Policy</span>
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
                <a href="mailto:hamarapattal@gmail.com" className="flex-1">
                  <button className="w-full bg-transparent text-[#006400] font-semibold py-3 px-6 rounded-lg border-2 border-[#006400] hover:bg-[#006400] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                    <span>Request Refund</span>
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
                    src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1000&q=80"
                    alt="Refund Policy - Hamara Pattal"
                    className="w-full h-full object-cover rounded-xl hover:scale-105 transition-transform duration-300"
                    loading="eager"
                  />
                </div>

                {/* Policy Badge */}
                <div className="absolute top-4 right-4 bg-gradient-to-r from-[#006400] to-[#6B8E23] text-white px-4 py-2 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-xs font-semibold">Fair</div>
                    <div className="text-lg font-black">Policy</div>
                  </div>
                </div>

                <div className="absolute bottom-4 left-4 bg-white/95 px-3 py-1 rounded-lg border border-[#D2B48C] shadow-lg">
                  <div className="text-center">
                    <div className="text-xs text-[#006400] font-semibold">
                      Quality Guaranteed
                    </div>
                    <div className="text-sm font-bold flex items-center gap-1">
                      Always Fresh <span className="text-[#964B00]">⭐</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Eligibility Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#452B1F] mb-4">
              Refund Eligibility
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#006400] to-[#964B00] mx-auto rounded-full"></div>
            <p className="text-lg text-[#452B1F] max-w-2xl mx-auto mt-4">
              Clear guidelines to ensure fair and transparent resolution for all concerns
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {eligibilitySections.map((section, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 border border-[#D2B48C] hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 bg-gradient-to-r ${section.color} rounded-xl flex items-center justify-center text-white text-xl`}>
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-black text-[#452B1F]">
                    {section.title}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <span className={`mt-1 ${
                        section.icon === "✅" ? "text-green-500" : "text-red-500"
                      }`}>
                        •
                      </span>
                      <span className="text-[#452B1F] leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F5F5DC]">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-[#452B1F] mb-4">
              Refund Process
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-[#006400] to-[#964B00] mx-auto rounded-full"></div>
            <p className="text-lg text-[#452B1F] max-w-2xl mx-auto mt-4">
              Simple steps to get your concern resolved quickly and efficiently
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className="relative text-center group"
              >
                <div className="relative z-10 bg-white rounded-2xl p-6 border border-[#D2B48C] hover:border-[#006400] transition-all duration-300 group-hover:shadow-xl">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <div className="text-3xl mb-3">{step.icon}</div>
                  <h3 className="text-lg font-black text-[#452B1F] mb-3 group-hover:text-[#006400] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#452B1F] text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connecting Line */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 left-3/4 w-1/4 h-0.5 bg-[#D2B48C] transform -translate-y-1/2 z-0"></div>
                )}
              </div>
            ))}
          </div>

          {/* Timeline Info */}
          <div className="bg-white rounded-2xl p-8 border border-[#D2B48C] text-center">
            <h3 className="text-2xl font-black text-[#452B1F] mb-4">
              Refund Timeline
            </h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl text-[#006400] mb-2">⏰</div>
                <p className="text-[#452B1F] font-semibold">Contact Within 2 Hours</p>
                <p className="text-sm text-[#452B1F]">Of delivery time</p>
              </div>
              <div className="text-2xl text-[#964B00]">→</div>
              <div className="text-center">
                <div className="text-4xl text-[#006400] mb-2">📅</div>
                <p className="text-[#452B1F] font-semibold">7 Working Days</p>
                <p className="text-sm text-[#452B1F]">Refund processing</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact & Important Notes */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-[#452B1F] mb-4">
                How to Request a Refund
              </h3>
              <p className="text-[#452B1F] leading-relaxed">
                To raise a refund request, please contact us within 2 hours of delivery with the following information:
              </p>
              
              <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                <h4 className="font-bold text-[#452B1F] mb-2">Required Information:</h4>
                <ul className="text-sm text-[#452B1F] space-y-1">
                  <li>• Order ID</li>
                  <li>• Clear photos/videos of the issue</li>
                  <li>• Short description of the problem</li>
                </ul>
              </div>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <div key={index} className="flex items-center gap-4 p-4 bg-[#F5F5DC] rounded-xl border border-[#D2B48C] hover:border-[#006400] transition-all duration-300">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#006400] to-[#6B8E23] rounded-lg flex items-center justify-center text-white text-xl">
                      {method.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-[#452B1F]">{method.title}</h4>
                      <p className="text-[#006400] font-semibold">{method.details}</p>
                      <p className="text-sm text-[#452B1F] opacity-75">{method.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Important Notes */}
            <div className="space-y-6">
              <h3 className="text-2xl font-black text-[#452B1F] mb-4">
                Important Notes
              </h3>
              
              <div className="bg-gradient-to-br from-[#F5F5DC] to-[#D2B48C] rounded-2xl p-6 border border-[#D2B48C]">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#006400] rounded-full flex items-center justify-center text-white text-xs mt-1 flex-shrink-0">
                      💳
                    </div>
                    <div>
                      <h4 className="font-bold text-[#452B1F]">Payment Method</h4>
                      <p className="text-[#452B1F] text-sm">Refunds will be made through the original mode of payment</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#006400] rounded-full flex items-center justify-center text-white text-xs mt-1 flex-shrink-0">
                      ⚠️
                    </div>
                    <div>
                      <h4 className="font-bold text-[#452B1F]">Non-Refundable Scenarios</h4>
                      <p className="text-[#452B1F] text-sm">Personal taste preference or if food is consumed more than halfway</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#006400] rounded-full flex items-center justify-center text-white text-xs mt-1 flex-shrink-0">
                      🚫
                    </div>
                    <div>
                      <h4 className="font-bold text-[#452B1F]">Cancellation Policy</h4>
                      <p className="text-[#452B1F] text-sm">Orders cancelled after preparation will not be eligible for refunds</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quality Commitment */}
              <div className="bg-white rounded-xl p-6 border-2 border-[#006400]">
                <h4 className="font-black text-[#006400] text-lg mb-3">Our Quality Commitment</h4>
                <p className="text-[#452B1F] text-sm leading-relaxed">
                  At Hamara Pattal, we use fresh ingredients, in-house spices, and small-batch cooking methods to ensure every dish meets our high standards. Your satisfaction is our top priority.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-16 bg-gradient-to-b from-white to-[#F5F5DC]">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl sm:text-4xl font-black text-[#452B1F] mb-4">
            Need Help with Your Order?
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#006400] to-[#964B00] mx-auto mb-6 rounded-full"></div>

          <p className="text-lg text-[#452B1F] max-w-2xl mx-auto mb-8">
            We're here to ensure your dining experience is perfect. Contact us immediately if you have any concerns.
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

            <a href="mailto:hamarapattal@gmail.com" className="flex-1 max-w-xs">
              <button className="w-full bg-white text-[#006400] font-semibold py-3 px-8 rounded-lg border-2 border-[#006400] hover:bg-[#006400] hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                <span>Contact Support</span>
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
      </section>
    </div>
  );
};

export default RefundPolicy;