import React from "react";
import GetInTouch from "../Home/GetInTouch";

const ContactUs = () => {
  const quickContact = [
    { icon: "📞", label: "Call Us", value: "+91 98765 43210", sub: "7AM - 9PM" },
    { icon: "📍", label: "Visit Us", value: "123 Butcher Street", sub: "Free Parking" },
    { icon: "🕒", label: "Shop Hours", value: "7AM - 9PM", sub: "All Days" }
  ];

  const services = [
    {
      icon: "🚚",
      title: "Quick Delivery",
      description: "Fast and reliable delivery service within the city",
      features: ["Within 2 hours", "Free above ₹500", "Live tracking"]
    },
    {
      icon: "💬",
      title: "24/7 Support",
      description: "Always available to answer your questions",
      features: ["Phone support", "WhatsApp", "Email support"]
    },
    {
      icon: "⭐",
      title: "Premium Quality",
      description: "Guaranteed fresh and hygienic mutton",
      features: ["Daily fresh", "Hygiene certified", "Quality check"]
    }
  ];

  const faqs = [
    {
      question: "What are your delivery timings?",
      answer: "We deliver from 8:00 AM to 8:00 PM daily. Orders placed before 6:00 PM will be delivered the same day."
    },
    {
      question: "Do you offer bulk orders for events?",
      answer: "Yes, we specialize in bulk orders for weddings, parties, and corporate events. Please contact us 48 hours in advance."
    },
    {
      question: "Is your mutton halal certified?",
      answer: "Yes, all our mutton is halal certified and prepared according to Islamic guidelines."
    },
    {
      question: "Can I customize my meat cuts?",
      answer: "Absolutely! Our expert butchers can prepare custom cuts as per your requirements. Just let us know your preferences."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, UPI, credit/debit cards, and all major digital payment methods."
    }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden font-poppins">
      {/* Hero Section - Optimized */}
      <section className="relative py-16 bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50 overflow-hidden">
        {/* Simplified Background */}
        <div className="absolute inset-0 opacity-40">
          <div className="absolute top-10 left-10 w-64 h-64 bg-rose-200 rounded-full animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-amber-200 rounded-full animate-pulse animation-delay-2000"></div>
        </div>

        <div className="relative z-10 container mx-auto px-4 sm:px-6">
          <div className="w-full mx-auto text-center">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-rose-800 to-orange-800 px-4 py-2 rounded-full shadow-lg mb-8">
              <div className="w-1.5 h-1.5 bg-amber-300 rounded-full animate-pulse"></div>
              <span className="text-xs font-semibold text-white uppercase tracking-wider">
                Get In Touch
              </span>
            </div>

            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 mb-6 leading-tight">
              Contact
              <span className="block bg-gradient-to-r from-rose-800 to-orange-800 bg-clip-text text-transparent mt-2">
                Mutton Master
              </span>
            </h1>

            <div className="w-20 h-1 bg-gradient-to-r from-rose-800 to-orange-800 mx-auto mb-8 rounded-full"></div>

            {/* Description */}
            <p className="text-lg text-gray-700 mb-12 max-w-6xl mx-auto leading-relaxed">
              We're here to serve you with the finest quality mutton, crafted with care and passion. Whether you have an order, a question, or just want to connect, we're always happy to hear from you. Our team is dedicated to ensuring every bite exceeds your expectations. Your satisfaction and trust are at the heart of everything we do."
            </p>

          
          </div>
        </div>
      </section>

      {/* Main Contact Form Section */}
      <GetInTouch />

      {/* Services Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Why Choose Us
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-rose-800 to-orange-800 mx-auto rounded-full"></div>
            <p className="text-gray-600 max-w-2xl mx-auto mt-4">
              Experience the difference with our premium services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {services.map((service, index) => (
              <div key={index} className="bg-gradient-to-br from-amber-50 to-rose-50 rounded-2xl p-6 border border-rose-200 hover:border-rose-800/30 transition-all duration-300 group hover:shadow-lg">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-black text-gray-900 mb-3 group-hover:text-rose-800 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-rose-800 rounded-full flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gradient-to-br from-rose-50 to-amber-50">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-gradient-to-r from-rose-800 to-orange-800 mx-auto rounded-full"></div>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-5 border border-rose-200 hover:border-rose-800/30 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-start gap-3">
                  <span className="w-6 h-6 bg-gradient-to-r from-rose-800 to-orange-800 rounded-full flex items-center justify-center text-white text-xs flex-shrink-0 mt-1">
                    Q
                  </span>
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed text-sm pl-9">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>

          {/* Still Have Questions */}
          <div className="text-center mt-12">
            <div className="bg-white rounded-2xl p-6 border border-rose-200 max-w-2xl mx-auto hover:shadow-lg transition-all duration-300">
              <h3 className="text-xl font-black text-gray-900 mb-3">
                Still have questions?
              </h3>
              <p className="text-gray-600 mb-6 text-sm">
                Don't hesitate to reach out to us directly. Our team is always ready to help you.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="bg-gradient-to-r from-rose-800 to-orange-800 text-white font-semibold py-3 px-6 rounded-lg hover:from-rose-700 hover:to-amber-700 transition-all duration-300 shadow-lg flex items-center justify-center gap-2">
                  <span>Call Now</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </button>
                <button className="bg-white text-rose-800 font-semibold py-3 px-6 rounded-lg border-2 border-rose-800 hover:bg-rose-800 hover:text-white transition-all duration-300 flex items-center justify-center gap-2">
                  <span>WhatsApp</span>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Contact Banner */}
      <section className="bg-gradient-to-r from-rose-800 to-orange-800 py-12">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-black text-white mb-3">
              Need Immediate Assistance?
            </h3>
            <p className="text-amber-100 mb-6 text-sm sm:text-base">
              For urgent orders or emergency requirements, call our priority helpline
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-amber-300">
                <div className="text-amber-300 text-xs font-semibold mb-1">Emergency Helpline</div>
                <div className="text-white text-lg font-black">+91 98765 43210</div>
              </div>
              <div className="text-amber-100 text-xs sm:text-sm">
                Available 24/7 for urgent orders and bulk requirements
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;