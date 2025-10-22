import React, { useEffect, useRef } from "react";

const QualitySection = () => {
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
    <div className="relative min-h-screen bg-black overflow-hidden">
      {/* Parallax Background Image */}
      <div
        ref={parallaxRef}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("https://plus.unsplash.com/premium_photo-1668616817170-2a74b5cd181d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG11dHRvbnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&q=80&w=2000")`,
        }}
      >
        {/* Slightly lighter dark overlay for contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center min-h-screen">
          
          {/* Left Side - Image Content */}
          <div className="relative">
            <div className="relative group">
              {/* Glow effect - slightly lighter than HeroSection */}
              <div className="absolute -inset-4 bg-gradient-to-r from-rose-500 to-amber-500 rounded-3xl opacity-20 group-hover:opacity-40 blur-xl transition-all duration-500"></div>

              <div className="relative bg-black/80 backdrop-blur-sm rounded-2xl border border-rose-800/30 p-8">
                <div className="aspect-square rounded-2xl overflow-hidden border-2 border-amber-500/30">
                  <img
                    src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
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
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-rose-800 to-amber-800 px-6 py-3 rounded-full shadow-lg">
                <div className="w-2 h-2 bg-amber-300 rounded-full animate-pulse"></div>
                <span className="text-sm font-semibold text-white uppercase tracking-widest">
                  Mutton Specialists
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight">
                Why Choose
                <span className="block bg-gradient-to-r from-amber-300 to-rose-300 bg-clip-text text-transparent">
                  Mutton Master?
                </span>
              </h2>

              <div className="w-24 h-1 bg-gradient-to-r from-amber-300 to-rose-300 rounded-full"></div>

              <p className="text-xl text-gray-200 leading-relaxed">
                Experience the difference of generations of expertise in premium
                meat cutting. Your trusted local butcher shop since 2025.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed">
                We take pride in delivering the finest quality mutton with 
                traditional cutting expertise and modern hygiene standards. 
                Every cut is carefully prepared to ensure maximum freshness and flavor.
              </p>

              <p className="text-lg text-gray-200 leading-relaxed">
                Visit our shop to experience the perfect blend of traditional 
                butchery skills and contemporary quality standards that make 
                us the preferred choice for mutton lovers.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="flex-1 bg-gradient-to-r from-amber-400 to-rose-500 text-white font-bold py-4 px-6 rounded-2xl hover:from-amber-500 hover:to-rose-600 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:-translate-y-1 flex items-center justify-center gap-3">
                <span>Visit Our Shop</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                </svg>
              </button>

              <button className="flex-1 bg-transparent text-white font-bold py-4 px-6 rounded-2xl border-2 border-amber-400 hover:bg-amber-500 hover:text-black transition-all duration-300 transform hover:-translate-y-1">
                Call: (555) 123-4567
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualitySection;
