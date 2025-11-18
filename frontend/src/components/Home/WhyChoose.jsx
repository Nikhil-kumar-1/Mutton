import React from "react";
import { Link } from "react-router-dom";

const QualitySection = () => {
  return (
    <div className="relative min-h-screen bg-[#000000] overflow-hidden">
      {/* Static Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat bg-fixed"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")`,
        }}
      >
        {/* Dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Side - Image Content */}
          <div className="relative">
            <div className="relative group">
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#006400] to-[#964B00] rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500"></div>

              <div className="relative bg-black/90 backdrop-blur-sm rounded-2xl border border-[#6B8E23]/50 p-8">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-[#D2B48C]">
                  <img
                    src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                    alt="Premium Mutton Cuts"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#006400] to-[#6B8E23] px-6 py-3 rounded-full shadow-lg">
                <div className="w-2 h-2 bg-[#F5F5DC] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[#F5F5DC] uppercase tracking-widest">
                  Authentic Taste
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F5F5DC] leading-tight">
                Why Choose
                <span className="block bg-gradient-to-r from-[#F5F5DC] to-[#D2B48C] bg-clip-text text-transparent">
                  Hamara Pattal?
                </span>
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-[#6B8E23] to-[#964B00] rounded-full"></div>

              <div className="space-y-4">
                <p className="text-lg text-[#F5F5DC] leading-relaxed">
                  At Hamara Pattal, we bring you the authentic taste of home-cooked meals 
                  with the same love and care that goes into traditional family recipes.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4">
                  {[
                    { icon: "👨‍🍳", text: "Traditional Family Recipes" },
                    { icon: "🌿", text: "Fresh Daily Ingredients" },
                    { icon: "⏱️", text: "Slow Cooked to Perfection" },
                    { icon: "❤️", text: "Made with Love & Care" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-[#6B8E23]/30 p-3 rounded-lg border border-[#6B8E23]/50">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-[#F5F5DC] text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>

                <p className="text-lg text-[#F5F5DC] leading-relaxed">
                  Every dish is prepared in small batches to ensure maximum freshness 
                  and authentic flavor that reminds you of home.
                </p>

                <div className="bg-gradient-to-r from-[#006400]/40 to-[#964B00]/40 p-4 rounded-xl border-l-4 border-[#D2B48C]">
                  <p className="text-[#D2B48C] font-semibold italic text-sm">
                    "Taste the difference that tradition, love, and authentic recipes make in every bite."
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/order">  <button className="flex-1 bg-gradient-to-r from-[#006400] to-[#6B8E23] text-[#F5F5DC] font-bold py-4 px-6 rounded-2xl hover:from-[#006400] hover:to-[#964B00] transition-all duration-300 shadow-2xl hover:shadow-[#006400]/25 transform hover:-translate-y-1 flex items-center justify-center gap-3 group">
                <span>Order Now</span>
                <svg
                  className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
              </button></Link>

              <button className="flex-1 bg-transparent text-[#D2B48C] font-bold py-4 px-6 rounded-2xl border-2 border-[#D2B48C] hover:bg-[#D2B48C] hover:text-black transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2 group">
                <svg
                  className="w-5 h-5 transform group-hover:scale-110 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>Call: +91 93190 71784</span>
              </button>
            </div>

            {/* Service Note */}
            <div className="pt-4">
              <p className="text-[#D2B48C] text-sm text-center">
                🚚 Free delivery across Noida, Delhi NCR & Ghaziabad
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;