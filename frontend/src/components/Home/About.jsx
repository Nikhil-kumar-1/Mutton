import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        parallaxRef.current.style.transform = `translateY(${rate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#000000] overflow-hidden">
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1600&q=80")`,
        }}
      >
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">

          {/* Left Side - Image */}
          <div className="relative">
            <div className="relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#006400] to-[#964B00] rounded-3xl opacity-30 group-hover:opacity-50 blur-xl transition-all duration-500"></div>

              {/* Image Container */}
              <div className="relative bg-black/90 backdrop-blur-sm rounded-2xl border border-[#6B8E23]/50 p-8">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-[#D2B48C]">
                  <img
                    src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80"
                    alt="Hamara Pattal - Traditional Indian Food"
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#006400] to-[#6B8E23] px-6 py-3 rounded-full shadow-lg">
                <div className="w-2 h-2 bg-[#F5F5DC] rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-[#F5F5DC] uppercase tracking-widest">
                  Since 2025
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#F5F5DC] leading-tight">
                Welcome to
                <span className="block bg-gradient-to-r from-[#F5F5DC] to-[#D2B48C] bg-clip-text text-transparent mt-2">
                  Hamara Pattal
                </span>
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-[#6B8E23] to-[#964B00] rounded-full"></div>

              <div className="space-y-4">
                <p className="text-lg text-[#F5F5DC] leading-relaxed">
                  At <strong className="text-[#D2B48C]">Hamara Pattal</strong>, we believe the best meals are the ones that bring people together. Our journey began with a simple thought — to revive India's age-old tradition of sharing food on pattals, where families and friends sat together, shared stories, and created memories over warm, comforting meals.
                </p>

                <p className="text-lg text-[#F5F5DC] leading-relaxed">
                  That feeling of home, belonging, and togetherness is at the heart of everything we do. We specialize in authentic mutton and chicken dishes, crafted with love and traditional recipes passed down through generations.
                </p>

                <div className="bg-gradient-to-r from-[#006400]/40 to-[#964B00]/40 p-4 rounded-xl border-l-4 border-[#D2B48C]">
                  <p className="text-[#D2B48C] font-semibold italic text-sm">
                    "Some stories aren't told, they're served. Hamara Pattal — Aap, Hum aur Noida."
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-4 py-4">
                  {[
                    { icon: "🍛", text: "Traditional Recipes" },
                    { icon: "🌿", text: "Fresh Ingredients" },
                    { icon: "👨‍🍳", text: "Expert Chefs" },
                    { icon: "🚚", text: "Free Delivery" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3 bg-[#6B8E23]/30 p-3 rounded-lg border border-[#6B8E23]/50">
                      <span className="text-2xl">{item.icon}</span>
                      <span className="text-[#F5F5DC] text-sm font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              {/* About More Button */}
              <Link to="/about" className="flex-1">
                <button
                  className="w-full bg-gradient-to-r from-[#006400] to-[#6B8E23] 
                           text-[#F5F5DC] font-semibold py-4 px-6 rounded-2xl 
                           shadow-xl hover:shadow-[#006400]/30
                           hover:from-[#006400] hover:to-[#4F7A1F]
                           transition-all duration-300 hover:-translate-y-1 
                           flex items-center justify-center gap-3 cursor-pointer group"
                >
                  <span>Our Full Story</span>
                  <svg 
                    className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </button>
              </Link>

              {/* Call Button */}
              <a href="tel:+919876543210" className="flex-1">
                <button
                  className="w-full bg-transparent text-[#D2B48C] font-semibold 
                           py-4 px-6 rounded-2xl border-2 border-[#D2B48C] 
                           hover:bg-[#D2B48C] hover:text-black 
                           transition-all duration-300 hover:-translate-y-1 
                           flex items-center justify-center gap-2 cursor-pointer group"
                >
                  <svg 
                    className="w-4 h-4 transform group-hover:scale-110 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span>Call Now</span>
                </button>
              </a>
            </div>

            {/* Service Areas */}
            <div className="pt-6 border-t border-[#6B8E23]/30">
              <p className="text-[#D2B48C] font-semibold mb-3">Serving Across:</p>
              <div className="flex flex-wrap gap-2">
                {["Noida", "Noida Extension", "Delhi", "Ghaziabad", "Delhi NCR"].map((city, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1 bg-[#6B8E23]/30 text-[#F5F5DC] text-sm rounded-full border border-[#6B8E23]/50"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;