import React from "react";

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Main Background with Burn Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50 via-rose-50 to-orange-50">
        {/* Burned Paper Texture */}
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M20 20h160v160H20V20zm160 0v160H20V20h160z' fill='none' stroke='%23000' stroke-width='2'/%3E%3Cpath d='M0 0h200v200H0z' fill='%23fff'/%3E%3Cpath d='M10 10h180v180H10z' fill='%23fef3f2'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>

        {/* Burn Marks at Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/5 via-transparent to-transparent"></div>

        {/* Charred Edge Bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-2 bg-gradient-to-t from-gray-800 to-transparent opacity-10"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          
          {/* Text Content - Left Side */}
          <div className="flex-1 w-full lg:max-w-2xl order-2 lg:order-1">
            {/* Top Border */}
            <div className="relative mb-8 sm:mb-12">
              <div className="flex justify-between items-start">
                <div className="text-xs uppercase tracking-widest border-t-2 border-rose-900 pt-2 sm:pt-3 text-rose-900 relative">
                  <div className="absolute -top-1 left-0 w-2 h-2 sm:w-3 sm:h-3 bg-rose-900 rounded-full opacity-20"></div>
                  Est. 2025
                </div>
                <div className="text-xs uppercase tracking-widest border-t-2 border-rose-900 pt-2 sm:pt-3 text-rose-900 relative">
                  <div className="absolute -top-1 right-0 w-2 h-2 sm:w-3 sm:h-3 bg-rose-900 rounded-full opacity-20"></div>
                  Family Owned
                </div>
              </div>
            </div>

            {/* Main Heading */}
            <div className="text-left mb-8 sm:mb-12 relative">
              {/* Burn mark accent */}
              <div className="absolute -left-2 sm:-left-4 top-4 w-1.5 h-8 sm:h-12 bg-rose-900 rounded-full opacity-10"></div>

              <div className="flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
                <div className="w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-rose-900 to-orange-900 rounded-full flex items-center justify-center shadow-lg">
                  <svg
                    className="w-5 h-5 sm:w-7 sm:h-7 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <span className="text-xs sm:text-sm uppercase tracking-widest text-rose-900 font-bold">
                  Master Butchers
                </span>
              </div>

              <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tight mb-6 sm:mb-8 leading-none text-gray-900 relative">
                MUTTON
                {/* Text shadow for burned effect */}
                <div className="absolute inset-0 text-transparent bg-gradient-to-b from-rose-900/10 to-transparent bg-clip-text -z-10">
                  MUTTON
                </div>
              </h1>

              <div className="w-16 sm:w-20 h-1 sm:h-1.5 bg-gradient-to-r from-rose-900 to-orange-900 mb-6 sm:mb-8 rounded-full"></div>

              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light tracking-widest uppercase mb-4 sm:mb-6 text-rose-900">
                Artisanal Butchery & Cuisine
              </p>

              <p className="text-base sm:text-lg text-gray-700 max-w-md leading-relaxed mt-6 sm:mt-8 border-l-4 border-rose-200 pl-4 sm:pl-6 py-2 bg-rose-50/50 rounded-r-lg">
                Experience the finest quality mutton cuts, carefully selected and
                expertly prepared by our master butchers with over two decades of
                tradition.
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {[
                { years: "100%", label: "Handmade", icon: "🧂" },
                { years: "Fresh", label: "Farm Meat", icon: "🥩" },
                { years: "Daily", label: "Prepared", icon: "❤️" },
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative inline-block mb-2 sm:mb-3">
                    <div className="text-xl sm:text-2xl md:text-3xl font-black text-gray-900 group-hover:text-rose-900 transition-colors duration-300">
                      {item.years}
                    </div>
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 sm:w-8 h-0.5 bg-gradient-to-r from-rose-900 to-orange-900 rounded-full"></div>
                  </div>
                  <div className="text-xs sm:text-sm uppercase tracking-widest text-gray-600 font-semibold">
                    {item.label}
                  </div>
                  <div className="text-sm sm:text-lg mt-1 opacity-60">{item.icon}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-12 sm:mb-16">
              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-br from-rose-900 to-orange-900 text-white font-bold tracking-widest uppercase text-xs sm:text-sm hover:from-rose-800 hover:to-orange-800 transition-all duration-300 border-0 rounded-lg shadow-xl sm:shadow-2xl overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                <span className="relative flex items-center justify-center gap-2 sm:gap-3">
                  View Our Cuts
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </span>
              </button>

              <button className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-transparent text-rose-900 font-bold tracking-widest uppercase text-xs sm:text-sm border-2 border-rose-900 hover:bg-rose-900 hover:text-white transition-all duration-300 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-rose-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <span className="relative">Book Consultation</span>
              </button>
            </div>

            {/* Bottom Info */}
            <div className="border-t-2 border-rose-200 pt-6 sm:pt-8 relative">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6 text-sm text-gray-700">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-rose-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-xs sm:text-sm">
                    123 Premium Street
                  </span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="w-6 h-6 sm:w-8 sm:h-8 bg-rose-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 sm:w-4 sm:h-4 text-rose-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-xs sm:text-sm">Mon-Sat: 8AM-8PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Content - Right Side */}
          <div className="w-full lg:w-2/5 order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="relative">
              {/* Burned Frame around Image */}
              <div className="absolute -inset-2 sm:-inset-3 bg-gradient-to-br from-amber-200 via-orange-200 to-rose-200 rounded-lg opacity-20"></div>
              <div className="absolute -inset-1 sm:-inset-2 bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100 rounded-lg opacity-30"></div>

              {/* Main Image */}
              <div className="relative aspect-square sm:aspect-[4/5] lg:aspect-[3/4] rounded-lg overflow-hidden shadow-2xl z-10">
                <img
                  src="https://images.unsplash.com/photo-1604503468506-a8da13d82791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
                  alt="Premium mutton cuts"
                  className="w-full h-full object-cover"
                />

                {/* Burn Effect Overlay on Image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5"></div>

                {/* Charred Bottom Edge on Image */}
                <div className="absolute bottom-0 left-0 right-0 h-4 sm:h-6 bg-gradient-to-t from-gray-900 to-transparent opacity-10"></div>
              </div>

              {/* Floating Quality Tag - Hidden on mobile, visible on desktop */}
              <div className="hidden lg:block absolute -left-6 top-1/2 transform -translate-y-1/2 z-20">
                <div className="bg-rose-900 text-white px-4 py-3 rounded-lg shadow-2xl rotate-90 origin-left">
                  <div className="text-xs uppercase tracking-widest font-semibold">
                    Hand-Cut
                  </div>
                  <div className="text-sm font-bold">Premium Quality</div>
                </div>
              </div>

              {/* Mobile Quality Tag */}
              <div className="lg:hidden absolute -top-2 -right-2 z-20">
                <div className="bg-rose-900 text-white px-3 py-2 rounded-lg shadow-2xl">
                  <div className="text-xs uppercase tracking-widest font-semibold">
                    Premium
                  </div>
                  <div className="text-xs font-bold">Quality</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Burned Corner Elements - Hidden on mobile */}
      <div className="hidden sm:block absolute top-4 left-4 w-12 h-12 border-t-2 border-l-2 border-rose-900 rounded-tl-lg opacity-40"></div>
      <div className="hidden sm:block absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-rose-900 rounded-tr-lg opacity-40"></div>
      <div className="hidden sm:block absolute bottom-4 left-4 w-12 h-12 border-b-2 border-l-2 border-rose-900 rounded-bl-lg opacity-40"></div>
    </div>
  );
};

export default HeroSection;